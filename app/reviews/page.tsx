"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Star, MessageSquare, TrendingUp, User, Send, MapPin } from "lucide-react";

// ✅ Connected to data.ts — branch lists stay in sync automatically
import { MEN_BRANCHES, WOMEN_BRANCHES } from "@/lib/data";

// ✅ Connected to global category state (set on home/welcome page)
import { useCategory } from "@/components/CategoryProvider";

// ------------------------------------------------------------------
// 🔌 SUPABASE INTEGRATION — TODO LIST
// ------------------------------------------------------------------
// 1. Install supabase client:
//      npm install @supabase/supabase-js
//
// 2. Create a supabase client file at lib/supabaseClient.ts:
//      import { createClient } from "@supabase/supabase-js";
//      export const supabase = createClient(
//        process.env.NEXT_PUBLIC_SUPABASE_URL!,
//        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
//      );
//
// 3. Create a "reviews" table in your Supabase dashboard with columns:
//      id          uuid  primary key default uuid_generate_v4()
//      name        text  not null
//      rating      int2  not null  (1–5)
//      branch      text  not null
//      category    text  not null  ("men" | "women")
//      comment     text  not null
//      created_at  timestamptz default now()
//
// 4. Replace the INITIAL_REVIEWS mock array below with a real fetch:
//      import { supabase } from "@/lib/supabaseClient";
//      In a useEffect, run:
//        const { data } = await supabase
//          .from("reviews")
//          .select("*")
//          .eq("category", category)   // filter by men/women
//          .order("created_at", { ascending: false });
//        if (data) setReviews(data);
//
// 5. Replace the local setReviews() optimistic insert in handleSubmit with:
//        const { error } = await supabase.from("reviews").insert([newReview]);
//        if (!error) { /* refetch or optimistically prepend */ }
//
// 6. Add .env.local:
//      NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
//      NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
// ------------------------------------------------------------------

// ⚠️ MOCK DATA — replace this with a Supabase fetch (see TODO #4 above)
// The `category` field is included here so the shape matches the DB schema
const INITIAL_REVIEWS = [
  { id: 1, name: "Arjun M.",  rating: 5, date: "May 2, 2026",    branch: "Byatarayanapura",   category: "men",   comment: "Absolutely flawless fade. The hot towel shave is a must-try experience." },
  { id: 2, name: "Rohan K.",  rating: 4, date: "April 15, 2026", branch: "Vignan Nagar Branch", category: "men",  comment: "Great atmosphere and a really sharp cut. Had to wait a few minutes past my appointment time, but the result was worth it." },
  { id: 3, name: "Kiran S.",  rating: 5, date: "April 10, 2026", branch: "Basava Nagar Branch", category: "men",  comment: "Best barbershop in Bangalore, hands down. The vibe is immaculate and the service is elite." },
  { id: 4, name: "Priya R.",  rating: 5, date: "May 5, 2026",    branch: "Womens Studio",       category: "women", comment: "Amazing experience! The colour treatment was perfect and the staff were so attentive." },
  { id: 5, name: "Sneha D.",  rating: 5, date: "April 20, 2026", branch: "Womens Studio",       category: "women", comment: "Loved the ambience and my hair has never looked better. Will be back!" },
];

export default function ReviewsPage() {
  const { category } = useCategory(); // "men" | "women"

  // ✅ Pick the right branch list based on selected gender category
  const activeBranches = category === "women" ? WOMEN_BRANCHES : MEN_BRANCHES;

  // ⚠️ Filter mock reviews by category — with Supabase this filter moves to the query (TODO #4)
  const [reviews, setReviews] = useState(
    INITIAL_REVIEWS.filter((r) => r.category === category)
  );

  const [hoveredStar, setHoveredStar] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    branch: "", // empty string = "Choose a branch" placeholder
    comment: "",
  });

  // ✅ All stats derive from the live `reviews` state — update instantly when a review is added
  // ⚠️ TODO (Supabase): replace useState init + these calcs with a useEffect fetch;
  //    the formulas below stay unchanged since they operate on the fetched array
  const totalReviews = reviews.length;
  const averageRating = totalReviews > 0
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews).toFixed(1)
    : "0.0";
  const fiveStarCount = reviews.filter((r) => r.rating === 5).length;
  const fiveStarPercentage = totalReviews > 0 ? Math.round((fiveStarCount / totalReviews) * 100) : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.comment || !formData.branch) return;

    const newReview = {
      id: Date.now(),
      name: formData.name,
      rating: formData.rating,
      branch: formData.branch,
      category, // ✅ always saves with the currently active category
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      comment: formData.comment,
    };

    // ⚠️ Optimistic local insert — replace with Supabase insert (TODO #5)
    setReviews([newReview, ...reviews]);

    // Reset form; branch goes back to empty so placeholder shows again
    setFormData({ name: "", rating: 5, branch: "", comment: "" });
  };

  return (
    <div className="relative container mx-auto px-6 pt-40 sm:pt-48 pb-24 min-h-screen max-w-7xl overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#FFCC00]/5 blur-[150px] pointer-events-none z-0 rounded-full mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFCC00]/5 blur-[120px] pointer-events-none z-0 rounded-full mix-blend-screen" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 relative z-10">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-white">
          CLIENT <span className="text-[#FFCC00]">REVIEWS</span>
        </h1>
        {/* ✅ Subtitle changes with gender category */}
        <p className="text-gray-400 max-w-2xl mx-auto">
          What our {category === "women" ? "ladies" : "gentlemen"} are saying — or leave your own mark.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">

        {/* LEFT COLUMN: Analytics & Form */}
        <div className="lg:col-span-5 space-y-8">

          {/* Rating summary */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="glass-card bg-black/60 p-8 rounded-3xl border border-white/5">
            <h2 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <TrendingUp className="text-[#FFCC00]" size={20} /> Overall Rating
            </h2>
            <div className="flex items-center gap-6">
              <div className="text-6xl font-black text-[#FFCC00] tracking-tighter">{averageRating}</div>
              <div>
                <div className="flex gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={20} className={star <= Number(averageRating) ? "fill-[#FFCC00] text-[#FFCC00]" : "text-gray-600"} />
                  ))}
                </div>
                <p className="text-gray-400 text-sm font-medium">Based on {totalReviews} reviews</p>
                <p className="text-[#FFCC00] text-xs font-bold uppercase tracking-widest mt-1">{fiveStarPercentage}% 5-Star Ratings</p>
              </div>
            </div>
          </motion.div>

          {/* Review form */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card bg-black/60 p-8 rounded-3xl border border-white/5">
            <h2 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <MessageSquare className="text-[#FFCC00]" size={20} /> Leave a Review
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Star rating picker */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase">Your Rating</label>
                <div className="flex gap-2 cursor-pointer">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={28}
                      onClick={() => setFormData({ ...formData, rating: star })}
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      className={`transition-all ${star <= (hoveredStar || formData.rating) ? "fill-[#FFCC00] text-[#FFCC00] scale-110" : "text-gray-600 hover:text-gray-400"}`}
                    />
                  ))}
                </div>
              </div>

              {/* Name input */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase">Name</label>
                <div className="relative">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-[#FFCC00] transition-colors"
                    placeholder="Your name"
                  />
                </div>
              </div>

              {/* ✅ Branch dropdown — driven by data.ts, filtered by men/women category */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase">Branch Visited</label>
                <div className="relative">
                  <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                  <select
                    required
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-[#FFCC00] transition-colors appearance-none cursor-pointer"
                  >
                    {/* ✅ Default placeholder — required + empty value forces user to pick */}
                    <option value="" disabled className="bg-black text-gray-500">
                      Choose a branch...
                    </option>
                    {/* ✅ Options come from data.ts, switch with men/women automatically */}
                    {activeBranches.map((b) => (
                      <option key={b.slug} value={b.name} className="bg-black text-white">
                        {b.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Comment textarea */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase">Your Experience</label>
                <textarea
                  required
                  rows={4}
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFCC00] transition-colors resize-none"
                  placeholder={`Tell us about your ${category === "women" ? "salon" : "barbershop"} experience...`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#FFCC00] text-black font-black uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 hover:bg-amber-400 transition-colors hover:scale-[1.02] active:scale-[0.98]"
              >
                Post Review <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Review Feed */}
        {/* ✅ Shows only reviews matching the current men/women category */}
        <div className="lg:col-span-7">
          <div className="flex flex-col gap-6">
            {reviews.length === 0 && (
              <p className="text-gray-500 text-center py-20">No reviews yet — be the first!</p>
            )}
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card bg-black/40 p-6 sm:p-8 rounded-3xl border border-white/5 hover:border-[#FFCC00]/20 transition-colors"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                  <div>
                    <h3 className="font-bold text-lg text-white">{review.name}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <p className="text-xs text-gray-500 font-medium tracking-widest uppercase">{review.date}</p>
                      <span className="w-1 h-1 bg-gray-600 rounded-full" />
                      <p className="text-xs text-[#FFCC00] font-medium tracking-widest flex items-center gap-1">
                        <MapPin size={12} /> {review.branch}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} className={star <= review.rating ? "fill-[#FFCC00] text-[#FFCC00]" : "text-gray-700"} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed italic">"{review.comment}"</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}