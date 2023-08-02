import Image from "next/image";
import Navbar from "./component/navbar";
import Feeds from "./component/home";
import Footer from "./component/footer";
// import

async function getData() {
  const res = await fetch(
    `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_API_KEY}`,
    { next: { revalidate: 40 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <main>
      
      <div className="postcontainer">
      <Navbar />
      <div className="posts">
        {data.map((item) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Feeds
              post={item.urls.small}
              userhref={item.links.self}
              profile_photo={item.user.profile_image.small}
              instausername={item.user.instagram_username}
              username={item.user.username}
              likes={item.likes}
              likedbyuser={item.liked_by_user}
              location={item.user.location}
              alt={item.alt_description}
              description={item.description}
            />
          );
        })}
      </div>
      </div>
    </main>
  );
}
