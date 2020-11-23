import React, {useEffect, useState} from 'react';
import YouTube, {Options} from 'react-youtube';
import classNames from 'classnames';

import iconPause from '../../assets/img/btn-pause.svg';
import iconPlay from '../../assets/img/btn-play.svg';
import Loading from '../miniComponents/Loading';

const optsYoutube : Options = {
    playerVars: {
        autoplay: 0,
        rel: 0,
        controls: 0,
        showinfo: 0,
        iv_load_policy: 3,
        disablekb: 1,
        fs: 0
    },
    height: "100%",
    width: "100%"
};

type PropsTypes = {
    srcImage: string,
    srcVideo: string,
    active: boolean
}

const VideoItem : React.FC < PropsTypes > = ({srcImage, srcVideo, active}) => {
    const [activeVideo, setActiveVideo] = useState(false);
    const [videoTarget, setVideoTarget] = useState < any > (null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        !active && videoTarget && onEndVideo(); 
    }, [active]);
  
    function onMouseUp(e : any) {
        // e.target.pauseVideo();
    }
    const onPlayVideo = () => {
        setActiveVideo(true);
        if (videoTarget && !loading) {
            videoTarget.playVideo();
        }
    }
    const onPauseVideo = () => {
        setActiveVideo(false);
        if (videoTarget && !loading) {
            videoTarget.pauseVideo();
        }
    }
    const onReadyVideo = (e : any) => {
        setLoading(false);
        setVideoTarget(e.target);
        if (activeVideo) {
            e.target .playVideo();
        }
    }
    function onEndVideo() {
        setActiveVideo(false);
        videoTarget.stopVideo();
    }

    return (
        <div className="video-slider__item slide" onMouseUp={onMouseUp}>
            <div className={classNames("wrapper-player", { "hidden": !activeVideo })}>
                {loading && <Loading centerVertical/>}
                <YouTube
                    className={classNames("content slide__video")}
                    videoId={srcVideo}
                    opts={optsYoutube}
                    onReady={onReadyVideo}
                    onPlay={(e) => e.target.playVideo()}
                    onPause={(e) => e.target.pauseVideo()}
                    onEnd={onEndVideo}/>
            </div>
            <button className={classNames("btn-pause", { "hidden": !activeVideo })}
                onClick={onPauseVideo}><img src={window.location.origin+iconPause} alt="pause"/></button>
            <div className={classNames("content slide__img", {"hidden": activeVideo})}>
                <img src={srcImage}/>
                <button className="btn-play" type="button" onClick={onPlayVideo}><img src={window.location.origin+iconPlay} alt="play"/></button>
            </div>
        </div>
    )
}
export default React.memo(VideoItem);
