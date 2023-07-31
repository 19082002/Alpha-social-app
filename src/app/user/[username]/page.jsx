import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronDown,
  CopyPlus,
  MoreHorizontal,
  Bell,
  Search,
  Video,
  UserPlus2,
  MessageCircle,
  Heart,
  Save,
  PlusCircle,
  UserCircle2,
} from "lucide-react";
// import Footer from "../component/footer";
import "../user.css";

async function getData(name) {
  const res = await fetch(
    `https://api.unsplash.com/users/${name}/?client_id=${process.env.REACT_APP_API_KEY}`,
    { next: { revalidate: 50 } }
  );
  // console.log(res);
  if (!res.ok) {
    console.log(res.message);
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Post(props) {
  const data = await getData(props.params.username);
  const array = data.photos;
  // console.log({props.title})
  return (
    <main>
      {/* ---------------navsection----------- */}
      <div className="profilenavbar">
        <div className="container">
          <Link href="/" className="btn navbtn">
            <ChevronLeft />
          </Link>
          <p className="username"> {data.instagram_username}</p>
          <button className="btn navbtn">
            <MoreHorizontal />
          </button>
        </div>
      </div>

      {/* ----------------profile section--------------- */}
      <div className="profilecontainer">
        <div className="profile">
          <div className="profile-image">
            <Image
              className="profile-photo"
              src={data.profile_image.small}
              alt="profile photo"
              width="100"
              height="100"
            />
          </div>
          <div className="profile-bio">
            <p>
              <span className="profile-real-name">
                {data.name} <br />
                <br />
              </span>
              <p className="profile-biodata"> {data.bio}</p>
            </p>
          </div>

          <div className="profile-about">
            <ul>
              <li>
                <span className="profile-aboutdata">
                  {data.total_photos}
                  <br />
                </span>{" "}
                Posts
              </li>
              <li>
                <span className="profile-aboutdata">
                  {data.followers_count}
                  <br />
                </span>{" "}
                Followers
              </li>
              <li>
                <span className="profile-aboutdata">
                  {data.following_count}
                  <br />
                </span>{" "}
                Following
              </li>
              <li>
                <span className="profile-aboutdata">
                  {data.total_likes}
                  <br />
                </span>{" "}
                Likes
              </li>
            </ul>
          </div>
          <div className="profile-user">
            <button className="btn profile-btn followbtn">
              <div className="icon">
                <span>
                  <UserPlus2 />
                </span>
                {data.followed_by_user ? "Following" : "Follow"}
              </div>
            </button>

            <button className="btn profile-btn messagebtn">
              <div className="icon">
                <span>
                  <MessageCircle />
                </span>
                Message
              </div>
            </button>

            <button className="btn profile-btn morebtn">
              <ChevronDown />
            </button>
          </div>
        </div>
      </div>
      <div className="line">
        <button className="btn postbtn active">
          {/* <span>60</span> */}
          Posts
        </button>
        <button className="btn postbtn">
          {/* <span>20</span> */}
          Videos
        </button>
        <button className="btn postbtn">
          {/* <span>20</span> */}
          Tagged
        </button>
      </div>

      {/* ----------post items------------ */}
      <div className="container">
        <div className="post">
          {array.map((photo) => {
            let url = photo.urls.small;
            console.log(url);
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="post-item">
                <Image
                  src={url}
                  alt="post photo "
                  width="200"
                  height="200"
                  className="post-image"
                />

                <div className="post-item-info">
                  <ul>
                    <li className="post-item-likes">
                      <div className="post-item-icons">
                        <Heart />
                        <span>56</span>
                      </div>
                    </li>
                    <li className="post-item-comments">
                      <div className="post-item-icons">
                        <MessageCircle />
                        <span>2</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <Footer/> */}
    </main>
  );
}
