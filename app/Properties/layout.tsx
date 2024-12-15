import Footer from "@/components/Footer";
import { Navbar } from "@/components/navbar";


export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex p-2  pb-10">


      <div className="w-full">
        <Navbar />
        {children}
        <Footer />


      </div>
    </section>
  );
}
