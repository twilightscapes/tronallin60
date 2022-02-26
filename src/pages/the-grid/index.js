import * as React from "react"
import { Layout } from "../../components/layout"
import { Seo } from "../../components/seo"
// import { StaticImage } from "gatsby-plugin-image"
// import GoBack from "../components/goBack"
// import CluGuy from "../../static/assets/clu.svg"
import ReactPlayer from 'react-player/lazy'
// import AiOutlineAudioMuted from "react-icons/ai"
import { Link, navigate } from "gatsby"
// import loadable from '@loadable/component'
import Panel2 from '../../components/panel2'


// const Panel2 = loadable(() => import('../components/panel2'), {
//       fallback: <div>Loading...</div>,
//     })
//     const Panel3 = loadable(() => import('../components/panel3'), {
//       fallback: <div>Loading...</div>,
//     })
//     const Panel4 = loadable(() => import('../components/panel4'), {
//       fallback: <div>Loading...</div>,
//     })
//     const Panel5 = loadable(() => import('../components/panel5'))
//     const Panel6 = loadable(() => import('../components/panel6'))
//     const Panel7 = loadable(() => import('../components/panel7'))
//     const Panel8 = loadable(() => import('../components/panel8'))
//     const Panel9 = loadable(() => import('../components/panel9'))
//     const Panel10 = loadable(() => import('../components/panel10'))
//     const Panel11 = loadable(() => import('../components/panel11'))
//     const Panel12 = loadable(() => import('../components/panel12'))
//     const Panel13 = loadable(() => import('../components/panel13'))






export default function TheGrid() {
   return (


    
    <Layout className="thanks-page">

<Seo
          title={`Welcome to the GRID`}
          description={`I tried to picture clusters of information as they moved through the computer. What did they look like? Ships? Motorcycles? Were the circuits like freeways? I kept dreaming of a world I thought I'd never see.`}
          image={'https://allin60.com/tronin60.jpg'}
        />



      <Panel2 />

      
   







    
    
    </Layout>

  )
}
