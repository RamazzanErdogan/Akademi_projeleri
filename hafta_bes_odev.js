import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Ramazan Erdoğan @lramazzanl",
      message: "İlk React Projem",
      timestamp: new Date(),
    },
    {
      username: "Zlatan İbrahimovic @ibrahimovic",
      message: "FİNALLY WE WON THE CHAMPİONS LEAGUE",
      timestamp: new Date(),
    },
    {
      username: "Mustafa Kemal @Atatürk",
      message: "NE MUTLU TÜRKÜM DİYENE",
      timestamp: new Date(),
    },
    {
      username: "Nihal Atsız @natsız",
      message: "İstek ve inanç her güçlüyü devirir",
      timestamp: new Date(),
    },
  ]);
  return (
    <div>
      <Navbar />
      <h1>Hoşgeldiniz</h1>
      <div className="posts">
        {posts.map((post, index) => (
          <Post
            key={index}
            username={post.username}
            message={post.message}
            timestamp={post.timestamp}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
