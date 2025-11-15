import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ThumbsUp, ThumbsDown, Play, MoreVertical } from "lucide-react";
import { useState } from "react";

const mockFamilyTypes = [
  { id: "1", name: "Type A - 12x12", usageCount: 450 },
  { id: "2", name: "Type B - 18x18", usageCount: 320 },
  { id: "3", name: "Type C - 24x24", usageCount: 280 },
  { id: "4", name: "Type D - 30x30", usageCount: 200 },
];

export default function FamilyDetail() {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [thumbsUp, setThumbsUp] = useState(false);
  const [thumbsDown, setThumbsDown] = useState(false);

  return (
    <div className="min-h-screen ml-64">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-secondary to-background p-8">
        <div className="flex gap-8 items-end">
          {/* Preview Image */}
          <div className="w-64 h-64 bg-card rounded-lg shadow-2xl flex items-center justify-center">
            <div className="text-muted-foreground">Speckle 3D Preview</div>
          </div>

          {/* Family Info */}
          <div className="flex-1 pb-4">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2">
              Family
            </p>
            <h1 className="text-5xl font-bold mb-4">
              Structural Column - Wide Flange
            </h1>
            <p className="text-muted-foreground mb-4">Structural Columns</p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">1,250 total uses</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">4 types</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">Last used 2 days ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="p-8 flex gap-4 items-center">
        <Button size="lg" className="rounded-full px-8 gap-2">
          <Play className="w-5 h-5 fill-current" />
          Load in Revit
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full w-12 h-12"
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart
            className={`w-6 h-6 ${isLiked ? "fill-primary text-primary" : ""}`}
          />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full w-12 h-12"
          onClick={() => {
            setThumbsUp(!thumbsUp);
            if (thumbsDown) setThumbsDown(false);
          }}
        >
          <ThumbsUp
            className={`w-6 h-6 ${thumbsUp ? "fill-primary text-primary" : ""}`}
          />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full w-12 h-12"
          onClick={() => {
            setThumbsDown(!thumbsDown);
            if (thumbsUp) setThumbsUp(false);
          }}
        >
          <ThumbsDown
            className={`w-6 h-6 ${
              thumbsDown ? "fill-destructive text-destructive" : ""
            }`}
          />
        </Button>
        <Button size="icon" variant="ghost" className="rounded-full w-12 h-12">
          <MoreVertical className="w-6 h-6" />
        </Button>
      </div>

      {/* Family Types Table */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6">Family Types</h2>
        <div className="space-y-2">
          {mockFamilyTypes.map((type, index) => (
            <div
              key={type.id}
              className="flex items-center gap-4 p-4 rounded-md hover:bg-secondary transition-colors group cursor-pointer"
            >
              <div className="text-muted-foreground w-8">{index + 1}</div>
              <div className="flex-1">
                <div className="font-medium">{type.name}</div>
              </div>
              <div className="text-muted-foreground text-sm">
                {type.usageCount} uses
              </div>
              <Button
                size="icon"
                variant="ghost"
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Play className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Stats */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6">Usage Statistics</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-card p-6 rounded-lg">
            <p className="text-muted-foreground text-sm mb-2">By Project</p>
            <p className="text-2xl font-bold">Tower A: 560 uses</p>
            <p className="text-lg">Campus B: 420 uses</p>
            <p className="text-lg">Residential: 270 uses</p>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <p className="text-muted-foreground text-sm mb-2">By Office</p>
            <p className="text-2xl font-bold">New York: 750 uses</p>
            <p className="text-lg">San Francisco: 350 uses</p>
            <p className="text-lg">London: 150 uses</p>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <p className="text-muted-foreground text-sm mb-2">By Quarter</p>
            <p className="text-2xl font-bold">Q4 2024: 450 uses</p>
            <p className="text-lg">Q3 2024: 380 uses</p>
            <p className="text-lg">Q2 2024: 420 uses</p>
          </div>
        </div>
      </div>
    </div>
  );
}
