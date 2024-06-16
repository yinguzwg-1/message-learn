import getUser from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import UserList from "./components/UserList";

export default async function UsersLayour({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUser();
  return (
    <Sidebar>
      <div className="h-full">
        <UserList items={users} />
        {children}
      </div>
    </Sidebar>
  );
}
