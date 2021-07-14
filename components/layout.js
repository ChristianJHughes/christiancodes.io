import Navigation from "./navigation";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center justify-center max-w-screen-lg py-16 m-auto space-y-6 text-center">
        {children}
      </div>
    </>
  );
}
