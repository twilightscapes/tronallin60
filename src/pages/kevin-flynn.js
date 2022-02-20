import * as React from "react"
import { Layout } from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import GoBack from "../components/goBack"
// import KevinFlynn from "../../static/assets/kevin-flynn.svg"













export default function KevinPage() {
   return (


    
    <Layout className="thanks-page">

{/* <Seo title={`Content License Agreement Here`} /> */}
{/* <Seo image="/default-og-image.jpg"/> */}



 
<section className="outer1 section2 section--gradient">



      <div className="container" style={{padding: '2rem 10%'}}>

      <div className="mobile"><GoBack /></div>
      

      


      <div className="masonry" style={{gap:'2rem',}}>
      <div>
<h1 className="tronText" style={{fontSize:'clamp(2rem, 3vw, 3rem)'}}>Kevin Flynn</h1>
<ul style={{fontSize:'clamp(1rem, 1.5vw, 2rem)', listStyle:'none', background:'rgba(0, 0, 0, .4)', padding:'1rem', borderRadius:'12px'}}>
<li><strong>Actor:</strong> Jeff Bridges</li>
{/* <li>User: Kevin Flynn</li> */}
<li><strong>Allies:</strong> Quorra, Sam Flynn</li>
<li><strong>Enemies:</strong> Jarvis, Rinzler, Black Guard, all of Clu's faithful</li>
</ul>
<div>


<p style={{fontSize:'clamp(1rem, 1.5vw, 2rem)', marginTop:'2rem', background:'rgba(0, 0, 0, .4)', padding:'1rem', borderRadius:'12px'}}>A brilliant game designer, Kevin Flynn left ENCOM after being fired by Ed Dillinger who claimed to have created several of Flynn's games. When Flynn broke into the company to prove Dillinger a thief, he became the first human-being to enter the astonishing digital world of the Grid.<br /><br /> He returned from the virtual world triumphant over Dillinger, married Jordan Canas, and had a son, Sam. Flynn claimed he made an incredible discovery that was going to revolutionize the world, but he mysteriously disappeared in 1989 before revealing his secret.<br /><br /> There have been rumors of Flynn sightings over the years, but no concrete proof. An organization known as Flynn Lives has been investigating his whereabouts for years. Where IS Kevin Flynn?
</p>
      </div>
      
      </div>
      
      {/* <KevinFlynn className="character" style={{maxHeight:'90vh',  padding:'',}} /> */}
      <StaticImage className="character"
 style={{maxHeight:'',  padding:'',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/kevin-flynn.png" />
</div>


</div>


      
      <GoBack />
          {/* </div> */}


          



    </section>
    
    
    </Layout>

  )
}
