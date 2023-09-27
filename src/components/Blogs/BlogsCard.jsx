import React from 'react';
import { Link } from 'react-router-dom';

const BlogsCard = ({ blog }) => {
    const { id, image, title, category, category_bg, card_bg, text_button_bg } = blog || {};

    return (
        <div>
            <Link to={`/blogs/${id}`} >
                <div className="h-[50vh] flex justify-center items-center">
                    <div style={{background:card_bg}} className="relative w-[312px] h-[283px] flex flex-col rounded-xl bg-clip-border text-gray-700 shadow-md ">
                        <div className="relative mx-4 w-[312px] h-[194px] mx-auto overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white ">
                            <img src={image} alt="img-blur-shadow" layout="fill"/>
                        </div>
                        <div  className="p-2 pt-0 mt-2">
                            <h3 style={{background: category_bg}}
                            className="select-none rounded-lg py-2 px-2 text-center align-middle text-sm font-medium uppercase shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                            >
                           <span style={{color:text_button_bg}}> {category}</span>
                            </h3>
                            </div>
                            <div className="p-2">
                            <p style={{color:text_button_bg}} className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {title}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BlogsCard;