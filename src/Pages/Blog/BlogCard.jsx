import React from 'react';

const BlogCard = ({ blog }) => {
    const { id, image, title, category,price,description,category_bg,card_bg,text_button_bg } = blog || {};

    const handleDonate = () => {
        const addedDonationarray = [];

        const donateItems = JSON.parse(localStorage.getItem('donation'));

        if(!donateItems){
            addedDonationarray.push(blog);
            localStorage.setItem('donation', JSON.stringify(addedDonationarray))
            alert('products added');
        } else {

            const isExist = donateItems.find(blog => blog.id == id);

            if (!isExist) {
                addedDonationarray.push(...donateItems, blog);
                localStorage.setItem('donation', JSON.stringify(addedDonationarray));
                alert('products added');
            } else {
                alert('already ase')
            }


            
        }
    }
    return (
        <div className="w-11/12 flex ">
            {/* <div className="  flex flex-col rounded-xl bg-white text-gray-700 "> */}
            <div className=" mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img className='w-[1340px] h-[700px]'
                src={image}
                alt="img-blur-shadow"
                layout="fill"
                    />
                    <div className='bg-[#BBBBBB80]'>
                        <button onClick={handleDonate}
                className="ml-6 select-none -mt-24 rounded-lg bg-[#FF444A] py-3 px-6 text-center align-middle text-xl font-semibold text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
                >
                Donate {price}
                </button>
                    </div>
                {/* </div> */}
                {/* <div className="p-6 pt-0 ">
                <button onClick={handleDonate}
                className="select-none rounded-lg bg-[#FF444A] py-3 px-6 text-center align-middle text-xl font-semibold text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
                >
                Donate
                </button>
            </div> */}
            <div className="p-6">
                <h5 className="mb-2 block text-4xl font-bold leading-snug tracking-normal text-[#0B0B0B] antialiased">
               {title}
                </h5>
                <p className="block text-base font-normal leading-relaxed text-inherit antialiased">
                {description}
                </p>
            </div>
            
            </div>
        </div>
    );
};

export default BlogCard;