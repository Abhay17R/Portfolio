import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, 
  List, FileVideo, Music, Loader, Maximize2, Minimize2,
  Repeat, Shuffle, PictureInPicture, UploadCloud 
} from 'lucide-react';
import '@/styles/WindowsMediaPlayer.css';

const WindowsMediaPlayer = () => {
  const mediaRef = useRef(null);
  const containerRef = useRef(null);

  // --- STATE ---
  const [playlist, setPlaylist] = useState([]); 
  const [loading, setLoading] = useState(true);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // New Features State
  const [isShuffle, setIsShuffle] = useState(false);
  const [repeatMode, setRepeatMode] = useState(0); // 0: Off, 1: One, 2: All
  const [isDragging, setIsDragging] = useState(false);

  // --- 1. FULLSCREEN LISTENER ---
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  // --- 2. AUTO SCANNER ---
  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const res = await fetch('/api/media');
        const data = await res.json();
        setPlaylist(data);
        setLoading(false);
      } catch (error) {
        console.error("Media Scan Failed:", error);
        setLoading(false);
      }
    };
    fetchMedia();
  }, []);

  // --- 3. HANDLERS (Functions) ---
  
  // Track Update Listener
  useEffect(() => {
    if(mediaRef.current && playlist.length > 0) {
      mediaRef.current.load();
      if(isPlaying) mediaRef.current.play();
    }
  }, [currentTrack, playlist]);

  const togglePlay = () => {
    if (mediaRef.current) {
      if (isPlaying) mediaRef.current.pause();
      else mediaRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const togglePiP = async () => {
  try {
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else if (mediaRef.current && isVideo) {
      await mediaRef.current.requestPictureInPicture();
    }
  } catch (error) {
    console.error("PiP failed:", error);
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
    if (repeatMode === 1) {
      mediaRef.current.currentTime = 0;
      mediaRef.current.play();
      return;
    }
    if (isShuffle) {
      const randomIndex = Math.floor(Math.random() * playlist.length);
      setCurrentTrack(randomIndex);
    } else {
      setCurrentTrack((prev) => (prev + 1) % playlist.length);
    }
    setIsPlaying(true);
  };

  const handlePrev = () => {
    changeTrack((currentTrack - 1 + playlist.length) % playlist.length);
  };

  // --- 4. KEYBOARD SHORTCUTS (Moved Here - Correct Place) ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT') return;
      
      switch(e.code) {
        case 'Space':
          e.preventDefault();
          togglePlay();
          break;
        case 'ArrowRight':
          if (mediaRef.current) mediaRef.current.currentTime += 5;
          break;
        case 'ArrowLeft':
          if (mediaRef.current) mediaRef.current.currentTime -= 5;
          break;
        case 'KeyM':
          setIsMuted(prev => !prev);
          break;
        case 'KeyF':
          handleFullscreen();
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, isMuted]); // Now this works because functions are defined above

  // --- DRAG & DROP HANDLERS ---
  const handleDragOver = (e) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = () => setIsDragging(false);
  
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && (file.type.startsWith('audio') || file.type.startsWith('video'))) {
      const url = URL.createObjectURL(file);
      const newTrack = {
        title: file.name,
        artist: "Local File",
        url: url,
        type: file.type.startsWith('video') ? 'video' : 'audio',
        cover: "https://img.icons8.com/fluency/48/opened-folder.png"
      };
      setPlaylist([newTrack, ...playlist]);
      setCurrentTrack(0);
      setIsPlaying(true);
    }
  };

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  // Render Helpers
  if (loading) return (
    <div className="wmp-container" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
      <div style={{textAlign:'center', color:'#00f3ff'}}>
        <Loader className="animate-spin" size={30} style={{marginBottom:10}} />
        <p>SCANNING_MEDIA_DRIVE...</p>
      </div>
    </div>
  );

  if (playlist.length === 0) return (
    <div className="wmp-container" style={{display:'flex', alignItems:'center', justifyContent:'center', color:'white'}}>
      <p>[!] NO MEDIA FOUND IN /public/media</p>
    </div>
  );

  const currentItem = playlist[currentTrack];
  const isVideo = currentItem?.type === 'video';

  return (
    <div 
      className={`wmp-container ${isFullscreen ? 'is-fs' : ''}`} 
      ref={containerRef}
      onDragOver={handleDragOver} 
      onDragLeave={handleDragLeave} 
      onDrop={handleDrop}
    >
      {/* Drag Overlay */}
      {isDragging && (
        <div className="drag-overlay">
          <UploadCloud size={50} color="#00f3ff"/>
          <h2>DROP FILE TO PLAY</h2>
        </div>
      )}
      
      {/* Display Area */}
      <div className="wmp-display-area">
        <video 
          ref={mediaRef}
          src={currentItem.url}
          className={`wmp-video-element ${isVideo ? 'visible' : 'hidden'}`}
          onClick={togglePlay}
          onDoubleClick={handleFullscreen}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleNext}
        />

        {!isVideo && (
          <div className="wmp-visualizer-overlay">
             <div className="wmp-grid-bg"></div>
             <div className="wmp-track-info">
               <img src={currentItem.cover} alt="Cover" className={`album-art ${isPlaying ? 'spinning' : ''}`} />
               <div className="track-details">
                 <h2>{currentItem.title}</h2>
                 <p>{currentItem.artist}</p>
               </div>
             </div>
             <div className="wmp-bars">
               {[...Array(20)].map((_, i) => (
                 <div key={i} className={`bar ${isPlaying ? 'animate' : ''}`} style={{ animationDelay: `${i * 0.1}s`, height: isPlaying ? '50%' : '10%' }}></div>
               ))}
             </div>
          </div>
        )}
        
        {isVideo && <div className="video-scanlines"></div>}
      </div>

      {/* Playlist */}
      <div className={`wmp-playlist ${showPlaylist ? 'open' : ''}`}>
        <div className="playlist-header">
           <span>LOCAL_DRIVE_SCAN_RESULTS</span>
           <button onClick={() => setShowPlaylist(!showPlaylist)}><List size={16}/></button>
        </div>
        <ul>
          {playlist.map((track, index) => (
            <li 
              key={index} 
              className={currentTrack === index ? 'active' : ''}
              onClick={() => changeTrack(index)}
            >
              <span className="track-icon">
                {track.type === 'video' ? <FileVideo size={14}/> : <Music size={14}/>}
              </span>
              <span className="track-name">{track.title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Controls */}
      <div className="wmp-controls">
        <div className="wmp-progress-wrapper">
          <span className="time-text">{formatTime(mediaRef.current?.currentTime)}</span>
          <input type="range" className="wmp-slider progress" value={progress || 0} onChange={handleSeek} />
          <span className="time-text">{formatTime(duration)}</span>
        </div>

        <div className="wmp-buttons-row">
           <div className="left-actions">
              <span className="media-type-badge">{isVideo ? 'VIDEO' : 'AUDIO'}</span>
           </div>

           <div className="main-actions">
               {/* Shuffle */}
               <button className={`icon-btn ${isShuffle ? 'active' : ''}`} onClick={() => setIsShuffle(!isShuffle)}>
                 <Shuffle size={18}/>
               </button>

               <button className="ctrl-btn" onClick={handlePrev}><SkipBack size={24}/></button>
               <button className="play-btn" onClick={togglePlay}>
                  {isPlaying ? <Pause size={24} fill="#000"/> : <Play size={24} fill="#000"/>}
               </button>
               <button className="ctrl-btn" onClick={handleNext}><SkipForward size={24}/></button>

               {/* Repeat */}
               <button 
                 className={`icon-btn ${repeatMode > 0 ? 'active' : ''}`} 
                 onClick={() => setRepeatMode((prev) => (prev + 1) % 3)}
                 title={repeatMode === 1 ? "Repeat One" : repeatMode === 2 ? "Repeat All" : "Repeat Off"}
               >
                 <Repeat size={18}/>
                 {repeatMode === 1 && <span className="tiny-badge">1</span>}
               </button>
           </div>

           <div className="vol-actions">
              {/* Volume */}
              <button className="icon-btn" onClick={() => { mediaRef.current.muted = !isMuted; setIsMuted(!isMuted); }}>
                 {isMuted ? <VolumeX size={18}/> : <Volume2 size={18}/>}
              </button>
              <input type="range" className="wmp-slider volume" min="0" max="1" step="0.1" value={isMuted ? 0 : volume} onChange={(e) => { setVolume(e.target.value); if(mediaRef.current) mediaRef.current.volume = e.target.value; }} />
              
              {/* PiP (Video Only) */}
              {isVideo && (
                <button className="icon-btn" onClick={togglePiP} title="Picture in Picture">
                  <PictureInPicture size={18}/>
                </button>
              )}

              <button className="icon-btn" onClick={() => setShowPlaylist(!showPlaylist)}><List size={18}/></button>
              
              {/* Fullscreen */}
              <button className="icon-btn" onClick={handleFullscreen} title="Fullscreen">
                {isFullscreen ? <Minimize2 size={18}/> : <Maximize2 size={18}/>}
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default WindowsMediaPlayer;