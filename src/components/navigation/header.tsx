import { A } from "@solidjs/router";
import CartAside from "../cart/cart-aside";
import { ThemeSwitch } from "../theme-switch";
import MenuAside from "./menu-aside";

export function Header() {
  return (
    <header class="fixed z-50 py-2 px-4 w-full h-20 border-b bg-background/50 backdrop-blur-md">
      <div class="grid grid-cols-3 justify-items-center w-full h-full">
        <HeaderRight />

        <div class="self-center place-self-start sm:hidden">
          <MenuAside />
        </div>

        <A class="flex justify-center h-full" href="/">
          <h1 class="self-center text-4xl transition-all duration-150 hover:font-semibold -tracking-[0.07em]">
            Mochi
          </h1>
        </A>

        <HeaderLeft />

        {/* <div class="col-start-3 place-self-end mx-1 h-full sm:hidden"> */}
        {/*   <CartAside /> */}
        {/* </div> */}
      </div>
    </header>
  );
}

export function HeaderRight() {
  return (
    <nav class="hidden gap-4 self-center sm:flex" role="navigation">
      <A href="/">Inicio</A>
      <A href="/catalogue">Todos</A>
      <A href="/about">Nosotros</A>
    </nav>
  );
}

function HeaderLeft() {
  return (
    <nav class="hidden gap-4 self-center sm:flex" role="navigation">
      <ThemeSwitch />
      <CartAside />
      {/* <SearchToggle /> */}
    </nav>
  );
}
