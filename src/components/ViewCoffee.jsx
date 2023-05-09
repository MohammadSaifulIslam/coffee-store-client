import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link, useLoaderData } from "react-router-dom";

const ViewCoffee = () => {
    const coffeeData = useLoaderData();
    const { name, chef, quantity, price, category, details, photo } = coffeeData;


    return (
        <section className="my-container my-10">
            <Link to='/'><button className="ml-5 text-3xl flex gap-2 items-center text-[#3b2b2b]" style={{fontFamily: ['Rancho',' cursive']}}><ArrowLeftIcon className="h-6 w-6" /> Back to Home</button></Link>
            <div className="mt-10 grid md:grid-cols-2 gap-10  p-7 bg-[#F5F4F1] ">
                <figure className="mx-auto"><img src={photo} alt="coffee image" /></figure>
                <div className="flex w-full justify-between items-center">
                    <div>
                        <h2 className="text-4xl mb-5 text-[#3b2b2b]" style={{fontFamily: ['Rancho',' cursive']}}>Niceties</h2>
                        <p><span className="text-[#3b2b2b] font-semibold">Name:</span> {name}</p>
                        <p><span className="text-[#3b2b2b] font-semibold">Chef:</span> {chef}</p>
                        <p><span className="text-[#3b2b2b] font-semibold">Quantity:</span> {quantity}</p>
                        <p><span className="text-[#3b2b2b] font-semibold">Price:</span> {price}</p>
                        <p><span className="text-[#3b2b2b] font-semibold">Category:</span> {category}</p>
                        <p><span className="text-[#3b2b2b] font-semibold">Details:</span> {details}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ViewCoffee;