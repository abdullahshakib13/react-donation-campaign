import { useLoaderData } from "react-router-dom";
import Blogs from "../../components/Blogs/Blogs";
import Banner from "../../components/Header/Banner/Banner";

const Home = () => {
    const blogs = useLoaderData();
    // console.log(blogs);
    return (
        <div>
            <Banner></Banner>
            <Blogs blogs={blogs}></Blogs>
        </div>
    );
};

export default Home;