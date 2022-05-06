import React from "react";
import { useForm } from "react-hook-form";
const AddBook = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="w-50 mx-auto">
      <h2>PLease Add Book</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
      <input  className="mb-2" placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
      <textarea className="mb-2" placeholder="Description" {...register("description")} />
      <input className="mb-2" placeholder="Price" type="number" {...register("price")} />
      <input className="mb-2" placeholder="Quantity" type="number" {...register("instock")} />
      <input className="mb-2" placeholder="Photo Url" {...register("picture")} />
      <input className="mb-2" placeholder="Name" type="Add Book" />
    </form>
    </div>
  );
};

export default AddBook;
