import { useState } from "react";
import { Tour } from "../shared/types";
import { useAppContext } from "../hooks/AppContext";

type Props = {
  value: Tour;
};

function TourItem({ value }: Props) {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const { deleteTour } = useAppContext();

  return (
    <div className="mx-0 mb-10 w-full last-of-type:mb-0 lg:mx-auto lg:w-10/12">
      <img
        src={value.image}
        alt={value.name}
        className=" h-[745px] w-full rounded object-cover"
      />
      <div className="rounded bg-white p-5 text-black">
        <div className="flex items-center justify-between">
          <h4 className="text-xl sm:text-2xl">{value.name}</h4>
          <span className="rounded bg-blue-100 px-2 py-0.5 text-lg text-blue-600 sm:text-xl">
            {value.price}
          </span>
        </div>
        <p className="my-5 text-base sm:text-lg">
          {showInfo ? value.info : `${value.info.substring(0, 230)}...`}{" "}
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="text-blue-600"
          >
            {showInfo ? "Show Less" : "Show More"}
          </button>
        </p>
        <button
          onClick={() => deleteTour(value.id)}
          className="mx-auto block rounded border border-red-600 px-5 py-1 text-base text-red-600 transition-colors hover:bg-red-500 hover:text-white sm:text-lg"
        >
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default TourItem;
