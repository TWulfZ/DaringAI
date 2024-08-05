import { Bars3Icon } from "@heroicons/react/24/outline";
import SideBar from "./Sidebar";
import Profile from "./Profile";

const Header = () => {
  return (
    <>
      <header className="fixed left-0 right-0 z-50 bg-opacity-0 bg-gradient-to-b from-gray-900 text-white text-opacity-80">
        <div className="drawer flex flex-row-reverse justify-between">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          {/* TODO: Use avatarUrl from API */}
          <Profile/>
          <div className="drawer-content">
            <label
              htmlFor="my-drawer"
              className="btn drawer-button btn-ghost"
            >
              <Bars3Icon className="size-8" />
            </label>
          </div>
          <SideBar />
        </div>
      </header>
    </>
  );
};

export default Header;
