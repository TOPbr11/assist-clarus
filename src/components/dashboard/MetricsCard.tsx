import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricsCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  gradient?: boolean;
}

const MetricsCard = ({ 
  title, 
  value, 
  change, 
  changeType = "neutral", 
  icon: Icon,
  gradient = false 
}: MetricsCardProps) => {
  return (
    <Card className={cn(
      "shadow-card hover:shadow-elegant transition-smooth",
      gradient && "bg-gradient-hero text-white border-0"
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className={cn(
          "text-sm font-medium",
          gradient ? "text-white/90" : "text-muted-foreground"
        )}>
          {title}
        </CardTitle>
        <Icon className={cn(
          "h-4 w-4",
          gradient ? "text-white/80" : "text-muted-foreground"
        )} />
      </CardHeader>
      <CardContent>
        <div className={cn(
          "text-2xl font-bold",
          gradient ? "text-white" : "text-foreground"
        )}>
          {value}
        </div>
        {change && (
          <p className={cn(
            "text-xs mt-1",
            gradient ? "text-white/80" : "text-muted-foreground",
            changeType === "positive" && "text-success",
            changeType === "negative" && "text-destructive"
          )}>
            {change}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default MetricsCard;