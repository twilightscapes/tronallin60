import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { MdPlayArrow } from "react-icons/md"
import { MdPause } from "react-icons/md"
import { MdVolumeOff } from "react-icons/md"
import { MdVolumeDown } from "react-icons/md"
import { MdVolumeUp } from "react-icons/md"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { Link } from "gatsby"
const Controls = forwardRef(

  
  (
    {
      onPlayPause,
      playing,
      played,
      onMute,
      muted,
      volume,
    },
    ref
  ) => {

    const { iconimage } = useSiteMetadata()


    return (

<>
      {playing ? (
        <>

        </>
      ) : (
  <>
      <div style={{position:'absolute', display:'block', background:'#000', height:'60px', width:'100%', zIndex:'', top:'0', right:'0', textAlign:'center', paddingTop:'10px' }}>allin60.com</div>

  <div style={{position:'absolute', display:'block', background:'#000', height:'100%', width:'100%', zIndex:'1', bottom:'0', right:'0', textAlign:'center', display:'grid', placeContent:'center' }}>
 
  <img className="homepage-bg" src={iconimage} width="300px" height="150px" alt="VidSock" style={{ width:'30vw', height:'', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} />

  </div>
  </>
      )}


      <div ref={ref} className="" style={{width:'', height:'', border:'0px solid red', display:'flex', justifyContent:'center', bottom:'22px', position:'absolute', right:'4vw', zIndex:'55', gap:'40px'}}>

      {/* <div className="contact" style={{position:'', bottom:'', zIndex:'',  left:'0', right:'0', display:'flex', justifyContent:'center', width:'200px', margin:'0 auto'}}>
  <Link state={{modal: true}}  to="/contact/" className="navbar-item  button fire" style={{margin:'', textDecoration:'none'}}>Contact Me</Link>
</div> */}
                <div
                  onClick={onPlayPause}
                  className=""
                  style={{
                    animation:'fade',
                    animationDuration:'1s',
                    animationDelay:'5s',
                    opacity:'0',
                    animationFillMode:'forwards',
                    position:'relative',
                    zIndex:'',
                    right:'',
                    bottom:'',
                    border:'2px solid ',
                    display:'grid',
                    placeContent:'center',
                    width:'60px',
                    height:'60px',
                    fontWeight:'bold', padding:'.3rem', color:'#999', fontSize:'1rem', background:'rgba(51, 51, 51, 0.3)', borderRadius:'8px', border:'1px solid #666', filter:'drop-shadow(2px 2px 2px #000)', cursor:'pointer',
                }}
                >
                  {/* <MdPlayArrow style={{fontSize:'50px', position:'absolute'}}  /> */}
                  {playing ? (
                    <>
                    <MdPause style={{fontSize:'56px', position:'absolute'}} />
                    </>
                  ) : (
              <>
              <MdPlayArrow style={{fontSize:'56px', position:'absolute'}}  />
              </>
                  )}
                </div>



      




                <div
                  // onClick={() => setState({ ...state, muted: !state.muted })}
                  onClick={onMute}
                  className=""
                  style={{
                    position:'relative',
                    zIndex:'',
                    right:'',
                    bottom:'',
                    border:'2px solid ',
                    display:'grid',
                    placeContent:'center',
                    width:'60px',
                    height:'60px',
                    fontWeight:'bold', padding:'.3rem', color:'#999', fontSize:'1rem', background:'rgba(51, 51, 51, 0.3)', borderRadius:'8px', border:'1px solid #666', filter:'drop-shadow(2px 2px 2px #000)', cursor:'pointer',
                }}
                >
                  {muted ? (
                    <MdVolumeOff fontSize="large" style={{fontSize:'56px', position:'absolute'}}  />
                  ) : volume > 0.5 ? (
                    <MdVolumeUp fontSize="large" style={{fontSize:'56px', position:'absolute'}}  />
                  ) : (
                    <MdVolumeDown fontSize="large" style={{fontSize:'56px', position:'absolute'}}  />
                  )}
                </div>

      </div>
      
      </>
    );
  }
);

Controls.propTypes = {
  // onSeek: PropTypes.func,
  // onSeekMouseDown: PropTypes.func,
  // onSeekMouseUp: PropTypes.func,
  // onDuration: PropTypes.func,
  // onRewind: PropTypes.func,
  onPlayPause: PropTypes.func,
  // onFastForward: PropTypes.func,
  // onVolumeSeekDown: PropTypes.func,
  // onChangeDispayFormat: PropTypes.func,
  // onPlaybackRateChange: PropTypes.func,
  // onToggleFullScreen: PropTypes.func,
  onMute: PropTypes.func,
  playing: PropTypes.bool,
  played: PropTypes.number,
  // elapsedTime: PropTypes.string,
  // totalDuration: PropTypes.string,
  muted: PropTypes.bool,
  // playbackRate: PropTypes.number,
};
export default Controls;