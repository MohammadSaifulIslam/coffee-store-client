import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid'
const CoffeeCard = ({coffee}) => {
    const  { name, chef, quantity, price,photo } = coffee;
    return (
        <div className="card card-side p-7 bg-[#F5F4F1] ">
        <figure><img src={photo} alt="Movie"/></figure>
        <div className="flex w-full justify-between items-center">
          <div>
          <h2 className="card-title">Name{name}</h2>
          <p>Chef: {chef}</p>
          <p>Quantity: {quantity}</p>
          <p>Price: {price}</p>
          </div>
          <div className="text-white grid gap-3">
            <button className="bg-[#D2B48C] h-10 w-10 text-center rounded">  <EyeIcon className="h-6 w-6 mx-auto" /></button>
            <button className="bg-[#3C393B] h-10 w-10 text-center rounded">  <PencilIcon className="h-6 mx-auto w-6" /></button>
            <button className="bg-[#EA4744] h-10 w-10 text-center rounded">  <TrashIcon className="h-6  mx-auto w-6" /></button>
          </div>
        </div>
      </div>
    );
};

export default CoffeeCard;