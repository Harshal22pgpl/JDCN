import { api } from "@/app/lib/middleware/apiInceptor";
import { COLLEGE } from "..";
import { toast } from "react-toastify";
import { handleError } from "@/app/lib/helpers/handleErrors";
export const addCollege = async (payload) => {
  try {
    let res = await api.post(COLLEGE, payload);
    toast.success(res.data.message);
    return res.data.payload;
  } catch (error) {
    handleError(error);
  }
};

export const getCollege = async () => {
  try {
    let res = await api.get(COLLEGE);
    return res.data.payload;
  } catch (error) {
    handleError(error);
  }
};
export const getCollegeDetails = async () => {
  try {
    let res = await api.get(`${COLLEGE}/INDORE`);
    return res.data.payload;

  } catch (error) {
    handleError(error);
  }
};
