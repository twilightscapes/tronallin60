/** @jsx jsx */
// import React from "react"

import React, { useState, useRef } from "react";

import Controls from "../components/Controls";

import { IoArrowRedoSharp, IoArrowUndoSharp } from "react-icons/io5"
import { jsx } from "theme-ui"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { GatsbyImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
import CommentBox from "../components/commentbox"
// import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../hooks/use-site-metadata"
// import Countdown from 'react-countdown'
// import { IoArrowRedoSharp, IoArrowUndoSharp } from "react-icons/io5"
import { AiOutlineAudioMuted } from "react-icons/ai"
import { Footer } from "../components/footer"
// import { SRLWrapper } from "simple-react-lightbox"
import {CopyToClipboard} from 'react-copy-to-clipboard'
import ReactPlayer from 'react-player/lazy'

import YouTubed from "../pages/youtube"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
import ShareSocial from '../components/share' 
import GoBack from "../components/goBack"
import { ImPlay } from "react-icons/im"
// import TimeAgo from 'react-timeago'
import styled from "styled-components"
const CustomBox = styled.div`

.wrap-element {
  position: relative;
  overflow: hidden;
  padding-bottom: 56.25%;
  aspect-ratio: 16 / 9;
  z-index:0;
  max-width:100%;
  max-height:75vh !important;
}
.wrap-element iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 300%; 
  left: -100%; 
  border: 0;
  overflow:hidden;
}



// .pagination{ position:relative; top:-205px;}


@media (max-width: 48em) {
  .wrap-element {
    padding-bottom: 0;
    height:300px;
    overflow:visible;
    border:0px solid red;
  }
  .pagination{maxWidth:'100vw'}
}


@media (min-width: 1300px) {
  .pagination{position:relative; top:-185px;}
  }


`



const Pagination = props => (
  <div className="pagination -post1" style={{maxWidth:'', position:'relative', right:'2vw'}}>
    <ul className="" style={{display:'flex', justifyContent:'flex-end', gap:"30px", border:'0px solid purple',}}>
      {props.previous && props.previous.frontmatter.template === "blog-post" && (
        // <li style={{border:'1px solid', borderRadius:'12px', filter:'drop-shadow(0 0px 6px rgba(0, 0, 0, 1))'}}>
        <li style={{fontWeight:'bold', padding:'.3rem', color:'#999', fontSize:'1rem', background:'rgba(51, 51, 51, 0.3)', borderRadius:'8px', border:'1px solid #666', filter:'drop-shadow(2px 2px 2px #000)', cursor:'pointer'}}>
          <Link style={{color:'#fff'}}  to= {props.previous.frontmatter.slug + "/"} rel="prev">
            <p>
              <span className="icon -left">
                <RiArrowLeftLine />
              </span>{" "}
              Previous
            </p>
            <span className="page-title">
              {props.previous.frontmatter.title}
            </span>
          </Link>
        </li>
      )}
      {props.next && props.next.frontmatter.template === "blog-post" && (
        <li style={{fontWeight:'bold', padding:'.3rem', color:'#999', fontSize:'1rem', background:'rgba(51, 51, 51, 0.3)', borderRadius:'8px', border:'1px solid #666', filter:'drop-shadow(2px 2px 2px #000)', cursor:'pointer'}}>
          <Link  to={props.next.frontmatter.slug + "/"} rel="next">
            <p
              style={{
              }}
            >
              Next Up{" "}
              <span className="icon -right">
                <RiArrowRightLine />
              </span>
            </p>
            <span className="page-title">{props.next.frontmatter.title}</span>
          </Link>
        </li>
      )}
    </ul>
  </div>
)







const Post = ({ data, pageContext }) => {

  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark


  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""
  
    const UnderlayImage = frontmatter.underlayImage
    ? frontmatter.underlayImage.childImageSharp.gatsbyImageData
    : ""


    const NftLink = frontmatter.nftlink
    const NftRedeem = frontmatter.nftredeem
    const NftDrop = frontmatter.nftdrop



  const Svg = frontmatter.svgImage
  // const svgZindex = frontmatter.svgzindex

function AddSvg(){
  
  return (
    <object className="" id="svg1" data={svgUrl} type="image/svg+xml" style={{position:'', top:'', left:'0', right:'0', bottom:'0', overflow:'', border:'0px solid red', zIndex:'', width:'100vw', height:'', background:'transparent', objectFit:'contain'   }} alt="animated content" title="animated content" ></object>
  )
}


const IsNft = frontmatter.isnftforsale
const ShowOriginal = frontmatter.youtubeshoworiginal
const ShareThis = frontmatter.shareable
const Comments = frontmatter.comments

const YouTubeStart = frontmatter.youtubestart
const YouTubeEnd = frontmatter.youtubeend
const YouTubeMute = frontmatter.youtubemute
const YouTubeControls = frontmatter.youtubecontrols
const YouTubeAutostart = frontmatter.youtubeautostart

const Suggestion1 = frontmatter.youtubersuggestion1
const Suggestion2 = frontmatter.youtubersuggestion2
const Suggestion3 = frontmatter.youtubersuggestion3


if (Suggestion1) {
  <ShowSuggestion />
}
else{

  
}

function ShowSuggestion() {

  return (
<div style={{}}>
  

  
<div style={{width:'100%', maxWidth:'400px', margin:'0 auto 0 auto', fontSize:'90%', padding:'5px 0 ', border:'4px dotted', borderRadius:'12px', textAlign:'center', position:'relative', zIndex:'1', display:'grid', justifyContent:'center'}}>
<IoArrowRedoSharp style={{position:'absolute', top:'0', left:'0', fontSize:'60px', transform: 'rotate(-45deg)', }} />
<IoArrowUndoSharp style={{position:'absolute', top:'0', right:'0', fontSize:'60px', transform: 'rotate(45deg)', }} />
  
  
  <span style={{fontSize:'120%', fontWeight:'bold', textTransform:'uppercase'}}>This is interactive!</span> 
<br />

We recommend these alternatives:
<br /><br />
Click to Copy:<br />
<CopyToClipboard text={Suggestion1}>
  <button>{Suggestion1} </button>
</CopyToClipboard><br />


  <CopyToClipboard text={Suggestion2}>
  <button>{Suggestion2} </button>
</CopyToClipboard><br />

<CopyToClipboard text={Suggestion3}>
  <button>{Suggestion3} </button>
</CopyToClipboard><br />

<br />
Add your own in the comments below!

</div>

<span style={{fontSize:'150%'}}></span>
<div className="mobilespace" style={{ border:'0px solid red'}}></div>
</div>
  )
}

const YoutuberSuggestion1 = frontmatter.youtubersuggestion1
const YoutuberSuggestion2 = frontmatter.youtubersuggestion2
const YoutuberSuggestion3 = frontmatter.youtubersuggestion3
const iframeUrl = "https://www.youtube.com/embed/" + frontmatter.youtuber + ""
  const YouTube = frontmatter.youtuber



  if (!YoutuberSuggestion1) {
    <IframeSuggestions />
  }
  else{
  
    
  }




  function Iframer2() {
    const iframeUrl2 = "https://www.youtube.com/embed/" + frontmatter.youtuber
    return (

<div>
<ReactPlayer
          className='react-player66'
          url={iframeUrl2}
          width="100%"
          height="100%"

          // playing={playing}
          // controls={true}
          // light={true}
          // loop={loop}
          // muted={muted}
          config={{
            youtube: {
              playerVars: { showinfo:1, autoplay:0, controls:1, start:0, mute:0  }
            },
          }}
          playsinline
          playIcon={
            <button aria-label="Click To Play" className="clickplay" style={{position:'relative', zIndex:'0', top:'0', border:'0px solid red', width:'100vw', height:'100%', background:'', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'', justifyContent:'center', alignItem:'center', paddingTop:''}}>


{/*   
        <div className="" style={{ textAlign:'center', display:'flex', justifyContent:'center', flexDirection:'column', animation:'fadeIn 3s',}}> */}
          

          {/* <div style={{position:'relative', maxWidth:'100vw', height:'70vh', margin:'10% 0', zIndex:'', display:'flex', justifyContent:'center', background:'transparent !important',}}>
  <img className="homepage-bg" src={iconimage} width="300px" height="150px" alt="VidSock" style={{ width:'100%', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} />
</div> */}
      
          <div style={{display:'grid', placeContent:'center', fontWeight:'bold', padding:'0 0 0 0', fontSize:'2rem', width:'100%'}}>Support Our Video Sponsors

  <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
  Click to play original video
  </div>
          {/* </div> */}


          </button>}
       light="../assets/transparent.png"
          />
</div>



    )
  }



  function IframeSuggestions() {
    
    return (
      <div>
              <ReactPlayer
              className='react repo'
              // url={iframeUrl}
              // style={{position:'absolute', top:'0', zIndex:'100'}}
              url={[
                iframeUrl,
                YoutuberSuggestion1,
                YoutuberSuggestion2,
                YoutuberSuggestion3
              ]}
              width="100%"
              height="100%"
              config={{
                youtube: {
                  playerVars: { showinfo:0, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:YouTubeMute  }
                },
              }}
              loop
              playing
              playsinline
              playIcon={
                <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', top:'0', border:'0px solid red', width:'100vw', height:'100vh', background:'#111', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'columh', verticalAlign:'center', justifyContent:'center', alignItem:'center', paddingTop:''}}>
    
            <div className="" style={{ textAlign:'center', animation:'fadeIn 3s'}}>
              
    
              <div style={{position:'relative', maxWidth:'100vw', margin:'10% 0', zIndex:'0', display:'flex', justifyContent:'center', background:'transparent !important',}}>
      <img className="homepage-bg" src={iconimage} width="300px" height="150px" alt="VidSock" style={{ width:'100%', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} />
    </div>
          
              <span style={{fontWeight:'bold', padding:'0 0 0 0', fontSize:'2rem'}}>Click To Play</span>
      <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
              </div>
              </button>}
                // light="../assets/transparent.png"
              />

              
</div>

    )

  }



  function Iframer3() {
    const iframeUrl3 = "https://www.youtube.com/embed/" + frontmatter.youtuber2
    return (

<ReactPlayer
          className='audioframe'
          url={iframeUrl3}
          // url={[
          //   iframeUrl,
          //   Suggestion1,
          //   Suggestion2,
          //   Suggestion3
          // ]}
          width="150px"
          height="150px"
          style={{marginTop:'-50px', position:'absolute', zIndex:'0'}}
          config={{
            youtube: {
              playerVars: { showinfo:0, autoplay:1, controls:0, start:AudioStart, end:AudioEnd, mute:0,  }
            },
          }}
          loop
          playing
          playsinline
          playIcon={
            <button aria-label="Click To Play" className="clickplays" style={{position:'relative', zIndex:'', top:'', border:'0px  solid red', width:'100vw', height:'', background:'transparent', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItems:'center', paddingTop:'0', borderRadius:'12px'}}>
          
        <div className="" style={{position:'absolute', top:'-200px', left:'10px', zIndex:'', textAlign:'center', animation:'fadeIn 3s', display:'flex', justifyContent:'center', width:'auto', marginBottom:''}}>
          
      
          {/* <div className="" style={{fontSize:'14px', fontWeight:'', padding:'0 0 0 .3rem',}}>Click For Audio</div> */}

          <div className="popped" style={{display:'flex', width:'', margin:'0 auto', fontWeight:'bold', padding:'.3rem', color:'#999', fontSize:'2rem', background:'rgba(51, 51, 51, 0.3)', borderRadius:'8px', border:'1px solid #666', filter:'drop-shadow(2px 2px 2px #000)', cursor:'pointer'}}><AiOutlineAudioMuted style={{margin:'0 auto', fontSize:'20px', filter:'drop-shadow(2px 2px 2px #000)'}} /><div style={{fontSize:'14px', fontWeight:'', padding:'0 0 0 .3rem', filter:'drop-shadow(2px 2px 2px #000)', color:'#999', }}>Extra Audio</div></div>
          
          </div>
          </button>}
   
            light="../assets/transparent.png"
          />
     




    )
  }


const svgUrl = frontmatter.svgImage.publicURL
  
    


  const YouTube2 = frontmatter.youtuber2
  const AudioStart = frontmatter.audiostart
  const AudioEnd = frontmatter.audioend

  

  const { previous, next } = pageContext

  let props = {
    previous,
    next,
  }



  const { siteUrl } = useSiteMetadata()
  const { iconimage } = useSiteMetadata()


  const [state, setState] = useState({
    playing: true,
    controls: false,
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

  

  return (
    
    <Layout className="page">
<CustomBox style={{}}>
<Helmet>
  <body className="blogpost" style={{background:''}} />
  {/* <script src="https://unpkg.com/embeddable-nfts/dist/nft-card.min.js"></script> */}
</Helmet>

      <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
        
        image={ siteUrl + getSrc(frontmatter.featuredImage) }

        article={true}
      />



{/* <Seo
          title={`Welcome to the GRID`}
          description={`I tried to picture clusters of information as they moved through the computer. What did they look like? Ships? Motorcycles? Were the circuits like freeways? I kept dreaming of a world I thought I'd never see.`}
          image={'https://allin60.com/tronin60.jpg'}
        /> */}


{/* <div className='player-wrapper intro' style={{position:'relative', bottom:'0', zIndex:'', height:'100vh', maxHeight:'', overflow:'', filter: 'drop-shadow(0 0 20px #000)',  }}> */}


<div className="contact" style={{position:'fixed', bottom:'20px', zIndex:'1',  left:'20px', right:'', display:'flex', justifyContent:'center', width:'400px', margin:'0 auto', gap:'30px'}}>

  <Link state={{modal: true}}  to="/contact/" className=" " style={{margin:'', textDecoration:''}}>contact</Link>

  <Link to="#original" style={{border:'0px solid', }}>
  credits &amp; legal
        </Link>

        {ShareThis ? (
<Link to="#sharethis" style={{}}>
  share this
        </Link>
 ) : (
  ""
)}

{Comments ? (
          <Link to="#comments" style={{}}>
  comments
        </Link>
       
          ) : (
            ""
          )}

</div>




        





<div className="wrap-element" style={{overflow:'hidden', height:'50vh'}}>

{Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image1 layer1"
              style={{ width:'100vw', position:'absolute', top:'', zIndex:'',  border:'0px solid red !important', paddingBottom:'',}}
            />

          ) : (
          ""
          )}
    








   
    

    


{/* if (!Svg) {
    
  }
  else{
    <AddSvg />
  } */}










{/* <div
          onMouseMove={handleMouseMove}
          onMouseLeave={hanldeMouseLeave}
          ref={playerContainerRef}
          className={classes.playerWrapper}
        > */}
          <ReactPlayer
            // ref={playerRef}
            style={{position:'', zIndex:''}}
            width="100%"
            height="100%"
            url={iframeUrl}
            // url="https://youtu.be/lZzai6at_xA"
            playing={playing}
            controls={true}
            light={light}
            loop={loop}
            muted={muted}
            config={{
              file: {
                attributes: {
                  crossorigin: "anonymous",
                },
              },
              youtube: {
                playerVars: { showinfo:1, autoplay:YouTubeAutostart, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:YouTubeMute  }
              },
            }}

          playsinline
            playIcon={
              <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', top:'0', border:'0px solid red', width:'100vw', height:'100vh', background:'', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'', justifyContent:'center', alignItem:'center', paddingTop:''}}>
{/*   
          <div className="" style={{ textAlign:'center', display:'flex', justifyContent:'center', flexDirection:'column', animation:'fadeIn 3s',}}> */}
            
  
            {/* <div style={{position:'relative', maxWidth:'100vw', height:'70vh', margin:'10% 0', zIndex:'', display:'flex', justifyContent:'center', background:'transparent !important',}}>
    <img className="homepage-bg" src={iconimage} width="300px" height="150px" alt="VidSock" style={{ width:'100%', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} />
  </div> */}



{Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image1 layer1"
              style={{ width:'100vw', position:'absolute', top:'-1', zIndex:'',  border:'0px solid red !important', paddingBottom:'',}}
            />

          ) : (
          ""
          )}
        
            <div style={{display:'grid', placeContent:'center', fontWeight:'bold', padding:'0 0 0 0', fontSize:'2rem', width:'100%', position:'absolute', zIndex:'2'}}>Click To Play

    <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} /></div>
            {/* </div> */}


            </button>}
         light="../assets/transparent.png"
          />




<Controls
            ref={controlsRef}
            onPlayPause={handlePlayPause}
            playing={playing}
            played={played}
            onMute={hanldeMute}
            muted={muted}
          />



{/* {Suggestion1 ? (
            <div style={{position:'absolute', top:'-130px', left:'0', bottom:'', zIndex:'', maxWidth:'100vw', height:'85vh'}}>
            <YouTubed />
            </div>
       
          ) : (
            ""
          )} */}



{UnderlayImage ? (
            <GatsbyImage
              image={UnderlayImage}
              alt={frontmatter.title + " - image"}
              className="mcboaty"
              style={{height:'auto', width:'100%', maxHeight:'100%', overflow:'hidden', position:'absolute', top:'0', zIndex:'',
             objectFit:'contain', border:'0px solid red !important'}}
            />
            
          ) : (
            ""
          )}

          
{/* <object className="" id="svg1" data={svgUrl} type="image/svg+xml" style={{position:'absolute', top:'0', left:'', right:'', bottom:'', overflow:'', border:'0px solid red', zIndex:'', width:'100vw', height:'100%', background:'transparent', objectFit:'contain'   }} alt="animated content" title="animated content" ></object> */}



 




        <div
        className="blog-post-content" style={{ fontSize:'1.1rem', textAlign:'left', width:'100%', maxWidth:'', height:'100vh', padding:'10vh 0', margin:'0 auto', color:'inherit !important', border:'0px solid yellow', position:'absolute', top:'0', left:'0', zindex:'0', display:'grid', placeContent:'center'}}
        dangerouslySetInnerHTML={{ __html: html }}
      />


        </div>



      {/* </div> */}






      


{/* {Suggestion1 ? (
            <ShowSuggestion style={{position:'relative', top:'', zIndex:'0',}} />
       
          ) : (
            ""
          )} */}

{ !YouTube2 ? (
            ""
       
          ) : (
            <Iframer3 />
          )}


<div style={{padding:'0 5vw', color:'inherit !important'}}>
      {(previous || next) && <Pagination {...props} />}
      </div>







        
        


     
  





<div id="original" style={{height:'100vh', marginTop:'100vh'}}>

      {ShowOriginal ? (
          <div style={{position:'relative', width:'100%', maxWidth:'800px', margin:'0 auto', textAlign:'center', display:'flex', flexDirection:'column', fontSize:'100%', borderRadius:'12px' }}>
<div style={{maxWidth:'90vw', width:'100%', height:'440px', maxHeight:'40vh', padding:'0', position:'relative', bottom:'0', textAlign:'center', border:'0px solid blue', margin:'0 auto', borderRadius:'12px'}}>
  
                    <Iframer2 />
                   
       </div>
       Please visit our video sponsor and be sure to click to view original video above. Thank you.
       </div>
       
          ) : (
            ""
          )}
          <br />


          <div style={{textAlign: 'center', margin: '2rem 10px 1rem 10px', justifyContent: 'center', fontSize: '.95rem', textDecoration:'none'}}>
            Legal:<br />
            <Link to="/disclaimer/">Disclaimer</Link>  |  <Link to="/privacy/">Privacy Policy</Link>  |  <Link to="/terms/">Terms of Service</Link></div>

<br />
  <GoBack />
</div>



      






   


{ShareThis ? (

<div id="sharethis" style={{height:'100vh', display:'block', width:'80%', padding:'0', margin:'0 auto'}}>

  <br />
<ShareSocial />
<br />
<GoBack />


<div style={{padding:'0 5vw', marginTop:'200px',  color:'inherit !important'}}>
{(previous || next) && <Pagination {...props} />}
</div>
</div>
          ) : (
            ""
          )}





       



















      {Comments ? (

<div id="comments" style={{height:'100vh', display:'block', width:'80%', padding:'0', margin:'0 auto'}}>
  <GoBack />
  <br />
<CommentBox />
<br />
<GoBack />


<div style={{padding:'0 5vw', marginTop:'200px',  color:'inherit !important'}}>
{(previous || next) && <Pagination {...props} />}
</div>
</div>
          ) : (
            ""
          )}











      <article className="blog-post">
        <header style={{height:'', display:'grid', placeContent:'center'}}>
          <section className="article-header1" style={{textAlign:'center', margin:'0', height:'auto', color:''}}>
            <h1 className="tronText" style={{fontSize:'4vw'}}>{frontmatter.title}</h1>
            {/* <time sx={{color: "muted"}}>{frontmatter.date}</time> */}
            {/* <TimeAgo date={frontmatter.date} style={{color:'#fff !important'}} /> */}
          </section>
        </header>
 </article>











<div style={{padding:'0 0', borderTop:'0px solid', margin:'0 0', textAlign:'center', fontSize:'1.5rem', minWidth:'50%', width:'100%', maxWidth:'', border:'0px solid yellow'}}>


      <div
        className="blog-post-content" style={{ fontSize:'1.1rem', textAlign:'left', width:'100%', maxWidth:'', padding:'10vh 0', margin:'0 auto', color:'inherit !important'}}
        dangerouslySetInnerHTML={{ __html: html }}
      />    
  
 
</div>

      

      

   
   <br />
   <GoBack />
   <br />
   <br />
   </CustomBox>
   <Footer />
    </Layout>




  )
}



export default Post

export const pageQuery = graphql`
  query BlogPostQueryBlogPostQuery($id: String!) {
    site {
      siteMetadata {
        title
        titleDefault
        siteUrl
        description
        image
        twitterUsername
        companyname
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
        youtuber
        youtuber2
        youtubeshoworiginal
        youtubersuggestion1
        youtubersuggestion2
        youtubersuggestion3
        youtubestart
        youtubeend
        audiostart
        audioend
        youtubemute
        youtubecontrols
        youtubeautostart
        comments
        shareable
        isnftforsale
        nftdrop
        svgzindex
        nftlink
        nftredeem
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        svgImage{
          publicURL
        }
        underlayImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`