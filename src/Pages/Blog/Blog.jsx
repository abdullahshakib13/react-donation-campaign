import React from 'react';
import { useParams } from 'react-router-dom';

const Blog = () => {
    const params = useParams();
    console.log(params);
    return (
        <div>
           Blog 
        </div>
    );
};

export default Blog;