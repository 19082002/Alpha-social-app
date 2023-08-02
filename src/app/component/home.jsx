// "use client";
import Link from "next/link";
import Image from "next/image";
import "../css/home.css";
import {
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

export default function Feeds(props) {
  const ln = props.userhref;
  console.log(props.likedbyuser)
  return (
    <main>
     
        <div className=" main">
          <div className="card">
            <div className="top">
              <div className="userDetails">
                <div className="profilepic">
                  <div className="profile_img">
                    <div className="image">
                      <Image
                        src={props.profile_photo}
                        width="30"
                        height="30"
                        alt="profile picture"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <Link href={`/user/${props.username}`}>
                    <h3>{props.instausername}</h3>
                  </Link>

                  <h5 className="postTime">2 hours ago</h5>
                </div>
              </div>
            </div>
            <div className="imgBx">
              <Image
                src={props.post}
                width="300"
                height="300"
                alt={props.alt}
                className="cover"
              />
            </div>
            <p className="description">
              <b>{props.description}</b>
            </p>
            <div className="bottom">
              <div className="actionBtns">
                <div className="left">
                  <span>
                    <div className="leftbtns">
                    <Heart className={props.likedbyuser ? "likeduser" : ""} />

                      <span>{props.likes}</span>
                    </div>
                  </span>
                  <div className="leftbtns">
                    <MessageCircle />
                    <span>30</span>
                  </div>
                </div>
                <div className="right">
                  <Save />
                </div>
              </div>
              <div className="addComments">
                <input
                  type="text"
                  className="text"
                  placeholder="Add a comment..."
                />
              </div>
            </div>
          </div>
        </div>
      
    </main>
  );
}
