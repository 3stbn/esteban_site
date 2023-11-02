import { Post, Project } from "contentlayer/generated";
import Link from "next/link";
import { format, parseISO } from "date-fns";
export default function PostCard(post: Post | Project) {
  return (
    <div>
      <div className="mb-6 py-6 border-b border-main">
        <h2 className="mb-1 text-xl">
          <Link href={post.url} className="text-link hover:text-gray-400">
            {post.title}
          </Link>
        </h2>
        <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <p>{post.excerpt}</p>
      </div>
    </div>
  );
}
