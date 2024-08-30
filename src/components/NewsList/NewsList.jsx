// src/components/NewsList.js
import React, { useEffect, useState } from 'react';
import './NewsList.css'
import axios from 'axios';

const NewsList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://hongo3.co.jp/wp-sub/wp-json/wp/v2/posts');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching news posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="news-list">
            <h2>Latest News</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title.rendered}</h3>
                        <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsList;
