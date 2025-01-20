import AddPost from "../../features/Commuinty/AddPost/AddPost";
import PostCard from "../../features/Commuinty/PostCard/PostCard";
import './post.css';
import { useState, useEffect } from "react";
import Header from "../../layout/NavBar/Header";
import Footer from "../../layout/Footer/Footer";
import { Link } from "react-router-dom";

const Post = () => {
  // Default educational posts with images
  const defaultPosts = [
    {
      id: 1,
      content: "📚 تعلم أساسيات البرمجة بلغة Python. مناسب للمبتدئين. 🖥️",
      date: "2025-01-20",
      likes: 20,
      comments: [
        { id: 1, commenter: "Ali", comment: "هذا الكورس مفيد جداً للمبتدئين! 😊" },
        { id: 2, commenter: "Sara", comment: "أين أجد المصادر؟" },
      ],
      image: "https://example.com/python-course.jpg",
    },
    {
      id: 2,
      content: "🎓 دورة تطوير واجهات المستخدم باستخدام ReactJS 🚀.",
      date: "2025-01-19",
      likes: 15,
      comments: [
        { id: 1, commenter: "Hassan", comment: "دورة رائعة للمطورين المتقدمين! 💡" },
      ],
      image: "https://example.com/react-course.jpg",
    },
    {
      id: 3,
      content: "📖 جدول الدراسة الأسبوعي:\n- الاثنين: JavaScript Basics\n- الثلاثاء: CSS Advanced",
      date: "2025-01-18",
      likes: 10,
      comments: [],
      image: null, // No image for this post
    },
  ];

  const [posts, setPosts] = useState([]);

  // Load posts from Local Storage or set default posts
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts"));
    if (storedPosts && storedPosts.length > 0) {
      setPosts(storedPosts);
    } else {
      setPosts(defaultPosts);
      localStorage.setItem("posts", JSON.stringify(defaultPosts));
    }
  }, []);

  // Save posts to Local Storage whenever posts change
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const handleAddPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <>
      <Header />
      <div className="Social p-3">
        <div className="d-flex flex-wrap px-3 SocialDiv">
          <Link to="/review" className="reviewroute">
            <div>Any Reviews?</div>
          </Link>
          <div className="SocialTitle">Here's Our Educational Network!</div>
          <AddPost onAddPost={handleAddPost} />
          <div className="SocialTitle text-center mt-2">POSTS :</div>
          <div>
            {posts.length === 0 ? (
              <p>No posts yet.</p>
            ) : (
              <ul className="list-group">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Post;
