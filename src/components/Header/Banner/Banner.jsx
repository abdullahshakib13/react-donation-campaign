import React from 'react';

const Banner = () => {
    return (
        <div className="relative grid h-[40rem] w-full flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
  <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/SPy3pLz/banner.png')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
    <div className="to-bg-white-10 absolute inset-0 h-full w-full bg-gradient-to-t from-white/20 via-white/80">
                    
    </div>
  </div>
  <div className="relative p-6  px-6 md:px-12 flex justify-center items-center"> 
     <h2 className="mb-20 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-black antialiased">
                    I Grow By Helping People In Need
    {/* search input */}
    <div class="mb-24">
        <div className="relative flex w-full flex-wrap items-stretch">
            <input
            type="search"
            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search here..."
            aria-label="Search"
            aria-describedby="button-addon3" />

            {/* <!--Search button--> */}
            <button
            className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out bg-[#FF444A]  focus:outline-none focus:ring-0"
            type="button"
            id="button-addon3"
            data-te-ripple-init>
            Search
            </button>
        </div>
</div>

    </h2>
  </div>
</div>
    );
};

export default Banner;