import * as React from "react"
import { Layout } from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import GoBack from "../components/goBack"
// import TronGuy from "../../static/assets/tron.svg"













export default function TronPage() {
   return (


    
    <Layout className="thanks-page">

{/* <Seo title={`Content License Agreement Here`} /> */}
{/* <Seo image="/default-og-image.jpg"/> */}



 
<section className="outer1 section2 section--gradient">



      <div className="container" style={{padding: '2rem 10%'}}>

      <div className="mobile"><GoBack /></div>






      <div className="masonry" style={{gap:'2rem',}}>
      <div>
<h1 className="tronText" style={{fontSize:'clamp(2rem, 3vw, 3rem)'}}>TRON</h1>
<ul style={{fontSize:'clamp(1rem, 1.5vw, 2rem)', listStyle:'none', background:'rgba(0, 0, 0, .4)', padding:'1rem', borderRadius:'12px'}}>
{/* <li><strong>Actor:</strong> Jeff Bridges</li> */}
<li><strong>User:</strong> Alan Bradley</li>
<li><strong>Allies:</strong> Yori, Kevin Flynn, Dumont</li>
<li><strong>Enemies:</strong> Master Control Program, Sark, CLU</li>
</ul>
<div>


<p style={{fontSize:'clamp(1rem, 1.5vw, 2rem)', marginTop:'2rem', background:'rgba(0, 0, 0, .4)', padding:'1rem', borderRadius:'12px'}}>Tron was a security program created by his user, Alan Bradley, to ensure the Master Control Program (MCP) a fully aware program at ENCOM -- was functioning normally, correctly, and within the rules of its programming.<br /><br /> In 1982, TRON was taken prisoner by the self-aware Master Control Program and forced to play on the Game Grid. His legendary skills and devotion to the users turned him into a formidable warrior and Disc Arena master.
</p>
      </div>
      
      </div>
      
      {/* <TronGuy className="character" style={{maxHeight:'90vh',  padding:'',}} /> */}
      <StaticImage className="character"
 style={{maxHeight:'',  padding:'',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/tron.png" />
</div>
      
      
      <GoBack />
          </div>


          



    </section>
    
    
    </Layout>

  )
}
