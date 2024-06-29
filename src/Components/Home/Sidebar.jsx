import XIcon from "@mui/icons-material/X";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { Avatar } from "@mui/material";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

export default function Sidebar() {
  return (
    <>
      <div className="first flex justify-end w-16 md:w-28 lg:w-1/2">
        <div className="flex flex-col items-end lg:items-start ml-4 mr-0 lg:ml-0 lg:mr-4 text-xl space-y-2 h-[92vh] fixed top-0 overflow-y-auto">
          <XIcon
            fontSize="large"
            className="ml-2 mr-3 lg:mr-0 my-4 hover:cursor-pointer"
          />

          <SidebarOption active Icon={HomeIcon} text="Home" />
          <SidebarOption Icon={SearchIcon} text="Explore" />
          <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
          <SidebarOption Icon={MailOutlineIcon} text="Messages" />
          <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
          <SidebarOption Icon={ListAltIcon} text="Lists" />
          <SidebarOption Icon={PermIdentityIcon} text="Profile" />
          <SidebarOption Icon={MoreHorizIcon} text="More" />

          <button className="hidden lg:block bg-blue-500 px-20 py-3 mr-2 rounded-full text-xl font-bold">
            Post
          </button>
          <button className="block lg:hidden bg-blue-500 px-3 py-2 mr-1 rounded-full text-xl font-bold mb-[200px]">
            <CreateOutlinedIcon />
          </button>

          <div className="userprofile fixed bottom-0 pb:3 lg:pb-4 bg-black">
            <div className="item flex gap-3 p-2 justify-center items-center hover:bg-[rgba(231,233,234,0.1)] hover:rounded-full hover:cursor-pointer">
              <div className="img ml-1">
                <Avatar src="https://pbs.twimg.com/profile_images/1733880985878671360/zkT2M_28_400x400.jpg" />
              </div>
              <div className="text-sm hidden lg:block">
                <div className="font-bold">Moosa Imran</div>
                <div className="text-gray-500">@moosaimran</div>
              </div>
              <div className="ml-2 hidden lg:block">
                <MoreHorizOutlinedIcon />
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </>
  );
}
