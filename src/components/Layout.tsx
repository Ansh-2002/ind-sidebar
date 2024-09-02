import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export function Layout({ children }: { children: React.ReactNode }) {
     const sidebarItems = [
       {
         title: "Home",
         subItems: ["Sub Item 1", "Sub Item 2"],
       },
       {
         title: "About",
         subItems: ["Sub Item 3", "Sub Item 4"],
       },
       {
         title: "Services",
         subItems: ["Service 1", "Service 2"],
       },
       {
         title: "Contact",
         subItems: ["Email", "Phone"],
       },
     ];
  return (
    <>
      <Sidebar menuItems={sidebarItems}/>
      <main className="flex-auto">{children}</main>
      <Footer />

      
    </>
  );
}
