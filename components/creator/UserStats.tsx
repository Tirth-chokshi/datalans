"use client";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { StatsCard } from "@/components/metrics/StatsCard";
import { Heart, MessageCircle, Share2, Image, Video, Layout } from "lucide-react";
import type { Post } from "@/lib/types";

interface UserStatsProps {
  posts: Post[];
}

export function UserStats({ posts }: UserStatsProps) {
  const [userData, setUserData] = useState(null);
  const [topCreators, setTopCreators] = useState([]);
  const userId = 1 // Replace with fallback as needed


  
  useEffect(() => {
    fetch(`http://localhost:3001/user/${userId}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, [userId]);

  
  if (!userData) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);
  const totalComments = posts.reduce((sum, post) => sum + post.comments, 0);
  const totalShares = posts.reduce((sum, post) => sum + post.shares, 0);
  
  const reelsCount = posts.filter(post => post.type === 'reel').length;
  const carouselsCount = posts.filter(post => post.type === 'carousel').length;
  const imagesCount = posts.filter(post => post.type === 'image').length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <StatsCard
        title="Total Likes"
        value={userData.totalLikes}
        icon={Heart}
          gradient="from-[#017AFF] to-[#017AFF]"
          iconColor="text-[#fff]/30"
      />
      <StatsCard
        title="Total Comments"
        value={userData.totalComments}
        icon={MessageCircle}
          gradient="from-[#F34971] to-[#F34971]"
          iconColor="text-[#fff]/30"
      />
      <StatsCard
        title="Total Shares"
        value={userData.totalShares}
        icon={Share2}
          gradient="from-[#00D37F] to-[#00D37F]"
          iconColor="text-[#fff]/30"
      />
      <StatsCard
        title="Reels"
        value={userData.totalReels}
        icon={Video}
          gradient="from-[#F34971] to-[#F34971]"
          iconColor="text-[#fff]/30"
      />
      <StatsCard
        title="Carousels"
        value = {userData.totalCarousels}
        icon={Layout}
          gradient="from-[#00D37F] to-[#00D37F]"
          iconColor="text-[#fff]/30"
      />
      <StatsCard
        title="Images"
        value={userData.imagesCount}
        icon={Image}
          gradient="from-[#017AFF] to-[#017AFF]"
          iconColor="text-[#fff]/30"
      />
    </div>
  );
}