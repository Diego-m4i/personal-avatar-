import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FeatureControls from "./FeatureControls";
import AvatarActions from "./AvatarActions";

interface AvatarFeatures {
  faceShape: number;
  skinColor: string;
  hairStyle: number;
  hairColor: string;
  eyeStyle: number;
  eyeColor: string;
  eyePosition: number;
  eyeSize: number;
  eyebrowStyle: number;
  eyebrowPosition: number;
  noseStyle: number;
  nosePosition: number;
  mouthStyle: number;
  mouthPosition: number;
  mouthSize: number;
  glassesStyle: number;
  glassesColor: string;
  facialHairStyle: number;
  facialHairColor: string;
  moleEnabled: boolean;
  molePosition: { x: number; y: number };
}

interface AvatarEditorProps {
  initialFeatures?: Partial<AvatarFeatures>;
  onSave?: (features: AvatarFeatures) => void;
}

const defaultFeatures: AvatarFeatures = {
  faceShape: 0,
  skinColor: "#FFD8B4",
  hairStyle: 0,
  hairColor: "#3A3A3A",
  eyeStyle: 0,
  eyeColor: "#3A3A3A",
  eyePosition: 50,
  eyeSize: 50,
  eyebrowStyle: 0,
  eyebrowPosition: 50,
  noseStyle: 0,
  nosePosition: 50,
  mouthStyle: 0,
  mouthPosition: 50,
  mouthSize: 50,
  glassesStyle: -1, // -1 means no glasses
  glassesColor: "#000000",
  facialHairStyle: -1, // -1 means no facial hair
  facialHairColor: "#3A3A3A",
  moleEnabled: false,
  molePosition: { x: 50, y: 50 },
};

const AvatarEditor: React.FC<AvatarEditorProps> = ({
  initialFeatures = {},
  onSave = () => {},
}) => {
  const [features, setFeatures] = useState<AvatarFeatures>({
    ...defaultFeatures,
    ...initialFeatures,
  });

  const [activeTab, setActiveTab] = useState("face");
  const [rotating, setRotating] = useState(false);

  // Update a specific feature
  const updateFeature = (feature: keyof AvatarFeatures, value: any) => {
    setFeatures((prev) => ({
      ...prev,
      [feature]: value,
    }));
  };

  // Handle feature changes from FeatureControls
  const handleFeatureChange = (feature: string, value: any) => {
    switch (feature) {
      case "hasGlasses":
        updateFeature("glassesStyle", value ? 0 : -1);
        break;
      case "glassesStyle":
        updateFeature("glassesStyle", value - 1); // Convert 1-based to 0-based
        break;
      case "glassesColor":
        updateFeature("glassesColor", value);
        break;
      default:
        updateFeature(feature as keyof AvatarFeatures, value);
        break;
    }
  };

  // Toggle rotation animation
  const toggleRotation = () => {
    setRotating(!rotating);
  };

  // Reset avatar to default
  const resetAvatar = () => {
    setFeatures(defaultFeatures);
  };

  // Save current avatar
  const saveAvatar = () => {
    onSave(features);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto bg-background">
      {/* 3D-like avatar preview area with Mii Channel style */}
      <div className="relative w-full h-96 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg mb-6 overflow-hidden">
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 ${rotating ? "animate-spin-slow" : ""}`}
        >
          {/* Face shape */}
          <div
            className="relative w-full h-full rounded-full"
            style={{ backgroundColor: features.skinColor }}
          >
            {/* Eyes */}
            <div
              className="absolute flex justify-center w-full"
              style={{ top: `${30 + (features.eyePosition - 50) * 0.2}%` }}
            >
              <div className="flex space-x-8">
                <div
                  className="rounded-full bg-white w-10 h-10 flex items-center justify-center"
                  style={{
                    width: `${2 + features.eyeSize * 0.08}rem`,
                    height: `${2 + features.eyeSize * 0.08}rem`,
                  }}
                >
                  <div
                    className="rounded-full"
                    style={{
                      backgroundColor: features.eyeColor,
                      width: `${1 + features.eyeSize * 0.04}rem`,
                      height: `${1 + features.eyeSize * 0.04}rem`,
                    }}
                  ></div>
                </div>
                <div
                  className="rounded-full bg-white w-10 h-10 flex items-center justify-center"
                  style={{
                    width: `${2 + features.eyeSize * 0.08}rem`,
                    height: `${2 + features.eyeSize * 0.08}rem`,
                  }}
                >
                  <div
                    className="rounded-full"
                    style={{
                      backgroundColor: features.eyeColor,
                      width: `${1 + features.eyeSize * 0.04}rem`,
                      height: `${1 + features.eyeSize * 0.04}rem`,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Eyebrows */}
            <div
              className="absolute flex justify-center w-full"
              style={{ top: `${20 + (features.eyebrowPosition - 50) * 0.2}%` }}
            >
              <div className="flex space-x-12">
                <div
                  className="w-8 h-2 bg-black rounded-full"
                  style={{ backgroundColor: features.hairColor }}
                ></div>
                <div
                  className="w-8 h-2 bg-black rounded-full"
                  style={{ backgroundColor: features.hairColor }}
                ></div>
              </div>
            </div>

            {/* Nose */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2"
              style={{ top: `${45 + (features.nosePosition - 50) * 0.2}%` }}
            >
              <div
                className="w-6 h-6 bg-opacity-20 rounded-full"
                style={{ backgroundColor: `${features.skinColor}99` }}
              ></div>
            </div>

            {/* Mouth */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2"
              style={{ top: `${65 + (features.mouthPosition - 50) * 0.2}%` }}
            >
              <div
                className="bg-red-500 rounded-lg"
                style={{
                  width: `${3 + features.mouthSize * 0.08}rem`,
                  height: `${1 + features.mouthSize * 0.02}rem`,
                  marginLeft: `-${(3 + features.mouthSize * 0.08) / 2}rem`,
                }}
              ></div>
            </div>

            {/* Hair */}
            <div
              className="absolute top-0 left-0 w-full"
              style={{ height: "40%" }}
            >
              <div
                className="w-full h-full rounded-t-full"
                style={{ backgroundColor: features.hairColor }}
              ></div>
            </div>

            {/* Glasses (if enabled) */}
            {features.glassesStyle >= 0 && (
              <div
                className="absolute flex justify-center w-full"
                style={{ top: `${28 + (features.eyePosition - 50) * 0.2}%` }}
              >
                <div className="relative flex items-center justify-center">
                  {/* Left lens */}
                  <div
                    className="relative w-12 h-10 border-2 rounded-full bg-white bg-opacity-10 backdrop-blur-sm"
                    style={{
                      borderColor: features.glassesColor,
                      boxShadow: `inset 0 0 10px rgba(255,255,255,0.3), 0 2px 4px rgba(0,0,0,0.2)`,
                    }}
                  >
                    {/* Lens reflection */}
                    <div className="absolute top-1 left-1 w-3 h-3 bg-white rounded-full opacity-40"></div>
                  </div>

                  {/* Bridge */}
                  <div
                    className="w-4 h-1 border-t-2 mx-1"
                    style={{ borderColor: features.glassesColor }}
                  ></div>

                  {/* Right lens */}
                  <div
                    className="relative w-12 h-10 border-2 rounded-full bg-white bg-opacity-10 backdrop-blur-sm"
                    style={{
                      borderColor: features.glassesColor,
                      boxShadow: `inset 0 0 10px rgba(255,255,255,0.3), 0 2px 4px rgba(0,0,0,0.2)`,
                    }}
                  >
                    {/* Lens reflection */}
                    <div className="absolute top-1 left-1 w-3 h-3 bg-white rounded-full opacity-40"></div>
                  </div>

                  {/* Left temple */}
                  <div
                    className="absolute left-0 w-8 h-1 border-t-2 transform -translate-x-full translate-y-1"
                    style={{ borderColor: features.glassesColor }}
                  ></div>

                  {/* Right temple */}
                  <div
                    className="absolute right-0 w-8 h-1 border-t-2 transform translate-x-full translate-y-1"
                    style={{ borderColor: features.glassesColor }}
                  ></div>
                </div>
              </div>
            )}

            {/* Facial hair (if enabled) */}
            {features.facialHairStyle >= 0 && (
              <div
                className="absolute left-1/2 transform -translate-x-1/2"
                style={{ top: "75%", width: "60%", height: "15%" }}
              >
                <div
                  className="w-full h-full rounded-b-full"
                  style={{ backgroundColor: features.facialHairColor }}
                ></div>
              </div>
            )}

            {/* Mole (if enabled) */}
            {features.moleEnabled && (
              <div
                className="absolute w-2 h-2 rounded-full bg-brown-600"
                style={{
                  left: `${features.molePosition.x}%`,
                  top: `${features.molePosition.y}%`,
                  backgroundColor: "#8B4513",
                }}
              ></div>
            )}
          </div>
        </div>

        {/* 3D platform effect */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-4 bg-blue-800 rounded-full opacity-50"></div>
      </div>

      {/* Feature controls */}
      <Card className="w-full p-6 shadow-lg">
        <FeatureControls onFeatureChange={handleFeatureChange} />
      </Card>

      {/* Action buttons */}
      <div className="mt-6 w-full">
        <AvatarActions
          onSave={saveAvatar}
          onReset={resetAvatar}
          onRotate={toggleRotation}
        />
      </div>
    </div>
  );
};

export default AvatarEditor;
