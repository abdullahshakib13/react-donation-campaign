import React from 'react';
import BlogsCard from './BlogsCard';

const Blogs = ({ blogs }) => {
    console.log(blogs);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
            {
                blogs?.map(blog=> <BlogsCard key={blog.id} blog={blog}></BlogsCard>)
            }
        </div>
    );
};

export default Blogs;