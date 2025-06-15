import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { Card } from "@/components/ui/card";

interface AudioControllerProps {
  autoPlay?: boolean;
  initialVolume?: number;
}

const AudioController = ({
  autoPlay = true,
  initialVolume = 0.5,
}: AudioControllerProps) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [volume, setVolume] = useState(initialVolume);
  const [isMuted, setIsMuted] = useState(false);
  const backgroundMusicRef = useRef<HTMLAudioElement | null>(null);

  // Sound effects references
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio elements
    backgroundMusicRef.current = new Audio("/mii-channel-theme.mp3");
    clickSoundRef.current = new Audio("/mii-click-sound.mp3");

    // Configure background music
    if (backgroundMusicRef.current) {
      backgroundMusicRef.current.loop = true;
      backgroundMusicRef.current.volume = volume;

      if (autoPlay) {
        backgroundMusicRef.current.play().catch((error) => {
          console.error("Auto-play was prevented:", error);
          setIsPlaying(false);
        });
      }
    }

    // Configure click sound
    if (clickSoundRef.current) {
      clickSoundRef.current.volume = volume;
    }

    // Cleanup function
    return () => {
      if (backgroundMusicRef.current) {
        backgroundMusicRef.current.pause();
        backgroundMusicRef.current = null;
      }
      if (clickSoundRef.current) {
        clickSoundRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (backgroundMusicRef.current) {
      backgroundMusicRef.current.volume = isMuted ? 0 : volume;
    }
    if (clickSoundRef.current) {
      clickSoundRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlayPause = () => {
    if (backgroundMusicRef.current) {
      if (isPlaying) {
        backgroundMusicRef.current.pause();
      } else {
        backgroundMusicRef.current.play().catch((error) => {
          console.error("Play was prevented:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume[0]);
  };

  const playUISound = () => {
    if (clickSoundRef.current && !isMuted) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.play().catch((error) => {
        console.error("UI sound play was prevented:", error);
      });
    }
  };

  return (
    <Card className="p-4 bg-blue-100 shadow-md w-full max-w-xs">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              playUISound();
              togglePlayPause();
            }}
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5" />
            )}
          </Button>

          <div className="flex-1 mx-4">
            <Slider
              value={[volume]}
              max={1}
              step={0.01}
              onValueChange={handleVolumeChange}
              aria-label="Adjust volume"
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              playUISound();
              toggleMute();
            }}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <VolumeX className="h-5 w-5" />
            ) : (
              <Volume2 className="h-5 w-5" />
            )}
          </Button>
        </div>

        <div className="text-xs text-center text-gray-600">
          {isPlaying ? "Now Playing: Mii Channel Theme" : "Music Paused"}
        </div>
      </div>
    </Card>
  );
};

export default AudioController;
