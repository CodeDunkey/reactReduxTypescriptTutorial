// from redux tutorial with hooks *
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"; 
import { RootState, AppDispatch } from "../store/Store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;