"use client";

import { ROUTER } from "@/app/_constants/router";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navi() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex">
        {ROUTER.map((link) => {
          // TODO: /newsと/news/:idは/news扱いとしたい等のmatcherどう書くんだろ、現状はurl毎のpagenameを定義しておき、変換して比較かな？
          // NOTE: https://github.com/vercel/next.js/discussions/38615
          const isActive = pathname === link.path;

          return isActive ? (
            <li className={"mr-3"} key={link.name}>
              <span className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white">
                {link.name}
              </span>
            </li>
          ) : (
            <li className={"mr-3"} key={link.name}>
              <Link className={"text-black"} href={link.path}>
                <span className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3">
                  {link.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
