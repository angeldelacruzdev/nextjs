"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styled from "./active-link.module.css";

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname();
  return (
    <>
      <Link
        className={`${styled.link} ${
          pathName === path && styled["active-link"]
        }`}
        href={path}
      >
        {text}
      </Link>
    </>
  );
};
