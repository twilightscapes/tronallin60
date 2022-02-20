import * as React from "react"
import { Layout } from "../../components/layout"
import { Seo } from "../../components/seo"
// import { StaticImage } from "gatsby-plugin-image"
// import GoBack from "../components/goBack"
// import CluGuy from "../../static/assets/clu.svg"



// import loadable from '@loadable/component'
import Panel10 from '../../components/panel10'


// const Panel2 = loadable(() => import('../components/panel2'), {
//       fallback: <div>Loading...</div>,
//     })
//     const Panel3 = loadable(() => import('../components/panel3'), {
//       fallback: <div>Loading...</div>,
//     })
    // const Panel5 = loadable(() => import('../components/panel5'), {
    //   fallback: <div>Loading...</div>,
    // })
    // const Panel5 = loadable(() => import('../components/panel5'))
    // const Panel6 = loadable(() => import('../components/panel6'))
    // const Panel7 = loadable(() => import('../components/panel7'))
    // const Panel8 = loadable(() => import('../components/panel8'))
    // const Panel9 = loadable(() => import('../components/panel9'))
    // const Panel10 = loadable(() => import('../components/panel10'))
    // const Panel11 = loadable(() => import('../components/panel11'))
    // const Panel12 = loadable(() => import('../components/panel12'))
    // const Panel13 = loadable(() => import('../components/panel13'))






export default function SonFlynn() {
   return (


    
    <Layout className="thanks-page">

<Seo
          title={`Welcome to the GRID`}
          description={`I tried to picture clusters of information as they moved through the computer. What did they look like? Ships? Motorcycles? Were the circuits like freeways? I kept dreaming of a world I thought I'd never see.`}
          image={'https://allin60.com/tronin60.jpg'}
        />



<Panel10 />

      
   


          




    
    
    </Layout>

  )
}
