import { Search, User, Heart, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ReviewerSection from "@/components/ReviewerSection";

const Header = () => {
  return (
    <header className="bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-6">
            <div className="relative">
              <Input 
                placeholder="SKULLPANDA" 
                className="w-48 pl-4 pr-10 bg-popmart-gray border-border rounded-full"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
          </div>
          
          <div className="flex items-center justify-center flex-1">
            <div className="bg-popmart-red text-white px-6 py-2 font-bold text-xl tracking-wide">
              POP MART
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="p-2">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <ShoppingCart className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex items-center justify-between py-4 border-t border-border">
          <div className="flex items-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-popmart-red transition-colors">NEW & FEATURED</a>
            <a href="#" className="hover:text-popmart-red transition-colors">CATEGORIES</a>
            <a href="#" className="hover:text-popmart-red transition-colors">CHARACTERS</a>
            <a href="#" className="hover:text-popmart-red transition-colors">ACCESSORIES</a>
            <a href="#" className="hover:text-popmart-red transition-colors">MEGA</a>
            <a href="#" className="hover:text-popmart-red transition-colors">STORE PICKUP</a>
          </div>
          
          {/* Reviewer Section in Header */}
          <div className="flex items-center">
            <ReviewerSection />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;