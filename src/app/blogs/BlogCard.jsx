import React from "react";

export default function BlogCard(props) {
  const { title, description, source, src } = props.blog;
  console.log(source);
  return (
    <div className="bg-white border border-gray-300 rounded-md overflow-hidden w-full max-w-lg mb-4">
      <div className="flex p-4">
        <img
          src={src || "https://via.placeholder.com/100"}
          alt={title}
          className="w-20 h-20 object-cover mr-4 rounded"
        />
        <div className="flex-1">
          <h1 className="text-lg font-semibold mb-1 hover:text-blue-500 transition-colors">
            {title}
          </h1>
          <p className="text-gray-700 text-sm mb-2">{description}</p>
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
