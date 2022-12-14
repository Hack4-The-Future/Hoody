import React, { useEffect, useRef } from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import black from '../../../assets/about-back.png'

import video from '../../../assets/back-video.mp4'

import { GrInstagram, GrTwitter } from 'react-icons/gr'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import {FiTriangle} from 'react-icons/fi'

import { founders } from './founders';

import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)



export const About = () => {

  const slideIn = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: 40,
      }, {
      opacity: 1,
      y: 0,
      ease: "power2.out",
      delay: delay || .4,
      duration: duration || .6,
      scrollTrigger: {
        trigger: elem,
        start: "top center",
        end: "bottom center",

      }
    }
    )
  }

  useEffect(() => {
    slideIn(".about-main", ".1", ".8")

  }, [])
  // useEffect(()=>{
  //   slideIn(".Founders","0",".5")

  //  },[])



  return (

    <div className='about-main contain' id='about'>

      <h1 className="BigTitle">About Hoody</h1>
      <div className="about-sections1">

        <div className="section-left">
          <div className="about-content">

            <p>
              Founded in 2022, <span>Hoody </span>is a corporation to raise awareness of the importance of charitable giving,
             starting with those who are closest to them.
              offer a variety of options to make charitable giving convenient in various ways
            </p>
            <a href="#service" className='learn'>explore</a>
          </div>
               

        </div>
        <div className="section-right">
        <MouseParallaxContainer   
        containerStyles={{
              width: "100%",
              display: "grid",
              position:"relative",
              gridTemplateColumns: "auto",
              overflow:"visible",
            
            }}
          >
   <MouseParallaxChild factorX={0.1} factorY={0.1} >
   <div className="blackImg"> <img src={black} alt="" /></div>
    </MouseParallaxChild>

</MouseParallaxContainer>


        </div>
        <FiTriangle className='triangle'></FiTriangle>
      </div>

      <div className="about-sections2">
        <div className="background-video">
          <video autoPlay mute="true" loop className='video'>
            <source src={video} />

          </video>

          <div className="circles">
            <div className="circle-content">
              <div className="circle">
                <i className="fa-solid fa-hand-holding-heart"></i>
                <h3><CountUp start={0} end={19000} duration={5} />+</h3>
              </div>
              <p>Donation Upgrade</p>
              <small>since 2021</small>
            </div>


            <div className="circle-content">
              <div className="circle">
                <i className="fa-regular fa-handshake"></i>
                <h3><CountUp start={0} end={12420} duration={5} />+</h3>
              </div>
              <p>Charity movement</p>
              <small>since 2021</small>
            </div>


            <div className="circle-content">
              <div className="circle">
                <i className="fa-solid fa-shield-heart"></i>
                <h3><CountUp start={0} end={14250} duration={5} />+</h3>
              </div>
              <p>Volunteering activities</p>
              <small>since 2021</small>
            </div>
          </div>

        </div>

        <div className="Founders">
          <h1>Founders</h1>
          <div className="Founders-boxes">
            {founders.map((founder, index) => {
              return (
                <div className="Founder-box" key={index}>
                  <img src={founder.img} alt="" className='founder-img' />
                  
                  <div className="content-founder">
                    <h5>{founder.title}</h5>
                    <p>{founder.job}</p>
                    <ul className="social-Contact">
                      <li><a href={founder.facebook}><FaFacebookF></FaFacebookF></a></li>
                      <li><a href={founder.twitter}><GrTwitter></GrTwitter></a></li>
                      <li><a href={founder.linkedin}><FaLinkedinIn></FaLinkedinIn></a></li>
                      <li><a href={founder.instagram}><GrInstagram></GrInstagram></a></li>

                    </ul>
                  </div>
                  
                </div>
                
              );
            })}

          </div>
        </div>
      </div>
    </div>
  )
}