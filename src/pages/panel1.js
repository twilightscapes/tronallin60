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





function Panel1() {

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
<div id="homestart" style={{position:'absolute', top:'-100vh'}}></div>
<div id="" className="wrap-element" style={{overflow:'hidden'}}>
<ReactPlayer
         className='frontbg'
         url="https://www.youtube.com/embed/c_V1iD6F1kk"
         width="100%"
         height="100vh"
         playing={playing}
            controls={true}
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


 


 <div id="characters" className="characters" style={{position:'absolute', zIndex:'0', width:'', height:'', top:'0', background:'none', filter:'none', boxShadow:'none', padding:'10vh 0 0 0',}}>

 <ReactPlayer
          className='playerpp'
          url="https://www.youtube.com/embed/S5S6s5dZXNM"
          width="100%"
          height=""
          style={{left:'', position:'absolute', zIndex:'2', display:'', width:'', alignSelf:'center', placeContent:'center', justifyContent:'center', margin:'0 auto', bottom:'30vh', border:'0px solid blue'}}
          config={{
            youtube: {
              playerVars: { showinfo:0, autoplay:1, controls:0, mute:0, start:5,  }
            },
          }}
          loop
          playing
          playsinline
          playIcon={


        <div className="" style={{display:'grid', flexDiection:'', placeContent:'center', height:'', position:'relative', left:'', right:'', bottom:'35vh', zIndex:'9', width:''}}>

        <button aria-label="Click To Play" className="actionJackson TRON tronText" style={{display:'flex', justifyContent:'center', zIndex:'', filter:'drop-shadow(2px 2px 2px #000)', width:'100%', borderRadius:'200px', padding:'8% 0%', lineHeight:'200%', fontSize:'clamp(2rem, 4vw, 3.6rem)' }}>
          
          <Link state={{modal: true}} to="/the-grid/" style={{color:'#37f8f8'}}>Enter The Grid</Link>
          
          </button>
        
        </div>
        }
            light="../assets/transparent.png"
          />
    
<div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', zIndex:'-2', position:'relative' }}>

    <div id="" className="" style={{position:'relative', display:'flex', justifyContent:'center', border:'0px solid red',}}>
             <Link state={{modal: true}} to="/the-grid/son-of-flynn/" title="Sam Flynn"  aria-label="Sam Flynn">
    {/* <SamFlynn className="character" style={{height:'100vh', width:'90%', margin:'0 0 0 0',}} /> */}
    <StaticImage className="character"
style={{height:'', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/sam-flynn.png" />
    </Link>
    </div>
    
    <div id="" className="" style={{position:'relative', transform:'', maxWidth:'', height:'100vh',
     padding:' 0', display:'flex', justifyContent:'center', border:'0px solid red',}}>
    <Link state={{modal: true}} to="/the-grid/meet-quorra" title="Quorra" aria-label="Quorra">
      {/* <QuoraStand className="character" style={{height:'100%', width:'85%', margin:'0 0 0 10%', right:'', zIndex:''}} /> */}
      <StaticImage className="character"
style={{height:'', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/quora-ass.png" />
      </Link>
    </div>
    
    <div id="" className="" style={{position:'relative', transform:'', maxWidth:'', height:'100vh',
     padding:' 0', display:'flex', justifyContent:'center',}}>
<Link state={{modal: true}} to="/kevin-flynn/" title="Kevin Flynn" aria-label="Kevin Flynn">
    {/* <KevinFlynn className="character" style={{position:'relative', height:'100%', width:'130%', zIndex:'', margin:'0 0 0 -16%'}} /> */}
    <StaticImage className="character"
style={{height:'', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/kevin-flynn.png" />
    </Link>
    </div>
    
    <div id="" className="" style={{position:'relative', transform:'', maxWidth:'', height:'100vh',
    display:'flex', flexDiection:'column', justifyContent:'center',
    padding:'0', border:'0px solid red',}}>
      <Link state={{modal: true}} to="/tron/" title="Tron" aria-label="Tron">
    {/* <TronGuy className="character" style={{height:'100%', width:'100%', margin:'0 0 0 0', transform: 'scaleX(-1)'}} /> */}
    <StaticImage className="character"
style={{height:'', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/tron.png" />
    </Link>
    </div>
    
    <div srl_exclude="true" id="mylink15" className="donation2" style={{position:'relative', transform:'', maxWidth:'', height:'100vh', 
    // background:'rgba(6, 70, 90, 0.6)', 
    padding:' 0', display:'flex', justifyContent:'center', border:'0px solid red',}}>
    <Link state={{modal: true}} to="/clu/" title="Clu" aria-label="Clu">
    {/* <CluGuy className="character evil" style={{height:'100%', width:'100%', margin:'0 0 0 -20%',}} /> */}
    <StaticImage className="character evil"
style={{height:'', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/clu.png" />
    </Link>
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

</div>








</CustomBox>
  );
}

export default Panel1;