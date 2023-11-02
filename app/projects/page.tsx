import { compareDesc } from "date-fns";
import Hero from "../components/Hero";
import { allProjects } from "contentlayer/generated";
import PostCard from "../components/PostCard";
export default function ProjectsPage() {
  const projects = allProjects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <div className="p-4">
      <Hero pageName="projects" />
      <h1 className="mt-10 text-main text-xl font-semibold  ">
        Esteban Codes Projects
      </h1>
      {projects.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
