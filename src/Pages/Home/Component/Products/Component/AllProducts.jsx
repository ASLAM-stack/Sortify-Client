import Product from "./Product";

 

const AllProducts = ({products}) => {
    console.log(products);
    return (
        <div className="grid gap-4 mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center  px-5">
             {
                products?.map((product) => <Product key={product._id} product={product}  ></Product>)
             }
        </div>
    );
};

export default AllProducts;