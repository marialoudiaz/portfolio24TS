'use client';
import React, { useRef, useEffect } from 'react';
import '../styles/App.scss';
import { motion, useTransform, MotionValue } from 'framer-motion';
import { useData } from '@/app/context/DataContext'; // Import du contexte

interface VideoProps {
  scrollYProgress: MotionValue<number>;
}
const VideoReveal: React.FC<VideoProps> = ({ scrollYProgress }) => {

  // refs
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  // Routage
  const { indepArray } = useData();
  
  // Default values if indepArray data is missing
  const videoOrdi = indepArray?.[0]?.videoOrdi || 'videoReveal1';
  const videoTel = indepArray?.[0]?.videoTel || 'videoReveal2';

  // Video map for fallback values
  const videoMap: { [key: string]: string } = {
    'videoReveal1': '/video/videos-introductives/D-INDEP-FR.mp4',
    'videoReveal2': '/video/videos-introductives/M-INDEP-FR.mp4',
  };
  const ordi = videoMap[videoOrdi];
  const tel = videoMap[videoTel];

  // Functions
  const handlePlayVideo = (videoRef: React.RefObject<HTMLVideoElement>) => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.requestFullscreen();
      videoElement.play();
    }
  };

  // Fullscreen exit
  const resetVideoOnFullscreenExit = (videoRef: React.RefObject<HTMLVideoElement>) => {
    const videoElement = videoRef.current;
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
        videoElement.load();
      }
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  };

  // Unconditionally call useTransform and useEffect hooks
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  useEffect(() => {
    resetVideoOnFullscreenExit(desktopVideoRef);
    resetVideoOnFullscreenExit(mobileVideoRef);
  }, []);

  // Return fallback content if data is missing
  if (!indepArray || !indepArray[0].discover) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div style={{ scale, rotate }}>
      <div className="background-video-hp">
        <div className="desktop" style={{ position: 'relative' }}>
          <video
            ref={desktopVideoRef}
            muted
            playsInline
            poster="/projets/marialoudiaz_showreel.png"
            onClick={() => handlePlayVideo(desktopVideoRef)}
            controls={false}
          >
            <source src={ordi} type="video/mp4" />
          </video>
          <div
            className="btn-transp-big"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            onClick={() => handlePlayVideo(desktopVideoRef)}
          >
            <div>
              <svg
                className="icon-transp-big"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Play Icon"
              >
                <path
                  d="M5 3.868V20.132C5 21.008 6.035 21.532 6.757 21.068L19.086 13.737C19.794 13.28 19.794 12.12 19.086 11.663L6.757 4.332C6.035 3.868 5 4.392 5 5.268Z"
                  className="fill-gray-800"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mobile" style={{ position: 'relative' }}>
          <video
            ref={mobileVideoRef}
            muted
            playsInline
            poster="/projets/marialoudiaz_showreel.png"
            onClick={() => handlePlayVideo(mobileVideoRef)}
            controls={true}
            width={320}
            height={240}
          >
            <source src={tel} type="video/mp4" />
          </video>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoReveal;
