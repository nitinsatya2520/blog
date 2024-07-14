import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'; // Import your CSS file

const BlogPost = ({ id, title, content, author, date, onDelete }) => {
    const [deleting, setDeleting] = useState(false);

    const handleDelete = () => {
        setDeleting(true);
        axios.delete(`http://localhost:5000/api/blogposts/${id}`)
            .then(response => {
                console.log(response.data);
                onDelete(id); // Trigger parent component callback to update state
            })
            .catch(error => {
                console.error('Error deleting blog post:', error);
            })
            .finally(() => {
                setDeleting(false);
            });
    };

    return (
        <div className="blog-post">
            <h2>{title}</h2>
            <p>{content}</p>
            <p>By {author} on {date}</p>
            <button onClick={handleDelete} disabled={deleting}>
                {deleting ? 'Deleting...' : 'Delete'}
            </button>
        </div>
    );
};

export default BlogPost;
