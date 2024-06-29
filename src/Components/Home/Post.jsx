import { Avatar } from "@mui/material";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";

export default function Post({
  account,
  tag_time,
  desc,
  post_img,
  profile_img,
}) {
  return (
    <div className="post border-b border-gray-700 hover:cursor-pointer">
      <div className="flex">
        <div className="image mx-4 my-3">
          <Avatar src={profile_img} />
        </div>
        <div className="content my-3 mr-4">
          <span className="font-bold hover:underline">{account}</span>&nbsp;
          <span className="text-gray-500">{tag_time}</span>
          <div>{desc}</div>
          <div className="postimg my-4 ml-0">
            <img className="rounded-xl" src={post_img} alt="post" />
          </div>
          <div className="icons flex justify-between text-gray-500">
            <span>
              <ModeCommentOutlinedIcon fontSize="small" />
              127K
            </span>
            <span>
              <RepeatOutlinedIcon fontSize="small" />
              21K
            </span>
            <span>
              <FavoriteBorderOutlinedIcon fontSize="small" />
              110K
            </span>
            <span>
              <BarChartOutlinedIcon fontSize="small" />
              11M
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
