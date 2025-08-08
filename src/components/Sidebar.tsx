import { Checkbox } from "@/components/ui/checkbox";

const categories = [
  "POP NOW",
  "Blind Boxes", 
  "Plush Toys",
  "Phone Accessories",
  "Bags",
  "Chain Blind Box",
  "Set",
  "Gifts",
  "Gift Box",
  "Display Containers",
  "POP BEAN",
  "Light Bulb Blind Box",
  "Fidget Spinner Blind Box",
  "Windbell Blind Box",
  "Pendant",
  "Drinkware",
  "All MEGA",
  "Charm Blind Box",
  "Lanyard Blind Box",
  "Standing Board Blind Box",
  "Box",
  "Fragrance Blind Box",
  "Fridge Magnet",
  "Other Accessories",
  "Designer Figurines"
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-white p-6 border-r border-border">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Checkbox id="pop-now" />
          <label htmlFor="pop-now" className="text-sm font-medium">POP NOW</label>
        </div>
        
        <div className="space-y-3">
          <h3 className="font-medium text-popmart-text">Category</h3>
          
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {categories.map((category) => (
              <div key={category} className="flex items-center gap-2">
                <Checkbox id={category.replace(/\s+/g, '-').toLowerCase()} />
                <label 
                  htmlFor={category.replace(/\s+/g, '-').toLowerCase()} 
                  className="text-sm text-popmart-text hover:text-popmart-red cursor-pointer"
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;