import { MdOutlineProductionQuantityLimits } from "react-icons/md";


const Emty = () => {
    return (
        <div className="min-h-96 text-center flex flex-col justify-center items-center p-2"> 
            <MdOutlineProductionQuantityLimits className="text-center text-gray-700 text-6xl" />
            <h3 className="text-gray-700 text-xl">Product not found</h3>
            <p className="text-gray-400">The file you are looking for could not be located.</p>
        </div>
    );
};

export default Emty;