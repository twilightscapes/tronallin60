import * as React from "react"
import { Layout } from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import GoBack from "../components/goBack"
// import CluGuy from "../../static/assets/clu.svg"













export default function CluePage() {
   return (


    
    <Layout className="thanks-page">

{/* <Seo title={`Content License Agreement Here`} /> */}
{/* <Seo image="/default-og-image.jpg"/> */}



 
<section className="outer1 section2 section--gradient" style={{}}>



      <div className="container" style={{padding: '2rem 10%'}}>

      <div className="mobile"><GoBack /></div>
      

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
      
      {/* <CluGuy className="character evil" style={{maxHeight:'90vh',  padding:'',}} /> */}
      <StaticImage className="character evil"
style={{maxHeight:'',  padding:'',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/clu.png" />
      
</div>

      
      
      <GoBack />
          </div>


          



    </section>
    
    
    </Layout>

  )
}
