// Gallery preview image arrays (replace with your actual image URLs or local paths)
export const MEN_GALLERY_PREVIEW = [
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=800&auto=format&fit=crop",
];

export const WOMEN_GALLERY_PREVIEW = [
  "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
];

// Reviews
export const MEN_REVIEWS = [
  { name: "Rahul S.", text: "Best fade in Bangalore. The attention to detail is unmatched.", rating: 5 },
  { name: "Karan M.", text: "Premium experience from start to finish. Highly recommend the beard sculpt.", rating: 5 },
  { name: "David L.", text: "Found my permanent barber. The atmosphere is incredible.", rating: 5 },
  { name: "Vikram K.", text: "Sharpest lineup I've ever had. True professionals.", rating: 5 },
];

export const WOMEN_REVIEWS = [
  { name: "Anjali P.", text: "The balayage they did is absolutely stunning. I feel like a movie star!", rating: 5 },
  { name: "Neha R.", text: "Finally a studio that understands exactly what I want. Perfect styling.", rating: 5 },
  { name: "Sarah T.", text: "The keratin treatment completely transformed my hair. So luxurious.", rating: 5 },
  { name: "Priya V.", text: "Exceptional bridal makeup and pre-bridal services. Thank you!", rating: 5 },
];
// ==========================================
// 1. BRANCH LOCATIONS DATA
// ==========================================

export const MEN_BRANCHES = [
  { 
    slug: "byatarayanapura", // Made lowercase, matches name
    name: "Byatarayanapura", 
    address: "Byatarayanapura, Bangalore", 
    hours: "9:00 AM - 9:00 PM", 
    phone: "+91 98765 43210", 
    image: "/mensalloninside.jpg", 
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.582806296316!2d77.5982855152945!3d12.97159879085585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin" 
  },
  { 
    slug: "vignan-nagar-branch", // Made strictly lowercase
    name: "Vignan Nagar Branch", 
    address: "Vignan Nagar, Bangalore", 
    hours: "10:00 AM - 10:00 PM", 
    phone: "+91 98765 43211", 
    image: "/vignannagarmen.jpg", 
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.487869389279!2d77.6206124152939!3d12.9342089908801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144ed898fc2d%3A0x1681f38e8c00ae56!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin" 
  },
  { 
    slug: "basava-nagar-branch", // Made strictly lowercase
    name: "Basava Nagar Branch", 
    address: "Basava Nagar, Bangalore", 
    hours: "9:00 AM - 9:00 PM", 
    phone: "+91 98765 43212", 
    image: "/Basavanagar_branch.png", 
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.001696423075!2d77.63896531529424!3d12.97159879085585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a4e3265eb9%3A0x7087b2190130f40!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin" 
  },
];
export const WOMEN_BRANCHES = [
  { 
    slug: "womens-studio", 
    name: "Womens Studio", 
    // TODO: Update this to your real address
    address: "5th Block, Koramangala", 
    hours: "10:00 AM - 8:00 PM", 
    phone: "+91 98765 43213", 
    // TODO: Ensure this matches your file in the public folder
    image: "/womensalloninside.png", 
    // TODO: Replace with real Google Maps embed URL
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.22!2d77.59!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA3N8KwMzUnMjQuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
  },
];

// ==========================================
// 2. TEAM & STYLISTS DATA
// ==========================================

export const MEN_TEAM = [
  { 
    name: "Sonu", 
    location: "Vignan Nagar Branch", 
    // TODO: Drop 4:5 ratio image in public folder and update name here
    image: "/Sonu.png" 
  },
  { 
    name: "Mazid", 
    location: "Vignan Nagar Branch", 
    // TODO: Drop 4:5 ratio image in public folder and update name here
    image: "/Mazid.png" 
  },
  { 
    name: "Amir Aalam", 
    location: "Basava Nagar Branch", 
    // TODO: Drop 4:5 ratio image in public folder and update name here
    image: "/Amir Aalam.png" 
  },
  { 
    name: "Aryan", 
    location: "Byatarayanapura", 
    // TODO: Drop 4:5 ratio image in public folder and update name here
    image: "/Aryan.png" 
  },
  { 
    name: "Kasim", 
    location: "Basava Nagar Branch", 
    // TODO: Drop 4:5 ratio image in public folder and update name here
    image: "/Kasim.png" 
  },
  { 
    name: "Asif Malik", 
    location: "Basava Nagar Branch", 
    // TODO: Drop 4:5 ratio image in public folder and update name here
    image: "/Asif Malik.png" 
  },
  { 
    name: "Sajid", 
    location: "Basava Nagar Branch", 
    // TODO: Drop 4:5 ratio image in public folder and update name here
    image: "/Sajid.png" 
  },
  { 
    name: "Shami", 
    location: "Basava Nagar Branch", 
    // TODO: Drop 4:5 ratio image in public folder and update name here
    image: "/Shami.png" 
  },
  { 
    name: "Nadeem", 
    location: "Byatarayanapura", 
    // TODO: Drop 4:5 ratio image in public folder and update name here
    image: "/Nadeem.png" 
  },
  { 
    name: "Fardeen", 
    location: "Byatarayanapura", 
    // TODO: Drop 4:5 ratio image in public folder and update name here
    image: "/Fardeen.png" 
  },
  
];

export const WOMEN_TEAM = [
  { 
    name: "Elena R.", 
    role: "Master Stylist",
    location: "Womens Studio", 
    rating: 5.0,
    // TODO: Drop 4:5 ratio image in public folder and update name here
    image: "/elena.png" 
  },
  { 
    name: "Sophia M.", 
    role: "Color Expert",
    location: "Womens Studio", 
    rating: 4.9,
    // TODO: Drop 4:5 ratio image in public folder and update name here
    image: "/sophia.png" 
  },
  { 
    name: "Aisha K.", 
    role: "Bridal Specialist",
    location: "Womens Studio", 
    rating: 5.0,
    // TODO: Drop 4:5 ratio image in public folder and update name here
    image: "/aisha.png" 
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
    image: "Skin Care Facial.png",
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

export const WOMEN_SERVICES = [
  {
    id: "hair-styling",
    title: "Haircut & Styling",
    // TODO: Update category cover image if needed
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1200&auto=format&fit=crop",
    items: [
      { name: "WELDONE Signature Cut", price: "800" },
      { name: "Advanced Layering", price: "1200" },
      { name: "Classic Trim", price: "500" },
      { name: "Premium Blow Dry", price: "600" },
      { name: "Event Hair Updo", price: "1500" },
    ]
  },
  {
    id: "hair-color",
    title: "Color & Highlights",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1200&auto=format&fit=crop",
    items: [
      { name: "Global Hair Color (L'Oréal)", price: "3500" },
      { name: "Balayage / Ombre", price: "4500" },
      { name: "Root Touch-up", price: "1000" },
      { name: "Highlights (Per Streak)", price: "300" },
      { name: "Creative Fashion Color", price: "5000" },
    ]
  },
  {
    id: "hair-treatments",
    title: "Hair Spa & Treatments",
    image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?q=80&w=1200&auto=format&fit=crop",
    items: [
      { name: "Keratin Treatment", price: "4000" },
      { name: "Hair Botox", price: "5500" },
      { name: "Moroccan Oil Spa", price: "1500" },
      { name: "Anti-Hairfall Spa", price: "1200" },
      { name: "Olaplex Bonding Treatment", price: "2500" },
    ]
  },
  {
    id: "skin-care",
    title: "Premium Skin Care",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    items: [
      { name: "Signature HydraFacial", price: "3500" },
      { name: "O3+ Radiance Facial", price: "2500" },
      { name: "Gold Illuminating Facial", price: "2000" },
      { name: "Deep Cleanse & D-Tan", price: "1000" },
      { name: "Under Eye Treatment", price: "800" },
    ]
  },
  {
    id: "bridal",
    title: "Bridal & Pre-Bridal",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    items: [
      { name: "Complete Bridal Makeup", price: "15000" },
      { name: "Pre-Bridal Package (1 Month)", price: "10000" },
      { name: "Engagement Makeup", price: "8000" },
      { name: "Party Makeup", price: "3500" },
    ]
  }
];

// ==========================================
// 4. GALLERY IMAGES DATA
// ==========================================

export const MEN_GALLERY = [
  { 
    id: 1, 
    title: "Mohawk", 
    category: "Haircut", 
    // TODO: Update to local image (e.g., "/fade1.jpg")
    image: "/Mohawk.png" 
  },
  { 
    id: 2, 
    title: "Faux Hawk", 
    category: "Haircut", 
    image: "/Faux Hawk.png" 
  },
  { 
    id: 3, 
    title: "Disconnected Undercut", 
    category: "Haircut", 
    image: "/Disconnected Undercut.png" 
  },
  
  { 
    id: 4, 
    title: "Undercut", 
    category: "Haircut", 
    image: "/Undercut.png" 
  },
  { 
    id: 5, 
    title: "Slick Back", 
    category: "Haircut", 
    image: "/Slick Back.png" 
  },
  { 
    id: 6, 
    title: "Pompadour", 
    category: "Haircut", 
    image: "/Pompadour.png" 
  },
  { 
    id: 7, 
    title: "Quiff", 
    category: "Haircut", 
    image: "/Quiff.png" 
  },
  { 
    id: 8, 
    title: "Comb Over", 
    category: "Haircut", 
    image: "/Comb Over.png" 
  },
  { 
    id: 9, 
    title: "Textured Crop", 
    category: "Haircut", 
    image: "/Textured Crop.png" 
  },
  { 
    id: 10, 
    title: "Ivy League Cut", 
    category: "Haircut", 
    image: "/Ivy League Cut.png" 
  },
  { 
    id: 11, 
    title: "French Crop", 
    category: "Haircut", 
    image: "/French Crop.png" 
  },

  { 
    id: 12, 
    title: "Caesar Cut", 
    category: "Haircut", 
    image: "/Caesar Cut.png" 
  },
  { 
    id: 13, 
    title: "Burst Fade", 
    category: "Haircut", 
    image: "/Burst Fade.png" 
  },
  { 
    id: 14, 
    title: "Drop Fade", 
    category: "Haircut", 
    image: "/Drop Fade.png" 
  },
  { 
    id: 15, 
    title: "temple fade", 
    category: "Haircut", 
    image: "/temple fade.png" 
  },
  { 
    id: 16, 
    title: "Modern Mullet", 
    category: "Haircut", 
    image: "/Modern Mullet.png" 
  },
  { 
    id: 17, 
    title: "High Top Fade", 
    category: "Haircut", 
    image: "/High Top Fade.png" 
  },
  { 
    id: 18, 
    title: "skin fade", 
    category: "Haircut", 
    image: "/skin fade.png" 
  },
  { 
    id: 19, 
    title: "side part", 
    category: "Haircut", 
    image: "/side part.png" 
  },
  { 
    id: 20, 
    title: "flat top", 
    category: "Haircut", 
    image: "/flat top.png" 
  },

 
  { 
    id: 21, 
    title: "Curtains Haircut", 
    category: "Haircut", 
    image: "/Curtains Haircut.png" 
  },
  { 
    id: 22, 
    title: "top knot", 
    category: "Haircut", 
    image: "/top knot.png" 
  },
  { 
    id: 23, 
    title: "high fade", 
    category: "Haircut", 
    image: "/high fade.png" 
  },
  { 
    id: 24, 
    title: "mid fade", 
    category: "Haircut", 
    image: "/mid fade.png" 
  },
  { 
    id: 25, 
    title: "low fade", 
    category: "Haircut", 
    image: "/low fade.png" 
  },
  { 
    id: 26, 
    title: "Fade cut", 
    category: "Haircut", 
    image: "/Fade cut.png" 
  },
  { 
    id: 27, 
    title: "Crew cut", 
    category: "Haircut", 
    image: "/Crew cut.png" 
  },
  { 
    id: 28, 
    title: "buzz cut", 
    category: "Haircut", 
    image: "/buzz cut.png" 
  },
];

export const WOMEN_GALLERY = [
  { 
    id: 1, 
    title: "Golden Balayage", 
    category: "Color", 
    // TODO: Update to local image (e.g., "/color1.jpg")
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    title: "Voluminous Blowout", 
    category: "Styling", 
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 3, 
    title: "Bridal Updo", 
    category: "Event", 
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 4, 
    title: "Sleek Keratin", 
    category: "Treatment", 
    image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?q=80&w=800&auto=format&fit=crop" 
  },
];