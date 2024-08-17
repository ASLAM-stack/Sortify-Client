import { Helmet } from "react-helmet-async";
import Banner from "./Component/Banner";

 

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>HOME</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;