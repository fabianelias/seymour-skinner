import matter from "gray-matter";

const { Client } = require("@notionhq/client")
const { NotionToMarkdown } = require("notion-to-md");


const notion = new Client({
    auth: process.env.NOTION_ACCESS_TOKEN,
    
})
const n2m = new NotionToMarkdown({ notionClient: notion });

export const getAllPublished = async ({type , locale}) => {
    const posts = await notion.databases.query({
        database_id: process.env.NOTION_BLOG_DATABASE_ID,
        filter: {
            and: [
                {
                    property: "Published",
                    checkbox: {
                        equals: true,
                    },
                },{
                    property: "Language",
                    select: {
                        equals: locale,
                    },
                }
            ]
        },
        sorts: [
            {
                property: "Date",
                direction: "descending",
            },
        ],
    });

    const allPosts = posts.results;

    return allPosts.map((post) => {
        return getPageMetaData(post);
    });
};

const getPageMetaData = (post) => {
    const getTags = (tags) => {
        const allTags = tags.map((tag) => {
            return tag.name;
        });

        return allTags;
    };

    return {
        id: post.id,
        title: post.properties.Name.title[0].plain_text,
        tags: getTags(post.properties.Tags.multi_select),
        description: post.properties.Description.rich_text[0].plain_text,
        date: getToday(post.properties.Date.last_edited_time),
        slug: post.properties.Slug.rich_text[0].plain_text,
        readingTime: post.properties.ReadingTime.rich_text[0].plain_text,
    };
};

function getToday (datestring) {
    const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    let date = new Date();
  
    if (datestring) {
      date = new Date(datestring);
    }
  
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    let today = `${month} ${day}, ${year}`;
  
    return today;
};

export const getSinglePost = async (slug) => {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_BLOG_DATABASE_ID,
      filter: {
        property: "Slug",
        formula: {
          string: {
            equals: slug,
          },
        },
      },
    });
  
    const page = response.results[0];
    const metadata = getPageMetaData(page);
    const mdblocks = await n2m.pageToMarkdown(page.id);
    
    const mdString = n2m.toMarkdownString(mdblocks);
    const {data: frontMatter, content} = matter(mdString)
  
    return {
      metadata,
      frontMatter,
      markdown: content,
    };
  }
  