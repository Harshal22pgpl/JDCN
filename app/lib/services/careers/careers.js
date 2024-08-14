import { api } from "@/app/lib/middleware/apiInceptor";
import { CAREERS } from "..";
import { toast } from "react-toastify";
import { handleError } from "@/app/lib/helpers/handleErrors";
export const addCareer = async (payload) => {
  try 
  {
    let res = await api.post(CAREERS, payload);
    toast.success(res.data.message);
    return res.data.payload;
  } catch (error) {
    handleError(error);
  }
};
export const updateCareer = async (payload) => {
  try {
    const res = await api.put(`${CAREERS}/${payload.uuid}`, payload);
    toast.success(res.data.message);
    return res.data.payload;
  } catch (error) {
    handleError(error);
  }
};

export const getCareer = async () => {
    try {
        const res = await api.get(CAREERS);
        return res.data.payload.data;
      } catch (error) {
        handleError(error);
      }
};

export const deleteCareer = async (uuid) => {
  try {
    const res = await api.delete(`${CAREERS}/${uuid}`);
    toast.success(res.data.message);
  } catch (error) {
    handleError(error);
  }
};

export const getCareerDetails = async (uuid) => {
  try {
    const res = await api.get(`${CAREERS}/${uuid}`);
    return res.data.payload;
  } catch (error) {
    handleError(error);
  }
};
