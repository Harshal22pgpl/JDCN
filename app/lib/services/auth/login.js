import { api, setAuthToken } from "@/app/lib/middleware/apiInceptor"
import { LOGIN_URL } from ".."
import { toast } from "react-toastify"
import { handleError } from "@/app/lib/helpers/handleErrors"

export const login = async (payload) => {
  try {
    let res = await api.post(LOGIN_URL, payload)
      setAuthToken(res.data.payload.token)
      toast.success(res.data.message)
      return res.data.payload
  } catch (error) {
    handleError(error)
  }
}