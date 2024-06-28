import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { BsCart3 } from "react-icons/bs";
import { TfiSearch } from "react-icons/tfi";

const Navber = () => {
    const navMenu = <>
    <li><Link to="/"><a>Home</a></Link></li>
    <li><Link to="/about"><a>About</a></Link></li>
    <li><Link to="/services"><a>Services</a></Link></li>
    <li><Link to="/contact"><a>Contact</a></Link></li>
    <li><Link to="/bookings"><a>My bookings</a></Link></li>
    <li><Link to="/login"><button>login</button></Link></li>
   
   </>
  return (
    <div className=" bg-gray-200/30 backdrop-blur-xl ">
       <div className="container mx-auto navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  {navMenu}
                </ul>
              </div>
              <img src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {navMenu}
              </ul>
            </div>
            <div className="navbar-end">
              <div className="flex items-center gap-x-5">
                <BsCart3 className="text-lg md:text-xl  "/>
                <TfiSearch className="text-lg md:text-xl"></TfiSearch>
                <button className="btn sm:btn-sm md:btn-md lg:btn-md border border-[#FF3811] text-[#FF3811] bg-inherit hover:bg-[#FF3811] hover:text-white">Appointment</button>
              </div>
            </div>
       </div>
    </div>
  );
};

export default Navber;
