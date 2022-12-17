import Link from 'next/link';
import Image from "next/image"
export default function BlogPost({
  slug,
  title,
  excerpt,
  locale
}: {
  slug: string;
  title: string;
  excerpt: string;
  locale: string;
}) {

  return (
    <Link href={`/shots/${slug}?locale=${locale}`}>
      <div className="w-full mb-8">
        <div className="flex flex-col justify-between md:flex-row">
          <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
            {title}
          </h4>
          <p className="w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          </p>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{excerpt}...</p>
      </div>
    </Link>
  );
}
