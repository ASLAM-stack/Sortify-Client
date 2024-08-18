import Product from "./Product";

 

const AllProducts = ({products}) => {
    console.log(products);
    return (
        <div>
             {
                products?.map((product) => <Product key={product._id} product={product}  ></Product>)
             }
        </div>
    );
};

export default AllProducts;