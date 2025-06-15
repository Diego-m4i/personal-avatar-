import React, { useState } from "react";
import { motion } from "framer-motion";
import { Music, Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import AvatarEditor from "./AvatarEditor";
import AudioController from "./AudioController";

const Home = () => {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-400 to-blue-600 flex flex-col items-center justify-start p-4 md:p-8 overflow-hidden">
      {/* Header */}
      <header className="w-full max-w-7xl flex items-center justify-between mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Mii Channel
          </h1>
          <Music className="h-6 w-6 text-white" />
        </motion.div>

        <div className="flex items-center gap-4">
          <AudioController />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMuted(!isMuted)}
            className="text-white hover:bg-white/20"
          >
            {isMuted ? (
              <VolumeX className="h-5 w-5" />
            ) : (
              <Volume2 className="h-5 w-5" />
            )}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-7xl flex-1 flex flex-col items-center justify-center gap-8"
      >
        {/* Avatar Editor Card */}
        <Card className="w-full max-w-4xl bg-white/10 backdrop-blur-sm border-white/20 shadow-xl rounded-xl overflow-hidden">
          <div className="p-6">
            <AvatarEditor />
          </div>
        </Card>
      </motion.main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mt-8 flex items-center justify-center">
        <p className="text-sm text-white/70">
          © 2023 Mii Channel Avatar Creator
        </p>
      </footer>
    </div>
  );
};

export default Home;
