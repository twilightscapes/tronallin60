import React, { useState, useRef } from "react";
import { graphql, Link } from "gatsby"
import ReactPlayer from 'react-player/lazy'
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"
import { ImPlay } from "react-icons/im"
import { StaticImage } from "gatsby-plugin-image"

import { Helmet } from "react-helmet"
import { getSrc } from "gatsby-plugin-image"
import BlogListHome from "../components/blog-list-home"
import Newsignup from "../components/newssign"
import FrontLoader from "../../static/assets/FrontLoader.svg"

import { useSiteMetadata } from "../hooks/use-site-metadata"

import Panel1 from "../pages/panel1"



// import TimeAgo from 'react-timeago'
// import Countdown from 'react-countdown'

export const pageQuery = graphql`
  query HomeQueryHomeQuery($id: String! ) {
    
    
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
      limit: 3
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


// const ViewIt = () => <span>TRON - All In 60 Seconds - VIEW NOW!</span>
// const renderer = ({ hours, minutes, seconds, completed }) => {
//   if (completed) {
//     return <ViewIt />;
//   } else {
//     return (
//        <span>
//        TRON - All In {seconds} Seconds
//       </span> 
//     )
//   }
// }


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

    // const imageData = data.desktop.childImageSharp.fluid
    const { siteUrl } = useSiteMetadata()

    // const YouTubeStart = frontmatter.youtubestart
    // const YouTubeEnd = frontmatter.youtubeend
    // const YouTubeMute = frontmatter.youtubemute
    // const YouTubeControls = frontmatter.youtubecontrols
    // const YouTubeAutostart = frontmatter.youtubeautostart

    // const ShowFeature = frontmatter.showFeature
    // const ShowInfo = frontmatter.showInfo
    // const ShowPosts = frontmatter.showPosts

    


    const [state, setState] = useState({
      playing: true,
      controls: true,
      light: true,
      muted: false,
      loop: true,
    });
    
    // const playerRef = useRef(null);
    const controlsRef = useRef(null);
    
    const {
      playing,
      controls,
      light,
      muted,
      loop,
      playbackRate,
      pip,
      played,
      seeking,
      volume,
    } = state;
    
    const handlePlayPause = () => {
      setState({ ...state, playing: !state.playing });
    };
    
    const hanldeMute = () => {
      setState({ ...state, muted: !state.muted });
    };
    
    const { iconimage } = useSiteMetadata()

 

  
  return (

    <Layout>
    <Helmet>
  <body className="homepage" style={{background:'#111'}} />
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



{/* uCf3Q43fC_4 cool train */}


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

<div className="horizontal-holder" style={{position:'relative',}}>
{/* <div className="RArrow"><span></span></div> */}


<div id="" className="wrap-element" style={{overflow:'hidden', width:'100vw', height:'100vh', position:'fixed', top:'0'}}>
<ReactPlayer
         className='frontbg'
         url="https://www.youtube.com/embed/c_V1iD6F1kk"
         width="100%"
         height="100vh"
         playing={playing}
            controls={true}
            light={false}
            loop={loop}
            muted={muted}
            config={{
              file: {
                attributes: {
                  crossorigin: "anonymous",
                },
              },
              youtube: {
                playerVars: { showinfo:0, controls:0, start:20, end:41, mute:1 }
              },
            }}

          playsinline
            playIcon={
              <button aria-label="Click To Play" className="clickplay" style={{position:'', zIndex:'5', bottom:'0', border:'0px solid red', width:'100vw', height:'100vh', background:'', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'columh', verticalAlign:'center', justifyContent:'center', alignItem:'center', paddingTop:''}}>
  
          <div className="" style={{ textAlign:'center', animation:'fadeIn 3s'}}>
            
  
            <div style={{position:'relative', maxWidth:'100vw', margin:'10% 0', zIndex:'', display:'flex', justifyContent:'center', background:'transparent !important',}}>
    <img className="homepage-bg" src={iconimage} width="300px" height="150px" alt="VidSock" style={{ width:'100%', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} />
  </div>
        
            <span style={{fontWeight:'bold', padding:'0 0 0 0', fontSize:'2rem'}}>Click To Play</span>
    <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
            </div>
            </button>}
         
          /></div>


<div className="horizontal-scroll panels sitegrad movingBG" style={{}}>



<div className="" style={{height:'100%'}}></div>




{/* <GridLoader /> */}


{/* <div id="homestart"><Panel1 /></div> */}

{/* <BackgroundImage
      Tag="section"
      className=""
      fluid={imageData}
      backgroundColor={`#111`}
     > */}




<div className="donation2" style={{display:'grid',
  placeContent:'center', width:'100vw', height:'100vh', justifyContent:'center', position:'relative', background:'rgba(0,0,0,0.50)', webkitBackdropFilter:'blur(10px)', backdropFilter:'blur(14px)'}}>


<FrontLoader style={{positon:'absolute', top:'0', left:'', right:'', width:'100vw', height:'',}} />

<div className="logointro" style={{position:'absolute', top:'20vh', width:'100vw', textAlign:'center', zIndex:'-1'}}>
<div className="TronType tronText" style={{fontSize:'12vw', margin:'0 0 0 0'}}>TRON</div><div  style={{fontSize:'5vw', fontWeight:'bold', marginTop:'.5rem,', color:'#fff'}}><div className="defont">in 60</div></div><div className="TRON tronText" style={{fontSize:'4vw', margin:'0 0 1rem 0'}}>Seconds</div>
</div>
  {/* <h1 className="tronText " style={{fontSize:'7vw', padding:'3vh 8vw 20vh 8vw', position:'', top:'', border:'0px solid', diplay:'grid', placeContent:'center', maxWidth:'80vw', fontFamily:''}}>
    <div className="lineOne">TRON in 60 Seconds</div> <div className="lineTwo">In 60 Seconds?</div>
  </h1> */}
  
</div>
{/* </BackgroundImage> */}



<div className=" fire" style={{margin:'', height:'100%', textDecoration:'none'}}>
{/* <a title="Shawshank Redemption by Stephen King - All In 60 Seconds" href="/shawshank/" className="navbar-item button fire" style={{margin:'', height:'100%', textDecoration:'none'}}> */}
  <Panel1 />
  {/* </a> */}
</div>



{/* <Panel2 /> */}


{/* <div>
<Link title="Shawshank Redemption by Stephen King - All In 60 Seconds"  to="/shawshank-trailer/" className="navbar-item button fire" style={{margin:'', height:'100%', textDecoration:'none'}}>
<Panel3 />
<StaticImage className=""
alt="Shawshank Redemption by Stephen King - All In 60 Seconds" src="../../static/assets/shawshank.jpg" />
</Link>
</div> */}



{/* <div>
<Link title="Pulp Fiction by Quentin Tarantino - All In 60 Seconds"  to="/pulp-fiction-trailer/" className="navbar-item  button fire" style={{margin:'', height:'100%', textDecoration:'none'}}>
<Panel3 />
<StaticImage className=""
alt="Pulp Fiction by Quentin Tarantino - All In 60 Seconds" src="../../static/assets/pulpfiction.jpg" />
</Link>
</div> */}


{/* <a href="https://tron.allin60.com/">
<StaticImage className=""
alt="Shawshank Redemption by Stephen King - All In 60 Seconds" src="../../static/assets/shawshank.jpg" />
</a> */}


{/* <div>
<Link title="They Live by John Carpenter - All In 60 Seconds"  to="/they-live/" className="navbar-item  button fire" style={{margin:'', height:'100%', textDecoration:'none'}}>
<StaticImage className=""
alt="They Live by John Carpenter - All In 60 Seconds" src="../../static/assets/TheyLive-Header.jpg" />
</Link>
</div> */}


{/* <a href="https://tron.allin60.com/">
<StaticImage className=""
alt="Pulp Fiction by Quentin Tarantino - All In 60 Seconds" src="../../static/assets/pulpfiction.jpg" />
</a> */}


{/* <div>
<Link title="They Live by John Carpenter - All In 60 Seconds"  to="/mystery-science-theater-3022/" className="navbar-item  button fire" style={{margin:'', height:'100%', textDecoration:'none'}}>
<StaticImage className=""
alt="Mystery Science Theater 3000 - All In 60 Seconds" src="../../static/assets/mystery-science.jpg" />
</Link>
</div> */}


<BlogListHome data={posts} />


{/* <div style={{overflow:'hidden'}}>
<VideoPage />
</div> */}

<div className="pagination" style={{position:'', border:'0px solid yellow', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100vw', height:'', paddingTop:'1vh', background:''}}>
<Link to="/posts/2/" title="View Archives">
  <div  className="tronText" style={{fontSize:'3vw', marginTop:'1rem', lineHeight:'130%'}}><span style={{fontSize:'65%'}}>viewing:</span><br />Lastest Minutes</div>

   
    <div  className="tronText" style={{ background:'rgba(0,0,0,0.10)', width:'80vw', position:'relative', top:'', margin:'10vh auto', padding:'10% 10%', zIndex:'1', textAlign:'', border:'1px solid #000', borderRadius:'12px', textDecoration:'none', color:'#cccc'}}>
    <h1 className="">View All Minutes?</h1>
    </div>
</Link>

</div>


<div className="donation2" style={{position:'', border:'0px solid yellow', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100vw', height:'', paddingTop:'0', background:''}}>
{/* <Link to="/contact"> */}
<div style={{ background:'rgba(0,0,0,0.10)', width:'80vw', position:'relative', top:'', margin:'5vh auto', padding:'4% 5%', zIndex:'1', textAlign:'', border:'1px solid #000', borderRadius:'12px', textDecoration:'none', color:'#cccc'}}>
  <Newsignup />
  </div>
{/* </Link> */}
</div>

        
</div>

</div>

    </Layout>
  )
}

export default HomePage
  

