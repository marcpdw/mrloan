import Axios from "axios";

type User = {
  id: string
  name: string
}

export function get(id: string): Promise<User> {
  return Axios.get(`http://api.hubtype.com/v1/users/${id}`)
}
