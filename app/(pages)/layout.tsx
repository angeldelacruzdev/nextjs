import { NavBar } from "@/components";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center p-24">{children}</div>
    </>
  );
}
