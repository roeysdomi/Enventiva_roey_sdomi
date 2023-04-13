import { useDispatch } from "react-redux";
import { setError } from "../../store/slices/formSlice";
import { AppDispatch } from "../../store";

export const formErrorsHandler = (fn: () => void) => {
    const dispatch = useDispatch<AppDispatch>();

    try {
      fn();
    } catch (error) {
      dispatch(setError("There is something wrong with the input. Please make sure you enter integers only."))
    }
  };
  