import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

const Home = () => {
    const loaddedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loaddedCoffees)

    return (
        <div className="my-container my-12">
            <h3 className="text-center text-4xl font-bold mb-10">Our Popular Products</h3>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    coffees.map(coffee => <CoffeeCard
                    key={coffee._id}
                    coffee={coffee}
                    coffees={coffees}
                    setCoffees={setCoffees}
                    ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;