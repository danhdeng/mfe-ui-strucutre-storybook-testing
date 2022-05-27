import create from "zustand";
import { Movie } from "./types/types";


export const useStore =create<{
  movies:Movie[],
  addMovie:(movie:Movie) => void
}>((set) => ({
  movies:[],
  addMovie: (movie:Movie) =>set((state)=>({movies:[...state.movies,movie]}))
}));
