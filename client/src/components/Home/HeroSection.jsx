import React from "react";
import { FaSuitcase, FaBuilding, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "91220",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];
  return (
    <div className="heroSection">
      <div className="container">
        <div className="title">
          <h1>
            Find a job that suits <br />
            your interest and skills.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            incidunt quae delectus voluptatem accusamus illo atque odit
            excepturi quaerat repudiandae cupiditate amet quo maiores earum ex
            dicta accusantium quia inventore officiis ea consectetur quam fugit
            aperiam magni! Dolore debitis laboriosam commodi dolores sapiente
            atque doloribus in, eum quam, quia et!
          </p>
        </div>
        <div className="image">
          <img src="/src/assets/heroS.jpg" alt="hero" />
        </div>
      </div>
      <div className="details">
        {details.map((element) => {
          return (
            <div className="card" key={element.id}>
              <div className="icon">{element.icon}</div>
              <div className="content">
                <p>{element.title}</p>
                <p>{element.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;
