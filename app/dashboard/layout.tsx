export default function PropertiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <div className="">
        {children}
      </div>
    </section>
  );
}
