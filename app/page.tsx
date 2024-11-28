import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { title, subtitle } from "@/components/primitives";
import Midsections from "../components/Midsections"


export default function Home() {
  return (
    <main className="" >
      <section className=" flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-cover bg-center " style={{ backgroundImage: 'url(/assets/images/prop3.webp)' }} >
        <div className="inline-block max-w-xl text-center justify-center pt-16 ">
          <span className={title()}>Make&nbsp;</span>
          <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
          <br />
          <span className={title()}>
            websites regardless of your design experience.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </div>
        </div>

        <div className="flex gap-3">

        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing <Code color="primary">app/page.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section>
      <Midsections />
    </main>
  );
}
