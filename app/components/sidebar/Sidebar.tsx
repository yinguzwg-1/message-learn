import getCurrentUser from "@/app/actions/getCurrentUser";
import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";

export default async function Sidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = getCurrentUser();
  return (
    <div className="h-full">
      <DesktopSidebar currentUser={currentUser as any} />
      <MobileFooter />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
}
