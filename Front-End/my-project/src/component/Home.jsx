import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";
import FoodDetailModal from "./FoodDetailModal";
import avocadoToastImg from "../assets/Avocado egg toast.jpg";
import {
  UtensilsIcon,
  SearchIcon,
  ClockIcon,
  StarIcon,
  StoreIcon,
  GiftIcon,
  SparklesIcon,
  EggIcon,
  PizzaIcon,
  SaladIcon,
  CakeIcon,
  ZapIcon,
  EyeIcon,
} from "./Icons";

const DISHES_DATA = [
  {
    id: 1,
    title: "Avocado egg toast",
    category: "Breakfast",
    time: "20 min",
    price: 8.5,
    image: avocadoToastImg,
    bgColor: "bg-amber-100/80",
    tag: "Popular",
    tagColor: "bg-amber-500",
    rating: "4.9",
    reviewsCount: "184",
    calories: "340 kcal",
    description:
      "Crispy artisan sourdough bread topped with creamy mashed Hass avocado, perfectly poached organic farm egg, microgreens, and a dash of chili flakes with extra virgin olive oil.",
    ingredients: [
      "Fresh Hass Avocado",
      "Poached Organic Egg",
      "Artisan Sourdough",
      "Microgreens",
      "Chili Flakes",
      "Extra Virgin Olive Oil",
    ],
  },
  {
    id: 2,
    title: "Fluffy pancakes",
    category: "Breakfast",
    time: "20 min",
    price: 7.9,
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=800&auto=format&fit=crop",
    bgColor: "bg-orange-100/80",
    tag: "Sweet",
    tagColor: "bg-orange-500",
    rating: "4.8",
    reviewsCount: "220",
    calories: "450 kcal",
    description:
      "Golden brown stack of triple fluffy buttermilk pancakes drizzled with pure Quebec maple syrup, whipped cream, and fresh organic berries.",
    ingredients: [
      "Buttermilk Batter",
      "Pure Maple Syrup",
      "Fresh Blueberries",
      "Strawberries",
      "Whipped Cream Butter",
    ],
  },
  {
    id: 3,
    title: "Margherita pizza",
    category: "Pizza",
    time: "30 min",
    price: 11.0,
    image:
      "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=800&auto=format&fit=crop",
    bgColor: "bg-rose-100/80",
    tag: "Chef's Pick",
    tagColor: "bg-rose-500",
    rating: "4.9",
    reviewsCount: "310",
    calories: "620 kcal",
    description:
      "Authentic Neapolitan wood-fired crust crowned with crushed San Marzano tomatoes, fresh buffalo mozzarella, fragrant sweet basil, and a drizzle of olive oil.",
    ingredients: [
      "Neapolitan Dough",
      "San Marzano Tomatoes",
      "Buffalo Mozzarella",
      "Fresh Basil Leaves",
      "Cold-Pressed Olive Oil",
    ],
  },
  {
    id: 4,
    title: "Pepperoni pizza",
    category: "Pizza",
    time: "30 min",
    price: 13.0,
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop",
    bgColor: "bg-red-100/80",
    tag: "Spicy",
    tagColor: "bg-red-500",
    rating: "4.9",
    reviewsCount: "285",
    calories: "710 kcal",
    description:
      "Crispy stone-baked pizza loaded with spicy cured beef pepperoni, rich aged mozzarella, zesty oregano marinara sauce, and parmesan crust.",
    ingredients: [
      "Spicy Pepperoni",
      "Melted Mozzarella",
      "Oregano Herb Marinara",
      "Crushed Garlic",
      "Parmesan Cheese",
    ],
  },
  {
    id: 5,
    title: "Green garden salad",
    category: "Healthy",
    time: "15 min",
    price: 7.2,
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop",
    bgColor: "bg-emerald-100/80",
    tag: "Vegan",
    tagColor: "bg-emerald-500",
    rating: "4.7",
    reviewsCount: "142",
    calories: "210 kcal",
    description:
      "A vibrant bowl of fresh crisp romaine, baby spinach, cherry tomatoes, cucumbers, kalamata olives, toasted pumpkin seeds, and a zesty lemon-tahini vinaigrette.",
    ingredients: [
      "Organic Romaine & Spinach",
      "Heirloom Cherry Tomatoes",
      "English Cucumbers",
      "Pumpkin Seeds",
      "Lemon Tahini Dressing",
    ],
  },
  {
    id: 6,
    title: "Veggie wrap",
    category: "Healthy",
    time: "18 min",
    price: 8.4,
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop",
    bgColor: "bg-lime-100/80",
    tag: "Organic",
    tagColor: "bg-lime-600",
    rating: "4.8",
    reviewsCount: "165",
    calories: "320 kcal",
    description:
      "Whole wheat tortilla rolled with seasoned grilled zucchini, sweet bell peppers, avocado mash, crunchy purple cabbage, and house-made herbal hummus.",
    ingredients: [
      "Whole Wheat Tortilla",
      "Roasted Peppers & Zucchini",
      "Purple Cabbage",
      "Garlic Herbal Hummus",
      "Fresh Spinach",
    ],
  },
  {
    id: 7,
    title: "Choco chip cookies",
    category: "Dessert",
    time: "10 min",
    price: 4.9,
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop",
    bgColor: "bg-purple-100/80",
    tag: "Baked Fresh",
    tagColor: "bg-purple-500",
    rating: "4.9",
    reviewsCount: "430",
    calories: "280 kcal",
    description:
      "Two jumbo gourmet cookies baked fresh with melted Belgian dark chocolate chunks, crispy golden edges, chewy center, and a sprinkle of Maldon sea salt.",
    ingredients: [
      "Belgian Dark Chocolate Chunks",
      "Brown Butter Dough",
      "Maldon Flaky Sea Salt",
      "Pure Vanilla Bean",
    ],
  },
  {
    id: 8,
    title: "Strawberry cake",
    category: "Dessert",
    time: "15 min",
    price: 6.5,
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop",
    bgColor: "bg-pink-100/80",
    tag: "Trending",
    tagColor: "bg-pink-500",
    rating: "4.9",
    reviewsCount: "295",
    calories: "360 kcal",
    description:
      "Layers of light chiffon sponge layered with Madagascar vanilla bean chantilly cream and freshly harvested sweet organic strawberries.",
    ingredients: [
      "Fluffy Chiffon Sponge",
      "Fresh Organic Strawberries",
      "Chantilly Cream",
      "Madagascar Vanilla",
      "Strawberry Puree Glaze",
    ],
  },
];

const RESTAURANTS = [
  {
    id: 1,
    name: "Burger Haven",
    cuisine: "American · Fast Food",
    rating: "4.9",
    time: "15-25 min",
    discount: "20% OFF",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
    bgColor: "bg-gradient-to-br from-amber-100 to-orange-100",
  },
  {
    id: 2,
    name: "Pizza Roma",
    cuisine: "Italian · Artisan Pizza",
    rating: "4.8",
    time: "20-30 min",
    discount: "Free Delivery",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    bgColor: "bg-gradient-to-br from-rose-100 to-red-100",
  },
  {
    id: 3,
    name: "The Green Bowl",
    cuisine: "Healthy · Organic Salads",
    rating: "4.7",
    time: "10-20 min",
    discount: "15% OFF",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    bgColor: "bg-gradient-to-br from-emerald-100 to-teal-100",
  },
  {
    id: 4,
    name: "Sweet Cravings",
    cuisine: "Desserts · Bakery & Cafe",
    rating: "4.9",
    time: "15-20 min",
    discount: "Buy 1 Get 1",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
    bgColor: "bg-gradient-to-br from-purple-100 to-pink-100",
  },
];

const OFFERS = [
  {
    id: 1,
    title: "50% OFF First Order",
    desc: "Use code FOODIE50 at checkout",
    badge: "Limited Offer",
    bgGradient: "from-blue-600 via-indigo-600 to-purple-700",
  },
  {
    id: 2,
    title: "Free Delivery on $25+",
    desc: "No coupon required, auto applied",
    badge: "All Weekend",
    bgGradient: "from-orange-500 via-amber-500 to-yellow-500",
  },
];

const CATEGORIES = [
  { name: "All", icon: SparklesIcon },
  { name: "Breakfast", icon: EggIcon },
  { name: "Pizza", icon: PizzaIcon },
  { name: "Healthy", icon: SaladIcon },
  { name: "Dessert", icon: CakeIcon },
];

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  // Cart State with initial item
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Avocado egg toast",
      price: 8.5,
      quantity: 1,
      bgColor: "bg-amber-100",
      image: avocadoToastImg,
    },
  ]);

  // Navbar ScrollSpy implementation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "menu", "restaurants", "offers"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const sectionTop = sectionEl.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cart handlers
  const handleAddToCart = (dish) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === dish.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [
          ...prevItems,
          {
            id: dish.id,
            title: dish.title,
            price: dish.price,
            quantity: 1,
            bgColor: dish.bgColor,
            image: dish.image,
          },
        ];
      }
    });
  };

  const handleUpdateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Filtered dishes
  const filteredDishes = DISHES_DATA.filter((dish) => {
    const matchesCategory =
      selectedCategory === "All" || dish.category === selectedCategory;
    const matchesSearch = dish.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 via-purple-50/20 to-[#fafafa] text-gray-900 font-sans flex flex-col">
      {/* Fixed Sticky Navbar with ScrollSpy & Cart Trigger */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeSection={activeSection}
      />

      {/* Cart Drawer Modal */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Food Detail Popup Modal */}
      <FoodDetailModal
        dish={selectedDish}
        isOpen={Boolean(selectedDish)}
        onClose={() => setSelectedDish(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 mt-6 space-y-16 w-full">
        {/* Section: Home / Hero Banner */}
        <section
          id="home"
          className="scroll-mt-24 relative rounded-[32px] overflow-hidden text-white bg-cover bg-center shadow-2xl ring-1 ring-black/10"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1600&auto=format&fit=crop")`,
            minHeight: "440px",
          }}
        >
          {/* Dark gradient overlay with vibrant tints */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/35"></div>

          {/* Hero Content */}
          <div className="relative z-10 px-8 py-12 sm:px-12 sm:py-16 max-w-xl flex flex-col justify-center h-full">
            <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-orange-500 text-black px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 w-fit shadow-md">
              <ZapIcon className="w-3.5 h-3.5 fill-current" />
              <span>Fast 30-Min Delivery</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Fresh food, <br />
              <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                delivered fast.
              </span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-gray-200 leading-relaxed max-w-md">
              Order breakfast, lunch and desserts from restaurants near you and
              get it at your door piping hot.
            </p>

            {/* Floating Search Bar */}
            <div className="mt-8 bg-white/95 backdrop-blur-sm rounded-full p-1.5 flex items-center shadow-2xl max-w-md ring-2 ring-white/20">
              <span className="pl-4 text-gray-400">
                <SearchIcon className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Search dishes, e.g. pizza, salad..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 rounded-full focus:outline-none"
              />
              <button
                type="button"
                className="bg-black text-white text-xs font-bold px-6 py-2.5 rounded-full transition shadow-md shrink-0 cursor-pointer"
              >
                Search
              </button>
            </div>

            {/* Quick Stats with Colorful Accents */}
            <div className="mt-10 flex flex-wrap items-center gap-6 sm:gap-10 text-white">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 flex items-center justify-center text-orange-300">
                  <ClockIcon className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-lg font-black leading-none">30 min</p>
                  <p className="text-xs text-orange-200 mt-1">average delivery</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center text-blue-300">
                  <UtensilsIcon className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-lg font-black leading-none">200+</p>
                  <p className="text-xs text-blue-200 mt-1">restaurants</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 flex items-center justify-center text-amber-300">
                  <StarIcon className="w-5 h-5 fill-current" />
                </span>
                <div>
                  <p className="text-lg font-black leading-none">4.8</p>
                  <p className="text-xs text-amber-200 mt-1">customer rating</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Menu & Dishes */}
        <section id="menu" className="scroll-mt-24 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <SaladIcon className="w-5 h-5" />
                </span>
                <h2 className="text-2xl font-black tracking-tight text-gray-900">
                  What are you craving?
                </h2>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">Filter dishes by your favorite cuisine</p>
            </div>

            {/* Colorful Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.name;
                const IconComponent = cat.icon;
                return (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shrink-0 ${
                      isActive
                        ? "bg-black text-white shadow-md shadow-blue-500/25 scale-105"
                        : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:bg-blue-50/50"
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <h3 className="text-lg font-extrabold text-gray-800">Popular dishes</h3>
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
              {filteredDishes.length} items available
            </span>
          </div>

          {filteredDishes.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 shadow-xs">
              <span className="w-16 h-16 rounded-2xl bg-gray-50 text-gray-400 flex items-center justify-center mx-auto mb-3">
                <SearchIcon className="w-8 h-8" />
              </span>
              <p className="text-gray-500 text-sm font-semibold">
                No dishes found matching your search.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredDishes.map((dish) => (
                <div
                  key={dish.id}
                  onClick={() => setSelectedDish(dish)}
                  className="group bg-white rounded-3xl p-3 border border-gray-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1 relative cursor-pointer"
                  title="Click to view details & customize"
                >
                  {/* Tag badge */}
                  <span
                    className={`absolute top-5 left-5 z-20 text-[10px] font-black text-white px-2 py-0.5 rounded-full shadow-md ${dish.tagColor}`}
                  >
                    {dish.tag}
                  </span>

                  {/* Food Image Box */}
                  <div className="relative rounded-2xl h-44 overflow-hidden bg-gray-100 shadow-inner">
                    {dish.image ? (
                      <img
                        src={dish.image}
                        alt={dish.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className={`${dish.bgColor} w-full h-full flex items-center justify-center text-gray-400`}
                      >
                        <UtensilsIcon className="w-12 h-12" />
                      </div>
                    )}
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

                    {/* View Details Hover Overlay Pill */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      <span className="flex items-center gap-1.5 bg-black/75 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg transform -translate-y-1 group-hover:translate-y-0 transition duration-200">
                        <EyeIcon className="w-3.5 h-3.5" />
                        <span>View Details</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="px-2 pt-3.5 pb-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 leading-snug group-hover:text-blue-600 transition">
                        {dish.title}
                      </h4>
                      <div className="flex items-center justify-between text-xs text-gray-400 mt-1">
                        <span>
                          {dish.category} · {dish.time}
                        </span>
                        <span className="text-amber-500 font-bold flex items-center gap-1 text-[11px]">
                          <StarIcon className="w-3 h-3 fill-current" />
                          <span>{dish.rating}</span>
                        </span>
                      </div>
                    </div>

                    {/* Price & Add Button */}
                    <div className="flex items-center justify-between mt-4">
                      <span className="font-black text-base text-gray-900">
                        ${dish.price.toFixed(2)}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(dish);
                        }}
                        className="bg-gray-900 hover:bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full transition-all duration-200 active:scale-90 cursor-pointer shadow-sm flex items-center gap-1"
                        title="Quick add to cart"
                      >
                        <span>+</span>
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Section: Restaurants */}
        <section id="restaurants" className="scroll-mt-24 space-y-5">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <StoreIcon className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-2xl font-black tracking-tight text-gray-900">
                Top Restaurants
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">Handpicked spots with the fastest delivery</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {RESTAURANTS.map((resto) => (
              <div
                key={resto.id}
                className="bg-white rounded-3xl p-4 border border-gray-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group"
              >
                <div>
                  {/* Restaurant Image Box */}
                  <div className="relative h-32 rounded-2xl overflow-hidden mb-3 bg-gray-100 shadow-inner">
                    {resto.image ? (
                      <img
                        src={resto.image}
                        alt={resto.name}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className={`${resto.bgColor} h-full flex items-center justify-center text-gray-400`}
                      >
                        <StoreIcon className="w-10 h-10" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none"></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-sm text-gray-900 group-hover:text-blue-600 transition">
                      {resto.name}
                    </h3>
                    <span className="text-xs font-bold text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <StarIcon className="w-3 h-3 text-amber-500 fill-current" />
                      <span>{resto.rating}</span>
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{resto.cuisine}</p>
                </div>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50 text-xs">
                  <span className="text-gray-500 font-medium">{resto.time}</span>
                  <span className="text-emerald-700 font-bold bg-emerald-100/70 px-2.5 py-0.5 rounded-full text-[11px]">
                    {resto.discount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Offers */}
        <section id="offers" className="scroll-mt-24 space-y-5">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <GiftIcon className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-2xl font-black tracking-tight text-gray-900">
                Special Offers & Deals
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">Save big on your daily food orders</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {OFFERS.map((offer) => (
              <div
                key={offer.id}
                className={`bg-gradient-to-r ${offer.bgGradient} rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between min-h-[180px] relative overflow-hidden group`}
              >
                {/* Decorative circle glow */}
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition duration-500"></div>

                <div className="relative z-10">
                  <span className="bg-white/25 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-xs">
                    {offer.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black mt-3 leading-snug">
                    {offer.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 mt-1">{offer.desc}</p>
                </div>
                <div className="mt-4 relative z-10">
                  <button className="bg-white text-gray-950 text-xs font-black px-6 py-2.5 rounded-full hover:bg-gray-100 transition shadow-md active:scale-95 cursor-pointer">
                    Claim Deal
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;