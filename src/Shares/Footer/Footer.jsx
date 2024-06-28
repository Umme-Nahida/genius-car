import { FaGooglePlus } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import logo from "../../assets/logo.svg"




const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-200 text-base-content p-10">
        <aside>
         <img src={logo} alt="" />
          <p className="w-[300px]">
            Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .
          </p>
          <div className="flex items-center gap-x-5 text-lg">
            <i className="bg-gray-300 p-2 rounded-full"> <FaGooglePlus></FaGooglePlus> </i>
            <i className="bg-gray-300 p-2 rounded-full"><FaInstagram></FaInstagram> </i>
            <i className="bg-gray-300 p-2 rounded-full"> <FaLinkedin></FaLinkedin> </i>
            <i className="bg-gray-300 p-2 rounded-full"> <FaTwitter></FaTwitter> </i>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">About</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Service</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Why car doctor about</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
