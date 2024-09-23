import React from "react";

const reviewsData = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO, Tech Innovations",
    review:
      "GrowthX helped us triple our organic traffic in just 6 months. Their SEO strategies are top-notch!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Sarah Lee",
    position: "Marketing Manager, Startup Co.",
    review:
      "The team at GrowthX transformed our digital marketing efforts. We saw a significant increase in conversions!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Michael Smith",
    position: "Founder, Ecommerce Inc.",
    review:
      "Our PPC campaigns have never been more effective. GrowthX knows how to get the best results!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Michael Smith",
    position: "Founder, Ecommerce Inc.",
    review:
      "Our PPC campaigns have never been more effective. GrowthX knows how to get the best results!",
    rating: 3,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 5,
    name: "Michael Smith",
    position: "Founder, Ecommerce Inc.",
    review:
      "Our PPC campaigns have never been more effective. GrowthX knows how to get the best results!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 6,
    name: "John Doe",
    position: "CEO, Tech Innovations",
    review:
      "GrowthX helped us triple our organic traffic in just 6 months. Their SEO strategies are top-notch!",
    rating: 3,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
];

const ReviewCard = ({ review }) => {
  const { name, position, review: feedback, rating, image } = review;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 space-y-4 flex flex-col items-center ">
      <img
        src={image}
        alt={`${name}'s avatar`}
        className="w-20 h-20 rounded-full object-cover shadow-md"
      />
      <h3 className="text-xl text-slate-800 font-bold">{name}</h3>
      <p className="text-sm text-slate-400 italic">{position}</p>
      <p className="text-center text-slate-900">{feedback}</p>
      <div className="flex space-x-1">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <span key={i} className="text-yellow-400">
              ★
            </span>
          ))}
        {Array(5 - rating)
          .fill()
          .map((_, i) => (
            <span key={i} className="text-gray-300">
              ★
            </span>
          ))}
      </div>
    </div>
  );
};

const ReviewsPage = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl text-slate-800 font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <p className="text-center text-slate-500 max-w-2xl mx-auto mb-10">
          We value every piece of feedback from our clients. Here's what some of
          them have to say about our services.
        </p>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            {reviewsData.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsPage;
