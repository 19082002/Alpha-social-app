import Link from "next/link";
import {
  Home,
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
  UserSquare,
} from "lucide-react";
import "../css/footer.css";
export default function Footer() {
  return (
    <main>
      <div className="footer">
        <Link className="link" href="/">
          <Home />
        </Link>
        <Link className="link" href="/user">
          <UserSquare />
        </Link>
        <Link className="link" href="/">
          <PlusCircle />
        </Link>
        <Link className="link" href="/">
          <Video />
        </Link>
        <Link className="link" href="/">
          <Heart />
        </Link>
      </div>
    </main>
  );
}
