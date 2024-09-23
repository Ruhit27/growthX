"use client";

import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      description: "Perfect for small businesses",
      features: [
        "5 Keywords Optimization",
        "Basic Analytics",
        "Monthly Reporting",
        "SEO Audit (Quarterly)",
      ],
      buttonText: "Get Started",
      isPopular: false,
    },
    {
      name: "Professional",
      price: "$99",
      description: "Ideal for growing businesses",
      features: [
        "20 Keywords Optimization",
        "Advanced Analytics",
        "Weekly Reporting",
        "SEO Audit (Monthly)",
      ],
      buttonText: "Get Started",
      isPopular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      description: "Best for large companies",
      features: [
        "Unlimited Keywords Optimization",
        "Full Analytics Suite",
        "Daily Reporting",
        "Dedicated Account Manager",
      ],
      buttonText: "Get Started",
      isPopular: false,
    },
  ];

  return (
    <div className="py-16 ">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-center mt-12 sm:text-5xl">
          Pricing
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-md font-semibold text-center">
          Choose the best plan for your SEO needs.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-24 container space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              {plan.isPopular && (
                <p className="absolute top-0 py-1.5 px-4 bg-blue-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide transform -translate-y-1/2">
                  Most Popular
                </p>
              )}
              <p className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight">
                  {plan.price}
                </span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p className="mt-6">{plan.description}</p>
              <ul role="list" className="mt-6 space-y-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 w-6 h-6 text-emerald-500"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              className={`${
                plan.isPopular
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-emerald-50 text-blue-700 hover:bg-emerald-100"
              } mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium`}
              href="/"
            >
              {plan.buttonText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
