import React, { useState } from 'react';
import BlogApp from './Components/BlogApp';
import BlogNavbar from './Components/BlogNavbar';
import './App.css'

function App() {
    const [showAddBlog, setShowAddBlog] = useState(false);

    const handleShowAddBlog = () => {
        setShowAddBlog(true); 
    };

    const handleCloseAddBlog = () => {
        setShowAddBlog(false); 
    };

    return (
        <div className="app-container">
            <BlogNavbar onAddBlog={handleShowAddBlog} /> 
            <div className="content-wrapper">
                <BlogApp showAddBlog={showAddBlog} onCloseAddBlog={handleCloseAddBlog} />
            </div>
        </div>
    );
}

export default App;
