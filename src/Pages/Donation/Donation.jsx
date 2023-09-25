import { useEffect, useState } from "react";
import BlogCard from "../Blog/BlogCard";

const Donation = () => {

    const [donation, setDonation] = useState();
    
    const [notFound, setNotFound] = useState('');
    useEffect(() => {
        const donateItems = JSON.parse(localStorage.getItem('donation'));
        if (donateItems) {
            
            setDonation(donateItems);
        } else {
          setNotFound('no data found')  
        }
    }, [])
    console.log(donation);
    return (
        <div>
            {notFound ? <p className="flex justify-center items-center">{notFound}</p> :
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {
                            donation?.map(blog=> <BlogCard key={blog.id} blog={blog}></BlogCard>)
                        }
                    </div>
                </div>}
        </div>
    );
};

export default Donation;