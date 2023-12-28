import React, { useState, useEffect } from "react";

const FAQ = () => {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    fetch("/src/data/faq.json")
      .then((response) => response.json())
      .then((data) => setFaqData(data))
      .catch((error) => console.error("Error fetching FAQ data:", error));
  }, []);

  return (
    <section className="bg-primary" id="faq">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[58px] text-[42px] text-white ss:leading-[100.8px] leading-[75px] text-center sm:text-left flex items-center justify-center p-10">
          <span className="text-gradient">Frequently Asked Questions</span>
        </h1>
        <p className="mt-4 mb-8 text-white hover:text-secondary ">
          Sagittis tempor donec id vestibulum viverra. Neque condimentum primis
          orci at lacus amet bibendum.
        </p>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <details
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
