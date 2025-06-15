import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Save, Download, Upload, RefreshCw } from "lucide-react";

interface AvatarActionsProps {
  onSave?: (name: string) => void;
  onExport?: () => void;
  onLoad?: (avatar: any) => void;
  onNew?: () => void;
  savedAvatars?: Array<{ id: string; name: string; data: any }>;
}

const AvatarActions: React.FC<AvatarActionsProps> = ({
  onSave = () => {},
  onExport = () => {},
  onLoad = () => {},
  onNew = () => {},
  savedAvatars = [],
}) => {
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [loadDialogOpen, setLoadDialogOpen] = useState(false);
  const [avatarName, setAvatarName] = useState("");

  const handleSave = () => {
    if (avatarName.trim()) {
      onSave(avatarName);
      setSaveDialogOpen(false);
      setAvatarName("");
    }
  };

  const handleLoadAvatar = (avatar: any) => {
    onLoad(avatar);
    setLoadDialogOpen(false);
  };

  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-md w-full">
      <div className="flex flex-wrap justify-center gap-4">
        <Button
          onClick={() => setSaveDialogOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white transition-transform hover:scale-105"
        >
          <Save className="mr-2 h-4 w-4" />
          Save Avatar
        </Button>

        <Button
          onClick={onExport}
          className="bg-green-500 hover:bg-green-600 text-white transition-transform hover:scale-105"
        >
          <Download className="mr-2 h-4 w-4" />
          Export Image
        </Button>

        <Button
          onClick={() => setLoadDialogOpen(true)}
          className="bg-purple-500 hover:bg-purple-600 text-white transition-transform hover:scale-105"
        >
          <Upload className="mr-2 h-4 w-4" />
          Load Avatar
        </Button>

        <Button
          onClick={onNew}
          className="bg-orange-500 hover:bg-orange-600 text-white transition-transform hover:scale-105"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          New Avatar
        </Button>
      </div>

      {/* Save Dialog */}
      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
        <DialogContent className="bg-blue-50 border-2 border-blue-300">
          <DialogHeader>
            <DialogTitle className="text-blue-700">
              Save Your Avatar
            </DialogTitle>
            <DialogDescription>
              Give your avatar a name to save it for later.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={avatarName}
                onChange={(e) => setAvatarName(e.target.value)}
                className="col-span-3"
                placeholder="My Awesome Avatar"
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              onClick={() => setSaveDialogOpen(false)}
              variant="outline"
              className="border-blue-300"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              className="bg-blue-500 hover:bg-blue-600"
              disabled={!avatarName.trim()}
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Load Dialog */}
      <Dialog open={loadDialogOpen} onOpenChange={setLoadDialogOpen}>
        <DialogContent className="bg-blue-50 border-2 border-blue-300">
          <DialogHeader>
            <DialogTitle className="text-blue-700">Load Avatar</DialogTitle>
            <DialogDescription>
              Select a saved avatar to load.
            </DialogDescription>
          </DialogHeader>

          <div className="max-h-[300px] overflow-y-auto">
            {savedAvatars.length > 0 ? (
              <div className="grid gap-2">
                {savedAvatars.map((avatar) => (
                  <Button
                    key={avatar.id}
                    variant="outline"
                    className="justify-start text-left hover:bg-blue-100 border-blue-200"
                    onClick={() => handleLoadAvatar(avatar.data)}
                  >
                    {avatar.name}
                  </Button>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 py-4">
                No saved avatars found.
              </p>
            )}
          </div>

          <DialogFooter>
            <Button
              onClick={() => setLoadDialogOpen(false)}
              variant="outline"
              className="border-blue-300"
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AvatarActions;
