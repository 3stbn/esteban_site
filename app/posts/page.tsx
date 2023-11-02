import { compareDesc } from "date-fns";
import Hero from "../components/Hero";
import { allPosts } from "contentlayer/generated";
import PostCard from "../components/PostCard";
export default function PostsPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <div className="p-4">
      <Hero pageName="posts" />
      <h1 className="mt-10 text-main text-xl font-semibold  ">
        Esteban Codes Posts
      </h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
