import { api } from "@/app/lib/middleware/apiInceptor";
import { NOTICES } from "..";
import { toast } from "react-toastify";
import { handleError } from "@/app/lib/helpers/handleErrors";

export const addNotice = async (payload) => {
 
  const res = await api.post(NOTICES, payload);
  if (res) {
    console.log(res," hhhhhhhhh");
    return res;
  }
};

export const getAllNotice = async () => {
 
    try {
        const res = await api.get(`${NOTICES}/all/627c481f-9c20-47bf-997e-894481c903f2`);
        return res.data.payload.data;
      } catch (error) {
        handleError(error);
      }
};

export const updateNotice = async (payload) => {
  try {
    delete payload.Roles;
    const res = await api.put(`${NOTICES}/${payload.uuid}`, payload);
    toast.success(res.data.message);
    return res.data.payload;
  } catch (err) {
    console.log("error");
  }
};

export const deleteNotice = async (uuid) => {
  try {
    const res = await api.delete(`${NOTICES}/${uuid}`);
    toast.success(res.data.message);
  } catch (err) {
    // handleError(error);
    console.log("error");
  }
};

export const getNoticeDetails = async (uuid) => {
  try {
    const res = await api.get(`${NOTICES}/${uuid}`);
    return res.data.payload;
  } catch (error) {
    handleError(error);
  }
};
