// components/Community.js
import React, { useState } from 'react';
import './Community.css';

function Community() {
    // Predefined posts data
    const initialPosts = [
        {
            id: 1,
            message: 'How can we improve forest conservation?',
            replies: ['Plant more trees', 'Support environmental organizations'],
        },
        {
            id: 2,
            message: 'What are some sustainable practices for forest management?',
            replies: ['Agroforestry', 'Controlled burns', 'Reforestation programs'],
        },
        // Add more predefined posts as needed
    ];

    const [posts, setPosts] = useState(initialPosts);
    const [newPost, setNewPost] = useState('');
    const [newReply, setNewReply] = useState('');
    const [replyingTo, setReplyingTo] = useState(null);

    // Handle submitting a new post
    const handlePostSubmit = (e) => {
        e.preventDefault();
        if (newPost.trim()) {
            const newPostObj = {
                id: posts.length + 1,
                message: newPost,
                replies: [],
            };
            setPosts([...posts, newPostObj]);
            setNewPost('');
        }
    };

    // Handle submitting a reply to a post
    const handleReplySubmit = (e, postId) => {
        e.preventDefault();
        if (newReply.trim()) {
            setPosts((prevPosts) =>
                prevPosts.map((post) =>
                    post.id === postId
                        ? { ...post, replies: [...post.replies, newReply] }
                        : post
                )
            );
            setNewReply('');
            setReplyingTo(null);
        }
    };

    return (
        <div className="community-container">
            <h2>Community</h2>

            {/* Form to submit a new post */}
            <form onSubmit={handlePostSubmit} className="community-form">
                <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="Type your message here..."
                    className="community-textarea"
                />
                <button type="submit" className="btn btn-primary">Post Message</button>
            </form>

            {/* Render list of posts with replies */}
            <ul className="community-messages">
                {posts.map((post) => (
                    <li key={post.id} className="message-item">
                        <div className="post-message">
                            {post.message}
                        </div>
                        <ul className="replies-list">
                            {post.replies.map((reply, index) => (
                                <li key={index} className="reply-item">
                                    {reply}
                                </li>
                            ))}
                        </ul>

                        {/* Form to submit a reply to the post */}
                        {replyingTo === post.id ? (
                            <form onSubmit={(e) => handleReplySubmit(e, post.id)} className="reply-form">
                                <textarea
                                    value={newReply}
                                    onChange={(e) => setNewReply(e.target.value)}
                                    placeholder="Type your reply here..."
                                    className="reply-textarea"
                                />
                                <button type="submit" className="btn btn-secondary">Post Reply</button>
                            </form>
                        ) : (
                            <button
                                onClick={() => setReplyingTo(post.id)}
                                className="btn btn-outline-secondary reply-button"
                            >
                                Reply
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Community;
