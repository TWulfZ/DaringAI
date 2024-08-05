import { ArrowLeftEndOnRectangleIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import { useSignOut } from "@hooks/useSignOut";

const Profile = ({avatarUrl}: {avatarUrl?: string}) => {
  const signOutUser = useSignOut();

  const avatar = avatarUrl ? avatarUrl : "/user.svg";

  return (
    <div className="dropdown dropdown-end m-4">
            <div
              tabIndex={0}
              role="button"
              className="avatar btn btn-circle btn-ghost"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={avatar}
                  className="text-white"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-1 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li> 
                <a><Cog6ToothIcon className="size-5"/>Opciones</a>
              </li>
              <li>
              </li>
              <li onClick={signOutUser}>
                <a><ArrowLeftEndOnRectangleIcon className="size-5"/> Cerrar sesión</a>
              </li>
            </ul>
          </div>
  )
}

export default Profile
