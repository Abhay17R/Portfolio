import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, 
  List, Shuffle, Repeat, Maximize2, FileVideo, Music 
} from 'lucide-react';
import '@/styles/WindowsMediaPlayer.css';

const WindowsMediaPlayer = () => {
  const mediaRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(true);

  // --- PLAYLIST (MIXED AUDIO & VIDEO) ---
  // Note: Apne public folder me 'media' folder bana ke files daal dena
  const playlist = [
    { 
      id: 1, 
      type: 'video',  // <--- TYPE VIDEO
      title: "Cyberpunk Trailer", 
      artist: "CD Projekt Red", 
      url: "/media/video1.mp4", // .mp4 file
      cover: "https://img.icons8.com/fluency/48/video-file.png" 
    },
    { 
      id: 2, 
      type: 'audio', // <--- TYPE AUDIO
      title: "Synthwave Chill", 
      artist: "Retro Boy", 
      url: "/media/song1.mp3", // .mp3 file
      cover: "https://img.icons8.com/color/48/musical-notes.png" 
    },
    { 
      id: 3, 
      type: 'video', 
      title: "Hacking Tutorial", 
      artist: "Mr. Robot", 
      url: "/media/video2.mp4", 
      cover: "https://img.icons8.com/fluency/48/console.png" 
    },
  ];

  // --- HANDLERS ---
  useEffect(() => {
    // Reset state when track changes
    if(mediaRef.current) {
      mediaRef.current.load();
      if(isPlaying) mediaRef.current.play();
    }
  }, [currentTrack]);

  const togglePlay = () => {
    if (mediaRef.current) {
      if (isPlaying) mediaRef.current.pause();
      else mediaRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if(mediaRef.current) {
      const current = mediaRef.current.currentTime;
      const dur = mediaRef.current.duration || 0;
      setProgress((current / dur) * 100);
      setDuration(dur);
    }
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    mediaRef.current.currentTime = seekTime;
    setProgress(e.target.value);
  };

  const changeTrack = (index) => {
    setCurrentTrack(index);
    setIsPlaying(true);
  };

  const handleNext = () => {
    changeTrack((currentTrack + 1) % playlist.length);
  };

  const handlePrev = () => {
    changeTrack((currentTrack - 1 + playlist.length) % playlist.length);
  };

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  // Helper to check current type
  const isVideo = playlist[currentTrack].type === 'video';

  return (
    <div className="wmp-container">
      
      {/* --- MAIN DISPLAY AREA --- */}
      <div className="wmp-display-area">
        
        {/* 1. ACTUAL MEDIA PLAYER ELEMENT */}
        {/* Ye hamesha rahega, bas CSS se hum ise hide/show karenge based on type */}
        <video 
          ref={mediaRef}
          src={playlist[currentTrack].url}
          className={`wmp-video-element ${isVideo ? 'visible' : 'hidden'}`}
          onClick={togglePlay}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleNext}
        />

        {/* 2. AUDIO VISUALIZER OVERLAY (Sirf tab dikhega jab Audio ho) */}
        {!isVideo && (
          <div className="wmp-visualizer-overlay">
             <div className="wmp-grid-bg"></div>
             
             {/* Spinning Album Art */}
             <div className="wmp-track-info">
               <img 
                 src={playlist[currentTrack].cover} 
                 alt="Cover" 
                 className={`album-art ${isPlaying ? 'spinning' : ''}`} 
               />
               <div className="track-details">
                 <h2>{playlist[currentTrack].title}</h2>
                 <p>{playlist[currentTrack].artist}</p>
               </div>
             </div>

             {/* Animated Bars */}
             <div className="wmp-bars">
               {[...Array(20)].map((_, i) => (
                 <div 
                   key={i} 
                   className={`bar ${isPlaying ? 'animate' : ''}`} 
                   style={{ animationDelay: `${i * 0.1}s`, height: isPlaying ? '50%' : '10%' }}
                 ></div>
               ))}
             </div>
          </div>
        )}

        {/* 3. VIDEO OVERLAY (Scanlines - Sirf video pe dikhega) */}
        {isVideo && <div className="video-scanlines"></div>}
      </div>

      {/* --- PLAYLIST --- */}
      <div className={`wmp-playlist ${showPlaylist ? 'open' : ''}`}>
        <div className="playlist-header">
           <span>MEDIA_QUEUE</span>
           <button onClick={() => setShowPlaylist(!showPlaylist)}><List size={16}/></button>
        </div>
        <ul>
          {playlist.map((track, index) => (
            <li 
              key={track.id} 
              className={currentTrack === index ? 'active' : ''}
              onClick={() => changeTrack(index)}
            >
              <span className="track-icon">
                {track.type === 'video' ? <FileVideo size={14}/> : <Music size={14}/>}
              </span>
              <span className="track-name">{track.title}</span>
              <span className="track-time">
                {currentTrack === index && isPlaying ? "PLAYING..." : ""}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* --- CONTROLS --- */}
      <div className="wmp-controls">
        <div className="wmp-progress-wrapper">
          <span className="time-text">{formatTime(mediaRef.current?.currentTime)}</span>
          <input 
            type="range" 
            className="wmp-slider progress" 
            value={progress || 0} 
            onChange={handleSeek} 
          />
          <span className="time-text">{formatTime(duration)}</span>
        </div>

        <div className="wmp-buttons-row">
           <div className="left-actions">
              <span className="media-type-badge">{isVideo ? 'VIDEO' : 'AUDIO'}</span>
           </div>

           <div className="main-actions">
              <button className="ctrl-btn" onClick={handlePrev}><SkipBack size={24}/></button>
              <button className="play-btn" onClick={togglePlay}>
                 {isPlaying ? <Pause size={30} fill="black"/> : <Play size={30} fill="black" style={{marginLeft:4}}/>}
              </button>
              <button className="ctrl-btn" onClick={handleNext}><SkipForward size={24}/></button>
           </div>

           <div className="vol-actions">
              <button className="icon-btn" onClick={() => {
                  mediaRef.current.muted = !isMuted;
                  setIsMuted(!isMuted);
              }}>
                 {isMuted ? <VolumeX size={18}/> : <Volume2 size={18}/>}
              </button>
              <input 
                type="range" 
                className="wmp-slider volume" 
                min="0" max="1" step="0.1"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                    setVolume(e.target.value); 
                    if(mediaRef.current) mediaRef.current.volume = e.target.value;
                }} 
              />
              <button className="icon-btn" onClick={() => setShowPlaylist(!showPlaylist)}>
                 <List size={18} color={showPlaylist ? '#00f3ff' : 'white'}/>
              </button>
           </div>
        </div>
      </div>

    </div>
  );
};

export default WindowsMediaPlayer;