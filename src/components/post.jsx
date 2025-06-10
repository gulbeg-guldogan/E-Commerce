import React from "react";

const posts = [
  {
    id: 1,
    image: "/assets/road.jpg",
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    tags: ["Google", "Trending", "New"],
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 2,
    image: "/assets/pincBeetle.jpg",
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    tags: ["Google", "Trending", "New"],
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 3,
    image: "/assets/umbrellas.jpg",
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    tags: ["Google", "Trending", "New"],
    date: "22 April 2021",
    comments: 10,
  },
];

export default function Post() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 mt-5">
      <p className="text-center text-blue-500 font-semibold">Practice Advice</p>
      <h2 className="text-3xl font-bold text-center mb-8">Featured Posts</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow rounded-xl overflow-hidden">
            <div className="relative">
              <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">NEW</span>
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-2">
                {post.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{post.description}</p>
              <div className="flex justify-between items-center text-xs text-gray-400 mt-4">
                <span className="flex items-center gap-1">
                  <i className="far fa-clock" /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <i className="far fa-comment-alt" /> {post.comments} comments
                </span>
              </div>
              <a href="#" className="block text-blue-500 mt-4 text-sm font-semibold">
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
