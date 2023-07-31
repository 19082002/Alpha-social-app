"use client";
import Link from "next/link";
import Image from "next/image";
import "../css/navbar.css";
import { Camera } from "lucide-react";
import {
  Sun,
  Moon,
  Mail,
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
  ToggleLeft,
  ToggleRight,
} from "lucide-react";
import { useState, useEffect } from "react";

// import   from "react-icons/tb"
import { useTheme } from "next-themes";
export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [flag, setFlag] = useState(true);
  const modechng = () => {
    setFlag(!flag);
  };
  useEffect(() => {
    return flag ? setTheme("dark") : setTheme("light");
  }, [flag]);
  return (
    <main>
      <div className="navbar">
        <div className="container">
          <div className="left">
            <Link href="/" className="logo">
              Alpha
            </Link>
          </div>
          <input
            type="text"
            className="search-input"
            placeholder="Search here..."
          />

          <div className="right">
            <Mail />
            <Bell />
            <button className="btn" onClick={modechng}>
              {flag ? <ToggleLeft /> : <ToggleRight />}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
