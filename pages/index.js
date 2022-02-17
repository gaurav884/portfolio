import Navbar from "../components/navbar/Navbar"
import About from "../components/About/About"
import Projects from "../components/projects/Projects"
import Skills from "../components/skills/Skills"
import Footer from "../components/footer/Footer"
import Head from "next/head"
import React, { useRef } from 'react'

const scrollToRef = (ref) => window.scrollTo({
  top: ref.current.offsetTop,
  behavior: "smooth",
}) 
 
export default function Home() {

   const skills = useRef()
   const works = useRef()
   const contact = useRef()

   function executeScroll(refer){
     if(refer ==="skills"){
      scrollToRef(skills)
    }
    else if(refer ==="works"){
      scrollToRef(works)
    }
    else{
      scrollToRef(contact)
    }
   }
   
 
  return (
    <>
      <Head>
        <title>Resume</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Sedgwick+Ave&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Sedgwick+Ave&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="./favicon.png"></link>
      </Head>
      <div className="App">
       <Navbar 
         scroller={executeScroll}
       />
        <div>  <About /></div> 
        <div ref={works}> <Projects /></div> 
        <div ref={skills}>  <Skills /></div> 
        <div ref={contact}> <Footer /></div> 
      </div>
    </>
  )
}
