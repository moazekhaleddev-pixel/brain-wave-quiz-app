import { Outlet } from "react-router-dom";
import AppNav from "../components/App/AppHeader";
import CatigoriesList from "../components/App/categories/CatigoriesList";
import CatigoriesHead from "../components/App/categories/CatigoriesHead";
import UserAcount from "../components/App/UserAcount";

export default function Categories() {
  return (
    <>
      <AppNav>
        <UserAcount />
      </AppNav>
      <main style={{ marginTop: "65px" }} className="container">
        <CatigoriesHead />
        <CatigoriesList />
        <Outlet />
      </main>
    </>
  );
}
