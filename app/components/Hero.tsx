import React from "react";
import Image from "next/image";

export default function Hero({
  pageName,
  description,
}: {
  pageName: "home" | "projects" | "posts";
  description?: {
    title: string;
    content: string;
  };
}) {
  const heroMapping = {
    home: "/images/hero.svg",
    projects: "/images/projects_hero.svg",
    posts: "/images/posts_hero.svg",
  };
  return (
    <>
      <div className="relative h-64">
        <Image src={heroMapping[pageName]} alt="hero" fill />
      </div>
      {description && (
        <>
          <h3 className="text-center text-xl my-2">{description.title}</h3>

          <div className="border p-4 rounded shadow-flat mb-6">
            {description.content}
          </div>
        </>
      )}
    </>
  );
}
