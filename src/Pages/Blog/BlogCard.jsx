import React from 'react';

const BlogCard = ({ blog }) => {
    const { id, image, title, category } = blog || {};

    const handleDonate = () => {
        localStorage.setItem('first','shakib')
    }
    return (
        <div className="flex justify-center items-center">
            <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img
                src={image}
                alt="img-blur-shadow"
                layout="fill"
                />
            </div>
            <div class="p-6">
                <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
               {title}
                </h5>
                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                There are many things that can be done to ensure that all people have access to a good education. Governments can invest in public schools, provide financial assistance to students, and make sure that all schools have qualified teachers and resources. Families can support their children's education by creating a learning environment at home and helping them with their schoolwork. Teachers can create a positive and supportive learning environment for their students and challenge them to reach their full potential.
                </p>
            </div>
            <div class="p-6 pt-0">
                <button onClick={handleDonate}
                class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
                >
                Donate
                </button>
            </div>
            </div>
        </div>
    );
};

export default BlogCard;