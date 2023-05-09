import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
    const coffees = useLoaderData();

    return (
        <div className="my-container mt-12">
            <h3 className="text-center text-4xl font-bold mb-10">Our Popular Products</h3>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    coffees.map(coffee => <CoffeeCard
                    key={coffee._id}
                    coffee={coffee}
                    ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;