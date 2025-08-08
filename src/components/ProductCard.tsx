import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  reviewPrice: string;
  image: string;
  status?: "out-of-stock" | "coming-soon" | "hot" | null;
}

const ProductCard = ({ id, name, price, reviewPrice, image, status }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border border-border bg-white">
      <CardContent className="p-0">
        <div className="relative">
          <img 
            src={image} 
            alt={name}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          
          {status && (
            <div className="absolute top-2 left-2">
              {status === "out-of-stock" && (
                <Badge variant="secondary" className="bg-muted text-muted-foreground">
                  OUT OF STOCK
                </Badge>
              )}
              {status === "coming-soon" && (
                <Badge className="bg-popmart-text text-white">
                  COMING SOON
                </Badge>
              )}
              {status === "hot" && (
                <Badge className="bg-popmart-red text-white">
                  HOT
                </Badge>
              )}
            </div>
          )}
        </div>
        
        <div className="p-4 space-y-3">
          <div>
            <p className="text-xs text-muted-foreground font-medium">LABUBU</p>
            <h3 className="text-sm font-medium text-popmart-text line-clamp-2 mt-1">
              {name}
            </h3>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-popmart-text">{price}</span>
          </div>
          
          <Button 
            className="w-full bg-reviewer-green hover:bg-reviewer-green/90 text-white font-medium"
            disabled={status === "out-of-stock"}
          >
            {status === "out-of-stock" 
              ? "Out of Stock" 
              : `Professional Review - ${reviewPrice}`}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;