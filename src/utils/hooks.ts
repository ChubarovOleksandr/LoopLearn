import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from '../redux/index';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;