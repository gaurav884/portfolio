import React from 'react';
import SkillsStyles from "../../styles/Skills.module.css";

function Skills() {
  return <div className={SkillsStyles.skillsSectionContainer}>
          <h1 className={SkillsStyles.skillsSectionHeading}>Skills,  <span> that I know</span></h1>
         <div className={SkillsStyles.skillsContainer}>
             <div className={SkillsStyles.skillImgContainer}>
                 <img src="https://res.cloudinary.com/dagwb842k/image/upload/v1643648889/skills/react_ebz7jl.png" alt="react.js"/>
                 
             </div>
             <div className={SkillsStyles.skillImgContainer}>
                 
                 <img src="https://res.cloudinary.com/dagwb842k/image/upload/v1643648889/skills/Rlogical-Blog-Images-thumbnail_ytl6u9.png" alt="next.js"/>
                
             </div>
             <div className={SkillsStyles.skillImgContainer}>
                
                 <img src="https://res.cloudinary.com/dagwb842k/image/upload/v1643648890/skills/logo-2582747_960_720_ca9980.png" alt="css"/>
                
             </div>
             <div className={SkillsStyles.skillImgContainer}>
                 
                 <img src="https://res.cloudinary.com/dagwb842k/image/upload/v1643648889/skills/logo-2582748_960_720_piqryw.png" alt="html"/>
                 
             </div>
             <div className={SkillsStyles.skillImgContainer}>
                
                 <img src="https://res.cloudinary.com/dagwb842k/image/upload/v1643648889/skills/javascript_a4lvof.png" alt="javascript"/>
                 
             </div>
             <div className={SkillsStyles.skillImgContainer}>
              
                 <img src="https://res.cloudinary.com/dagwb842k/image/upload/v1643648889/skills/nodejs_zkc4xq.png" alt="node.js"/>
            
             </div>
             
             <div className={SkillsStyles.skillImgContainer}>
                
                <img src="https://res.cloudinary.com/dagwb842k/image/upload/v1643648889/skills/88_expressjs-icon.54bb6035d3_erbmys.png" alt="express.js"/>
            </div>
             <div className={SkillsStyles.skillImgContainer}>
                 
                 <img src="https://res.cloudinary.com/dagwb842k/image/upload/v1643648889/skills/603c5eb831820c3ce6a8f057_603a1586fa052d17fc2a6929_MongoDBAtlas_jdnhio.png" alt="mongoDBAtlas"/>
                 
             </div>
             <div className={SkillsStyles.skillImgContainer}>
              
                 <img src="https://res.cloudinary.com/dagwb842k/image/upload/v1643648889/skills/postgresql-logo_x4cm2z.png" alt="postgreSQL"/>
             </div>
         
             
         </div>
  </div>;
}

export default Skills;
