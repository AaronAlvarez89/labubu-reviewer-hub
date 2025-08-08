import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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
    <div className="w-80 space-y-6">
      {/* Account Balance Card */}
      <Card className="bg-gradient-to-br from-reviewer-green to-reviewer-green/80 text-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Reviewer Account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div 
            className="cursor-pointer hover:bg-white/10 rounded-lg p-3 transition-colors"
            onClick={handleEarningsClick}
          >
            <p className="text-sm opacity-90">Available Balance</p>
            <p className="text-3xl font-bold transition-all duration-1000">
              ${balance.toFixed(2)}
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button 
              onClick={handleWithdraw}
              className="flex-1 bg-white text-reviewer-green hover:bg-white/90 font-medium"
            >
              Withdraw
            </Button>
            <Button 
              onClick={handleEarningsClick}
              variant="outline" 
              className="flex-1 border-white text-white hover:bg-white hover:text-reviewer-green"
            >
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Reviews */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-popmart-text">
            Recent Reviews
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentReviews.map((review) => (
              <div key={review.id} className="flex items-center justify-between p-3 rounded-lg bg-popmart-gray hover:bg-popmart-gray/80 transition-colors">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-popmart-text truncate">
                    {review.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {review.reviewDate}
                  </p>
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <Badge 
                    variant={review.status === "completed" ? "default" : "secondary"}
                    className={review.status === "completed" 
                      ? "bg-reviewer-green hover:bg-reviewer-green text-white" 
                      : ""
                    }
                  >
                    {review.status}
                  </Badge>
                  <span className="text-sm font-semibold text-reviewer-green">
                    {review.earnings}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <Button 
            variant="outline" 
            className="w-full mt-4"
            onClick={handleEarningsClick}
          >
            View All Reviews
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReviewerSection;