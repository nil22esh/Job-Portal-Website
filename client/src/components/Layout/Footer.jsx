import React, { useContext } from "react";
import { Context } from "../../main";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>
        Copyright &copy; 2024 Jobby Application. All rights reserved By Nilesh!
      </div>
      <div>
        <Link
          to={"https://www.facebook.com/nilesh.suryavanshi.50746"}
          target="_blank"
        >
          <FaFacebookF />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/nilesh-suryavanshi-623aa4238/"}
          target="_blank"
        >
          <FaLinkedinIn />
        </Link>
        <Link to={"https://github.com/nil22esh"} target="_blank">
          <FaGithub />
        </Link>
        <Link
          to={"https://www.instagram.com/its_nilesh_4940/?hl=en"}
          target="_blank"
        >
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
