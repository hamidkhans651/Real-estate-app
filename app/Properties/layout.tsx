export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex p-1 pb-10">
      <div className="w-full">
        {children}
      </div>
    </section>
  );
}
