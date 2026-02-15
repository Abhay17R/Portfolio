import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, 
  Music, List, Repeat, Shuffle, Maximize2 
} from 'lucide-react';
import '@/styles/WindowsMediaPlayer.css';

const WindowsMediaPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(true);

  // --- DUMMY PLAYLIST (Apne MP3s Public folder me daal dena) ---
  const playlist = [
    { id: 1, title: "Cyberpunk City", artist: "Synthwave Boy", url: "/music/song1.mp3", cover: "https://img.icons8.com/color/48/musical-notes.png" },
    { id: 2, title: "Hacker's Paradise", artist: "Null Pointer", url: "/music/song2.mp3", cover: "https://img.icons8.com/fluency/48/console.png" },
    { id: 3, title: "Midnight Code", artist: "Dev Loop", url: "/music/song3.mp3", cover: "https://img.icons8.com/color/48/code.png" },
  ];

  // --- AUDIO HANDLERS ---
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const dur = audioRef.current.duration;
    setProgress((current / dur) * 100);
    setDuration(dur);
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setProgress(e.target.value);
  };

  const changeTrack = (index) => {
    setCurrentTrack(index);
    setIsPlaying(true);
    setTimeout(() => audioRef.current.play(), 100);
  };

  const handleNext = () => {
    const next = (currentTrack + 1) % playlist.length;
    changeTrack(next);
  };

  const handlePrev = () => {
    const prev = (currentTrack - 1 + playlist.length) % playlist.length;
    changeTrack(prev);
  };

  const formatTime = (seconds) => {
    if (!seconds) return "0:00";
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  return (
    <div className="wmp-container">
      {/* Hidden Audio Element */}
      <audio 
        ref={audioRef} 
        src={playlist[currentTrack].url} 
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleNext}
      />

      {/* --- TOP HEADER (Visualizer Area) --- */}
      <div className="wmp-visualizer-area">
        
        {/* Background Overlay */}
        <div className="wmp-grid-bg"></div>
        
        {/* Album Art / Info */}
        <div className="wmp-track-info">
          <img src={playlist[currentTrack].cover} alt="Cover" className={`album-art ${isPlaying ? 'spinning' : ''}`} />
          <div className="track-details">
            <h2>{playlist[currentTrack].title}</h2>
            <p>{playlist[currentTrack].artist}</p>
          </div>
        </div>

        {/* THE CRAZY VISUALIZER (CSS Animated Bars) */}
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

      {/* --- MIDDLE: PLAYLIST (Collapsible) --- */}
      <div className={`wmp-playlist ${showPlaylist ? 'open' : ''}`}>
        <div className="playlist-header">
           <span>CURRENT_PLAYLIST</span>
           <button onClick={() => setShowPlaylist(!showPlaylist)}><List size={16}/></button>
        </div>
        <ul>
          {playlist.map((track, index) => (
            <li 
              key={track.id} 
              className={currentTrack === index ? 'active' : ''}
              onClick={() => changeTrack(index)}
            >
              <span className="track-num">{index + 1}.</span>
              <span className="track-name">{track.title}</span>
              <span className="track-time">3:45</span>
            </li>
          ))}
        </ul>
      </div>

      {/* --- BOTTOM: CONTROLS (Glass UI) --- */}
      <div className="wmp-controls">
        
        {/* Progress Bar */}
        <div className="wmp-progress-wrapper">
          <span className="time-text">{formatTime(audioRef.current?.currentTime)}</span>
          <input 
            type="range" 
            className="wmp-slider progress" 
            value={progress || 0} 
            onChange={handleSeek} 
          />
          <span className="time-text">{formatTime(duration)}</span>
        </div>

        {/* Buttons */}
        <div className="wmp-buttons-row">
           <div className="left-actions">
              <button className="icon-btn"><Shuffle size={16}/></button>
              <button className="icon-btn"><Repeat size={16}/></button>
           </div>

           <div className="main-actions">
              <button className="ctrl-btn" onClick={handlePrev}><SkipBack size={24}/></button>
              <button className="play-btn" onClick={togglePlay}>
                 {isPlaying ? <Pause size={30} fill="black"/> : <Play size={30} fill="black" style={{marginLeft:4}}/>}
              </button>
              <button className="ctrl-btn" onClick={handleNext}><SkipForward size={24}/></button>
           </div>

           <div className="vol-actions">
              <button className="icon-btn" onClick={() => setIsMuted(!isMuted)}>
                 {isMuted ? <VolumeX size={18}/> : <Volume2 size={18}/>}
              </button>
              <input 
                type="range" 
                className="wmp-slider volume" 
                min="0" max="1" step="0.1"
                value={isMuted ? 0 : volume}
                onChange={(e) => {setVolume(e.target.value); audioRef.current.volume = e.target.value;}} 
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