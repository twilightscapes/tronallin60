import React, { useState, useRef } from "react";


import { Link } from "gatsby"
// import { graphql } from "gatsby"
// import { GatsbyImage } from 'gatsby-plugin-image'
// import TwilightLogo from "../../static/assets/logo.svg"
import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../hooks/use-site-metadata"
// import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import ReactPlayer from 'react-player/lazy'
import Controls from "../components/Controls"
import { ImPlay } from "react-icons/im"
import LightCycle from "../../static/assets/light-cycle.svg"
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


import styled from "styled-components"
const CustomBox = styled.div`

.MuiSlider-root {
  color:#ff00000 !important;
}

.wrap-element {
  position: relative;
  overflow: ;
  padding-bottom: 56.25%;
  height:100vh;

}
.wrap-element iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 300%; 
  left: -100%; 
  border: 0;
}


@media (max-width: 48em) {
  .wrap-element {
    padding-bottom: 0;
    height:300px;
    overflow:visible;
    border:0px solid red;
  }
}

@media (min-width: 58em) {

}


`





function GridLauncher() {

  const [state, setState] = useState({
    playing: true,
    controls: true,
    light: true,
    muted: false,
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

{/* GRID INTRO */}



{/* Panel Video */}
{/* <div className="vidbox" style={{position:'absolute', height:'100vh', width:'100vw', bottom:'0', zIndex:''}}>
<div className="video-background">
<div className="video-foreground"> */}
{/* c_V1iD6F1kk */}
{/* nJ38P5elTkg */}
{/* <div id="homestart" style={{position:'absolute', top:'-100vh'}}></div> */}
<div id="" className="wrap-element tronpanel" style={{overflow:'hidden'}}>
<ReactPlayer
         className='frontbg'
         url="https://www.youtube.com/embed/c_V1iD6F1kk"
         width="100%"
         height="100vh"
         playing={playing}
            controls={false}
            light={false}
            loop={loop}
            muted={muted}
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
    <img className="homepage-bg" src={iconimage} width="300px" height="150px" alt="VidSock" style={{ width:'100%', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} />
  </div>
        
            <span style={{fontWeight:'bold', padding:'0 0 0 0', fontSize:'2rem'}}>Click To Play</span>
    <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
            </div>
            </button>}
         
          />


{/* <div style={{position:'absolute', bottom:'0', left:'0', zIndex:'1', width:'100vw', height:'100%', border:'0px solid yellow', padding:'0', margin:'0'}}>
<StaticImage className=""
alt="Todd Lambert Web development for photographers" src="../../static/assets/shawshank-stuff.png" style={{height:'100vh'}}  />
</div> */}

          {/* <Controls
            ref={controlsRef}
            onPlayPause={handlePlayPause}
            playing={playing}
            played={played}
            onMute={hanldeMute}
            muted={muted}
          /> */}
      
     
{/* Panel Video */}






{/* Panel Content */}
<h1 className="tronText" style={{display:'grid', placeContent:'center', textAlign:'center', fontSize:'14vw', position:'absolute', top:'0', marginTop:'', width:'100%', padding:'0 30%', opacity:'1', zIndex:'0'}}>
        <div className="TRON" style={{fontWeight:'normal', fontFamily:'TronType'}}>TRON</div>
      </h1>


 


 <div id="characters" className="characters" style={{position:'absolute', zIndex:'0', width:'', height:'100%', top:'0', background:'none', filter:'none', boxShadow:'none', padding:'10vh 0 0 0',}}>

 <ReactPlayer
          className='playerpp'
          url="https://www.youtube.com/embed/S5S6s5dZXNM"
          width="100%"
          height=""
          style={{left:'', position:'absolute', zIndex:'2', display:'', width:'', alignSelf:'', placeContent:'', justifyContent:'', margin:'0 auto', bottom:'0', border:'0px solid blue'}}
          config={{
            youtube: {
              playerVars: { showinfo:0, autoplay:1, controls:0, mute:0, start:5, end:41 }
            },
          }}
       
          playing
          playsinline
          playIcon={


        <div className="" style={{display:'', flexDiection:'', placeContent:'center', height:'', position:'absolute', left:'', right:'', bottom:'0', zIndex:'9', width:'', height:'100vh', border:'0px solid red'}}>

        <button aria-label="Click To Play" className="actionJackson TRON tronText"
       >
          
          <Link state={{modal: true}} to="/the-grid/" style={{color:'#37f8f8', display:'block', height:'100vh', width:'100vw', display:'grid', placeContent:'center', border:'0px solid yellow', position:'relative', top:'40vh'}}>
            <div className="" style={{
          display:'flex', justifyContent:'center', zIndex:'', filter:'drop-shadow(2px 2px 2px #000)', width:'100%',  padding:'5% 1rem', borderRadius:'200px', border:'3px dotted #666', lineHeight:'200%', fontSize:'clamp(2rem, 4vw, 3.6rem)', background:'radial-gradient(circle, rgba(10, 45, 48, 0.4) 17%, rgba(25, 96, 109, 0.4) 58%, rgba(10, 196, 206, 0.5) 97%)', textShadow:'2px 2px 2px #333'
          }}>
            Enter The Grid
            </div>
          </Link>
          
          </button>
        
        </div>
        }
            light="../assets/transparent.png"
          />
    
<div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', zIndex:'-2', position:'relative' }}>

    
    
    
    
    <div srl_exclude="true" id="mylink15" className="donation2" style={{position:'relative', transform:'', width:'100vw', height:'100vh', 
    // background:'rgba(6, 70, 90, 0.6)', 
    padding:' 0', display:'flex', justifyContent:'center', border:'0px solid red',}}>

    <Link state={{modal: true}} to="/clu/" title="Clu" aria-label="Clu">
    {/* <CluGuy className="character evil" style={{height:'100%', width:'100%', margin:'0 0 0 -20%',}} /> */}
    <StaticImage className="character evil"
style={{height:'', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/clu.png" />
    </Link>

    </div>


    <div className="masonry" style={{gap:'2rem', justifyContent:'start'}}>

<div>
<h1 className="tronText" style={{fontSize:'clamp(2rem, 3vw, 3rem)'}}>CLU</h1>
<ul style={{fontSize:'clamp(1rem, 1.5vw, 2rem)', listStyle:'none', background:'rgba(0, 0, 0, .4)', padding:'1rem', borderRadius:'12px'}}>
<li><strong>Actor:</strong> Jeff Bridges</li>
<li><strong>User:</strong> Kevin Flynn</li>
<li><strong>Allies:</strong> Jarvis, Rinzler, Black Guard, Sentries</li>
<li><strong>Enemies:</strong> Programs defying system rules</li>
</ul>
<div>


<p style={{fontSize:'clamp(1rem, 1.5vw, 2rem)', marginTop:'2rem', background:'rgba(0, 0, 0, .4)', padding:'1rem', borderRadius:'12px'}}>Clu was originally a search program created by Kevin Flynn to explore inside the ENCOM mainframe for proof he created ENCOM's most-popular games. Clu was found and destroyed by the Master Control Program. Flynn created another program named CLU after returning from the Grid with a more specific task in mind.
</p>
      </div>
      
      </div>


      </div>

      </div>

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










</CustomBox>
  );
}

export default GridLauncher;