import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWork = () => {
  return (
    <div>
      <div className="howitworks">
        <div className="container">
          <h3>How Jobby Works?</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                nostrum sit consequuntur architecto, fuga libero impedit
                doloremque laudantium. Culpa, tempora?
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find A Job / Post New Job</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                nostrum sit consequuntur architecto, fuga libero impedit
                doloremque laudantium. Culpa, tempora?
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Create Account</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                nostrum sit consequuntur architecto, fuga libero impedit
                doloremque laudantium. Culpa, tempora?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
