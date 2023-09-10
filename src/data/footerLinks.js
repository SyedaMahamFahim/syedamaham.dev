import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

const footerLinks = {
  
    legal: [
      {
        name: "Privacy Policy",
        url: "/legal/privacy-policy",
      },
      {
        name: "Disclaimers",
        url: "/legal/disclaimers",
      },
      {
        name: "Terms and Conditions",
        url: "/legal/terms-and-conditions",
      },
    ],
  
  
    quick: [
      {
        name: "About",
        url: "/about",
      },
      {
        name: "Contact",
        url: "/contact",
      },
      {
        name: "External Articles",
        url: "/external-articles",
      },
      
    ],
    socialMedia:[
      {
        name:"Facebook",
        url:"https://www.facebook.com/syedamahamfahim/",
        icons:<AiFillFacebook/>
      },
      {
        name:"Linkedin",
        url:"https://www.linkedin.com/in/syedamahamfahim/",
        icons:<AiFillLinkedin/>
      },
      {
        name:"GitHub",
        url:"https://github.com/SyedaMahamFahim",
        icons:<AiFillGithub/>
      },
      {
        name:"Twitter",
        url:"https://twitter.com/0xSyedaMaham",
        icons:<AiOutlineTwitter/>
      },
      {
        name:"Instagram",
        url:"https://www.instagram.com/mahum_fahim/",
        icons:<AiFillInstagram/>
      },
    ]
  
};


export default footerLinks