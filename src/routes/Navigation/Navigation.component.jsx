import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import NavComponent from "../../components/NavComponent";
import NavDropDown from "../../components/NavDropDown";
import { useState } from "react";
import { DashboardSquare02Icon, File01Icon, Notification03Icon, ContainerTruck02Icon, Audit01Icon, Files02Icon } from "hugeicons-react";


export default function Navigation() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const dashboardLinks = [
    { title: "Home", url: "dashboard/home" },
    { title: "Banners", url: "dashboard/banners" },
    { title: "Helpline Numbers", url: "dashboard/helpline" },
    { title: "Update Info", url: "dashboard/updateInfo" },
    { title: "Staff & Role", url: "dashboard/staff&role" },
  ];

  const alertsLinks = [
    { title: "Alerts", url: "alerts" },
    { title: "Notifications", url: "alerts/notifications" },
  ];

  const schemesNservicesLinks = [
    { title: "Gov Schemes", url: "gov/scheme" },
    { title: "Gov Servcies", url: "gov/service" },
  ];

  const publicBookingsLinks = [
    { title: "All Listings", url: "public/bookings" },
    { title: "All Bookings", url: "public/listings" },
  ];

  const taxNutilityLinks = [
    { title: "House Tax", url: "tax&utility/house" },
    { title: "Electricity Bill", url: "tax&utility/electricity" },
    { title: "Water Bill", url: "tax&utility/water" },
    { title: "Vehicle Challans", url: "tax&utility/vehicle" },
  ];

  return (
    <>
      <Header />
      <div className="flex">
        <nav className="mr-4 ml-4 h-[75vh] w-[15vw] flex-shrink-0 flex">
          <ul className="flex flex-col justify-start mt-3 gap-6 w-full items-start pl-3">
            <NavDropDown
              title="Dashboard"
              subLinks={dashboardLinks}
              Logo={DashboardSquare02Icon}
              isOpen={openDropdown === "dashboard"}
              onToggle={() =>
                setOpenDropdown(openDropdown === "dashboard" ? null : "dashboard")
              }
            />

            <NavComponent
              className="text-sm flex gap-2 items-center"
              url="complaints"
              styling="font-normal"
              activeStyling="font-bold"
            > 
              <File01Icon className="h-6 w-5" />
              Complaints
            </NavComponent>

            <NavDropDown
              title="Alerts"
              subLinks={alertsLinks}
              Logo={Notification03Icon}
              isOpen={openDropdown === "alerts"}
              onToggle={() =>
                setOpenDropdown(openDropdown === "alerts" ? null : "alerts")
              }
            />

            <NavComponent
              className="text-sm flex gap-2 items-center"
              url="garbage"
              styling="font-normal"
              activeStyling="font-bold"
            >
              <ContainerTruck02Icon className="h-6 w-5" />
              Garbage Monitoring
            </NavComponent>

            <NavComponent
              className="text-sm flex gap-2 items-center"
              url="socialAudit"
              styling="font-normal"
              activeStyling="font-bold"
            >
              <Audit01Icon className="h-6 w-5" />
              Social Audit
            </NavComponent>

            <NavDropDown
              title="Schemes & Services"
              subLinks={schemesNservicesLinks}
              Logo={Files02Icon}
              isOpen={openDropdown === "schemes"}
              onToggle={() =>
                setOpenDropdown(openDropdown === "schemes" ? null : "schemes")
              }
            />

            <NavDropDown
              title="Public Bookings"
              subLinks={publicBookingsLinks}
              Logo={DashboardSquare02Icon}
              isOpen={openDropdown === "bookings"}
              onToggle={() =>
                setOpenDropdown(openDropdown === "bookings" ? null : "bookings")
              }
            />

            <NavDropDown
              title="Tax & Utility"
              subLinks={taxNutilityLinks}
              Logo={DashboardSquare02Icon}
              isOpen={openDropdown === "tax"}
              onToggle={() =>
                setOpenDropdown(openDropdown === "tax" ? null : "tax")
              }
            />
          </ul>
        </nav>

        <div className="flex-grow mr-10 h-[75vh] bg-[#3a80f1] bg-opacity-10 rounded-3xl">
          <Outlet />
        </div>
      </div>
    </>
  );
}
