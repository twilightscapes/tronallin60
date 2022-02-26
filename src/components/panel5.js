
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

function Panel5() {
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


<div className="wrap-element" style={{position:'relative', top:'0', zIndex:''}}>

          <ReactPlayer
          
          className=''
            width="100%"
            height="100%"
            url="https://www.youtube.com/embed/YyoKXfBQgXw"
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
                playerVars: { showinfo:0, autoplay:1, controls:0, mute:1, start:204, end:221, loop:1  }
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
          />
       




</div>

{/* Panel Video */}

{/* Panel Content */}
<div style={{position:'absolute', top:'0', width:'100vw', height:'100vh'}}>




<div style={{maxHeight:'', maxWidth:'', height:'60vh', width:'', position:'absolute', right:'-10vw', bottom:'0', paddingTop:'0vh', zIndex:'0', border:'0px solid blue' }}>
<Link state={{modal: true}} to="/about-twilightscapes/">
<StaticImage className="character evil"
alt="Todd Lambert Web development for photographers" src="../img/tron-fights2.png" />
</Link>
</div>



          <div className="nextbutt" style={{display:'', flexDiection:'column', justifyContent:'end', height:'', position:'absolute', left:'5%', top:''}}>

          <button className="actionJackson TRON tronText" style={{display:'flex', justifyContent:'center', zIndex:'2', filter:'drop-shadow(2px 2px 2px #000)', width:'30vw', borderRadius:'200px',fontSize:'2vw', padding:'10% 5%', }}><Link state={{modal: true}} to="/the-grid/lightcycle-grid" style={{color:'#37f8f8'}}>LightCycle Grid  <span style={{fontSize:'150%'}}>@</span></Link></button>

          <div className="backbutton"><button className="back" onClick={() => { navigate(-1) }} style={{}}>&#10094; {" "}Go Back</button></div>

</div>



{/* <div className="" style={{display:'', flexDiection:'column', justifyContent:'end', height:'', position:'absolute', left:'5%', bottom:'5vh'}}>

<button className="actionJackson TRON tronText" style={{display:'flex', justifyContent:'center', zIndex:'2', filter:'drop-shadow(2px 2px 2px #000)', width:'30vw', borderRadius:'200px',fontSize:'2vw', padding:'10% 5%', }}>
  
  <Link state={{modal: true}} to="/the-grid/disc-grid/" style={{color:'#37f8f8'}}>Proceed To Games</Link></button>

  <div className="backbutton"><button className="back" onClick={() => { navigate(-1) }} style={{}}>&#10094; {" "}Go Back</button></div>
</div> */}



</div>
{/* Panel Content */}









</CustomBox>
);
}

export default Panel5;