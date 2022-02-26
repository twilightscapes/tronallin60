
import React, { useState, useRef } from "react";
import { Link, navigate } from "gatsby"
import ReactPlayer from 'react-player/lazy'
import { ImPlay } from "react-icons/im"
import TronChick from "../../static/assets/tron-chick1.svg"
import { StaticImage } from "gatsby-plugin-image"
import Controls from "../components/Controls";
import { useSiteMetadata } from "../hooks/use-site-metadata"
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
  Z-index:-1;
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

function PanelSirens() {
  const [state, setState] = useState({
    playing: true,
    controls: true,
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

    <CustomBox>


{/* GRID INTRO */}


<div className="wrap-element" style={{position:'relative', top:'0', zIndex:'', overflow:'hidden'}}>

          <ReactPlayer
          style={{paddingTop:'-5vh'}}
          className=''
            width="100%"
            height="100%"
            url="https://www.youtube.com/embed/yyovIAXi5mc"
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
                playerVars: { showinfo:0, autoplay:1, controls:0, mute:1, start:44, end:140, loop:1  }
              },
            }}

          playsinline
            playIcon={
              <button aria-label="Click To Play" className="clickplay" style={{position:'', zIndex:'5', bottom:'0', border:'0px solid red', width:'100vw', height:'100vh', background:'', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'columh', verticalAlign:'center', justifyContent:'center', alignItem:'center', paddingTop:''}}>
  
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

          <Controls
            ref={controlsRef}
            onPlayPause={handlePlayPause}
            playing={playing}
            played={played}
            onMute={hanldeMute}
            muted={muted}
            style={{position:'absolute', zIndex:'1'}}
          />
       




</div>

{/* Panel Video */}

{/* Panel Content */}

<Link title="Sirens" state={{modal: true}} to="/the-grid/sirens/">
<TronChick className="tronchick character" style={{maxHeight:'100vh', maxWidth:'', height:'', width:'', position:'absolute', right:'0', bottom:'0', paddingTop:'0', zIndex:'0', border:'0px solid blue' }} />
</Link>


<div style={{position:'relative', top:'0', width:'', height:''}}>




    {/* <div style={{fontSize:'clamp(.7rem, 2.5vw, 2.6rem)', lineHeight:'140%', paddingTop:'1rem'}}> */}






{/* <div className="" style={{display:'', position:'relative', zindex:'',   width:'60vw', height:'100%', padding:'4vh 1rem 1rem 1rem', fontSize:'clamp(.7rem, 3vw, 3.2rem)', left:'3vw', lineHeight:'100%',textShadow:'0 2px 7px #000',background:'rgba(0,0,0,0.50)', borderRadius:'12px' }}> */}
  
  {/* <p>You will receive an identity disk.</p>
  
  <p>Everything you do or learn</p>
  
  <p>will be imprinted on this disk.</p>
  <br />
  <p>If you lose your disk or fail to</p>
  
  <p>follow commands, you will be</p>
  
  <p>subject to immediate de-resolution.</p>
  <br />
  <p>Mirroring complete. Disk Activated.</p> */}
  
  <br />

  {/* <p className="TRON txtshadow tronText actionJackson" style={{fontSize:'60%', textAlign:'', width:'50%',}}>
  <Link className="" style={{cursor:'pointer', margin:'0 auto', padding:'2rem 0', textDecoration:'none', textShadow:'3px 3px 6px rgb(0, 162, 184)'}} to="/#games" title="Proceed to Games Grid">

    Proceed to games.</Link>
    </p> */}

  {/* </div> */}




{/* </div> */}



<div className="" style={{display:'', flexDiection:'column', justifyContent:'end', height:'', position:'absolute', left:'5%', bottom:'15vh'}}>

{/* <button className="actionJackson TRON tronText" style={{display:'flex', justifyContent:'center', zIndex:'2', filter:'drop-shadow(2px 2px 2px #000)', width:'30vw', borderRadius:'200px',fontSize:'2vw', padding:'10% 5%', }}>
  
  <Link state={{modal: true}} to="/the-grid/disc-grid/" style={{color:'#37f8f8'}}>Proceed To Games</Link></button> */}

  <div className="backbutton"><button className="back" onClick={() => { navigate(-1) }} style={{}}>&#10094; {" "}Go Back</button></div>
</div>




</div>
{/* Panel Content */}









</CustomBox>
);
}

export default PanelSirens;