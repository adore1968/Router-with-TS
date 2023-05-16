export interface AppProviderValue {
  isLoading: boolean;
  tours: Tour[];
  deleteTour: (id: string) => void;
}

export interface Tour {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
}
