import { useEffect, useState } from "react";
import Container from "../../Container/Container";

const Service = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setService(data);
      });
  }, []);

  return (
    <Container>
      <div className="text-center">
        <div className="w-[400px] mx-auto ">
          <p className="text-lg">Service</p>
          <h1 className="text-4xl font-semibold text-black">
            Our Service Area
          </h1>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable
          </p>
        </div>

        {/* service cards */}
        <div className="grid grid-cols-3 gap-10 items-center">
          {service.map((item) => (
             <div key={item._id} className="card bg-base-100 shadow-xl">
             <figure className="px-10 pt-10">
               <img
                 src={item.img}
                 alt="Shoes"
                 className="rounded-xl"
               />
             </figure>
             <div className="card-body items-center text-center">
               <h2 className="card-title">{item.title} </h2>
               <div className=" flex justify-between items-center bg-slate-500 w-full">
                 <span className="text-xl">Price: ${item.price} </span>
                 <button className="btn btn-primary">Details</button>
               </div>
             </div>
           </div>
           
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Service;
