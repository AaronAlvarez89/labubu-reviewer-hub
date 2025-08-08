import { ArrowLeft, Download, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const withdrawalHistory = [
  {
    id: "1",
    date: "2025-07-15",
    amount: 450.25,
    status: "completed" as const,
    method: "PayPal"
  },
  {
    id: "2",
    date: "2025-07-01",
    amount: 675.50,
    status: "completed" as const,
    method: "Bank Transfer"
  },
  {
    id: "3",
    date: "2025-06-28",
    amount: 389.75,
    status: "completed" as const,
    method: "PayPal"
  },
  {
    id: "4", 
    date: "2025-06-15",
    amount: 523.00,
    status: "completed" as const,
    method: "Bank Transfer"
  },
  {
    id: "5",
    date: "2025-06-02",
    amount: 412.80,
    status: "completed" as const,
    method: "PayPal"
  }
];

const monthlyStats = [
  { month: "July 2025", earnings: 1250.75, reviews: 52 },
  { month: "June 2025", earnings: 1834.55, reviews: 76 },
  { month: "May 2025", earnings: 1456.20, reviews: 61 }
];

const Earnings = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-popmart-light-gray">
      <Header />
      
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="p-2"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold text-popmart-text">Earnings Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-reviewer-green" />
                    <span className="text-sm font-medium text-muted-foreground">Total Earnings</span>
                  </div>
                  <p className="text-2xl font-bold text-popmart-text">$4,541.50</p>
                  <p className="text-sm text-reviewer-green">+15.2% this month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-muted-foreground">Reviews Completed</span>
                  </div>
                  <p className="text-2xl font-bold text-popmart-text">189</p>
                  <p className="text-sm text-reviewer-green">52 this month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-muted-foreground">Avg. per Review</span>
                  </div>
                  <p className="text-2xl font-bold text-popmart-text">$24.03</p>
                  <p className="text-sm text-muted-foreground">Industry standard</p>
                </CardContent>
              </Card>
            </div>

            {/* Monthly Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Monthly Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {monthlyStats.map((stat) => (
                    <div key={stat.month} className="flex items-center justify-between p-4 rounded-lg bg-popmart-gray">
                      <div>
                        <p className="font-medium text-popmart-text">{stat.month}</p>
                        <p className="text-sm text-muted-foreground">{stat.reviews} reviews completed</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-reviewer-green">${stat.earnings.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Withdrawal History */}
          <div>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Withdrawal History</CardTitle>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {withdrawalHistory.map((withdrawal) => (
                    <div key={withdrawal.id} className="flex items-center justify-between p-3 rounded-lg border">
                      <div>
                        <p className="font-medium text-popmart-text">${withdrawal.amount.toFixed(2)}</p>
                        <p className="text-xs text-muted-foreground">{withdrawal.date}</p>
                        <p className="text-xs text-muted-foreground">{withdrawal.method}</p>
                      </div>
                      <Badge 
                        variant="default"
                        className="bg-reviewer-green hover:bg-reviewer-green text-white"
                      >
                        {withdrawal.status}
                      </Badge>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-popmart-text">Total Withdrawn:</span>
                    <span className="text-lg font-bold text-popmart-text">
                      ${withdrawalHistory.reduce((sum, w) => sum + w.amount, 0).toFixed(2)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;