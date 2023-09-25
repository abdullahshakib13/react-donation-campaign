import { useEffect, useState } from "react";
import BlogCard from "../Blog/BlogCard";

const Donation = () => {

    const [donation, setDonation] = useState();
    
    const [notFound, setNotFound] = useState('');

    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const donateItems = JSON.parse(localStorage.getItem('donation'));
        if (donateItems) {
            
            setDonation(donateItems);
        } else {
          setNotFound('no data found')  
        }
    }, [])
    // console.log(donation);
    return (
        <div>
            {notFound ? <p className="flex justify-center items-center">{notFound}</p> :
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {
                            isShow ? donation?.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>) : 
                                donation?.slice(0,4).map(blog=> <BlogCard key={blog.id} blog={blog}></BlogCard>)
                        }
                    </div>
                    {/* {donation.length > 4 && <button onClick={() => setIsShow(!isShow)}
                        className="px-5 bg-green-200 block mx-auto">
                        {isShow ? 'See less' : 'See All'}</button>} */}
                    <button onClick={() => setIsShow(!isShow)}
                        className="px-5 bg-green-200 block mx-auto">
                        {isShow ? 'See less' : 'See All'}</button>}
                    
                </div>}
        </div>
    );
};

export default Donation;