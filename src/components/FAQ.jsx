import React, { useState, useEffect } from "react";

const FAQ = () => {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    fetch("./data/faq.json")
      .then((response) => response.json())
      .then((data) => setFaqData(data))
      .catch((error) => console.error("Error fetching FAQ data:", error));
  }, []);

  return (
    <section className="bg-primary" id="faq">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[58px] text-[42px] text-white ss:leading-[100.8px] leading-[75px] text-center sm:text-left flex items-center justify-center p-10">
          <span
            className="text-gradient"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-delay="200"
          >
            Frequently Asked Questions
          </span>
        </h1>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <details
              data-aos="flip-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-delay="200"
              key={index}
              className="w-full border rounded-lg cursor-pointer"
            >
              <summary className="px-4 py-6 text-white   focus:outline-none focus-visible:ri">
                {item.question}
              </summary>
              <p className="px-4 py-6 pt-0 ml-4  font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
