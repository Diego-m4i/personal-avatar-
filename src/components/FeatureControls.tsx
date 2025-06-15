import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Palette } from "lucide-react";

interface FeatureControlsProps {
  onFeatureChange?: (feature: string, value: any) => void;
}

const FeatureControls: React.FC<FeatureControlsProps> = ({
  onFeatureChange = () => {},
}) => {
  const [activeTab, setActiveTab] = useState("face");

  // Default values for all features
  const [faceShape, setFaceShape] = useState(1);
  const [skinColor, setSkinColor] = useState("#FFD8B4");
  const [hairStyle, setHairStyle] = useState(1);
  const [hairColor, setHairColor] = useState("#3A3A3A");
  const [eyeStyle, setEyeStyle] = useState(1);
  const [eyeColor, setEyeColor] = useState("#3A3A3A");
  const [eyeSize, setEyeSize] = useState(50);
  const [eyeSpacing, setEyeSpacing] = useState(50);
  const [eyebrowStyle, setEyebrowStyle] = useState(1);
  const [eyebrowColor, setEyebrowColor] = useState("#3A3A3A");
  const [eyebrowSize, setEyebrowSize] = useState(50);
  const [noseStyle, setNoseStyle] = useState(1);
  const [noseSize, setNoseSize] = useState(50);
  const [noseHeight, setNoseHeight] = useState(50);
  const [mouthStyle, setMouthStyle] = useState(1);
  const [mouthSize, setMouthSize] = useState(50);
  const [mouthHeight, setMouthHeight] = useState(50);
  const [hasGlasses, setHasGlasses] = useState(false);
  const [glassesStyle, setGlassesStyle] = useState(1);
  const [glassesColor, setGlassesColor] = useState("#000000");
  const [hasFacialHair, setHasFacialHair] = useState(false);
  const [facialHairStyle, setFacialHairStyle] = useState(1);
  const [facialHairColor, setFacialHairColor] = useState("#3A3A3A");
  const [hasMole, setHasMole] = useState(false);
  const [molePosition, setMolePosition] = useState({ x: 50, y: 50 });

  const handleFeatureChange = (feature: string, value: any) => {
    // Update local state based on feature
    switch (feature) {
      case "faceShape":
        setFaceShape(value);
        break;
      case "skinColor":
        setSkinColor(value);
        break;
      case "hairStyle":
        setHairStyle(value);
        break;
      case "hairColor":
        setHairColor(value);
        break;
      case "eyeStyle":
        setEyeStyle(value);
        break;
      case "eyeColor":
        setEyeColor(value);
        break;
      case "eyeSize":
        setEyeSize(value);
        break;
      case "eyeSpacing":
        setEyeSpacing(value);
        break;
      case "eyebrowStyle":
        setEyebrowStyle(value);
        break;
      case "eyebrowColor":
        setEyebrowColor(value);
        break;
      case "eyebrowSize":
        setEyebrowSize(value);
        break;
      case "noseStyle":
        setNoseStyle(value);
        break;
      case "noseSize":
        setNoseSize(value);
        break;
      case "noseHeight":
        setNoseHeight(value);
        break;
      case "mouthStyle":
        setMouthStyle(value);
        break;
      case "mouthSize":
        setMouthSize(value);
        break;
      case "mouthHeight":
        setMouthHeight(value);
        break;
      case "hasGlasses":
        setHasGlasses(value);
        break;
      case "glassesStyle":
        setGlassesStyle(value);
        break;
      case "glassesColor":
        setGlassesColor(value);
        break;
      case "hasFacialHair":
        setHasFacialHair(value);
        break;
      case "facialHairStyle":
        setFacialHairStyle(value);
        break;
      case "facialHairColor":
        setFacialHairColor(value);
        break;
      case "hasMole":
        setHasMole(value);
        break;
      case "molePositionX":
        setMolePosition((prev) => ({ ...prev, x: value }));
        break;
      case "molePositionY":
        setMolePosition((prev) => ({ ...prev, y: value }));
        break;
      default:
        break;
    }

    // Pass the change to parent component
    onFeatureChange(feature, value);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-md p-4">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 md:grid-cols-9 w-full bg-blue-100">
          <TabsTrigger value="face" className="text-xs md:text-sm">
            Face
          </TabsTrigger>
          <TabsTrigger value="hair" className="text-xs md:text-sm">
            Hair
          </TabsTrigger>
          <TabsTrigger value="eyes" className="text-xs md:text-sm">
            Eyes
          </TabsTrigger>
          <TabsTrigger value="eyebrows" className="text-xs md:text-sm">
            Eyebrows
          </TabsTrigger>
          <TabsTrigger value="nose" className="text-xs md:text-sm">
            Nose
          </TabsTrigger>
          <TabsTrigger value="mouth" className="text-xs md:text-sm">
            Mouth
          </TabsTrigger>
          <TabsTrigger value="glasses" className="text-xs md:text-sm">
            Glasses
          </TabsTrigger>
          <TabsTrigger value="facial-hair" className="text-xs md:text-sm">
            Facial Hair
          </TabsTrigger>
          <TabsTrigger value="moles" className="text-xs md:text-sm">
            Moles
          </TabsTrigger>
        </TabsList>

        {/* Face Shape Tab */}
        <TabsContent value="face" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <Label>Face Shape</Label>
                  <div className="flex items-center justify-between mt-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        handleFeatureChange(
                          "faceShape",
                          Math.max(1, faceShape - 1),
                        )
                      }
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div className="text-center">
                      <span className="text-sm font-medium">
                        Style {faceShape}
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        handleFeatureChange(
                          "faceShape",
                          Math.min(10, faceShape + 1),
                        )
                      }
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label>Skin Color</Label>
                  <div className="flex items-center gap-2 mt-2">
                    <Input
                      type="color"
                      value={skinColor}
                      onChange={(e) =>
                        handleFeatureChange("skinColor", e.target.value)
                      }
                      className="w-12 h-8 p-1"
                    />
                    <div className="flex-1">
                      <div
                        className="h-8 rounded-md border"
                        style={{ backgroundColor: skinColor }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Hair Tab */}
        <TabsContent value="hair" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <Label>Hair Style</Label>
                  <div className="flex items-center justify-between mt-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        handleFeatureChange(
                          "hairStyle",
                          Math.max(1, hairStyle - 1),
                        )
                      }
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div className="text-center">
                      <span className="text-sm font-medium">
                        Style {hairStyle}
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        handleFeatureChange(
                          "hairStyle",
                          Math.min(20, hairStyle + 1),
                        )
                      }
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label>Hair Color</Label>
                  <div className="flex items-center gap-2 mt-2">
                    <Input
                      type="color"
                      value={hairColor}
                      onChange={(e) =>
                        handleFeatureChange("hairColor", e.target.value)
                      }
                      className="w-12 h-8 p-1"
                    />
                    <div className="flex-1">
                      <div
                        className="h-8 rounded-md border"
                        style={{ backgroundColor: hairColor }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Eyes Tab */}
        <TabsContent value="eyes" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <Label>Eye Style</Label>
                  <div className="flex items-center justify-between mt-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        handleFeatureChange(
                          "eyeStyle",
                          Math.max(1, eyeStyle - 1),
                        )
                      }
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div className="text-center">
                      <span className="text-sm font-medium">
                        Style {eyeStyle}
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        handleFeatureChange(
                          "eyeStyle",
                          Math.min(15, eyeStyle + 1),
                        )
                      }
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label>Eye Color</Label>
                  <div className="flex items-center gap-2 mt-2">
                    <Input
                      type="color"
                      value={eyeColor}
                      onChange={(e) =>
                        handleFeatureChange("eyeColor", e.target.value)
                      }
                      className="w-12 h-8 p-1"
                    />
                    <div className="flex-1">
                      <div
                        className="h-8 rounded-md border"
                        style={{ backgroundColor: eyeColor }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div>
                  <Label>Eye Size: {eyeSize}%</Label>
                  <Slider
                    value={[eyeSize]}
                    min={10}
                    max={100}
                    step={1}
                    onValueChange={(value) =>
                      handleFeatureChange("eyeSize", value[0])
                    }
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Eye Spacing: {eyeSpacing}%</Label>
                  <Slider
                    value={[eyeSpacing]}
                    min={10}
                    max={100}
                    step={1}
                    onValueChange={(value) =>
                      handleFeatureChange("eyeSpacing", value[0])
                    }
                    className="mt-2"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Eyebrows Tab */}
        <TabsContent value="eyebrows" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <Label>Eyebrow Style</Label>
                  <div className="flex items-center justify-between mt-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        handleFeatureChange(
                          "eyebrowStyle",
                          Math.max(1, eyebrowStyle - 1),
                        )
                      }
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div className="text-center">
                      <span className="text-sm font-medium">
                        Style {eyebrowStyle}
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        handleFeatureChange(
                          "eyebrowStyle",
                          Math.min(10, eyebrowStyle + 1),
                        )
                      }
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label>Eyebrow Color</Label>
                  <div className="flex items-center gap-2 mt-2">
                    <Input
                      type="color"
                      value={eyebrowColor}
                      onChange={(e) =>
                        handleFeatureChange("eyebrowColor", e.target.value)
                      }
                      className="w-12 h-8 p-1"
                    />
                    <div className="flex-1">
                      <div
                        className="h-8 rounded-md border"
                        style={{ backgroundColor: eyebrowColor }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div>
                  <Label>Eyebrow Size: {eyebrowSize}%</Label>
                  <Slider
                    value={[eyebrowSize]}
                    min={10}
                    max={100}
                    step={1}
                    onValueChange={(value) =>
                      handleFeatureChange("eyebrowSize", value[0])
                    }
                    className="mt-2"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Nose Tab */}
        <TabsContent value="nose" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <Label>Nose Style</Label>
                  <div className="flex items-center justify-between mt-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        handleFeatureChange(
                          "noseStyle",
                          Math.max(1, noseStyle - 1),
                        )
                      }
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div className="text-center">
                      <span className="text-sm font-medium">
                        Style {noseStyle}
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        handleFeatureChange(
                          "noseStyle",
                          Math.min(8, noseStyle + 1),
                        )
                      }
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label>Nose Size: {noseSize}%</Label>
                  <Slider
                    value={[noseSize]}
                    min={10}
                    max={100}
                    step={1}
                    onValueChange={(value) =>
                      handleFeatureChange("noseSize", value[0])
                    }
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Nose Height: {noseHeight}%</Label>
                  <Slider
                    value={[noseHeight]}
                    min={10}
                    max={100}
                    step={1}
                    onValueChange={(value) =>
                      handleFeatureChange("noseHeight", value[0])
                    }
                    className="mt-2"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Mouth Tab */}
        <TabsContent value="mouth" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <Label>Mouth Style</Label>
                  <div className="flex items-center justify-between mt-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        handleFeatureChange(
                          "mouthStyle",
                          Math.max(1, mouthStyle - 1),
                        )
                      }
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div className="text-center">
                      <span className="text-sm font-medium">
                        Style {mouthStyle}
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        handleFeatureChange(
                          "mouthStyle",
                          Math.min(12, mouthStyle + 1),
                        )
                      }
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label>Mouth Size: {mouthSize}%</Label>
                  <Slider
                    value={[mouthSize]}
                    min={10}
                    max={100}
                    step={1}
                    onValueChange={(value) =>
                      handleFeatureChange("mouthSize", value[0])
                    }
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Mouth Height: {mouthHeight}%</Label>
                  <Slider
                    value={[mouthHeight]}
                    min={10}
                    max={100}
                    step={1}
                    onValueChange={(value) =>
                      handleFeatureChange("mouthHeight", value[0])
                    }
                    className="mt-2"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Glasses Tab */}
        <TabsContent value="glasses" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="has-glasses">Wear Glasses</Label>
                  <Switch
                    id="has-glasses"
                    checked={hasGlasses}
                    onCheckedChange={(checked) =>
                      handleFeatureChange("hasGlasses", checked)
                    }
                  />
                </div>

                {hasGlasses && (
                  <>
                    <div>
                      <Label>Glasses Style</Label>
                      <div className="flex items-center justify-between mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            handleFeatureChange(
                              "glassesStyle",
                              Math.max(1, glassesStyle - 1),
                            )
                          }
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <div className="text-center">
                          <span className="text-sm font-medium">
                            Style {glassesStyle}
                          </span>
                        </div>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            handleFeatureChange(
                              "glassesStyle",
                              Math.min(6, glassesStyle + 1),
                            )
                          }
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label>Glasses Color</Label>
                      <div className="flex items-center gap-2 mt-2">
                        <Input
                          type="color"
                          value={glassesColor}
                          onChange={(e) =>
                            handleFeatureChange("glassesColor", e.target.value)
                          }
                          className="w-12 h-8 p-1"
                        />
                        <div className="flex-1">
                          <div
                            className="h-8 rounded-md border"
                            style={{ backgroundColor: glassesColor }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Facial Hair Tab */}
        <TabsContent value="facial-hair" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="has-facial-hair">Add Facial Hair</Label>
                  <Switch
                    id="has-facial-hair"
                    checked={hasFacialHair}
                    onCheckedChange={(checked) =>
                      handleFeatureChange("hasFacialHair", checked)
                    }
                  />
                </div>

                {hasFacialHair && (
                  <>
                    <div>
                      <Label>Facial Hair Style</Label>
                      <div className="flex items-center justify-between mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            handleFeatureChange(
                              "facialHairStyle",
                              Math.max(1, facialHairStyle - 1),
                            )
                          }
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <div className="text-center">
                          <span className="text-sm font-medium">
                            Style {facialHairStyle}
                          </span>
                        </div>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            handleFeatureChange(
                              "facialHairStyle",
                              Math.min(8, facialHairStyle + 1),
                            )
                          }
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label>Facial Hair Color</Label>
                      <div className="flex items-center gap-2 mt-2">
                        <Input
                          type="color"
                          value={facialHairColor}
                          onChange={(e) =>
                            handleFeatureChange(
                              "facialHairColor",
                              e.target.value,
                            )
                          }
                          className="w-12 h-8 p-1"
                        />
                        <div className="flex-1">
                          <div
                            className="h-8 rounded-md border"
                            style={{ backgroundColor: facialHairColor }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Moles Tab */}
        <TabsContent value="moles" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="has-mole">Add Mole/Mark</Label>
                  <Switch
                    id="has-mole"
                    checked={hasMole}
                    onCheckedChange={(checked) =>
                      handleFeatureChange("hasMole", checked)
                    }
                  />
                </div>

                {hasMole && (
                  <>
                    <div>
                      <Label>Mole Position X: {molePosition.x}%</Label>
                      <Slider
                        value={[molePosition.x]}
                        min={10}
                        max={90}
                        step={1}
                        onValueChange={(value) =>
                          handleFeatureChange("molePositionX", value[0])
                        }
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label>Mole Position Y: {molePosition.y}%</Label>
                      <Slider
                        value={[molePosition.y]}
                        min={10}
                        max={90}
                        step={1}
                        onValueChange={(value) =>
                          handleFeatureChange("molePositionY", value[0])
                        }
                        className="mt-2"
                      />
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FeatureControls;
