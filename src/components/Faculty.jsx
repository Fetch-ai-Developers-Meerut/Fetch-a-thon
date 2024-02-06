// Team.js

import React, { useState, useEffect } from "react";

const Faculty = () => {
  const [facultyData, setFacultyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data/facultyData.json");
        const data = await response.json();
        setFacultyData(data);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="bg-primary" id="team">
      <div className="container mx-auto px-4 py-16">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[58px] text-[42px] text-white ss:leading-[100.8px] leading-[75px] text-center sm:text-left flex items-center justify-center p-10">
          <span
            className="text-gradient"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            Our Faculty Coordinator
          </span>
        </h1>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center">
          {facultyData.map((member) => (
            <div
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-delay="200"
              key={member.id}
              className="text-center text-gray-500 dark:text-gray-400"
            >
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="mx-auto mb-4 object-cover h-[250px] w-[250px] rounded-3xl transition duration-300 ease-in-out hover:scale-110"
                  src={member.avatar}
                  alt={`${member.name} Avatar`}
                />
              </a>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                {member.name}
              </h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
