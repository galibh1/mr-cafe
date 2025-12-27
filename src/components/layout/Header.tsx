import { Link, NavLink } from "react-router-dom";
import navbarlogo from "../../assets/navbarlogo.png";

const navItemClass =
  "text-[14px] font-medium text-black/70 hover:text-black transition";

export default function Header() {
  return (
    <header className="w-full">
      {/* Top thin bar (figma style) */}
      <div className="hidden bg-[#3B3630] text-white/90 md:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 text-[13px]">
          <div>
            Sign up for our Loyalty Program today and receive 15% OFF your first
            order.
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="opacity-80">Need Help?</span>
              <a
                className="underline underline-offset-2"
                href="tel:+3025550107122"
              >
                (+302) 555-0107-122
              </a>
            </div>
            <div className="opacity-80">08:00am - 10:00pm</div>
            <div className="opacity-80">Our Locations</div>
          </div>
        </div>
      </div>

      {/* White navbar */}
      <div className="bg-white shadow-[0_8px_25px_rgba(0,0,0,0.06)]">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={navbarlogo} alt="MR. CAFE" className="h-[34px] w-auto" />
          </Link>

          {/* Navigation links */}
          <nav className="hidden items-center gap-8 md:flex">
            <NavLink to="/" className={navItemClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navItemClass}>
              About Us
            </NavLink>
            {/* Route names aligned with src/routes/index.tsx */}
            <NavLink to="/coffee" className={navItemClass}>
              Coffee & Drinks
            </NavLink>
            <NavLink to="/menu" className={navItemClass}>
              Food Menu
            </NavLink>
            <NavLink to="/reservation" className={navItemClass}>
              Reservation
            </NavLink>
            <NavLink to="/contact" className={navItemClass}>
              Contact Us
            </NavLink>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="rounded-md border border-black/10 px-3 py-2 text-[14px] text-black/70">
              Menu
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
