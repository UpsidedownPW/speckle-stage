import { Heart, Play, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
interface FamilyCardProps {
  id: string;
  name: string;
  category: string;
  usageCount: number;
  imageUrl?: string;
}
export function FamilyCard({
  id,
  name,
  category,
  usageCount
}: FamilyCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  return <Card className="card-hover cursor-pointer p-4 group relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => navigate(`/family/${id}`)}>
      {/* Preview Card Summary */}
      <div className="aspect-square bg-secondary/50 rounded-md mb-4 relative overflow-hidden border border-border/50">
        <div className="h-full flex flex-col items-center justify-center p-4 gap-3">
          <div className="w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Play className="w-8 h-8 text-primary" />
          </div>
          <div className="text-center space-y-1">
            <p className="text-sm font-medium text-foreground line-clamp-2">{name}</p>
            <p className="text-xs text-muted-foreground">{category}</p>
          </div>
        </div>
        
        {isHovered && <Button size="icon" className="absolute bottom-2 right-2 bg-primary hover:scale-105 transition-transform shadow-lg" onClick={e => {
        e.stopPropagation();
        navigate(`/family/${id}`);
      }}>
            <Play className="w-5 h-5 fill-current" />
          </Button>}
      </div>

      <div className="space-y-1">
        <h3 className="font-semibold text-foreground truncate">{name}</h3>
        <p className="text-sm text-muted-foreground">{category}</p>
        <p className="text-xs text-muted-foreground">{usageCount} uses</p>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
        
        <Button size="icon" variant="ghost" className="h-8 w-8" onClick={e => e.stopPropagation()}>
          <ThumbsUp className="w-4 h-4" />
        </Button>
        <Button size="icon" variant="ghost" className="h-8 w-8" onClick={e => e.stopPropagation()}>
          <ThumbsDown className="w-4 h-4" />
        </Button>
      </div>
    </Card>;
}