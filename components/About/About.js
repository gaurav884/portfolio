import React from 'react';
import AboutStyles from "../../styles/About.module.css";
import router from "next/router"

const About = () => {
  return <div className={AboutStyles.aboutContainer} >
    <div className={AboutStyles.aboutInfoImageContainer}>
      <div className={AboutStyles.aboutInfoContainer}>
        <div className={AboutStyles.aboutInfoWrapper}>
          <h3>Hi, I'm <span>Gaurav</span></h3>
          <h1>Developer</h1>
          <p>I love to work in UI/UX designing. I always try to make good UI and best UX </p>
          <div className={AboutStyles.aboutInfoButtonContainer}>
            <button onClick={()=>{router.push('https://drive.google.com/drive/folders/1R8OOjZYNrQASJ3L7IMBiMkQsOVbHJhwN')}}>Get CV</button>
          </div>
        </div>
      </div>
      <div className={AboutStyles.aboutImageContainer}>
        <img src="https://res.cloudinary.com/dagwb842k/image/upload/v1643736156/bb_czmg6e.png" alt="picture"/>
      </div>
    </div>
    <div className={AboutStyles.aboutMeDetailsContainer}>
      <div className={AboutStyles.aboutMeDetailsWrapper}>

        <div className={AboutStyles.aboutMeDetailsSkillsContainer}>
          <div className={AboutStyles.aboutMeDetailsSkilsProfilePicsContainer}>
            <img src="https://res.cloudinary.com/dagwb842k/image/upload/v1643791633/WhatsApp_Image_2022-02-01_at_9.27.31_PM_dnnhe2.jpg" alt="profile Picture" />
          </div>
        </div>

        <div className={AboutStyles.aboutMeDetailsInfoContainer}>
          <h1>Hi, I'm <span>Gaurav!</span></h1>
          <p className={AboutStyles.aboutMeDetailsInfoPara1}>Web Developer</p>
          <p className={AboutStyles.aboutMeDetailsInfoPara2}>Currently I am a persuing my B.Tech(19-23) in Electrical Engineering at National Institute of Technology Hamirpur. Also I am open to design oportunities. If you want, you can view my <a rel="noreferrer" href="https://www.linkedin.com/in/gaurav-thakur-862129203/" target="_blank" className={AboutStyles.link}>LinkedIn</a> profile, download my updated <a rel="noreferrer" href="https://drive.google.com/drive/folders/1R8OOjZYNrQASJ3L7IMBiMkQsOVbHJhwN" target="_blank" className={AboutStyles.link}>resume</a> or see my latest work down here.</p>
        </div>
      </div>
    </div>
  </div>;
};

export default About;
