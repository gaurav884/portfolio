import React from 'react';
import ProjectsStyles from "../../styles/Projects.module.css";
import { GrHeroku } from "react-icons/gr"
import { AiFillGithub } from "react-icons/ai"

const Projects = () => {
  return <div className={ProjectsStyles.projectsSectionContainer}>
    <div className={ProjectsStyles.projectSectionHeadingContainer}>
      <div className={ProjectsStyles.projectSectionHeadingWrapper}>
        <p className={ProjectsStyles.projectSectionHeading1}>My recent</p>
        <h1 className={ProjectsStyles.projectSectionHeading2}>Projects</h1>
      </div>
    </div>

    <div className={ProjectsStyles.projectsContainer}>
      <div className={ProjectsStyles.project}>
        <div className={ProjectsStyles.projectFront}>
          <div className={ProjectsStyles.projectFrontImgContainer}>
            <img src="https://res.cloudinary.com/dagwb842k/image/upload/v1643782196/budkazar_unvrzy.png" />
            <span>Budkazar</span>
          </div>

          <div className={ProjectsStyles.projectDetails}>
            <p>Full stack web application</p>
            <p>Ecommerce website.</p>
            <p>Buy your favourite games.</p>
          </div>
        </div>
        <div className={ProjectsStyles.projectBack}>
          <div className={ProjectsStyles.projectBackButtonsContainer}>
            <a rel="noreferrer"href="https://budkazar7884.herokuapp.com/" target="_blank"><GrHeroku />Visit</a>
            <a rel="noreferrer" href="https://github.com/gaurav884/budkazar" target="_blank"><AiFillGithub />Git repo</a>
          </div>
        </div>
      </div>

      <div className={ProjectsStyles.project}>
        <div className={ProjectsStyles.projectFront}>
          <div className={ProjectsStyles.projectFrontImgContainer}>
            <img src="https://res.cloudinary.com/dagwb842k/image/upload/v1643782194/socialscout_tzsb9p.png" />
            <span>Social Scout</span>
          </div>

          <div className={ProjectsStyles.projectDetails}>
            <p>Full stack web application</p>
            <p>Social Media Platform</p>
            <p>Connect with your Friends</p>
          </div>
        </div>
        <div className={ProjectsStyles.projectBack}>
          <div className={ProjectsStyles.projectBackButtonsContainer}>
            <a rel="noreferrer" href="https://socialscout7884.herokuapp.com/sign-in" target="_blank"><GrHeroku />Visit</a>
            <a rel="noreferrer" href="https://github.com/gaurav884/SocialScout" target="_blank"><AiFillGithub />Git repo</a>
          </div>
        </div>
      </div>

      <div className={ProjectsStyles.project}>
        <div className={ProjectsStyles.projectFront}>
          <div className={ProjectsStyles.projectFrontImgContainer}>
            <img src="https://res.cloudinary.com/dagwb842k/image/upload/v1643782198/footscore_hfxptn.png" />
            <span>FootScore</span>
          </div>

          <div className={ProjectsStyles.projectDetails}>
            <p>Full stack web application</p>
            <p>Football News website</p>
            <p>Get every Info about Football</p>
          </div>
        </div>
        <div className={ProjectsStyles.projectBack}>
          <div className={ProjectsStyles.projectBackButtonsContainer}>
            <a rel="noreferrer" href="https://footscore7884.herokuapp.com/" target="_blank"><GrHeroku />Visit</a>
            <a rel="noreferrer" href="https://github.com/gaurav884/footscore" target="_blank"><AiFillGithub />Git repo</a>
          </div>
        </div>
      </div>






    </div>
  </div>;
};

export default Projects;
