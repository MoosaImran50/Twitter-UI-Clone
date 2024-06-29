import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export default function Header() {
  return (
    <div className="sticky top-0 bg-black backdrop-blur-lg bg-opacity-70 z-10">
      <div className="feed_header flex p-3 border-b border-zinc-700 relative">
        <div className="absolute w-16 h-1 rounded-full bg-blue-500 bottom-0 left-[19%] z-20"></div>
        <div className="left w-full flex justify-center font-bold cursor-pointer">
          For You
        </div>
        <div className="right w-full flex justify-center font-bold cursor-pointer">
          Following
        </div>
        <div className="ml-3 cursor-pointer">
          <SettingsOutlinedIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}
