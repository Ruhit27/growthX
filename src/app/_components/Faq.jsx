"use client";
import React, { useState } from "react";

const FAQs = [
  {
    question: "What services do you offer?",
    answer:
      "We specialize in SEO, content marketing, social media management, and PPC campaigns. Our team also provides detailed SEO audits and niche keyword research to help grow your online presence.",
  },
  {
    question: "How long does it take to see SEO results?",
    answer:
      "SEO is a long-term strategy, and it typically takes 3 to 6 months to start seeing noticeable improvements in your website's rankings. However, this can vary depending on your industry and competition.",
  },
  {
    question: "Do you provide monthly reports?",
    answer:
      "Yes, we provide detailed monthly reports outlining your website's performance, keyword rankings, traffic insights, and actionable recommendations to improve your SEO and social media strategy.",
  },
  {
    question: "Can you manage our social media accounts?",
    answer:
      "Absolutely! We offer full social media management services, including content creation, scheduling, engagement, and reporting across platforms like Instagram, Facebook, LinkedIn, and Twitter.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We have experience working with a wide range of industries, including e-commerce, healthcare, finance, and technology. We tailor our approach to meet the specific needs of each industry and business.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply contact us via email at info@youragency.com or call us at (123) 456-7890. We’ll discuss your goals and create a customized SEO or social media marketing plan for your business.",
  },
];

export default function FAQComponent() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 crimson">
      <h2 className="text-4xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {FAQs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden"
          >
            <button
              className="w-full px-4 py-3 bg-gray-100 text-left font-semibold focus:outline-none flex justify-between items-center"
              onClick={() => toggleAnswer(index)}
            >
              <span>{faq.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {openIndex === index && (
                <div className="px-4 py-3 bg-white">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
