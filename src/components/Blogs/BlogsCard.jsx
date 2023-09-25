import React from 'react';
import { Link } from 'react-router-dom';

const BlogsCard = ({ blog }) => {
    const {id,image,title,category} = blog || {}
    return (
        <div>
            <Link to={`/blogs/${id}`}>
                <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white ">
                    <img
                    src={image}
                    alt="img-blur-shadow"
                    layout="fill"
                    />
                </div>
                <div className="p-2 pt-0 mt-2">
                    <button
                    className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                    >
                    {category}
                    </button>
                    </div>
                    <div className="p-2">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {title}
                    </h5>
                </div>
              </div>
            </Link>
        </div>
    );
};

export default BlogsCard;