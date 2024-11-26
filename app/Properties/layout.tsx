export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex p-6 pb-20">
      <div className="">
        {children}
      </div>
    </section>
  );
}
