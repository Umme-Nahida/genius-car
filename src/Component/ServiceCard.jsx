

const ServiceCard = ({item}) => {
   
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={item?.img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-left text-3xl">{item?.title} </h2>
          <div className=" flex justify-between items-center w-full">
            <span className="text-xl">Price: ${item?.price} </span>
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;