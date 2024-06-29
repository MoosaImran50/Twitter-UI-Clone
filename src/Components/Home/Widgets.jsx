import { Button } from "@mui/material";

export default function Widgets() {
  return (
    <div className="third w-2/3 hidden md:block">
      <div className="h-screen fixed top-0 overflow-y-auto">
        <div className="search my-2 mx-3">
          <input
            type="text"
            className="w-3/4 lg:w-2/3 rounded-full bg-zinc-800 text-white px-4 py-2"
            placeholder="Search"
          />
        </div>

        <div className="premium w-3/4 lg:w-2/3 my-4 mx-3 p-3 border border-zinc-700 rounded-2xl">
          <h1 class="text-xl font-extrabold">Subscribe to Premium</h1>
          <p className="my-2 text-md">
            Subscribe to unlock new features and if eligible, receive a share of
            ads revenue.
          </p>
          <button className="bg-blue-500 px-4 py-1 rounded-full text-md font-bold text-white">
            Subscribe
          </button>
        </div>

        <div className="trending w-3/4 lg:w-2/3 my-4 mx-3 p-3 border border-zinc-700 rounded-2xl">
          <h1 class="text-xl font-bold">Trends for you</h1>
          <div className="trend my-5 cursor-pointer">
            <div className="text-sm text-gray-500">Trending in Pakistan</div>
            <div className="font-bold">#Kyrgyzstan</div>
            <div className="text-sm text-gray-500">147K posts</div>
          </div>
          <div className="trend my-5 cursor-pointer">
            <div className="text-sm text-gray-500">Trending in Pakistan</div>
            <div className="font-bold">WhatsApp</div>
            <div className="text-sm text-gray-500">168K posts</div>
          </div>
          <div className="trend my-5 cursor-pointer">
            <div className="text-sm text-gray-500">Politics · Trending</div>
            <div className="font-bold">#ImranKhan</div>
            <div className="text-sm text-gray-500">19K posts</div>
          </div>
        </div>
      </div>
    </div>
  );
}
