import { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useRef } from "react";

const Carousel = () => {
  const [mar, setMar] = useState();

  useEffect(() => {
    setMar(0);
  }, []);

  const left = () => {
    if(mar >= -640){
      for(let i = 0; i <= 320; i++){
        setTimeout(() => {
          setMar(mar-i);
        }, 1)
      }
    }
  }

  const right = () => {
    if(mar <= -320){
      for(let i = 0; i <= 320; i++){
        setTimeout(() => {
          setMar(mar+i);
        }, 1);
      }
    }
  }

  return (
    <div className="Carousel-container ">
      <div className="title-text  text-black px-[140px] font-bold mt-[50px] text-[40px]">
        Trending this week
      </div>
      <div className="Carousel relative">
        <div className="carousel-items flex  mx-20 my-10 width-[400px] max-sm:mx-10 overflow-x-hidden">
          <div className="carousel-item h-[300px] min-w-[250px] border-2  border-gray-400  mx-10 max-sm:h-[250px] max-sm:w-[200px]  flex flex-col  shadow-lg rounded-md" style={{ marginLeft: `${mar}px`}}>
            <div className="img ">
              <img
                src="https://www.biancajeswant.com/cdn/shop/files/7_ff496133-bdf0-4ee6-af6a-4963a2c51465.jpg?v=1695194728"
                className="h-[250px] w-[100%] object-cover rounded-tl-md rounded-tr-md"
              ></img>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-black text-center">T-Shirt</div>
              <div className="text-gray-400 text-center">$120</div>
            </div>
          </div>
          <div className="carousel-item h-[300px] min-w-[250px] border-2  border-gray-400  mx-10 max-sm:mx-6 flex flex-col  shadow-lg rounded-md">
            <div className="img ">
              <img
                src="https://www.biancajeswant.com/cdn/shop/files/7_ff496133-bdf0-4ee6-af6a-4963a2c51465.jpg?v=1695194728"
                className="h-[250px] w-[100%] object-cover rounded-tl-md rounded-tr-md"
              ></img>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-black text-center">T-Shirt</div>
              <div className="text-gray-400 text-center">$120</div>
            </div>
          </div>
          <div className="carousel-item h-[300px] min-w-[250px] border-2  border-gray-400  mx-10 flex flex-col  shadow-lg rounded-md">
            <div className="img ">
              <img
                src="https://www.biancajeswant.com/cdn/shop/files/7_ff496133-bdf0-4ee6-af6a-4963a2c51465.jpg?v=1695194728"
                className="h-[250px] w-[100%] object-cover rounded-tl-md rounded-tr-md"
              ></img>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-black text-center">T-Shirt</div>
              <div className="text-gray-400 text-center">$120</div>
            </div>
          </div>
          <div className="carousel-item h-[300px] min-w-[250px] border-2  border-gray-400  mx-10 flex flex-col  shadow-lg rounded-md">
            <div className="img ">
              <img
                src="https://www.biancajeswant.com/cdn/shop/files/7_ff496133-bdf0-4ee6-af6a-4963a2c51465.jpg?v=1695194728"
                className="h-[250px] w-[100%] object-cover rounded-tl-md rounded-tr-md"
              ></img>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-black text-center">T-Shirt</div>
              <div className="text-gray-400 text-center">$120</div>
            </div>
          </div>
          <div className="carousel-item h-[300px] min-w-[250px] border-2  border-gray-400  mx-10 flex flex-col  shadow-lg rounded-md">
            <div className="img ">
              <img
                src="https://www.biancajeswant.com/cdn/shop/files/7_ff496133-bdf0-4ee6-af6a-4963a2c51465.jpg?v=1695194728"
                className="h-[250px] w-[100%] object-cover rounded-tl-md rounded-tr-md"
              ></img>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-black text-center">T-Shirt</div>
              <div className="text-gray-400 text-center">$120</div>
            </div>
          </div>
          <div className="carousel-item h-[300px] min-w-[250px] border-2  border-gray-400  mx-10 flex flex-col  shadow-lg rounded-md">
            <div className="img ">
              <img
                src="https://www.biancajeswant.com/cdn/shop/files/7_ff496133-bdf0-4ee6-af6a-4963a2c51465.jpg?v=1695194728"
                className="h-[250px] w-[100%] object-cover rounded-tl-md rounded-tr-md"
              ></img>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-black text-center">T-Shirt</div>
              <div className="text-gray-400 text-center">$120</div>
            </div>
          </div>
        </div>
        <div className="absolute top-[135px] right-10 z-1 hover:text-purple-700 cursor-pointer" onClick={left}>
          <ArrowForwardIosIcon />
        </div>
        <div className="absolute top-[135px] left-10 z-1 hover:text-purple-700 cursor-pointer" onClick={right}>
          <ArrowBackIosIcon />
        </div>
      </div>
    </div>
  );
};
export default Carousel;
