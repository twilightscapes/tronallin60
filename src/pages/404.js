import React from "react";
import { Link } from "gatsby"
// import { useSiteMetadata } from "../hooks/use-site-metadata"
import ReactPlayer from 'react-player/lazy'
import { ImPlay } from "react-icons/im"
import { RiArrowLeftSLine, RiBugLine } from "react-icons/ri"

// import { AiFillRobot } from "react-icons/ai"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
import SorryFolks from "../../static/assets/sorry-folks-moose.svg"


const NotFound = () => (

  
  <Layout className="not-found-page">
    <Seo title="Page not found" />
    <div id="" className="wrap-element tronpanel" style={{position:'fixed', top:'0', zIndex:'2', overflow:'', height:'100vh', width:'100vw'}}>
<h1 className="tronText" style={{display:'grid', placeContent:'center', textAlign:'center', fontSize:'14vw', position:'absolute', top:'0', marginTop:'', width:'100%', padding:'0 30%', opacity:'1', zIndex:'0'}}>
        <div className="TRON" style={{fontWeight:'normal', fontFamily:'TronType'}}>TRON</div>
      </h1>

<header className="wrapper" style={{textAlign:'center', position:'relative', zIndex:'0'}}>
        <br /> <br />
        {/* <AiFillRobot
          style={{
            fontSize: "160px",
            color: "var(--primary-color)",
            margin:'0 auto',
        textAlign:'center'
          }}
        /> */}
    
    <SorryFolks style={{maxWidth:'90vw', maxHeight:'55vh', display:'grid', placeContents:'center'}}/>
        <h1 className="TRON tronText neonText" style={{fontSize:'180%', lineHeight:'23vh',}}>This attraction is <div style={{color:'red', paddingTop:'2rem', fontSize:'150%', fontFamily:'san serit !important'}}>closed</div><br /> <div style={{marginTop:'0rem'}}>for maintenance.</div></h1>
        {/* <p className="tronText" style={{fontSize:'150%', padding:'2rem'}}>
          Please check back soon!
        </p> */}
      </header>

      <div style={{display:'flex', justifyContent:'center', width:'100%', marginTop:'2rem', gap:'2rem'}}>
        <Link to="/" className="actionJackson">
        <RiArrowLeftSLine className="icon -left" />
        Back to Homepage
      </Link>
      <Link to="/contact" className="actionJackson">
        Report this <RiBugLine className="icon -right" />
      </Link></div>

   
    <div className="spacer33"></div> 


{/* Panel Video */}
{/* <div className="vidbox" style={{position:'absolute', height:'100vh', width:'100vw', bottom:'0', zIndex:''}}>
<div className="video-background">
<div className="video-foreground"> */}
{/* c_V1iD6F1kk */}
{/* nJ38P5elTkg */}
{/* <div id="homestart" style={{position:'absolute', top:'-100vh'}}></div> */}

<ReactPlayer
         className=''
         url="https://www.youtube.com/embed/c_V1iD6F1kk"
         width="100%"
         height="100vh"
         style={{position:'fixed', top:'0', zIndex:'-1', opacity:'.3'}}
         playing={true}
            controls={false}
            light={false}
            loop={true}
            muted={true}
            config={{
              file: {
                attributes: {
                  crossorigin: "anonymous",
                },
              },
              youtube: {
                playerVars: { showinfo:0, controls:0, start:20, end:41, mute:1 }
              },
            }}

          playsinline
            playIcon={
              <button aria-label="Click To Play" className="clickplay" style={{position:'', zIndex:'1', bottom:'0', border:'0px solid red', width:'100vw', height:'100vh', background:'', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'columh', verticalAlign:'center', justifyContent:'center', alignItem:'center', paddingTop:''}}>
  
          <div className="" style={{ textAlign:'center', animation:'fadeIn 3s'}}>
            
  
            <div style={{position:'relative', maxWidth:'100vw', margin:'10% 0', zIndex:'', display:'flex', justifyContent:'center', background:'transparent !important',}}>
    {/* <img className="homepage-bg" src={iconimage} width="300px" height="150px" alt="VidSock" style={{ width:'100%', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} /> */}
  </div>
        
            <span style={{fontWeight:'bold', padding:'0 0 0 0', fontSize:'2rem'}}>Click To Play</span>
    <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
            </div>
            </button>}
         
          />

          </div>
  </Layout>
)

export default NotFound
