import * as React from "react"
import { Layout } from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import GoBack from "../components/goBack"
// import SamFlynn from "../../static/assets/sam-flynn.svg"













export default function SamPage() {
   return (


    
    <Layout className="thanks-page">

{/* <Seo title={`Content License Agreement Here`} /> */}
{/* <Seo image="/default-og-image.jpg"/> */}



 
<section className="outer1 section2 section--gradient">



      <div className="container" style={{padding: '2rem 10%'}}>

      <div className="mobile"><GoBack /></div>
      



      <div className="masonry" style={{gap:'2rem',}}>
      <div>
<h1 className="tronText" style={{fontSize:'clamp(2rem, 3vw, 3rem)'}}>Sam Flynn</h1>
<ul style={{fontSize:'clamp(1rem, 1.5vw, 2rem)', listStyle:'none', background:'rgba(0, 0, 0, .4)', padding:'1rem', borderRadius:'12px'}}>
<li><strong>Actor:</strong> Garrett Hedlund</li>
{/* <li>User: Kevin Flynn</li> */}
<li><strong>Allies:</strong> Quorra, Kevin Flynn, Alan Bradley</li>
<li><strong>Enemies:</strong> Jarvis, Rinzler, Black Guard, Clu</li>
</ul>
<div>


<p style={{fontSize:'clamp(1rem, 1.5vw, 2rem)', marginTop:'2rem', background:'rgba(0, 0, 0, .4)', padding:'1rem', borderRadius:'12px'}}>Born in 1983, Sam is the son of Kevin Flynn and Jordan Canas. He was deeply affected by the loss of his mother in an auto accident so early in his life and then by the mysterious disappearance of his father in 1989.<br /><br /> Sam refuses to have anything to do with ENCOM, the computer company once headed by his father. For many years, Sam has chosen to retreat from the public eye and focus his time on daring feats and extreme sports. Will Sam be the one to unlock the mystery of his father's disappearance?
</p>
      </div>
      
      </div>
      

      <StaticImage className="character"
style={{maxHeight:'', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/sam-flynn.png" />
</div>



      
      <GoBack />
          </div>


          



    </section>
    
    
    </Layout>

  )
}
