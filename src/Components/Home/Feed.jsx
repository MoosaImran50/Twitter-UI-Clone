import "./Feed.css";
import Header from "./Header";
import Post from "./Post";
import TweetBox from "./TweetBox";

export default function Feed() {
  return (
    <div className="second w-full md:w-4/5 border-x border-zinc-700">
      <Header />
      <TweetBox />
      <div className="posts">
        <Post
          account="Sprinter Family"
          tag_time="@SprinterFamily · 1h"
          desc="Gaza Civil Defense: Our teams haven't received any fuel, threatening our operations"
          post_img="https://pbs.twimg.com/media/GPt1julXoAAdbaR?format=jpg&name=small"
          profile_img="https://pbs.twimg.com/profile_images/1787531869178781696/g-oPyqf0_400x400.jpg"
        />
        <Post
          account="E NEWS خبریں"
          tag_time="@EducationalNe11 · 8h"
          desc="20 مئی کے بعد سولر Aگریڈ 580 پلیٹ کی قیمت 16000روپے تک آنے کا امکان، سولرمارکیٹ ذرائع"
          post_img="https://pbs.twimg.com/media/GN6hLm6WgAAKej-?format=jpg&name=small"
          profile_img="https://pbs.twimg.com/profile_images/1742016010985545729/1iFf5nhh_400x400.jpg"
        />
        <Post
          account="Sprinter Family"
          tag_time="@SprinterFamily · 1h"
          desc="Spokesman for the Ministry of Foreign Affairs: Repeated resignations in the cabinet of the Zionist regime indicate the internal collapse of this regime.
          Of course, replacing some of the murderers and criminals in the cabinet and replacing other criminals will not change the behavior of this regime towards the Palestinian people."
          post_img="https://pbs.twimg.com/media/GPtx20KXMAAyMhg?format=jpg&name=900x900"
          profile_img="https://pbs.twimg.com/profile_images/1787531869178781696/g-oPyqf0_400x400.jpg"
        />
      </div>
    </div>
  );
}
