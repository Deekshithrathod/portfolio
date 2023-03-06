import React from "react";
import Button from "react-bootstrap/Button";

import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const Hero = () => {
  const innerStyle = {
    height: "100%",
    width: "100%",
    margin: "auto 10px auto auto",
    paddingLeft: "15%",
    backgroundSize: "contain cover",
  };

  const imageStyles = {
    height: "100%",
    width: "100%",
    borderRadius: "10%",
    boxShadow: "5px 10px 8px #888888",
  };

  return (
    <div className="container" style={{ marginTop: "32px" }}>
      <div className="row">
        <div className="col-lg-8 col-md-6">
          <RoughNotationGroup show={true}>
            <h1>
              Hello! I'm Deekshith, a{" "}
              <span>
                <RoughNotation type="highlight" color="#FFF5E4" order={1}>
                  developer
                </RoughNotation>
              </span>{" "}
              based in India.
            </h1>
            <div style={{ margin: "32px 0" }}>
              <p>
                I love building tools that are user-friendly,
                {"  "}
                <RoughNotation brackets={["left", "bottom"]} color="red">
                  simple
                </RoughNotation>
                {"  "}
                and <RoughNotation type="underline">delightful.</RoughNotation>
              </p>
              <p>
                I was a student at Lambda School where I spent 8 months learning
                sthe fundamentals of <br />
                front-end and back-end web development. I also worked at Lambda
                where my role was split between helping scale processes through
                automations and overseeing student teams.
              </p>
              <p>
                Through these experiences, I had the opportunity to work with
                both small and large, specialised and cross-functional teams
                across different time zones and developed a working style that
                leans towards flexibility,clarity, and collaboration.
              </p>
              <p>
                I'm currently looking for a new role as a developer.{" "}
                <RoughNotation type="circle" color="red">
                  &nbsp; Hire me?
                </RoughNotation>{" "}
              </p>
            </div>
          </RoughNotationGroup>
          <Button variant="dark" size="lg">
            View LinkedIn
          </Button>{" "}
          <Button variant="outline-dark" size="lg">
            View GitHub
          </Button>
        </div>
        <div className="col-lg-4 col-md-6">
          <div style={innerStyle}>
            <img src="profile.png" style={imageStyles} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
