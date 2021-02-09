import React, { useEffect, useMemo, useRef } from 'react'
import heroImg from '../../img/hero_img.svg'
import { Controls, PlayState, SplitChars, Timeline, Tween } from 'react-gsap';
import { Power1 } from 'gsap/gsap-core';
import { TweenLite } from 'gsap/gsap-core';
import { TimelineMax } from 'gsap/gsap-core';
import { TweenMax } from 'gsap/gsap-core';
import { TimelineLite } from 'gsap/gsap-core';
import gsap from "gsap";

// tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
// tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
// tl.to(".intro-section", { y: "-100%", duration: 1 }, "-=1");
// tl.fromTo(".intro", { opacity: 0 }, { opacity: 1, duration: 1 });
// tl.fromTo("header", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

const MainScreen = () => {
  let introSection = useRef(null);
  let slider = useRef(null);
  let text1 = useRef(null);
  let text2 = useRef(null);
  let text3 = useRef(null);

  const timeline = useMemo(() => gsap.timeline({ paused: false }), []);

  useEffect(() => {
    timeline.to(
      [text1, text2, text3],
      {
        y: '0%',
        duration: 1,
        opacity: 1,
        stagger: 0.25
      }
    )

    timeline.to(
      [slider, introSection],
      {
        y: '-100%',
        opacity: 1,
        duration: 1,
        position: '-=1',
        stagger: 0.25
      }
    )
  }, [])


  return (
    <>
      <section className="main-section">
        <div className="hero">
          <h2>
            Hi,<br />
            I'm Steven,<br />
            Frontend Developer
          </h2>
          <p>Front End Developer</p>

          <button>Contact me!</button>
        </div>

        <div className="container-circles">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
        </div>
      </section>

      {/* <!-- INTRO --> */}
      <div className="intro-section" ref={ el => { introSection = el } }>
        <div className="intro-text">
          <h1 className="hide">
            <span className="text" ref={ el => { text1 = el } }>Creating inovation</span>
          </h1>
          <h1 className="hide">
            <span className="text" ref={ el => { text2 = el } }>For Everyday</span>
          </h1>
          <h1 className="hide">
            <span className="text" ref={ el => { text3 = el } }>people.</span>
          </h1>
        </div>

        <svg className="svg">
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
            <feColorMatrix values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 20 -10
            " />
          </filter>
        </svg>
      </div>

      {/* <!-- SLIDER --> */}
      <div className="slider" ref={ el => { slider = el } } ></div>
    </>
  )
}

export default MainScreen
