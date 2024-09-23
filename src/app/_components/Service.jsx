import React from "react";

export default function Service() {
  return (
    <div className="flex justify-center mt-20 px-4 sm:px-6 lg:px-8">
      <div className="bg-[#F5F9FF] p-6 sm:p-8 rounded-2xl w-full max-w-[1260px]">
        <div>
          <h1 className="text-center text-2xl sm:text-3xl lg:text-[2.8rem] font-semibold">
            We care more about your long-term success
          </h1>
        </div>
        <div className="flex justify-center mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[1160px]">
            {infos.map((info) => (
              <div
                key={info.name}
                className="bg-white p-6 sm:p-8 lg:p-10 shadow-sm rounded-2xl hover:shadow-lg"
              >
                <h1 className="font-semibold text-lg sm:text-xl">
                  {info.name}
                </h1>
                <p className="text-sm sm:text-md text-slate-500">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const infos = [
  {
    id: 1,
    name: "Comprehensive SEO Audit",
    description:
      "Receive a detailed SEO audit, custom-made for your business and delivered within 2-4 weeks. Our audit analyzes over 300 key factors, leveraging advanced SEO tools to identify technical issues, on-page optimization needs, and growth opportunities.",
  },
  {
    id: 2,
    name: "Keyword & Niche Research",
    description:
      "Data-driven SEO starts with thorough niche and keyword research. We analyze competitors and target audiences to identify the best keywords and strategies, ensuring your website ranks in your industry’s most valuable search terms.",
  },
  {
    id: 3,
    name: "Technical SEO Optimization",
    description:
      "Our technical SEO services improve your website's structure and speed, ensuring it meets search engine best practices. This includes optimizing mobile usability, fixing crawling errors, and improving site security for better ranking and user experience.",
  },
  {
    id: 4,
    name: "Content Strategy & Creation",
    description:
      "Effective SEO relies on quality content. We create and implement a tailored content strategy, producing blog posts, landing pages, and engaging copy designed to boost your site’s relevance and authority in the eyes of search engines.",
  },
  {
    id: 5,
    name: "Link Building & Outreach",
    description:
      "Boost your site's authority with a robust link-building strategy. We focus on acquiring high-quality backlinks from reputable sites through manual outreach, guest posting, and digital PR to enhance your search engine ranking.",
  },
  {
    id: 6,
    name: "Social Media Marketing",
    description:
      "Amplify your online presence with our social media marketing services. We manage and optimize your profiles on platforms like Facebook, Instagram, and LinkedIn, creating engaging content that drives traffic and builds brand loyalty.",
  },
];
