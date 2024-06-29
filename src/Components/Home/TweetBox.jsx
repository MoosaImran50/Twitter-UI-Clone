import { Avatar } from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export default function TweetBox() {
  return (
    <>
      <div className="tweetBox flex gap-3 border-b border-zinc-700 pb-2">
        <div className="img my-4 ml-4 hover:cursor-pointer">
          <Avatar src="https://pbs.twimg.com/profile_images/1733880985878671360/zkT2M_28_400x400.jpg" />
        </div>
        <div className="w-full mr-4">
          <input
            className="w-full bg-black h-7 my-5 text-xl outline-none"
            type="text"
            placeholder="What is happening?!"
          />
          <div className="blueicons flex items-center gap-2 text-blue-400">
            <ImageOutlinedIcon fontSize="small" className="cursor-pointer" />
            <GifBoxOutlinedIcon fontSize="small" className="cursor-pointer" />
            <PollOutlinedIcon fontSize="small" className="cursor-pointer" />
            <SentimentSatisfiedOutlinedIcon
              fontSize="small"
              className="cursor-pointer"
            />
            <CalendarMonthOutlinedIcon
              fontSize="small"
              className="cursor-pointer"
            />
            <LocationOnOutlinedIcon
              fontSize="small"
              className="cursor-pointer"
            />
            <button className="bg-blue-500 ml-auto px-4 py-1 rounded-full text-md font-bold text-white">
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
