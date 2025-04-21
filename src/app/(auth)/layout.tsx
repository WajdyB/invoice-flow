export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-[100dvh] w-full items-center justify-center">
      {children}
    </div>
  );
}
