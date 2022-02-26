import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { MdPlayArrow } from "react-icons/md"
import { MdPause } from "react-icons/md"
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
      <div ref={ref} className="" style={{width:'100vw', height:'100vh', border:'0px solid red', display:'grid', placeContent:'center',zIndex:'105', top:'0', position:'absolute'}}>
       
                <button
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
                  {/* <MdPlayArrow style={{fontSize:'50px', position:'absolute'}}  /> */}
                  {playing ? (
                    <MdPause style={{fontSize:'100px', position:'absolute'}} />
                  ) : (
                    <MdPlayArrow style={{fontSize:'100px', position:'absolute'}}  />
                  )}
                </button>


                <button
                  // onClick={() => setState({ ...state, muted: !state.muted })}
                  onClick={onMute}
                  className=""
                  style={{
                    position:'absolute',
                    zIndex:'105',
                    right:'0',
                    border:'2px solid yellow',
                    display:'grid',
                    placeContent:'center',
                    width:'100px',
                    height:'100px',
                }}
                >
                  {muted ? (
                    <MdVolumeOff fontSize="large" style={{fontSize:'100px', position:'absolute'}}  />
                  ) : volume > 0.5 ? (
                    <MdVolumeUp fontSize="large" style={{fontSize:'100px', position:'absolute'}}  />
                  ) : (
                    <MdVolumeDown fontSize="large" style={{fontSize:'100px', position:'absolute'}}  />
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