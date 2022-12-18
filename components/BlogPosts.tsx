import Link from 'next/link';
export default function BlogPost({
  slug,
  title,
  excerpt,
  icon,
}: {
  slug: string;
  title: string;
  excerpt: string;
  icon: string;
}) {

  return (
    <Link href={`/shots/${slug}`}>
      <div className="flex flex-wrap items-start w-full mt-2 pb-3 md:flex-row md:items-center  border-b-2 py-5">
        <div className="flex items-center">
          <h2 className="mb-2 text-gray-900 md:text-6xl dark:text-gray-100 hidden md:block lg:block">
            {icon}
          </h2>
          <h4 className="w-full pl-5  mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
            {title}
            <br />
            <small className='font-light text-md text-gray-600 dark:text-gray-400'>
              {excerpt}. <i>ver más</i>..
            </small>
          </h4>
        </div>
      </div>
    </Link>
  );
}
