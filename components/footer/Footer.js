import React from 'react'
import FooterStyles from "../../styles/Footer.module.css";
import{AiFillFacebook} from "react-icons/ai"
import{AiFillInstagram} from "react-icons/ai"
import{AiFillGithub} from "react-icons/ai"
import{AiFillTwitterCircle} from "react-icons/ai"
import{AiFillLinkedin} from "react-icons/ai"

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={FooterStyles.footerOuter}>
      <div className={FooterStyles.footerContainer}>


        <div className={FooterStyles.footerContainer1}>

          <div className={FooterStyles.socialContainer}>
            <p className={FooterStyles.footerHeadings} >Social Media </p>
            <ul className={FooterStyles.footerSocialLinks}>

              <a rel="nofollow" rel="nofollow" href="https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530338610&extra_1=s|c|528180820730|e|instagram%20%27|&placement=&creative=528180820730&keyword=instagram%20%27&partner_id=googlesem&extra_2=campaignid%3D13530338610%26adgroupid%3D123868089099%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618851291%26loc_physical_ms%3D9297884%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwp_GJBhBmEiwALWBQk_K1_QP10wL_oQ2igqOh431LEj24sra1WIH-_zmkmUhRN65APD4atRoCfHwQAvD_BwE" target="_blank">
                <li className={FooterStyles.footerSocialLinks}>
                  Instagram
                </li>
              </a>

              <a rel="nofollow" rel="nofollow" href="https://twitter.com/Gaurav28692722" target="_blank">
                <li className={FooterStyles.footerSocialLinks}>Twitter</li>
              </a>

              <a rel="nofollow" rel="nofollow" href="https://www.facebook.com/profile.php?id=100035651117027" target="_blank">
                <li className={FooterStyles.footerSocialLinks}>Facebook</li>
              </a>
            </ul>
          </div>


          <div className={FooterStyles.contactContainer}>
            <p className={FooterStyles.footerHeadings} >Contact info</p>
            <p className={FooterStyles.contactInfo}>Email:tgaurav053@gmail.com</p>
            <p className={FooterStyles.contactInfo}>Mobile : 7876037884</p>
          </div>

          <div className={FooterStyles.addressContainer}>
            <p className={FooterStyles.footerHeadings}>Address</p>
            <p className={FooterStyles.address} >House no. 209 ward 4, Sundernagar, Mandi, Himachal Pradesh</p>
          </div>



        </div>
        <div className={FooterStyles.footerContainer2}>
         
          <div className={FooterStyles.footerSocialLinksContainer}>
            <a rel="nofollow" href="https://www.facebook.com/profile.php?id=100035651117027" target="_blank"><AiFillFacebook/></a>
            <a rel="nofollow" href="https://www.instagram.com/gaurav.884/" target="_blank"><AiFillInstagram/></a>
            <a rel="nofollow" href="https://github.com/gaurav884" target="_blank"><AiFillGithub/></a>
            <a rel="nofollow" href="https://twitter.com/Gaurav28692722" target="_blank"><AiFillTwitterCircle/></a>
            <a rel="nofollow" href="https://www.linkedin.com/in/gaurav-thakur-862129203/" target="_blank"><AiFillLinkedin/></a>
            
          </div>
          <div className={FooterStyles.footerCopyrightContainer}>
            <p>© Copyright Gaurav {year} </p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Footer
