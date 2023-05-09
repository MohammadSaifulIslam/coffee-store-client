import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const CoffeeCard = ({ coffee, coffees, setCoffees}) => {
  const { _id, name, chef, quantity, price, photo } = coffee;

  const handleDeleteItem = _id => {
    console.log(_id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
           if(data.deletedCount > 0){
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            const remaining = coffees.filter(cf => cf._id !== _id);
            setCoffees(remaining)
           }
          })

      }
    })
  }

  return (
    <div className="card card-side p-7 bg-[#F5F4F1] ">
      <figure><img src={photo} alt="coffee image" /></figure>
      <div className="flex w-full justify-between items-center">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <p>Chef: {chef}</p>
          <p>Quantity: {quantity}</p>
          <p>Price: {price}</p>
        </div>
        <div className="text-white grid gap-3">
          <Link to={`/view_coffee/${_id}`}><button className="bg-[#D2B48C] h-10 w-10 text-center rounded">  <EyeIcon className="h-6 w-6 mx-auto" /></button></Link>
         <Link to={`/update_coffee/${_id}`}> <button className="bg-[#3C393B] h-10 w-10 text-center rounded">  <PencilIcon className="h-6 mx-auto w-6" /></button></Link>
          <button onClick={() => handleDeleteItem(_id)} className="bg-[#EA4744] h-10 w-10 text-center rounded">  <TrashIcon className="h-6  mx-auto w-6" /></button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;