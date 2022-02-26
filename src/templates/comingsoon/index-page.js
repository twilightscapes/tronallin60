import React from "react"
import { graphql } from "gatsby"
// import Img from 'gatsby-image'
//  import { GatsbyImage } from 'gatsby-plugin-image'
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"
import Newsignup from "../components/newssign"
// import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
// import GalleryMenu from "../components/galleryMenu"
// import { StaticImage } from "gatsby-plugin-image"
// import ShareSocial from '../components/share' 
// import { RiArrowRightSLine } from "react-icons/ri"
// import { RiSendPlane2Line } from "react-icons/ri"
// import TwilightLogo from "../../static/assets/TSidebarHover.svg"
// import { ImPlay } from "react-icons/im"
import { Helmet } from "react-helmet"
import { getSrc } from "gatsby-plugin-image"
// import TwilightLogo from "../../static/assets/TSidebarHover.svg"
import BlogListHome from "../components/blog-list-home"
// import BlogListHome from "../components/blog-list-home"
// import LightCycleBattle from "../../static/assets/light-cycle-battle.svg"
// import LightCycleRear from "../../static/assets/light-cycle-rear.svg"
// import LightCycle from "../../static/assets/light-cycle.svg"
// import TronChick from "../../static/assets/tron-chick1.svg"
// import PrayingMantis from "../../static/assets/yoga-master.svg"
// import SamFly from "../../static/assets/sam-fly.svg"
// import SamFlynn from "../../static/assets/sam-flynn.svg"
// import CluGuy from "../../static/assets/clu.svg"
// import TronGuy from "../../static/assets/tron.svg"
// import MCP from "../../static/assets/mcp.svg"
// import McpEffects from "../../static/assets/mcp-effects.svg"
// import QuoraStand from "../../static/assets/quora-ass.svg"
// import KevinFlynn from "../../static/assets/kevin-flynn.svg"
// import GridLines from "../../static/assets/off-the-grid.mp4"
// import QuoraStrike from "../../static/assets/quora-strike.svg"
// import LoveSignal from "../../static/assets/love-signal.svg"
// import Castor from "../../static/assets/castor.svg"

import GridLoader from "../../static/assets/FrontLoader.svg"
import TheGrid from "../../static/assets/The-Grid-Intro.svg"

// import InstallDiscount from "../components/install-discount"
// import { AiOutlineAudioMuted } from "react-icons/ai"
// import TechBG from "../../static/assets/tech-bg.mp4"
// import { AnchorLink } from "gatsby-plugin-anchor-links"
// import { FaHandPointDown } from "react-icons/fa"
// import CommentBox from "../components/commentbox"
// import GoBack from "../components/goBack"
// import ScrollAnimation from 'react-animate-on-scroll'
// import ReactPlayer from 'react-player/lazy'
import { useSiteMetadata } from "../hooks/use-site-metadata"
// import Newsignup from "./contact-page"
// import TestIT from "../components/test"
// import HomeHolder from "../components/homeholder"


// import loadable from '@loadable/component'
import Panel1 from '../pages/panel1'

  // const Panel1 = loadable(() => import('../components/panel1'))
  // const Panel2 = loadable(() => import('../components/panel2'), {
  //   fallback: <div>Loading...</div>,
  // })
  // const Panel3 = loadable(() => import('../components/panel3'), {
  //   fallback: <div>Loading...</div>,
  // })
  // const Panel4 = loadable(() => import('../components/panel4'), {
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

  

export const pageQuery = graphql`
  query HomeQuery($id: String! ) {
    



    
    site {
      siteMetadata {
        title
        titleDefault
        siteUrl
        description
        image
        twitterUsername
        companyname
        showfooter
      }

      

    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "YYYY-MM-DD-HH-MM-SS")
        slug
        title
        description
        showFeature
        showPosts
        showInfo
        youtuber
        youtubestart
        youtubeend
        youtubemute
        youtubecontrols
        youtubeautostart
        svgzindex
        tagline
        featuredImage {
          publicURL
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
        secondaryImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
        underlayImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
        cta {
          ctaText
          ctaLink
        }
        svgImage{
          relativePath
        }
      }
    }


 
  

    

    

    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 6
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY-MM-DD-HH-MM-SS")
            slug
            title
            nftdrop
  
            
            featuredImage {
              publicURL
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`



  // const Panel2 = loadable(() => import('../components/panel2'), {
//   fallback: <div>Loading...</div>,
// })



const HomePage = ({ data }) => {





  // const { postcount } = useSiteMetadata()
  const { markdownRemark, posts } = data // data.markdownRemark holds your post data
  const { frontmatter, excerpt } = markdownRemark
  // const Image = frontmatter.featuredImage
  //   ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
  //   : ""

    // const SecondaryImage = frontmatter.secondaryImage
    // ? frontmatter.secondaryImage.childImageSharp.gatsbyImageData
    // : ""
  
    // const UnderlayImage = frontmatter.underlayImage
    // ? frontmatter.underlayImage.childImageSharp.gatsbyImageData
    // : ""

    // const { iconimage } = useSiteMetadata()


    const { siteUrl } = useSiteMetadata()

    // const YouTubeStart = frontmatter.youtubestart
    // const YouTubeEnd = frontmatter.youtubeend
    // const YouTubeMute = frontmatter.youtubemute
    // const YouTubeControls = frontmatter.youtubecontrols
    // const YouTubeAutostart = frontmatter.youtubeautostart

    // const ShowFeature = frontmatter.showFeature
    // const ShowInfo = frontmatter.showInfo
    // const ShowPosts = frontmatter.showPosts

    




  //   const Panel1 = loadable(() => import('../components/panel1'), {
  //     fallback: <div>Loading...</div>,
  //   })
  // const Panel2 = loadable(() => import('../components/panel2'), {
  //     fallback: <div>Loading...</div>,
  //   })
  // const Panel3 = loadable(() => import('../components/panel3'), {
  //     fallback: <div>Loading...</div>,
  //   })
  // const Panel4 = loadable(() => import('../components/panel4'), {
  //     fallback: <div>Loading...</div>,
  //   })
  // const Panel5 = loadable(() => import('../components/panel5'), {
  //     fallback: <div>Loading...</div>,
  //   })
  // const Panel6 = loadable(() => import('../components/panel6'), {
  //     fallback: <div>Loading...</div>,
  //   })
  // const Panel7 = loadable(() => import('../components/panel7'), {
  //     fallback: <div>Loading...</div>,
  //   })
  // const Panel8 = loadable(() => import('../components/panel8'), {
  //     fallback: <div>Loading...</div>,
  //   })
  // const Panel9 = loadable(() => import('../components/panel9'), {
  //     fallback: <div>Loading...</div>,
  //   })
  // const Panel10 = loadable(() => import('../components/panel10'), {
  //     fallback: <div>Loading...</div>,
  //   })
  // const Panel11 = loadable(() => import('../components/panel11'), {
  //     fallback: <div>Loading...</div>,
  //   })
  // const Panel12 = loadable(() => import('../components/panel12'), {
  //     fallback: <div>Loading...</div>,
  //   })
  // const Panel13 = loadable(() => import('../components/panel13'), {
  //     fallback: <div>Loading...</div>,
  //   })

  
  return (

    <Layout>
    <Helmet>
  <body className="homepage" />
</Helmet>
{/* <Seo
          title={`VidSock - Video Multimedia NFT Platform`}
          description={`Create, display and market your NFTs with VidSock`}
          image={'https://vidsock.com/default-og-image.jpg'}
        /> */}
       <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
  //       image={photoUrl}
  //  photoUrl

   image={ siteUrl + getSrc(frontmatter.featuredImage) }
/>
      
      



{/* VIDEO URLS */}

{/* d6zgqucG0CM VR*/}
{/* EZn2593JNuI encom */}

{/* /aVfadTsNiKk gane */}

{/* _qN9kpN6XEk into */}

{/* ush2U_WrCZ4 circuit */}

{/* Hw8MjJG-TNw clips */}

{/* vDMjLesTks0 fan */}

{/* kyuHbs3N32U intro */}
{/* ioAgSBnL4dY  GAME GRID ******* */}

{/* aVWB4MoqyS0 ***** */}

{/* Y7EZBP9j7h0  *** */}

{/* tTDn-E8rwxY */}

{/* M7b0nd_TcMU */}
{/* JoX0bNYg1Wc */}

{/* uCf3Q43fC_4 cool train */}

{/* URVHRhBSjj8 */}
{/* yttvb9ByOtY */}
{/* CvyuuTc8F2o ** */}
{/* ucTjKf8aapE *** */}
{/* /nJ38P5elTkg **** */}
{/* pAInLcN2su8 **** */}
{/* /0dEv7mz-GGA  **** */}
{/* pNOJ7wZqDWA ** */}
{/* /dV_aOXXUTi0 */}
{/* rDyTPKTooZk */}
{/* E3Bx-l1DOws */}
{/* Gg-RA_O16F4  CONTENDER - blue vert lines*/}
{/* c_V1iD6F1kk  CONTENDER - cool animated interface*/}
{/* naD-VHWSoZM  CONTENDER - spiral interface crash*/}
{/* J-FkR8L2X5E */}
{/* /Im7slkFMtI8  CONTENDER - COOL blue power lines*/}
{/* oMXdaALcpew  CONTENDER - circuit board*/}
{/* JzRUbdqa_hU CONTENDER - circuit board 2*/}
{/* Zvsfrz2jD7w  CONTENDER - circuit board 3*/}
{/* 5jlOX5z7yVo */}
{/* S5S6s5dZXNM  default */}



{/* <HomeHolder /> */}




{/* <GridLoader /> */}


<div id="homestart"><Panel1 /></div>



{/* <TheGrid /> */}
{/* <BlogListHome data={posts} /> */}

{/* <div className="donation" style={{}}>
<Link to="/contact">
<div style={{position:'relative', top:'', margin:'0', padding:'25% 0',  width:'', zIndex:'1', textAlign:'', borderRadius:'12px', textDecoration:'none'}}>
  <Newsignup />
  </div>
</Link>
</div> */}


        


    </Layout>
  )
}

export default HomePage
  

