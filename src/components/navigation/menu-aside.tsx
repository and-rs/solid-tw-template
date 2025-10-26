import { A } from "@solidjs/router";
import { Menu } from "lucide-solid";
import { For } from "solid-js";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const pages = [
  { name: "Inicio", href: "/" },
  { name: "Todos", href: "/catalogue" },
  { name: "Nosotros", href: "/about" },
];

export default function MenuAside() {
  return (
    <Sheet>
      <SheetTrigger as="div">
        <MenuButton />
      </SheetTrigger>
      <SheetContent class="w-[90%] sm:max-w-xl space-y-4" position={"left"}>
        <SheetDescription class="sr-only">Menu movil</SheetDescription>
        <SheetTitle class="self-center text-4xl font-normal transition-all duration-150 -tracking-[0.07em]">
          Mochi
        </SheetTitle>

        <nav class="flex flex-col gap-4" role="navigation">
          <For each={pages}>
            {(page) => (
              <A href={page.href}>
                <SheetClose>{page.name}</SheetClose>
              </A>
            )}
          </For>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

function MenuButton() {
  return (
    <Button variant={"ghost"} size={"icon"}>
      <Menu />
    </Button>
  );
}
