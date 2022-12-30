import React from "react";
import Contact from "../Contact/Contact";
import Feedback from "../Feedback/Feedback";
import ExtraNavbar from "../ExtraNavbar/ExtraNavbar";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div className="col-md-6 col-12">
      <div className="col-md-10">
        <input className=" col-12 px-2" type="text" placeholder="Search" />
      </div>
      <ExtraNavbar></ExtraNavbar>
      <Service></Service>
      <Feedback></Feedback>
      <Contact></Contact>
    </div>
  );
};

export default Home;
