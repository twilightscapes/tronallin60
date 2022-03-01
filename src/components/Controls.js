import React, { forwardRef } from "react";
import PropTypes from "prop-types";
// import { MdPlayArrow } from "react-icons/md"
// import { MdPause } from "react-icons/md"
import { MdVolumeOff } from "react-icons/md"
import { MdVolumeDown } from "react-icons/md"
import { MdVolumeUp } from "react-icons/md"

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


    return (
      <div ref={ref} className="" style={{width:'100vw', height:'30vh', border:'0px solid red', display:'grid', placeContent:'center',zIndex:'2', top:'0', position:'absolute'}}>
       
                {/* <button
                  onClick={onPlayPause}
                  className=""
                  style={{
                    position:'absolute',
                    zIndex:'105',
                    border:'2px solid yellow',
                    display:'grid',
                    placeContent:'center',
                    width:'100px',
                    height:'100px',
                }}
                >

                  {playing ? (
                    <MdPause style={{fontSize:'100px', position:'absolute'}} />
                  ) : (
                    <MdPlayArrow style={{fontSize:'100px', position:'absolute'}}  />
                  )}
                </button> */}


                <button
                  // onClick={() => setState({ ...state, muted: !state.muted })}
                  onClick={onMute}
                  className=""
                  style={{
                    position:'absolute',
                    zIndex:'105',
                    right:'20px',
                    top:'20px',
                    border:'4px solid #07f8f8',
                    display:'grid',
                    placeContent:'center',
                    width:'60px',
                    height:'60px',
                    background:'rgba(0, 0, 0, 0.7))',
                    borderRadius:'50%',
                    filter: 'dropShadow(0px 0px 3px rgba(0, 0, 0, 0.8))',
                    color:'#07f8f8',
        
                }}
                >
                  {muted ? (
                    <MdVolumeOff fontSize="large" style={{fontSize:'55px', position:'absolute'}}  />
                  ) : volume > 0.5 ? (
                    <MdVolumeUp fontSize="large" style={{fontSize:'55px', position:'absolute'}}  />
                  ) : (
                    <MdVolumeDown fontSize="large" style={{fontSize:'55px', position:'absolute'}}  />
                  )}
                </button>

      </div>
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