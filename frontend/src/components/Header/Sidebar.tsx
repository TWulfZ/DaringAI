import { ClockIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";

const SideBar = () => {
  // TODO: Get all Boards from API Backend
  const chatHistory = [
    { id: 1, title: "Chat sobre IA" },
    { id: 2, title: "Proyecto React" },
    { id: 3, title: "Dudas de TypeScript" },
  ];
  return (
    <>
      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
          <li className="menu-title mb-2 flex flex-row justify-between">
            <img src="/logo.svg" className="size-12"/>
            
          </li>
          <li className="menu-title flex flex-row gap-2 items-center mb-2">
            <ClockIcon className="size-6"/> Historial de Chats
          </li>
          {chatHistory.map((chat) => (      
              <li key={chat.id}>
                {/* TODO: replace href for router navigation*/}
                <a href="#" className="flex items-center">
                  <ChatBubbleLeftIcon className="size-6" />
                  <span>{chat.title}</span>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default SideBar;