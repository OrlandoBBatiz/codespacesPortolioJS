/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

import image from "../images/Background.jpg";

const imageAltText = "Microsoft logo";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Telematic Engineer student studying at UPIITA - IPN. I enjoy building drones with Artificial Intelligence, sharing Cloud Computing technology, web development and DevOps.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web Development",
  "Windos Subsystem for Linux",
  "Raspberry Pi",
  "Arduino",
  "IoT",
  "Drones",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about projects with technological challenges in implementation of embedded systems connected to Cloud Computing and Artificial Intelligence services.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
