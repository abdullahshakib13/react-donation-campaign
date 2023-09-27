import React from 'react';
import { Link } from 'react-router-dom';

const DonationCard = ({blog}) => {
     const { id, image, title, category,price,description,category_bg,card_bg,text_button_bg } = blog || {};
    return (
        
            <div style={{background:card_bg}} className="w-[648px] h-52 relative flex justify-center items-center  flex-row rounded-xl py-4 bg-white bg-clip-bord shadow-md">
                <div className="relative shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border">
                    <img
                    src={image}
                    alt="image"
                    className="w-56 h-52 object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 style={{background:category_bg}} className="mb-4 text-center block text-sm font-normal uppercase leading-relaxed tracking-normal antialiased">
                    <span style={{color: text_button_bg}}>{category}</span>
                    </h6>
                    <h4 style={{color: text_button_bg}} className="mb-2 block text-2xl font-semibold leading-snug tracking-normal antialiased">
                    {title}
                    </h4>
                    <p className="mb-8 block text-base font-semibold leading-relaxed  antialiased">
                    {price}
                    </p>
                <Link to={`/blog/`}>
                     <button style={{ background:category_bg}}
                        className="flex select-none items-center gap-2  text-white rounded-lg py-3 px-6 text-center align-middle text-lg font-semibold transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                    View Details
                        {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                        </svg> */}
                    </button>
                </Link>
                </div>
            </div>
    );
};

export default DonationCard;