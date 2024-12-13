import { Description } from "@/components/home/Description";
import { Hero } from "@/components/home/Hero";

export default function HomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Hero />
      <Description />
      {children}
    </>
  );
}
