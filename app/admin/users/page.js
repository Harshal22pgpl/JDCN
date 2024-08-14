import injectToken from "@/app/actions";
import { UserProvider } from "@/app/components/context/UserContext";
import { getAllRoles } from "@/app/lib/services/roles";

import { getUsers, loadProfile } from "@/app/lib/services/user/userServices";
import dynamic from "next/dynamic";
const UserList = dynamic(() => import("@/app/components/User/UserList"));
const UserForm = dynamic(() => import("@/app/components/User/UserForm"));
async function page() {
  await injectToken();
  const users = await getUsers({ limit: 5, page: 1 });
  const roles = await getAllRoles();
  const profile = await loadProfile();
;
  return (
    <>
      <UserProvider>
        <UserForm
          roles={roles}
          profile={profile}
          users={users}
        />
        <UserList users={users} />
      </UserProvider>
    </>
  );
}

export default page;
