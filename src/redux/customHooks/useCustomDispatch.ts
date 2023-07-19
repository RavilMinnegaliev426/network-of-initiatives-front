import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
export const useCustomDispatch: () => AppDispatch = useDispatch;
