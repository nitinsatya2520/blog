import React, { useState } from 'react';
import '../App.css';

const AddBlogPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPost = { title, content, author };

        try {
            const response = await fetch('http://localhost:5000/api/blogposts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newPost)
            });
            const data = await response.json();
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='container'>
        <div className="form-container">
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
            />
            <button type="submit">Add Blog Post</button>
        </form>
        </div>
        </div>
    );
};

export default AddBlogPost;
