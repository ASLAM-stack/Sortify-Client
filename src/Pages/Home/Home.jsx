import { Helmet } from "react-helmet-async";
import Banner from "./Component/Banner";
import Products from "./Component/Products/Products";

 

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>HOME</title>
            </Helmet>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;