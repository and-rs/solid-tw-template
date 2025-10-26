import { A } from "@solidjs/router";
import { ThemeSwitch } from "../theme-switch";

export function Footer() {
  return (
    <header class="py-2 px-4 h-20 border-y bg-background/50 backdrop-blur-md">
      <div class="grid grid-cols-3 justify-items-center w-full h-full">
        {/* <FooterRight /> */}

        {/* <div class="place-self-start mx-1 h-full sm:hidden"> */}
        {/* <MobileAside /> */}
        {/* </div> */}

        <A class="flex justify-center h-full" href="/">
          <h1 class="self-center text-3xl font-medium tracking-tight">
            Footer
          </h1>
        </A>
        <A class="flex justify-center h-full" href="/">
          <h1 class="self-center text-3xl font-medium tracking-tight">
            Footer
          </h1>
        </A>
        <A class="flex justify-center h-full" href="/">
          <h1 class="self-center text-3xl font-medium tracking-tight">
            Footer
          </h1>
        </A>

        {/* <FooterLeft /> */}

        {/* <div class="col-start-3 place-self-end mx-1 h-full sm:hidden"> */}
        {/*   <CartAside /> */}
        {/* </div> */}
      </div>
    </header>
  );
}

export function FooterRight() {
  return (
    <nav class="hidden gap-4 self-center sm:flex" role="navigation">
      <A href="/">Inicio</A>
      <A href="/catalogue">Todos</A>
      <A href="/about">Nosotros</A>
    </nav>
  );
}

function FooterLeft() {
  return (
    <nav class="hidden gap-4 self-center sm:flex" role="navigation">
      <span>part of the footer</span>
      <ThemeSwitch />
    </nav>
  );
}
