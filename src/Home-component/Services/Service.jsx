import { useEffect, useState } from "react";
import Container from "../../Container/Container";
import ServiceCard from "../../Component/ServiceCard";

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
            <ServiceCard
             key={item._id}
             item={item}
            
            ></ServiceCard>
           
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Service;
