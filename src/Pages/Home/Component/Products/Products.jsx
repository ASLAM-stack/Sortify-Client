import { useQuery } from "@tanstack/react-query";
import Heading from "../../../../Hooks/Heading";
import useAxiosPublic from "../../../../Hooks/UseAxiosPublic";


const Products = () => {
    const axiosPublic = useAxiosPublic ()
    const {data : products = [] } = useQuery({
        queryKey:['products'],
        queryFn: async () => {
            const res = await axiosPublic.get('/products');
            return res.data
        }
    })
    return (
        <div className="max-w-7xl mx-auto">
            <Heading subtitle={'Explore Now'} heading={'Our Products'}></Heading>
            <div>
                <div className="filterSearch ">

                </div>
                <div className="Products">

                </div>
            </div>
        </div>
    );
};

export default Products;