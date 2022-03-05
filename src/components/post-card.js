/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
// import TimeAgo from 'react-timeago'
// import Countdown from 'react-countdown'

// const Completionist = () => ""

const PostCard = ({ data }) => (

  







<>


    {data.frontmatter.featuredImage ? (
      <div id="" className="wrap-element allin60panel" style={{overflow:'hidden', width:'96vw', height:'90vh', display:'flex', flexDirection:'column', justifyContent:'flex-start', padding:'0', borderRadius:'40px', border:'4px solid  rgba(5, 255, 255, 0.4)', borderTop:'0px', filter:'drop-shadow(0 0 10px rgb(0, 238, 255))', boxShadow:'0 4px 22px rgba(5, 255, 255, 0.3)', opacity:'.98',background:'radial-gradient(circle, rgba(10, 45, 48, 0.2) 17%, rgba(25, 96, 109, 0.2) 58%, rgba(10, 196, 206, 0.2) 97%)', backgroundSize:'140% 200%'}}>
      <Link to={data.frontmatter.slug}>
        <GatsbyImage
          image={data.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
          alt={data.frontmatter.title + " - Featured image"}
          className="featured-image tronpanel"
          style={{position:'relative', zIndex:'1', height:'100vh', borderRadius:'40px'}}
        />
        {/* <div
              style={{
                alignItems: "center",
                backgroundColor: "",
                display: "flex",
                flexDirection:'column',
                justifyContent: "center",
                justifySelf:'center',
                position: "absolute",
                top:'50%',
                left:'50%',
                
          
              }}
           >

           <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
    <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="2">
            <circle strokeOpacity=".5" cx="18" cy="18" r="18"/>
            <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="1s"
                    repeatCount="indefinite"/>
            </path>
        </g>
    </g>
</svg>
        </div> */}
      </Link>
      </div>
    ) : (
      // <Link  to={data.frontmatter.slug}><StaticImage className="featured-image" src="assets/default-og-image.jpg" alt="VidSock Default Image" style={{position:'relative', zIndex:''}} /></Link>
      ''
    )}



</>



  
)

export default PostCard
