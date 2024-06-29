import Sidebar from "./Components/Home/Sidebar";
import Feed from "./Components/Home/Feed";
import Widgets from "./Components/Home/Widgets";

export default function Home() {
  return (
    <>
      <div className="flex container mx-auto">
        <Sidebar />

        <Feed />

        <Widgets />
      </div>
    </>
  );
}
