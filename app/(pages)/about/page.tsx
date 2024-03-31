import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About',
 description: '',
 keywords: ['About Page', 'Angel', 'Información']
};

export default function About() {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  );
}
