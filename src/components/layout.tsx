import { JSX } from "solid-js";
import { Footer } from "./navigation/footer";
import { Header } from "./navigation/header";

export default function Layout(props: { children: JSX.Element }) {
  return (
    <>
      <Header />
      <div class="flex flex-col justify-center antialiased">
        <main class="self-center w-full max-w-screen-xl min-h-screen pt-22">
          {props.children}
        </main>
        <Footer />
      </div>
    </>
  );
}
