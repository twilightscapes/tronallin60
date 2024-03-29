import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { MdPlayArrow } from "react-icons/md"
import { MdPause } from "react-icons/md"
import { MdVolumeOff } from "react-icons/md"
import { MdVolumeDown } from "react-icons/md"
import { MdVolumeUp } from "react-icons/md"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { Link } from "gatsby"











function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    // <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
    //   {children}
    // </Tooltip>
    ""
  );
}

const Controls = forwardRef(
  (
    {
      onSeek,
      onSeekMouseDown,
      onSeekMouseUp,
      onDuration,
      onRewind,
      onPlayPause,
      onFastForward,
      playing,
      played,
      elapsedTime,
      totalDuration,
      onMute,
      muted,
      onVolumeSeekDown,
      onChangeDispayFormat,
      playbackRate,
      onPlaybackRateChange,
      onToggleFullScreen,
      volume,
      onVolumeChange,
      onBookmark,
    },
    ref
  ) => {
    // const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    const { iconimage } = useSiteMetadata()


    return (

<>









      {playing ? (
        <>

        </>
      ) : (
  <>
      <div style={{position:'absolute', display:'block', background:'#000', height:'60px', width:'100%', zIndex:'', top:'0', right:'0', textAlign:'center', paddingTop:'10px' }}>allin60.com</div>

  <div style={{position:'absolute', display:'block', background:'#111', height:'100vh', width:'100%', zIndex:'1', top:'0', right:'0', textAlign:'center', display:'grid', placeContent:'center' }}>
 
  <img className="homepage-bg" src={iconimage} width="300px" height="150px" alt="VidSock" style={{ width:'30vw', height:'', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important', position:'relative', bottom:'20vh'}} />

  </div>
  </>
      )}




      


      <div ref={ref} className="controlsbox" style={{width:'', height:'', border:'0px solid red', display:'flex', justifyContent:'center', bottom:'20px', position:'fixed', right:'30px', zIndex:'55', gap:'20px'}}>

      {/* <div className="contact" style={{position:'', bottom:'', zIndex:'',  left:'0', right:'0', display:'flex', justifyContent:'center', width:'200px', margin:'0 auto'}}>
  <Link state={{modal: true}}  to="/contact/" className="navbar-item  button fire" style={{margin:'', textDecoration:'none'}}>Contact Me</Link>
</div> */}
                <div
                  onClick={onPlayPause}
                  className="controls actionJackson" 
                  style={{

                }}
                >
                  {/* <MdPlayArrow style={{fontSize:'50px', position:'absolute'}}  /> */}
                  {playing ? (
                    <>
                    <MdPause className="hudicon" style={{}} />
                    </>
                  ) : (
              <>
              <MdPlayArrow className="hudicon" style={{}}  />
              </>
                  )}
                </div>



      




                <div
                  // onClick={() => setState({ ...state, muted: !state.muted })}
                  onClick={onMute}
                  className="controls actionJackson"
                  style={{}}
                >

      {muted ? (
<MdVolumeUp className="hudicon" fontSize="large" style={{}}  />
        ) : volume > 0.5 ? (
<MdVolumeOff className="hudicon" fontSize="large" style={{}}  />
        ) : (
<MdVolumeDown className="hudicon" fontSize="large" style={{}}  />
        )}

                </div>

      </div>
      
      </>
    );
  }
);

Controls.propTypes = {
  onSeek: PropTypes.func,
  onSeekMouseDown: PropTypes.func,
  onSeekMouseUp: PropTypes.func,
  onDuration: PropTypes.func,
  onRewind: PropTypes.func,
  onPlayPause: PropTypes.func,
  onFastForward: PropTypes.func,
  onVolumeSeekDown: PropTypes.func,
  onChangeDispayFormat: PropTypes.func,
  onPlaybackRateChange: PropTypes.func,
  onToggleFullScreen: PropTypes.func,
  onMute: PropTypes.func,
  playing: PropTypes.bool,
  played: PropTypes.number,
  elapsedTime: PropTypes.string,
  totalDuration: PropTypes.string,
  muted: PropTypes.bool,
  playbackRate: PropTypes.number,
};
export default Controls;


















