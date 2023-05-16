import { useAppContext } from "../hooks/AppContext";
import Loading from "./Loading";
import TourItem from "./TourItem";

function TourList() {
  const { isLoading, tours } = useAppContext();

  if (isLoading) return <Loading />;

  if (tours.length < 1)
    return (
      <h1 className="py-12 text-center text-2xl sm:text-4xl">
        Tours Not Found...
      </h1>
    );

  return (
    <div className="container mx-auto">
      <h1 className="py-12 text-center text-2xl sm:text-4xl">Our Tours</h1>
      {tours.map((value) => (
        <TourItem key={value.id} value={value} />
      ))}
    </div>
  );
}

export default TourList;
