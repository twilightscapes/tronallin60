
import * as React from "react"
import styled from "styled-components"

import { Link, navigate } from "gatsby"
// import { graphql } from "gatsby"
// import { GatsbyImage } from 'gatsby-plugin-image'
// import TwilightLogo from "../../static/assets/logo.svg"
import { StaticImage } from "gatsby-plugin-image"
// import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import ReactPlayer from 'react-player/lazy'
// import { ImPlay } from "react-icons/im"

// import LightCycle from "../../static/assets/light-cycle.svg"
// import QuoraStrike from "../../static/assets/quora-strike.svg"
// import LoveSignal from "../../static/assets/love-signal.svg"
// import Castor from "../../static/assets/castor.svg"
// import SamFly from "../../static/assets/sam-fly.svg"
// import SamFlynn from "../../static/assets/sam-flynn.svg"
// import CluGuy from "../../static/assets/clu.svg"
// import TronGuy from "../../static/assets/tron.svg"
// import MCP from "../../static/assets/mcp.svg"
// import McpEffects from "../../static/assets/mcp-effects.svg"
// import QuoraStand from "../../static/assets/quora-ass.svg"
// import KevinFlynn from "../../static/assets/kevin-flynn.svg"
// import TronChick from "../../static/assets/tron-chick1.svg"


const CustomBox = styled.div`
.frontbg iframe{
  opacity:.4;
}
`

const Panel11 = () => (
<CustomBox style={{}}>

{/*  */}
<div id="" style={{display:'',  padding:'0', outline:'0px solid yellow', height:'100vh', width:'100vw', position:'relative', overflow:''}}>

{/* <div style={{position:'absolute', right:'20vh', top:'0', width:'300px', height:'200px', background:'red', color:'#fff'}}>DAMN</div> */}

{/* Panel Video */}
<div className="vidbox" style={{position:'absolute', height:'100vh', width:'100vw', bottom:'0', zIndex:''}}>
<div className="video-background">
<div className="video-foreground">
{/* c_V1iD6F1kk */}
{/* nJ38P5elTkg */}

<ReactPlayer
         className='youtubehide front'
         url="https://www.youtube.com/embed/JoX0bNYg1Wc"
         width="100%"
         height="100%"
         config={{
           youtube: {
            playerVars: { showinfo:0, autoplay:1, controls:0, mute:1, start:10, end:25, loop:1  }
           },
         }}
         loop
         playing
         playsinline
//              playIcon={
//                <button aria-label="Click To Play" className="clickplay1" style={{position:'relative', zIndex:'5', bottom:'0', right:'', left:'', border:'0px solid red', width:'50%', height:'100vh', background:'', color:'#fff', fontSize:'18px', display:'grid', placeContent:'center', padding:'0' }}>


// <div style={{textAlign:'center', position:'', top:'0', zIndex:'40'}}>
//      <ImPlay style={{padding:'0 0 0 0', display:'flex', justifyContent:'center', fontSize:'60px', border:'0px solid blue',}} />
// </div>    

//              </button>
         
//             }
//                light="assets/grid-loader.svg"
         />
</div>
</div>
</div>
{/* Panel Video */}

{/* Panel Content */}


<div className="" style={{position:'', padding:'50px 0 0 0', width:'', zIndex:'0', fontSize:'clamp(.7rem, 2.5vw, 4.2rem)', top:'0', textAlign:'center'}}>
  
<blockquote className="tronText" style={{lineHeight:'250%', position:'', margin:'0 auto 0 auto', maxWidth:'800px',}}>
<p>You promised that we would
  <br />
change the world, together.</p>
<br />
<p className="TRON" style={{fontSize:'70%'}}> You <span className="neonText" style={{fontSize:''}}>broke</span> your promise...</p>
<br />
<p>I took this system to its maximum potential.</p> 
<br />
<p className="TRON" style={{fontSize:'60%'}}>I created the <span className="neonText" style={{fontSize:''}}>perfect system!</span></p>
<br /><br />
</blockquote>
</div>






<Link state={{modal: true}} to="kevin-flynn/">
{/* <KevinFlynn className="character" style={{maxHeight:'80vh', width:'340px', overflow:'clip', zIndex:'1', position:'absolute', right:'0', bottom:'0', border:'0px solid red',}}/> */}
<StaticImage className="character"
 style={{maxHeight:'80vh', width:'340px', overflow:'clip', zIndex:'', position:'absolute', right:'0', bottom:'0', border:'0px solid red',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/kevin-flynn.png" />
</Link>

<Link state={{modal: true}} to="/clu/" >
{/* <CluGuy className="character evil" style={{maxHeight:'80vh', width:'300px', zIndex:'1', position:'absolute', left:'0', bottom:'0', border:'0px solid red',}}/> */}
<StaticImage className="character evil"
style={{maxHeight:'80vh', width:'300px', zIndex:'', position:'absolute', left:'0', bottom:'0', border:'0px solid red',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/clu.png" />
</Link>



{/* <div className="nextbutt" style={{display:'', flexDiection:'column', justifyContent:'end', color:'#ccc', height:'', zIndex:'2', position:'absolute', left:'40%', top:''}}>

          <button className="actionJackson TRON tronText" style={{display:'flex', justifyContent:'center', zIndex:'2', filter:'drop-shadow(2px 2px 2px #000)', width:'30vw', borderRadius:'200px',fontSize:'2vw', padding:'10% 5%', }}><Link state={{modal: true}} to="/the-grid/return-to-the-source/" style={{color:'#37f8f8'}}>Return to the Source <span style={{fontSize:'150%'}}></span></Link></button>

</div> */}







    {/* <button className="actionJackson TRON tronText" style={{display:'flex', justifyContent:'center', zIndex:'', filter:'drop-shadow(2px 2px 2px #000)', height:'', borderRadius:'200px',fontSize:'clamp(14px, 3vw, 4rem)', padding:'3% 5%', width:'150%' }}><Link to="/#discgrid" style={{color:'#37f8f8'}}>Match 2</Link></button> */}






  

  


    <div className="nextbutt" style={{display:'', flexDiection:'column', justifyContent:'end', color:'#ccc', height:'', position:'absolute', left:'5%', top:''}}>

<button className="actionJackson TRON tronText" style={{display:'flex', justifyContent:'center', zIndex:'2', filter:'drop-shadow(2px 2px 2px #000)', width:'30vw', borderRadius:'200px',fontSize:'2vw', padding:'10% 5%', }}>
  
  <Link state={{modal: true}} to="/the-grid/return-to-the-source/" style={{color:'#37f8f8'}}>Return to the Source <span style={{fontSize:'150%'}}></span></Link></button>
<div className="backbutton"><button className="back" onClick={() => { navigate(-1) }} style={{}}>&#10094; {" "}Go Back</button></div>

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
)
export default Panel11