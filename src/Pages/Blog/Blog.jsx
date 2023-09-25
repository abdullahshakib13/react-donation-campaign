import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import BlogCard from './BlogCard';

const Blog = () => {
    const [blog, setBlog] = useState({});
    
    const { id } = useParams();
    // console.log(id);

    const blogs = useLoaderData();
    // console.log(blogs);

    useEffect(() => {
        const findBlog = blogs?.find((blog) => blog.id == id)
        // console.log(findBlog);
        setBlog(findBlog);
    }, [id,blogs]);
    console.log(blog);
    return (
        <div>
           <BlogCard blog={blog}></BlogCard>
        </div>
    );
};

export default Blog;