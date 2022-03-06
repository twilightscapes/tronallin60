import React, { useState, useRef } from "react";
import { Layout } from "../../components/layout";

import { Link } from "gatsby"
// import { graphql } from "gatsby"
// import { GatsbyImage } from 'gatsby-plugin-image'
// import TwilightLogo from "../../static/assets/logo.svg"
import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../../hooks/use-site-metadata"
// import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import ReactPlayer from 'react-player/lazy'
import Controls from "../../components/Controls"
import { ImPlay } from "react-icons/im"
// import LightCycle from "../../static/assets/light-cycle.svg"
// import { ImPlay } from "react-icons/im"
// import LightCycle from "../../static/assets/light-cycle.svg"
// import QuoraStrike from "../../static/assets/quora-strike.svg"
// import LoveSignal from "../../static/assets/love-signal.svg"
// import Castor from "../../static/assets/castor.svg"
// import SamFly from "../../static/assets/sam-fly.svg"
// import SamFlynn from "../../static/assets/sam-flynn.png"
// import CluGuy from "../../static/assets/clu.png"
// import TronGuy from "../../static/assets/tron.png"
// import MCP from "../../static/assets/mcp.svg"
// import McpEffects from "../../static/assets/mcp-effects.svg"
// import QuoraStand from "../../static/assets/quora-ass.png"
// import KevinFlynn from "../../static/assets/kevin-flynn.png"
// import TronChick from "../../static/assets/tron-chick1.svg"

import SorryFolks from "../../../static/assets/sorry-folks-moose.svg"
import { RiArrowLeftSLine, RiBugLine } from "react-icons/ri"
import styled from "styled-components"
const CustomBox = styled.div`



@media (min-width: 58em) {

}


`





function Marv() {

  const [state, setState] = useState({
    playing: true,
    controls: false,
    light: true,
    muted: true,
    loop: true,
  });
  // const playerRef = useRef(null);
  const controlsRef = useRef(null);
  
  const {
    playing,
    controls,
    light,
    muted,
    loop,
    playbackRate,
    pip,
    played,
    seeking,
    volume,
  } = state;
  
  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };
  
  const hanldeMute = () => {
    setState({ ...state, muted: !state.muted });
  };
  const { iconimage } = useSiteMetadata()

  return (
  
<CustomBox style={{}}>
{/* <Layout> */}
{/* GRID INTRO */}

<div id="" className="wrap-element tronpanel1" style={{position:'relative', top:'0', zIndex:'2', overflow:'', height:'70vh', width:'100vw'}}>

{/* <h1 className="tronText" style={{display:'grid', placeContent:'center', textAlign:'center', fontSize:'5vw', position:'absolute', top:'2vh', marginTop:'', width:'100%', padding:'0 0', opacity:'1', zIndex:'5'}}>
        <div className="TRON" style={{fontWeight:'normal', fontFamily:'TronType'}}>ENCOM OS 12</div>
        
      </h1> */}

      <h1 className="tronText" style={{display:'grid', placeContent:'center', textAlign:'center', fontSize:'5vw', position:'absolute', top:'5vh', marginTop:'', width:'100%', padding:'0 30%', opacity:'1', zIndex:'1'}}>
        <div className="TRON" style={{fontWeight:'normal', fontFamily:'TronType'}}>ENCOM OS 12</div>
      </h1>

      
      
      <div style={{width:'100vw', height:'100vh', position:'absolute', top:'', zIndex:'', border:'0px solid yellow'}}><StaticImage src="../../../static/assets/os12-desktop.jpg" alt="OS 12" /></div>

{/* <div className="wrap-element" style={{overflow:'hidden', position:'relative', top:'0', zIndex:'3'}}> */}




<ReactPlayer
          style={{opacity:'.4', display:'' }}
         className=''
         url="https://www.youtube.com/embed/s0fpz3DkCT4"
         width="100%"
         height="100vh"
         playing={playing}
            controls={controls}
            light={false}
            loop={loop}
            muted={false}
            config={{
              file: {
                attributes: {
                  crossorigin: "anonymous",
                },
              },
              youtube: {
                playerVars: { showinfo:0, controls:0, start:0, end:500, mute:0 }
              },
            }}

          playsinline
            playIcon={
              <button aria-label="Click To Play" className="clickplay" style={{position:'', zIndex:'1', bottom:'0', border:'0px solid red', width:'100vw', height:'100vh', background:'', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'columh', verticalAlign:'center', justifyContent:'center', alignItem:'center', paddingTop:''}}>
  
          <div className="" style={{ textAlign:'center', animation:'fadeIn 3s', marginTop:'20%', display:'grid', placeContent:'center'}}>
            
  

        
            <div className="actionJackson" style={{fontWeight:'bold', padding:'0 20px', fontSize:'2rem'}}>Open Encom OS 12 now ?</div>
    {/* <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} /> */}
            </div>
            </button>}
        //  light="../assets/transparent.png"
          />


{/* <div style={{position:'absolute', bottom:'0', left:'0', zIndex:'1', width:'100vw', height:'100%', border:'0px solid yellow', padding:'0', margin:'0'}}>
<StaticImage className=""
alt="Todd Lambert Web development for photographers" src="../../static/assets/shawshank-stuff.png" style={{height:'100vh'}}  />
</div> */}






          <Controls
            ref={controlsRef}
            onPlayPause={handlePlayPause}
            playing={playing}
            played={played}
            onMute={hanldeMute}
            muted={muted}
          />
      
     
{/* Panel Video */}






{/* Panel Content */}



 

    
<div style={{border:'0px red', display:'block', width:'100vw', height:'100vh', position:'absolute', zIndex:'1', bottom:'0', left:'', background:'transparent', display:'grid', placeContent:'center'}}>


      <div style={{display:'', justifyContent:'', color:'#ccc', position:'relative', bottom:'-40vh',}}><a href="/encom-os-12-download/" title="go back"><button className="" style={{display:'flex', justifyContent:'center'}}>Go Back</button></a></div>
      </div>


      </div>





  

     
    


   
    



  

       




{/* Panel Content */}





{/*  */}
{/* Image Gallery */}

  {/* {data.allFile.edges.map(edge => {
  return <GatsbyImage
  image={edge.node.childImageSharp.gatsbyImageData}
  srl_gallery_image="true"
  alt={edge.node.name}
  key={edge.node.id}
/>
})} */}









{/* </Layout> */}
</CustomBox>
  );
}

export default Marv;