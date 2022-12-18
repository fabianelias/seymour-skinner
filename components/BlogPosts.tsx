import Link from 'next/link';
export default function BlogPost({
  slug,
  title,
  excerpt,
}: {
  slug: string;
  title: string;
  excerpt: string;
}) {

  return (
    <Link href={`/shots/${slug}`}>
      <div className="w-full mb-8 border-b-2 p-2">
        <div className="flex flex-col justify-between md:flex-row">
          <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
            {title}
          </h4>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{excerpt}. <i>ver más</i>...</p>
      </div>
    </Link>
  );
}
