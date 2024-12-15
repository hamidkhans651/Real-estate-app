import { Navbar } from "@/components/navbar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <Navbar />

      <div className="inline-block max-w-lg text-center justify-center">
        {children}

      </div>
    </section>
  );
}
