const AddCoffee = () => {
    return (
        <div className="my-container bg-[#F4F3F0] py-16 px-28 mt-12">
            <div className="section-title">
                <h1>Add New Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form >
                <div className="flex gap-5 mt-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="">
                            <input type="text" placeholder="Enter coffee name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <label className="">
                            <input type="text" placeholder="Enter chef name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-5 mt-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="">
                            <input type="text" placeholder="Enter coffee supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="">
                            <input type="text" placeholder="Enter coffee taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-5 mt-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="">
                            <input type="text" placeholder="Enter coffee category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="">
                            <input type="text" placeholder="Enter coffee details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-5 mt-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="">
                            <input type="text" placeholder="Enter photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <button type="submit" className="my-btn w-full mt-6">Add Coffee</button>
            </form>
        </div>
    );
};

export default AddCoffee;