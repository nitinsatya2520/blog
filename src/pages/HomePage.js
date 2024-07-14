// pages/HomePage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; // Import your CSS file
import BlogList from '../components/BlogList';
import AddBlogPost from '../components/AddBlogPost';

const HomePage = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        fetchBlogPosts();
    }, []);

    const fetchBlogPosts = () => {
        axios.get('http://localhost:5000/api/blogposts')
            .then(response => {
                setBlogPosts(response.data);
                setLoading(false); // Turn off loading indicator
            })
            .catch(error => {
                console.error('Error fetching blog posts:', error);
                setLoading(false); // Turn off loading indicator on error
            });
    };

    const handleDeletePost = (postId) => {
        setBlogPosts(blogPosts.filter(post => post.id !== postId));
    };

    return (
        <div className='container'>
            <div className="blog-list">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <BlogList blogPosts={blogPosts} onDelete={handleDeletePost} />
                )}
            </div>
            <div className="form-container">
                <AddBlogPost />
            </div>
        </div>
    );
};

export default HomePage;
