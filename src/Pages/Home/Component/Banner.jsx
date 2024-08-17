 

const Banner = () => {
    return (
        <div className="py-10">
            <div className="max-w-7xl mx-auto bg-[url('/Banner.png')] min-h-[600px] bg-no-repeat bg-cover rounded-2xl sm:bg-right flex flex-col justify-center md:pl-12 ">
            <div className="space-y-5 p-4 md:p-0">
                <h1 className="text-6xl font-semibold robo">Find Your <br />
                Products</h1>
                <p className="text-lg">Shop premium beauty, fragrances, furniture, and groceries, all in one place! <br />
                Experience luxury with every purchase.</p>
                <a href="" className="btn btn-outline">Find Now</a>
            </div>
            </div>
        </div>
    );
};

export default Banner;