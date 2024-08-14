import { api } from "@/app/lib/middleware/apiInceptor";
import { JOBAPPLICATION } from "..";
import { toast } from "react-toastify";
import { handleError } from "@/app/lib/helpers/handleErrors";
export const addApplication = async (payload) => {
  try 
  {
    let res = await api.post(JOBAPPLICATION, payload);
    toast.success(res.data.message);
    return res.data.payload;
  } catch (error) {
    handleError(error);
  }
};
export const updateApplication = async (payload) => {
  try {
    delete payload.Roles;
    const res = await api.put(`${JOBAPPLICATION}/${payload.uuid}`, payload);
    toast.success(res.data.message);
    return res.data.payload;
  } catch (error) {
    handleError(error);
  }
};

export const getApplication = async () => {
    try {
        const res = await api.get(JOBAPPLICATION);
        return res.data.payload.data;
      } catch (error) {
        handleError(error);
      }
};

export const deleteApplication = async (uuid) => {
  try {
    const res = await api.delete(`${JOBAPPLICATION}/${uuid}`);
    toast.success(res.data.message);
  } catch (error) {
    handleError(error);
  }
};

export const getApplicationDetails = async (uuid) => {
  try {
    const res = await api.get(`${JOBAPPLICATION}/${uuid}`);
    return res.data.payload;
  } catch (error) {
    handleError(error);
  }
};
