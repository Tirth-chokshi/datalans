"use client";
import { useEffect, useState } from "react";
import { Post } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { format, parseISO } from "date-fns";

interface PostGridProps {
  posts: Post[];
}

export function PostGrid({ posts }: PostGridProps) {
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
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {userData.posts.map((post) => (
        <Card key={post.id} className="overflow-hidden">
          <div className="relative aspect-square">
            <img
              src={post.mediaUrl}
              alt={post.caption}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <p className="text-sm text-muted-foreground mb-2">
              {format(parseISO(post.createdAt), "MMM d, yyyy")}
            </p>
            <p className="text-sm mb-3">{post.caption}</p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                <span>{post.comments}</span>
              </div>
              <div className="flex items-center gap-1">
                <Share2 className="w-4 h-4" />
                <span>{post.shares}</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}