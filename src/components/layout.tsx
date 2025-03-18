import { JSX } from "solid-js";
import { Header } from "./navigation/header";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Header />
      <div class="flex flex-col justify-center pt-20">
        <main class="self-center pt-2 w-full max-w-screen-xl min-h-screen">
          {children}
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}
