"use client";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logo.svg";
import { usePathname } from "next/navigation";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

const routes = [
  {
    label: "Dashboard",
    path: "/app/dashboard",
  },
  {
    label: "Account",
    path: "/app/account",
  },
];

function AppHeader() {
  const pathname = usePathname();

  return (
    <header className="flex py-2 items-center border-b border-white/30  ">
      <Image src={logo} alt="Logo" width={30} height={30} />
      <nav className="ml-auto">
        <ul className="flex gap-2 text-xs">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                className={`px-2 py-1 hover:text-white transition text-white/100 rounded-sm ${
                  route.path === pathname ? "bg-black/10" : ""
                } `}
                href={route.path}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <LogoutLink className="text-white/70 text-[12px] ml-[10px] ">
        Logout
      </LogoutLink>
    </header>
  );
}

export default AppHeader;
