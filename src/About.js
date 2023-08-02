import React from "react";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/Productcontext";

const About = () => {

  const { myName } = useProductContext();

  const data = {
    name: "React E-commerce Website ",
  };

  return (
    <>
    {myName}
    <HeroSection myData={data} />
  </>
  );
};

export default About;