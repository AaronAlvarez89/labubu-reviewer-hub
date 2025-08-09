import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Import all product images
import labubu1 from "@/assets/labubu-1.jpg";
import labubu2 from "@/assets/labubu-2.jpg";
import labubu3 from "@/assets/labubu-3.jpg";
import labubu4 from "@/assets/labubu-4.jpg";
import labubu5 from "@/assets/labubu-5.jpg";
import labubu6 from "@/assets/labubu-6.jpg";
import labubu7 from "@/assets/labubu-7.jpg";
import labubu8 from "@/assets/labubu-8.jpg";
import labubu9 from "@/assets/labubu-9.jpg";
import labubu10 from "@/assets/labubu-10.jpg";
import labubu11 from "@/assets/labubu-11.jpg";
import labubu12 from "@/assets/labubu-12.jpg";
import labubu13 from "@/assets/labubu-13.jpg";
import labubu14 from "@/assets/labubu-14.jpg";
import labubu15 from "@/assets/labubu-15.jpg";

const products = [
  {
    id: "1",
    name: "LABUBU Happy Halloween Party Series-LABUBU Canvas Bag",
    price: "$89.99",
    reviewPrice: "$25.00",
    image: labubu1,
    status: null
  },
  {
    id: "2",
    name: "LABUBU Happy Halloween Party Series-Sitting Pumpkin Vinyl Plush Pendant",
    price: "$95.99",
    reviewPrice: "$27.50",
    image: labubu2,
    status: "hot" as const
  },
  {
    id: "3",
    name: "LABUBU x PRONOUNCE-BE FANCY NOW Vinyl Plush Doll",
    price: "$102.99",
    reviewPrice: "$29.00",
    image: labubu3,
    status: null
  },
  {
    id: "4",
    name: "LABUBU Originals-Brown Silicone Earphone Bag",
    price: "$87.99",
    reviewPrice: "$22.50",
    image: labubu4,
    status: null
  },
  {
    id: "5",
    name: "LABUBU Time to chill-Vinyl Plush Doll Series-Vinyl Plush Pendant Blind Box",
    price: "$91.50",
    reviewPrice: "$24.00",
    image: labubu5,
    status: "out-of-stock" as const
  },
  {
    id: "6",
    name: "THE MONSTERS Big into Energy Series-Vinyl Plush Pendant Blind Box",
    price: "$97.25",
    reviewPrice: "$26.50",
    image: labubu6,
    status: "coming-soon" as const
  },
  {
    id: "7",
    name: "THE MONSTERS - Exciting Macaron Vinyl Face Blind Box",
    price: "$85.75",
    reviewPrice: "$21.00",
    image: labubu7,
    status: "hot" as const
  },
  {
    id: "8",
    name: "LABUBU Winter Collection-Cozy Sweater Series",
    price: "$98.99",
    reviewPrice: "$28.00",
    image: labubu8,
    status: null
  },
  {
    id: "9",
    name: "LABUBU Crystal Dreams-Pendant Collection Set",
    price: "$104.50",
    reviewPrice: "$30.00",
    image: labubu9,
    status: "coming-soon" as const
  },
  {
    id: "10",
    name: "LABUBU Pastel Paradise-Phone Case Accessory",
    price: "$86.25",
    reviewPrice: "$23.50",
    image: labubu10,
    status: null
  },
  {
    id: "11",
    name: "LABUBU Adventure Series-Tote Bag Collection",
    price: "$92.75",
    reviewPrice: "$25.50",
    image: labubu11,
    status: null
  },
  {
    id: "12",
    name: "LABUBU Mystery Charm-Blind Box Surprise",
    price: "$88.99",
    reviewPrice: "$24.50",
    image: labubu12,
    status: "hot" as const
  },
  {
    id: "13",
    name: "LABUBU Display Master-Acrylic Stand Collection",
    price: "$94.25",
    reviewPrice: "$26.00",
    image: labubu13,
    status: null
  },
  {
    id: "14",
    name: "LABUBU Premium Gift-Limited Edition Box Set",
    price: "$105.00",
    reviewPrice: "$30.00",
    image: labubu14,
    status: "coming-soon" as const
  },
  {
    id: "15",
    name: "LABUBU Collector's Dream-Special Series Figure",
    price: "$99.75",
    reviewPrice: "$28.50",
    image: labubu15,
    status: null
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-popmart-light-gray">
      <Header />
      
      <div className="max-w-7xl mx-auto flex">
        <Sidebar />
        
        <main className="flex-1 p-6">
          {/* Search Results Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-popmart-text mb-4">Search Results</h1>
            <div className="relative max-w-2xl">
              <Input 
                defaultValue="LABUBU"
                className="w-full pl-4 pr-10 bg-white border-border"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              109 results found by "LABUBU"
            </p>
          </div>

          <div className="flex gap-6">
            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
