import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ChevronDown, User } from "lucide-react";

const recentReviews = [
  {
    id: "1",
    name: "LABUBU Constellation Series Figure",
    reviewDate: "2025-07-28",
    earnings: "$25.50",
    status: "completed" as const
  },
  {
    id: "2", 
    name: "LABUBU Summer Beach Collection",
    reviewDate: "2025-07-26",
    earnings: "$22.00",
    status: "completed" as const
  },
  {
    id: "3",
    name: "LABUBU x Artist Collaboration Set",
    reviewDate: "2025-07-24",
    earnings: "$28.75",
    status: "pending" as const
  },
  {
    id: "4",
    name: "LABUBU Vintage Retro Series",
    reviewDate: "2025-07-22",
    earnings: "$24.25",
    status: "completed" as const
  },
  {
    id: "5",
    name: "LABUBU Crystal Edition Pendant",
    reviewDate: "2025-07-20",
    earnings: "$21.50",
    status: "completed" as const
  }
];

const ReviewerSection = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [balance, setBalance] = useState(2277.74);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWithdraw = () => {
    // Animate balance decrease
    setBalance(0);
    toast({
      title: "Withdrawal Successful!",
      description: `$${balance.toFixed(2)} has been withdrawn to your account.`,
    });
    
    // Reset balance after animation
    setTimeout(() => {
      setBalance(2277.74);
    }, 3000);
  };

  const handleEarningsClick = () => {
    navigate("/earnings");
  };

  return (
    <div className="relative">
      {/* Collapsible Header */}
      <div 
        className="flex items-center justify-between cursor-pointer bg-white p-3 rounded-lg border shadow-sm hover:shadow-md transition-shadow min-w-[180px]"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-reviewer-green" />
          <span className="font-medium text-popmart-text text-sm">Reviewer Account</span>
        </div>
        <ChevronDown 
          className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`} 
        />
      </div>

      {/* Expandable Content - Positioned absolutely */}
      {isExpanded && (
        <div className="absolute top-full right-0 mt-2 z-50 w-80 space-y-4 animate-fade-in">
          {/* Account Balance Card */}
          <Card className="bg-gradient-to-br from-reviewer-green to-reviewer-green/80 text-white animate-scale-in shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold">Account Balance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-0">
              <div 
                className="cursor-pointer hover:bg-white/10 rounded-lg p-3 transition-colors"
                onClick={handleEarningsClick}
              >
                <p className="text-xs opacity-90">Available Balance</p>
                <p className="text-2xl font-bold transition-all duration-1000">
                  ${balance.toFixed(2)}
                </p>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  onClick={handleWithdraw}
                  size="sm"
                  className="flex-1 bg-white text-reviewer-green hover:bg-white/90 font-medium"
                >
                  Withdraw
                </Button>
                <Button 
                  onClick={handleEarningsClick}
                  size="sm"
                  variant="outline" 
                  className="flex-1 border-white text-white hover:bg-white hover:text-reviewer-green"
                >
                  Details
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Reviews */}
          <Card className="animate-scale-in shadow-lg" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold text-popmart-text">
                Recent Reviews
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {recentReviews.slice(0, 3).map((review, index) => (
                  <div 
                    key={review.id} 
                    className="flex items-center justify-between p-2 rounded-lg bg-popmart-gray hover:bg-popmart-gray/80 transition-colors animate-fade-in"
                    style={{ animationDelay: `${0.2 + index * 0.05}s` }}
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-popmart-text truncate">
                        {review.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {review.reviewDate}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 ml-2">
                      <Badge 
                        variant={review.status === "completed" ? "default" : "secondary"}
                        className={`text-xs ${review.status === "completed" 
                          ? "bg-reviewer-green hover:bg-reviewer-green text-white" 
                          : ""
                        }`}
                      >
                        {review.status}
                      </Badge>
                      <span className="text-xs font-semibold text-reviewer-green">
                        {review.earnings}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button 
                size="sm"
                variant="outline" 
                className="w-full mt-3 animate-fade-in text-xs"
                onClick={handleEarningsClick}
                style={{ animationDelay: '0.4s' }}
              >
                View All Reviews
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ReviewerSection;