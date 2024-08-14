import { api } from "@/app/lib/middleware/apiInceptor"
import { ADDMISSONS } from ".."

export const getAllAdmissions =async(payload) =>{
 let res = await api.get(`${ADDMISSONS}/all/`)
 if(res){
    return res.data.payload
 }
 else{
    res.error ='error'
 }
}
export const addAdmissionQuery =async(payload)=>{
   return await api.post(ADDMISSONS, payload)
}

export const getAdmissionDetails = async (uuid) => {
   try {
     const res = await api.get(`${ADDMISSONS}/${uuid}`);
     return res.data.payload;
   } catch (error) {
     handleError(error);
   }
 };