import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Junaid Javed",
    position: "CTO",
    bio: "Monstasir has over 10 years of experience in digital marketing and business strategy...",
    image:
      "https://www.quantilia.com/wp-content/themes/quantilia/images/image55.png",
  },
  {
    id: 2,
    name: "Majharul Islam Ruhit",
    position: "CEO",
    bio: "As the CEO, Majharul is passionate about leveraging cutting-edge technology...",
    image:
      "https://avatars.githubusercontent.com/u/86656087?s=400&u=a68df762905951664f9d6e9ab51a721e7716634d&v=4",
  },
  {
    id: 3,
    name: "Kevin Kan",
    position: "CTO",
    bio: "Rainul ensures smooth operations across all departments...",
    image: "https://tech.shutterstock.com/assets/img/posts/2019/0312-02.jpg",
  },
];

const AboutUsPage = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      {/* Introduction Section */}
      <section className="container mx-auto text-center mb-16">
        <h2 className="text-5xl font-extrabold mb-4 fade-in">About Our Team</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto fade-in-delayed">
          GrowthX is a leading SEO and digital marketing company focused on
          driving results...
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-12 fade-in-up">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg max-w-2xl mx-auto">
            Our mission is to help businesses grow by offering cutting-edge SEO
            and digital marketing strategies.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto text-center mt-12">
        <h3 className="text-4xl font-bold mb-8 slide-in-left">
          Meet Our Leadership Team
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative team-member hover:scale-105 transition-transform duration-500 ease-out"
            >
              <img
                src={member.image}
                alt={`${member.name}'s photo`}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 rounded-xl p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                <p className="text-gray-200">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-violet-600 py-16 mt-20 text-center text-white fade-in-up-delayed">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Grow Your Business?
          </h3>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Contact us today to learn how GrowthX can help you scale your
            business through SEO and digital marketing.
          </p>
          <button className="bg-white text-indigo-500 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition-colors duration-300">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
