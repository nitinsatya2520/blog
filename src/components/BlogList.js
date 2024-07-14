// components/BlogList.js
import React from 'react';
import BlogPost from './BlogPost';

const BlogList = ({ blogPosts, onDelete }) => {
    return (
        <div>
            {blogPosts.map(post => (
                <BlogPost
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    author={post.author}
                    date={post.date}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default BlogList;
