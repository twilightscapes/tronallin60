import * as React from "react"
import { Layout } from "../../components/layout"
import { Seo } from "../../components/seo"
// import { StaticImage } from "gatsby-plugin-image"
// import GoBack from "../components/goBack"
// import CluGuy from "../../static/assets/clu.svg"



// import loadable from '@loadable/component'
import Panel8 from '../../components/panel8'


// const Panel9 = loadable(() => import('../../components/panel9'), {
//       fallback: <div>Loading...</div>,
//     })
//     const Panel10 = loadable(() => import('../../components/panel10'), {
//       fallback: <div>Loading...</div>,
//     })










export default function MeetQuorra() {
   return (


    
    <Layout className="thanks-page">

<Seo
          title={`Welcome to the GRID`}
          description={`I tried to picture clusters of information as they moved through the computer. What did they look like? Ships? Motorcycles? Were the circuits like freeways? I kept dreaming of a world I thought I'd never see.`}
          image={'https://allin60.com/tronin60.jpg'}
        />



{/* <div className="horizontal-holder" style={{overflow:''}}>
<div className="RArrow"></div>
<div className="horizontal-scroll panels" style={{}}>
<div className="" style={{height:'1px'}}></div> */}

{/* <div id="gridintro"><Panel2 /></div>

<div id="proceed"><Panel3 /></div> */}

{/* <div id="discgrid"><Panel4 /></div>

<div id="match2"><Panel5 /></div> */}

{/* <div id="lightcycles"><Panel6 /></div>

<div id="lightcycles2"><Panel7 /></div> */}

{/* <div id="quorra"> */}
  <Panel8 />
  {/* </div> */}

{/* <div id="endofline"><Panel9 /></div>


<div id="samfly"><Panel10 /></div> */}
{/* 
<div id="samfly"><Panel10 /></div>

<Panel11 id="" />
<Panel12 id="" />
<Panel13 id="" /> */}
  
  {/* </div>
</div> */}
      
   


          




    
    
    </Layout>

  )
}
