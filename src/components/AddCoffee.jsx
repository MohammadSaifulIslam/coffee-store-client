import Swal from 'sweetalert2'
const AddCoffee = () => {
    const handleAddCoffee = event =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {
            name,
            chef,
            quantity,
            price,
            category,
            details,
            photo
        }
        console.log(newCoffee)

        fetch('http://localhost:5000/coffee',{
            method : "POST",
            headers: {
                'content-type' : "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            Swal.fire({
                title: 'Successfully!',
                text: 'Coffee insert to database',
                icon: 'success',
                confirmButtonText: 'Okay'
              })
        })
    }
    return (
        <div className="my-container bg-[#F4F3F0] py-16 px-28 mt-12">
            <div className="section-title">
                <h1>Add New Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffee}>
                <div className="flex gap-5 mt-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="">
                            <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <label className="">
                            <input type="text" name="chef" placeholder="Enter chef name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-5 mt-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className="">
                            <input type="text" name="quantity" placeholder="Enter coffee quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="">
                            <input type="text" name="price" placeholder="Enter coffee price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-5 mt-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="">
                            <input type="text" name="category" placeholder="Enter coffee category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="">
                            <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-5 mt-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="">
                            <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <button type="submit" className="my-btn w-full mt-6">Add Coffee</button>
            </form>
        </div>
    );
};

export default AddCoffee;