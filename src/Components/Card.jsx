import React, { useState } from 'react';
import { cardsData } from './cardsData';

function Card({ title, imageUrl, hoverImage }) {                  // function 'card' consists of title, imageUrl, hoverImage
  const [isHovered, setIsHovered] = useState(false);             // isHovered = false

  const MouseEntry = () => {                               // when this is active is set is hoverd = true   
    setIsHovered(true);                                    // Opposite for mouse exit, activated by line 18 & 19
  };

  const MouseExit = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="flex flex-col justify-center lg:w-[30vw] md:w-[40vw] w-[75vw] mx-auto rounded-xl shadow-lg"
      onMouseEnter={MouseEntry}                         // Activates Mouse entry and exit
      onMouseLeave={MouseExit}
    >
      <img
        className="w-full rounded-t-xl"
        src={isHovered ? hoverImage : imageUrl}   // if isHovered is true, hover image returned else imageUrl returned 
        alt={title}                               // this is taking about the images from line 04
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
    </div>
  );                                              // All the code for one card, next function is how we get them to display repeatedly
}

function Cards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-auto">
      {cardsData.map((card) => (                                      // Map over 'cardsData' (name of data file)
                                                                      // each item in 'cardsData' represented as the function 'card', iterates through Data file
        <Card
          title={card.title}
          imageUrl={card.imageUrl}                                  // this is just showing the function 'card' as many times as it iterates through until it reaches the end 
          hoverImage={card.hoverImage}                              // title, image, hover just change to the one specified in the data 

        />
      ))}
      <div className=''>
        <button className='ml-[70vw] md:ml-[85vw] lg:ml-[90vw] whitespace-nowrap p-3 text-white bg-[#5f51fc] rounded-lg font-semibold md:text-lg'>See More</button>
      </div>
    </div>
  );
}

export default Cards;


