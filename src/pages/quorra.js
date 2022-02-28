import * as React from "react"
import { Layout } from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import GoBack from "../components/goBack"
// import QuoraAss from "../../static/assets/quora-ass.svg"













export default function QuorraPage() {
   return (


    
    <Layout className="thanks-page">

{/* <Seo title={`Content License Agreement Here`} /> */}
{/* <Seo image="/default-og-image.jpg"/> */}



 
<section className="outer1 section2 section--gradient">



      <div className="container" style={{padding: '2rem 10%'}}>

      <div className="mobile"><GoBack /></div>


      <div className="masonry" style={{gap:'2rem',}}>
      <div>
<h1 className="tronText" style={{fontSize:'clamp(2rem, 3vw, 3rem)'}}>Quora</h1>
<ul style={{fontSize:'clamp(1rem, 1.5vw, 2rem)', listStyle:'none', background:'rgba(0, 0, 0, .4)', padding:'1rem', borderRadius:'12px'}}>
<li><strong>Actor:</strong> Olivia Wilde</li>
{/* <li><strong>User:</strong> Kevin Flynn</li> */}
<li><strong>Allies:</strong> Kevin Flynn, Sam Flynn, Castor</li>
<li><strong>Enemies:</strong> Clu, Jarvis, Black Guard, Sentries</li>
</ul>
<div>


<p style={{fontSize:'clamp(1rem, 1.5vw, 2rem)', marginTop:'2rem', background:'rgba(0, 0, 0, .4)', padding:'1rem', borderRadius:'12px'}}>Quorra is the confidante and apprentice of Kevin Flynn. Flynn has shared his knowledge of the real world with her, and as such, she longs to experience what lies outside the realm of possibility in her own world. She is the last known ISO alive and is referred to by Kevin Flynn as "The Miracle".
</p>
      </div>
      
      </div>
      
      {/* <QuoraAss className="character" style={{maxHeight:'90vh',  padding:'',}} /> */}
      <StaticImage className="character"
 style={{maxHeight:'',  padding:'',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/quora-ass.png" />

</div>





      
      <GoBack />
          </div>


          



    </section>
    
    
    </Layout>

  )
}
