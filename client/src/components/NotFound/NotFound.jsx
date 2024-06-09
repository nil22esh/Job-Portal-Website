import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <section className="page notfound">
        <div className="content">
          <img src="/src/assets/NotFound.png" alt="notfound" />
          <Link to={"/"}>Go Back To Home Page</Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
