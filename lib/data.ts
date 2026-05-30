// Gallery preview image arrays (replace with your actual image URLs or local paths)
export const MEN_GALLERY_PREVIEW = [
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=800&auto=format&fit=crop",
];

// Reviews
export const MEN_REVIEWS = [
  { name: "Rahul S.", text: "Best fade in Bangalore. The attention to detail is unmatched.", rating: 5 },
  { name: "Karan M.", text: "Premium experience from start to finish. Highly recommend the beard sculpt.", rating: 5 },
  { name: "David L.", text: "Found my permanent barber. The atmosphere is incredible.", rating: 5 },
  { name: "Vikram K.", text: "Sharpest lineup I've ever had. True professionals.", rating: 5 },
];

// ==========================================
// 1. BRANCH LOCATIONS DATA
// ==========================================

export const MEN_BRANCHES = [
  { 
    slug: "byatarayanapura", 
    name: "Kuvempu Road", 
    address: "Vignan Nagar, Kuvempu Road, Bangalore", 
    hours: "7:30 AM - 10:00 PM", 
    phone: "+91", 
    image: "/mensalloninside.jpg", 
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1155.9047784111742!2d77.68002977456052!3d12.972827850907791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1161a4ff2cd7%3A0x5373bb971366f5ac!2sWeldone%20Salone%20for%20Men!5e0!3m2!1sen!2sin!4v1780129519200!5m2!1sen!2sin",
    // NEW: Add your interior photos here!
    interiorImages: [
      "/byatarayanapura1.png",
      "/byatarayanapura5.png",
      "/byatarayanapura4.png",
      "/byatarayanapura3.png",
      "/byatarayanapura2.png",

    ]
  },
  { 
    slug: "vignan-nagar-branch", 
    name: "Vignan Nagar Branch", 
    address: "Vignan Nagar, Kaggadasapura Main Road, Bangalore", 
    hours: "7:30 AM - 10:00 PM", 
    phone: "+91", 
    image: "/vignannagarmen.jpg", 
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d485.99938522181003!2d77.68014453196895!3d12.972166134007272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae116e3176508b%3A0x6b0a912215cf9557!2sWel%20Done%20Hair%20Salon!5e0!3m2!1sen!2sin!4v1780129700304!5m2!1sen!2sin",
    // NEW: Add your interior photos here!
    interiorImages: [
      "/vignan 4.png",
      "/vignan 2.png",
      "/vignan 1.png",
      "/vignan 3.png"
    ]
  },
{ 
    slug: "basava-nagar-branch", 
    name: "Basava Nagar Branch", 
    address: "Basava Nagar, Bangalore", 
    hours: "7:30 AM - 10:00 PM", 
    phone: "+91 ", 
    image: "/Basavanagar_branch.png", 
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d485.99938522181003!2d77.68014453196895!3d12.972166134007272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae116e3176508b%3A0x6b0a912215cf9557!2sWel%20Done%20Hair%20Salon!5e0!3m2!1sen!2sin!4v1780129700304!5m2!1sen!2sin",
    // NEW: Add your interior photos here!
    interiorImages: [
      "/basvanagar3.png",
      "/basvanagar2.png",
      "/basvanagar4.png",
      "/basvanagar1.png",
      "/basvanagar6.png",

    ]
  },
];

// ==========================================
// 2. TEAM & STYLISTS DATA
// ==========================================

export const MEN_TEAM = [
    { 
    name: "Mazid", 
    location: "Vignan Nagar Branch", 
    image: "/Mazid.png" 
  },
  { 
    name: "Sonu", 
    location: "Vignan Nagar Branch", 
    image: "/Sonu.png" 
  },

  { 
    name: "Amir Aalam", 
    location: "Basava Nagar Branch", 
    image: "/Amir Aalam.png" 
  },
  { 
    name: "Aryan", 
    location: "Kuvempu Road", 
    image: "/Aryan.png" 
  },
  { 
    name: "Kasim", 
    location: "Basava Nagar Branch", 
    image: "/Kasim.png" 
  },
  { 
    name: "Asif Malik", 
    location: "Basava Nagar Branch", 
    image: "/Asif Malik.png" 
  },
  { 
    name: "Sajid", 
    location: "Basava Nagar Branch", 
    image: "/Sajid.png" 
  },
  { 
    name: "Shami", 
    location: "Basava Nagar Branch", 
    image: "/Shami.png" 
  },
  { 
    name: "Nadeem", 
    location: "Kuvempu Road", 
    image: "/Nadeem.png" 
  },
  { 
    name: "Fardeen", 
    location: "Kuvempu Road", 
    image: "/Fardeen.png" 
  },
];

// ==========================================
// 3. SERVICES & MENU DATA
// ==========================================

export const MEN_SERVICES = [
  {
    id: "hair-cut",
    title: "Hair Cut & Shave",
    image: "/Hair Cut & Shave.png",
    items: [
      { name: "Hair Cut", price: "120" },
      { name: "Stylish Hair Cut", price: "150" },
      { name: "Clean Shave", price: "70" },
      { name: "Stylish Shave", price: "90" },
      { name: "Children Hair Cut", price: "120" },
    ]
  },
  {
    id: "head-massage",
    title: "Head Massage",
    image: "/Head Massage.png",
    items: [
      { name: "Olive Oil", price: "150" },
      { name: "Navaratan", price: "150" },
      { name: "Coconut", price: "150" },
      { name: "Almond", price: "150" },
      { name: "Hair Wash", price: "150" },
    ]
  },
  {
    id: "hair-spa",
    title: "Hair Spa",
    image: "/hair spa.png",
    items: [
      { name: "Loreal Dandruff Treatment", price: "800" },
      { name: "Loreal Hair Spa", price: "700" },
      { name: "Hair Straightening", price: "1500" },
    ]
  },
  {
    id: "hair-colouring",
    title: "Hair Colouring",
    image: "/hair coloring.png",
    items: [
      { name: "Loreal Ammonia Free", price: "500" },
      { name: "Matrix", price: "400" },
      { name: "Streax", price: "400" },
      { name: "Garnier", price: "300" },
      { name: "Fruit Gel", price: "300" },
    ]
  },
  {
    id: "skin-care",
    title: "Skin Care Facial",
    image: "/Skin Care Facial.png",
    items: [
      { name: "O3+ Facial", price: "2000" },
      { name: "4 Layer Lotus", price: "2000" },
      { name: "Skin Whitening", price: "1500" },
    ]
  },
  {
    id: "natural-facial",
    title: "Natural Facial",
    image: "/Natural Facial.png",
    items: [
      { name: "Gold Facial", price: "1000" },
      { name: "Papaya Facial", price: "700" },
      { name: "Banana Facial", price: "700" },
      { name: "Fruit Facial", price: "700" },
      { name: "Diamond Facial", price: "1000" },
    ]
  },
  {
    id: "raaga",
    title: "Raaga",
    image: "/Raaga.png",
    items: [
      { name: "Gold Facial", price: "1500" },
      { name: "Fairness Facial", price: "1500" },
      { name: "Platinum Facial", price: "1500" },
    ]
  },
  {
    id: "clean-up",
    title: "Clean Up",
    image: "/Clean Up.png",
    items: [
      { name: "Branded Lotus", price: "400" },
      { name: "Normal Fruit", price: "300" },
    ]
  },
  {
    id: "d-tan",
    title: "D-Tan",
    image: "/D-Tan.png",
    items: [
      { name: "Raaga", price: "400" },
      { name: "VLCC", price: "350" },
    ]
  }
];


/// ==========================================
// GALLERY CUTS DATA (Your original 28 haircuts)
// ==========================================

export const GALLERY_CUTS = [
  { id: 1, title: "Mohawk", category: "Haircut", image: "/Mohawk.png" },
  { id: 2, title: "Faux Hawk", category: "Haircut", image: "/Faux Hawk.png" },
  { id: 3, title: "Disconnected Undercut", category: "Haircut", image: "/Disconnected Undercut.png" },
  { id: 4, title: "Undercut", category: "Haircut", image: "/Undercut.png" },
  { id: 5, title: "Slick Back", category: "Haircut", image: "/Slick Back.png" },
  { id: 6, title: "Pompadour", category: "Haircut", image: "/Pompadour.png" },
  { id: 7, title: "Quiff", category: "Haircut", image: "/Quiff.png" },
  { id: 8, title: "Comb Over", category: "Haircut", image: "/Comb Over.png" },
  { id: 9, title: "Textured Crop", category: "Haircut", image: "/Textured Crop.png" },
  { id: 10, title: "Ivy League Cut", category: "Haircut", image: "/Ivy League Cut.png" },
  { id: 11, title: "French Crop", category: "Haircut", image: "/French Crop.png" },
  { id: 12, title: "Caesar Cut", category: "Haircut", image: "/Caesar Cut.png" },
  { id: 13, title: "Burst Fade", category: "Haircut", image: "/Burst Fade.png" },
  { id: 14, title: "Drop Fade", category: "Haircut", image: "/Drop Fade.png" },
  { id: 15, title: "Temple Fade", category: "Haircut", image: "/temple fade.png" },
  { id: 16, title: "Modern Mullet", category: "Haircut", image: "/Modern Mullet.png" },
  { id: 17, title: "High Top Fade", category: "Haircut", image: "/High Top Fade.png" },
  { id: 18, title: "Skin Fade", category: "Haircut", image: "/skin fade.png" },
  { id: 19, title: "Side Part", category: "Haircut", image: "/side part.png" },
  { id: 20, title: "Flat Top", category: "Haircut", image: "/flat top.png" },
  { id: 21, title: "Curtains Haircut", category: "Haircut", image: "/Curtains Haircut.png" },
  { id: 22, title: "Top Knot", category: "Haircut", image: "/top knot.png" },
  { id: 23, title: "High Fade", category: "Haircut", image: "/high fade.png" },
  { id: 24, title: "Mid Fade", category: "Haircut", image: "/mid fade.png" },
  { id: 25, title: "Low Fade", category: "Haircut", image: "/low fade.png" },
  { id: 26, title: "Fade Cut", category: "Haircut", image: "/Fade cut.png" },
  { id: 27, title: "Crew Cut", category: "Haircut", image: "/Crew cut.png" },
  { id: 28, title: "Buzz Cut", category: "Haircut", image: "/buzz cut.png" },
];


export const GALLERY_INTERIOR = [
  { id: 1, title: "WELDONE Massage Room", category: "", image: "/basvanagar1.png" }, // TODO: Add your real interior images
  { id: 2, title: "WELDONE Massage Room", category: "", image: "/basvanagar2.png" },
  { id: 3, title: "WELDONE PARLOUR", category: "", image: "/basvanagar3.png" },
  { id: 4, title: "Product Display", category: "", image: "/basvanagar4.png" },
    { id: 5, title: "WELDONE PARLOUR ", category: "", image: "/basvanagar5.png" }, 
    { id: 16, title: "Barbers In Action", category: "", image: "/basvanagar7.png" },
  { id: 6, title: "Barbers In Action", category: "", image: "/basvanagar6.png" },
  { id: 7, title: "WELDONE PARLOUR", category: "", image: "/Byatarayanapura1.png" },
  { id: 8, title: "Product Display", category: "", image: "/Byatarayanapura2.png" },
    { id: 9, title: "Product Display", category: "", image: "/Byatarayanapura3.png" }, 
  { id:10, title: "Barbers In Action", category: "", image: "/Byatarayanapura4.png" },

  { id: 11, title: "WELDONE PARLOUR", category: "", image: "/Byatarayanapura5.png" },
    { id: 12, title: "WELDONE PARLOUR & WAITING AREA", category: "", image: "/vignan 1.png" },
        { id:17, title: "Barbers In Action", category: "", image: "/Byatarayanapura8.png" },

    { id: 13, title: "WELDONE Advanced Instruments", category: "", image: "/vignan 2.png" }, 
  { id:14, title: "Captain In Action", category: "", image: "/vignan 3.png" },
  { id: 15, title: "WELDONE PARLOUR", category: "", image: "/vignan 4.png" },

];