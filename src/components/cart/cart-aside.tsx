import { ShoppingCart } from "lucide-solid";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export default function CartAside() {
  return (
    <Sheet>
      <SheetTrigger as="div">
        <CartButton />
      </SheetTrigger>
      <SheetContent class="w-[90%] sm:max-w-xl" position={"right"}>
        <SheetDescription class="sr-only">Carrito de compras</SheetDescription>
        <SheetTitle class="pb-4">Carrito</SheetTitle>

        {/* <Suspense> */}
        {/* <Await resolve={cart}>{(cart) => <CartMain cart={cart} />}</Await> */}
        {/* </Suspense> */}
      </SheetContent>
    </Sheet>
  );
}

function CartButton() {
  return (
    <Button aria-label="View cart" variant={"ghost"} size={"icon"}>
      <ShoppingCart />
    </Button>
  );
}
