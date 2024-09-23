import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import React from "react";
import BlogCard from "./BlogCard";

export const revalidate = 1;

export default async function Blogs() {
  const blogs = await client.fetch(`*[_type=='blog']{
  "src":image.asset._ref,
    title,
    description,
    source
}`);
  console.log(blogs);
  return (
    <div className="mt-10 ">
      <div className="md:flex justify-center gap-8">
        {blogs.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>
    </div>
  );
}
