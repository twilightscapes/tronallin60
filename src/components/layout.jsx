import * as React from "react"
// import { SkipNavContent, SkipNavLink } from "./skip-nav"
// import { Header } from "./header"
// import { Footer } from "./footer"
import { Seo } from "./seo"
import { Link } from 'gatsby-plugin-modal-routing-3'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing-3'
import { AiOutlineClose } from "react-icons/ai"
// import { FaHandPointDown } from "react-icons/fa"
// import TwilightLogo from "../../static/assets/TSidebarHover.svg"
import { StoreContext } from "../context/store-context"
import { Toast } from "./toast"
// import Bug from "../../static/assets/TSidebarHover.svg"
// import { FiShare } from 'react-icons/fi';
// import { FaRegPlusSquare } from 'react-icons/fa';
// import Fullscreen from "../components/FullScreen"
import { ImArrowRight } from "react-icons/im"
import { CartButton } from "./cart-button"
// import SearchIcon from "../../static/assets/search"
import Theme from "../components/theme"
// import Audio from '../assets/audio.mp3'
// import TouchUp from '../components/TouchUp'
// import { IoMdFingerPrint } from 'react-icons/io'
// import { Link } from "gatsby-plugin-anchor-links"

import { StaticImage } from "gatsby-plugin-image"
// import Consent from './Consent'
import Install from './install-discount'
// 
// import { BiLeftArrow } from "react-icons/bi"
import { navigate } from "gatsby";

export function Layout({ children }) {
  const { checkout, loading, didJustAddToCart } = React.useContext(StoreContext)

  const items = checkout ? checkout.lineItems : []

  const quantity = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  return (
    <div style={{display:''}}> 
<>
      <Seo />
      {/* <SkipNavLink /> */}



      <ModalRoutingContext.Consumer closeTimeoutMS={300} >
{({ modal, closeTo }) => (
<div style={{overflow:''}}>
  {modal ? (
    <>
    <div style={{display:'', position:'fixed', top:'10%', right:'3%', padding:'0px', fontSize:'2rem', background:'#111 !important', opacity:'1 !important', zIndex:'55 !important', filter:' drop-shadow(0px 4px 3px #000)', color:'#fff'}}>
    <Link state={{noScroll: true }} to={closeTo} style={{fontSize:'2rem',  textDecoration:'none', lineHeight:'', display:'flex', flexDirection:'column', color:'#fff', cursor:'pointer'}}>
      <AiOutlineClose />
      {/* <span className="TRON">[</span> */}
      
      {/* <span className="" style={{fontSize:'70%', textAlign:'center'}}>home</span> */}
    </Link>
    </div>
    </>
  ) : (
''
  )}

</div>
)}
</ModalRoutingContext.Consumer>




      <div className="" style={{
  position:'fixed', 
  zIndex:'10',
  top:'10px',
  left:'10px',
  width:'',
fontSize:'1rem',
border:'0px solid'
}}><a href="https://tron.allin60.com">tron.</a><a href="https://allin60.com">allin60.com</a></div>

      {/* <Header /> */}

      
      
      {/* <audio controls="controls" autoplay="false" src={Audio}>
    Your browser does not support the HTML5 Audio element.
</audio> */}

{/* <Fullscreen /> */}

<header name="pagetop" style={{}} >

{/* <Link to="/"><img id="logo" className="twlogo1" src={twLogo} alt="Twilightscapes Logo" style={{margin:'16px 0 40px 4vw', minWidth:'100px', maxWidth:'100px', height:'auto', padding:'0', border:'0px solid red', position:'fixed', zIndex:'2'}} /></Link> */}







      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />


      <label id="menuicon" htmlFor="openSidebarMenu" className="sidebarIconToggle">
<div className="TRON" style={{textAlign:'center', opacity:'1', textShadow:'2px 2px 10px 2px #000', maxWidth:'', color:'#fff', borderRadius:'12px', fontSize:'clamp(3rem, 4.5vw, 4.8rem)'}}>
[
</div>

{/* <div style={{textAlign:'center', opacity:'1', textShadow:'2px 2px 10px 2px #000', maxWidth:'80px', color:'#fff', borderRadius:'12px'}}>
<StaticImage className="" src="../../static/assets/TSidebarHover.svg" alt="Logo" style={{borderRadius:''}} /></div> */}
  </label>

  {/* <label id="menuicon" htmlFor="openSidebarMenu" className="sidebarIconToggle"> */}

  {/* <div className="cornertext" style={{textShadow:'2px', color:'#fff',}}>
  <IoMdFingerPrint style={{fontSize:'50px', }}/>
 <span><br />TAP CORNER<br /> FOR MENU<br />
</span>
    </div> */}




{/* <IoMdFingerPrint style={{fontSize:'60px', margin:'0 20px 0 0' }}/> */}
{/* <Bug className="bug" style={{fontSize:'38px', maxWidth:'', opacity:'.4', margin:'100px 0 0 0', width:'100%' }}/> */}
{/* <div style={{textAlign:'center'}}>MENU</div> */}
    {/* <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div> */}
  {/* </label> */}


  <label htmlFor="openSidebarMenu" className="backdrop1" aria-label="Return To Home" ></label>


   <div id="sidebarMenu" style={{minWidth:'', width:''}}>
  
{/* <div className="no-app promocode">
30% OFF CODE: <span style={{color:'var(--primary-color)', fontWeight:'bold'}}>LoveTheNight</span>
</div> */}














	

    




    <ul className="sidebarMenuInner post-card" style={{maxWidth:'400px', position:'absolute', right:'0', display:'', justifyContent:''}}>




 {/* <li className="carta" style={{border:'none', margin:'1rem 0',textAlign:'center'}}>
<Link title="Return To Home" to="/#homestart" aria-label="Return To Home"> 
<div className="TRON tronlogo" style={{textAlign:'center', opacity:'1', textShadow:'2px 2px 10px 2px #000', maxWidth:'', color:'#fff', borderRadius:'0', fontSize:'clamp(4rem, 6vw, 5.8rem)', margin:'1rem 0 0 0'}}>[</div>
</Link>
 </li> */}

 <li className="carto" style={{border:'none', margin:'0 0',textAlign:'center'}}>
<Link title="Return To Home" to="/#homestart" aria-label="Return To Home"> 
<div className="TronType tronText" style={{fontSize:'250%', margin:'0 0 0 0'}}>TRON</div><div className="defont" style={{fontSize:'200%', fontWeight:'bold', color:'rgb(0, 225, 255)'}}>in 60</div><div className="TRON tronText" style={{fontSize:'100%', margin:'0 0 1rem 0'}}>Seconds</div>
{/* <div className="TRON tronlogo" style={{textAlign:'center', opacity:'1', textShadow:'2px 2px 10px 2px #000', maxWidth:'', color:'#fff', borderRadius:'0', fontSize:'clamp(4rem, 6vw, 5.8rem)', margin:'1rem 0 0 0'}}>[</div> */}
{/* 
  <span>More Coming Soon</span> */}
</Link>
 </li>





 
 {/* <li className="carta" style={{border:'none', marginBottom:'1rem'}}>
 <a className="" onClick={()=>navigate(-1)}><img id="logo" className="twlogo" src={twLogo} alt="Twilightscapes Logo" title="Return To Homepage" style={{minWidth:'100px', maxWidth:'',}} /></a>
 </li> */}




 {/* <li className="carto">
 <Link className="navbar-item txtshadow" to="/contact/">
Contact Me<span>I love hearing from you!</span>
</Link>
</li> */}



<li className="carta">
 <Link className="navbar-item txtshadow" to="/contact/">
Contact Me<span>Ordering Questions?</span>
</Link>
</li>




      {/* <li className="carto">
      <Link className="navbar-item txtshadow" to="/photo-tools/">Twilight Tools<span>Lighting and Gear</span></Link>
       </li> */}


      {/* <li className="carto">
              <Link className="navbar-item txtshadow" to="/about/">
                About Todd Lambert<span>As seen on reality TV</span>
              </Link>
      </li> */}

      {/* <li className="carto">
      <Link className="navbar-item txtshadow" to="/posts/">Posts<span>My rants &amp; raves</span></Link>
       </li> */}


      

{/*
      <li className="carto" style={{textAlign:'center'}}>
              <Link className="navbar-item txtshadow" to="/minutes/" style={{color:'#02e9fa'}}>
              View Latest Minutes
              </Link>
      </li>

 */}


<div style={{background:'rgba(0,0,0,0.20)'}}>
<li className="carto" style={{textAlign:'', color:'#777', cursor:'', background:'rgba(0,0,0,0.40)'}}>
              <Link className="navbar-item txtshadow" to="/enter-the-grid/">
              Enter the Grid
              </Link>
      </li>
      
{/* <li className="carto" style={{textAlign:'center'}}>
              <Link className="navbar-item txtshadow" to="/the-grid#proceed">
              Proceed to Games
              </Link>
      </li> */}

      <li className="carto" style={{textAlign:''}}>
              <Link className="navbar-item txtshadow" to="/lightdisc-grid/" style={{color:'',}}>
              LightDisc Grid
              </Link>
      </li>

      <li className="carto" style={{textAlign:''}}>
              <Link className="navbar-item txtshadow" to="/lightcycle-grid/" style={{color:''}}>
              LightCycle Grid
              </Link>
      </li>


      <li className="carto" style={{textAlign:''}}>
              <Link className="navbar-item txtshadow" to="/end-of-line-club/" style={{color:''}}>
              End of Line Club
              </Link>
      </li>

      <li className="carto" style={{textAlign:''}}>
              <Link className="navbar-item txtshadow" to="/return-to-the-source/" style={{color:''}}>
              Return to the Source
              </Link>
      </li>


      <li className="carto" style={{textAlign:''}}>
              <Link className="navbar-item txtshadow" to="/end-of-the-grid/" style={{color:''}}>
              End of the Grid
              </Link>
      </li>




      {/* <li className="carto">
              <Link className="navbar-item txtshadow" to="/nft/">
                NFT Collectibles <span>Limited Editions</span>
              </Link>
      </li> */}

      
{/* <li className="carto" style={{textAlign:'center'}}>
              <Link className="navbar-item txtshadow" to="/experiences/">
              <span style={{color:'var(--primary-color)',}}>(All New)</span>3D Experiences
                 Multimedia 3D Blog
              </Link>
      </li> */}


<li className="carto" style={{textAlign:'center', background:'rgba(0,0,0,0.20)'}}>
              <Link className="navbar-item txtshadow" to="/about/">
              About This Site
              </Link>
      </li> 
      </div>
    
      <li className="carta">
      <div style={{display:'flex', justifyContent:'center'}}>
<button className="back" onClick={()=>navigate(-1)} style={{padding:'4px 8px', borderRadius:'12px'}}>
        {/* <span className="icon -left" style={{paddingRight:'1rem'}}>
                <BiLeftArrow />
        </span>  */}
        {" "} Continue Choosing 
</button>
</div>
      </li>

      

      <li className="carto crypto" style={{border:'none', display:'flex', justifyContent:'space-around', verticalAlign:'center', padding:'5px 0 0 0' ,  }}>
  
      <Theme  style={{padding:'0'}} />
   {/* <Link className="sherlock" to="/search/" style={{marginRight:'0', marginTop:'5px'}}>
    <span className="carto"><SearchIcon /></span>
   </Link> */}
   
  <div className="carto"><CartButton quantity={quantity} /></div>


        </li>

    

    </ul>






  </div>









 {/*
      <Toast show={loading || didJustAddToCart} >
        {!didJustAddToCart ? (
          "Updating…"
        ) : (
          <>
            Added to cart{" "}
            <div style={{fontSize:'30px', marginLeft:'10px'}}><ImArrowRight /></div>
          </>
        )}
      </Toast>
  */}



      {/* <Link to="/search" style={{display:'flex', verticalAlign:'center', marginTop:'12px', marginRight:'20px'}}>
    <span><SearchIcon /></span>
   </Link>

  <div style={{marginTop:'5px'}}><CartButton quantity={quantity} /></div> */}
     


     

</header>



{/* <div className="toppad" style={{display:'block', height:'20px', border:'0px solid yellow'}}></div> */}



      {/* <SkipNavContent className="intro"> */}

        {children}
        
        {/* </SkipNavContent> */}
      
      
      {/* <Consent /> */}
     {/* <Install /> */}
      {/* <Footer /> */}
      
      </>
    </div>
    
  )
}
