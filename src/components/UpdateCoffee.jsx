import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const loadedCoffee = useLoaderData();
    console.log(loadedCoffee)

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = {
            name,
            chef,
            quantity,
            price,
            category,
            details,
            photo
        }
        console.log(updatedCoffee)

        fetch(`http://localhost:5000/coffee/${loadedCoffee._id}`, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Successfully!',
                        text: 'Coffee update successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }

            })
    }
    return (
        <div className="my-container my-10">
            <Link to='/'><button className="ml-5 text-3xl flex gap-2 items-center text-[#3b2b2b]" style={{ fontFamily: ['Rancho', ' cursive'] }}><ArrowLeftIcon className="h-6 w-6" /> Back to Home</button></Link>
            <div className=" bg-[#F4F3F0] py-16 px-28 mt-10">
                <div className="section-title md:w-2/3 text-center mx-auto">
                    <h1 className='text-3xl font-bold text-[#3b2b2b] mb-5'>Update Coffee Information</h1>
                    <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={handleUpdateCoffee}>
                    <div className="flex gap-5 mt-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="">
                                <input type="text" name="name" defaultValue={loadedCoffee.name} placeholder="Enter coffee name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <label className="">
                                <input type="text" name="chef" defaultValue={loadedCoffee.chef} placeholder="Enter chef name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-5 mt-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <label className="">
                                <input type="text" name="quantity" defaultValue={loadedCoffee.quantity} placeholder="Enter coffee quantity" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="">
                                <input type="text" name="price" defaultValue={loadedCoffee.price} placeholder="Enter coffee price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-5 mt-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="">
                                <input type="text" name="category" defaultValue={loadedCoffee.category} placeholder="Enter coffee category" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="">
                                <input type="text" name="details" defaultValue={loadedCoffee.details} placeholder="Enter coffee details" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-5 mt-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <label className="">
                                <input type="text" name="photo" defaultValue={loadedCoffee.photo} placeholder="Enter photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="my-btn w-full mt-6">Add Coffee</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;