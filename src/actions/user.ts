import * as UserApi from "../api/user";

///////
type User = {
  id: string
  name: string
}

interface ReduxContext {
  getUser: (id: string) => Promise<User | null>
}
/////

export async function get(id: string, state: ReduxContext): Promise<User> {
  const user = await state.getUser(id)
  if (!user) {
    return await UserApi.get(id)
  }
  return user
}
