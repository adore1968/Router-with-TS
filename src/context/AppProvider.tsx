import { useState, useEffect } from "react";
import { AppContext } from "../hooks/AppContext";
import { Tour } from "../shared/types";

type Props = { children: JSX.Element };

const url = "https://course-api.com/react-tours-project";

export function AppProvider({ children }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    const fetchTours = async (): Promise<Tour[]> => {
      return fetch(url).then((r) => r.json());
    };

    fetchTours()
      .then((data) => {
        setTours(data);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  const deleteTour = (id: string) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  return (
    <AppContext.Provider value={{ isLoading, tours, deleteTour }}>
      {children}
    </AppContext.Provider>
  );
}
