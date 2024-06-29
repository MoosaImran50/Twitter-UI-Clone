import "./SidebarOption.css";

export default function SidebarOption({ active, text, Icon }) {
  return (
    <div
      className={`flex justify-center items-center gap-x-3 p-3 lg:pl-2 lg:pr-6 lg:py-2 hover:bg-[rgba(231,233,234,0.1)] hover:rounded-full hover:cursor-pointer ${active && "sidebarOption--active"
        }`}
    >
      <Icon fontSize="large" />
      <h2 className="hidden lg:block">{text}</h2>
    </div>
  );
}
