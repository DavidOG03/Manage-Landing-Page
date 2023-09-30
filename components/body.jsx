import React, { useState, useRef, useEffect } from "react";
import { Card } from "./card";
import TestimonialSlider from "./slider";

function Body() {

  const testimonials = [
    {
      id: 1,
      img: "/assets/avatar-anisha.png",
      name: "Anisha Li",
      text: '"Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."',
    },
    {
      id: 2,
      img: "/assets/avatar-ali.png",
      name: "Ali Bravo",
      text: '"We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."',
    },
    {
      id: 3,
      img: "/assets/avatar-richard.png",
      name: "Richard Watts",
      text: '"Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!"',
    },
    {
      id: 4,
      img: "/assets/avatar-shanai.png",
      name: "Shanai Gough",
      text: '"Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."',
    },
  ];
 
  
  return (
    <>
      <section className="hero">
        <div className="hero-img">
          <img src="/assets/illustration-intro.svg" alt="illustration" />
        </div>
        <div className="hero-pattern">
          <img src="/assets/bg-tablet-pattern.svg" alt="tablet pattern" />
        </div>
        <div className="hero-body">
          <h1 className="hero-heading">
            Bring everyone together to build better products.
          </h1>
          <p className="hero-text">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className="hero-button">Get Started</button>
        </div>
      </section>
      <section className="about">
        <div className="about-body">
          <h2 className="about-heading"> What’s different about Manage?</h2>
          <p className="about-text">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="about-pattern">
          <img src="/assets/bg-tablet-pattern.svg" alt="tablet pattern" />
        </div>

        <div className="about-services">
          <Card
            id="01"
            head="Track company-wide progress"
            text="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
          />
          <Card
            id="02"
            head="Advanced built-in reports"
            text="Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
          />
          <Card
            id="03"
            head="Everything you need in one place"
            text=" Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
          />
        </div>
      </section>
      <section className="testimonials">
        <h4 className="testimonials-heading">What they’ve said</h4>
          <TestimonialSlider testimonials={testimonials} />

       
        <button className="CTA-button">Get Started</button>
      </section>
    </>
  );
}

export default Body;
