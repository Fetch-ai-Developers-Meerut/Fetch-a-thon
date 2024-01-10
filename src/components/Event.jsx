import React, { useEffect, useState } from 'react';

const Event = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from JSON file
    fetch(' ./data/imageData.json')
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error('Error fetching images:', error));
  }, []);

  return (
    <>
      <h1 className="flex-1 font-poppins font-semibold ss:text-[45px] text-[32px] text-white ss:leading-[100.8px] leading-[75px] text-center sm:text-left flex items-center justify-center p-10">
        <span
          className="text-gradient"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          Previous Event
        </span>
      </h1>

      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div class="-m-1 flex flex-wrap md:-m-2">
          {images.map((image, index) => (
            <div key={index} class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Event;
