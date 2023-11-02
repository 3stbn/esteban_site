import { compareDesc } from "date-fns";
import { allPosts, allProjects } from "contentlayer/generated";

import Hero from "./components/Hero";
import PostCard from "./components/PostCard";

export default function HomePage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  const projects = allProjects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="mx-auto max-w-xl py-8 ">
      <h1 className="mb-8 text-center text-2xl font-black">Esteban Codes</h1>
      <Hero
        pageName="home"
        description={{
          title: "Welcome to my personal space",
          content: `Hi my name is Esteban. I work as a developer (I learned it after I
            graduated from marketing). I like music (I listen and also compose
            ). Sometimes I drink coffee even tho I don't really like it`,
        }}
      />
      <h2 className="mt-10 text-main text-xl font-semibold  ">
        Recent Projects
      </h2>
      {projects.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
      <h2 className="mt-10 text-main text-xl font-semibold  ">
        Recent Blog posts
      </h2>
      {posts.map((project, idx) => (
        <PostCard key={idx} {...project} />
      ))}
    </div>
  );
}
