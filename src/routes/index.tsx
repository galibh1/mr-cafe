import { Route, Routes } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import Home from "../pages/Home";
import Collections from "../pages/Collections";
import CollectionDetails from "../pages/CollectionDetails";
import Settings from "../pages/Settings";

// NEW pages
import About from "../pages/About";
import CoffeeDrinks from "../pages/CoffeeDrinks";
import FoodMenu from "../pages/FoodMenu";
import Reservation from "../pages/Reservation";
import Contact from "../pages/Contact";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />

        {/* Navbar routes */}
        <Route path="/about" element={<About />} />
        <Route path="/coffee" element={<CoffeeDrinks />} />
        <Route path="/menu" element={<FoodMenu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />

        {/* Existing routes (keep) */}
        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/:id" element={<CollectionDetails />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
