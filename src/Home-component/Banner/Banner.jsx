import Container from "../../Container/Container";
import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="carousel w-full">
        <div id="slide1" className="carousel-item w-full h-[400px] md:h-[600px] relative ">
          <img src={img1} className="w-full object-fill" />

          <div className=" absolute bottom-0 px-20 flex items-center h-full transform bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="w-[400px] ">
              <h1 className="text-5xl font-semibold text-white mb-5">Affordable Price For Car Servicing</h1>
              <p className="text-white">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="btn-div flex items-center gap-x-5 mt-8">
                <button className="btn py-2 px-4 rounded-md border-transparent hover:bg-[#FF3811] hover:border-2 hover:border-white bg-[#FF3811] text-white">
                  Discover More
                </button>
                <button className="btn py-2 px-4 rounded-md border-2 border-white text-white bg-transparent hover:bg-[#FF3811] hover:border-transparent shadow-2xl hover:shadow-red-600">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute right-5 bottom-0  flex gap-x-4 -translate-y-1/2 transform">
            <a
              href="#slide4"
              className="btn btn-circle bg-opacity-50 border-none"
            >
              <FaArrowLeft></FaArrowLeft>
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-[#FF3811] border-none text-white"
            >
              <FaArrowRight></FaArrowRight>
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-[400px] md:h-[600px]">
          <img src={img2} className="w-full object-fill" />
          <div className=" absolute bottom-0 px-20 flex items-center h-full transform bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="w-[400px] ">
              <h1 className="text-5xl font-semibold text-white mb-5">Affordable Price For Car Servicing</h1>
              <p className="text-white">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="btn-div flex items-center gap-x-5 mt-8">
                <button className="btn py-2 px-4 rounded-md border-transparent hover:bg-[#FF3811] hover:border-2 hover:border-white bg-[#FF3811] text-white">
                  Discover More
                </button>
                <button className="btn py-2 px-4 rounded-md border-2 border-white text-white bg-transparent hover:bg-[#FF3811] hover:border-transparent shadow-2xl hover:shadow-red-600">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute right-5 bottom-0  flex gap-x-4 -translate-y-1/2 transform">
            <a
              href="#slide1"
              className="btn btn-circle bg-opacity-50 border-none"
            >
              <FaArrowLeft></FaArrowLeft>
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-[#FF3811] border-none text-white"
            >
              <FaArrowRight></FaArrowRight>
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-[400px] md:h-[600px]">
          <img src={img3} className="w-full object-fill" />
          <div className=" absolute bottom-0 px-20 flex items-center h-full transform bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="w-[400px] ">
              <h1 className="text-5xl font-semibold text-white mb-5">Affordable Price For Car Servicing</h1>
              <p className="text-white">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="btn-div flex items-center gap-x-5 mt-8">
                <button className="btn py-2 px-4 rounded-md border-transparent hover:bg-[#FF3811] hover:border-2 hover:border-white bg-[#FF3811] text-white">
                  Discover More
                </button>
                <button className="btn py-2 px-4 rounded-md border-2 border-white text-white bg-transparent hover:bg-[#FF3811] hover:border-transparent shadow-2xl hover:shadow-red-600">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute right-5 bottom-0  flex gap-x-4 -translate-y-1/2 transform">
            <a
              href="#slide2"
              className="btn btn-circle bg-opacity-50 border-none"
            >
              <FaArrowLeft></FaArrowLeft>
            </a>
            <a
              href="#slide4"
              className="btn btn-circle bg-[#FF3811] border-none text-white"
            >
              <FaArrowRight></FaArrowRight>
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-[400px] md:h-[600px]">
          <img src={img4} className="w-full object-fill" />
          <div className=" absolute bottom-0 px-20 flex items-center h-full transform bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="w-[400px] ">
              <h1 className="text-5xl font-semibold text-white mb-5">Affordable Price For Car Servicing</h1>
              <p className="text-white">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="btn-div flex items-center gap-x-5 mt-8">
                <button className="btn py-2 px-4 rounded-md border-transparent hover:bg-[#FF3811] hover:border-2 hover:border-white bg-[#FF3811] text-white">
                  Discover More
                </button>
                <button className="btn py-2 px-4 rounded-md border-2 border-white text-white bg-transparent hover:bg-[#FF3811] hover:border-transparent shadow-2xl hover:shadow-red-600">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute right-5 bottom-0  flex gap-x-4 -translate-y-1/2 transform">
            <a
              href="#slide3"
              className="btn btn-circle bg-opacity-50 border-none"
            >
              <FaArrowLeft></FaArrowLeft>
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-[#FF3811] border-none text-white"
            >
              <FaArrowRight></FaArrowRight>
            </a>
          </div>
        </div>
    </div>
  );
};

export default Banner;
