import { useColorMode } from "@kobalte/core";
import { Ellipsis, Moon, Sun } from "lucide-solid";
import { createSignal, onMount, Show } from "solid-js";
import { Button } from "~/components/ui/button";

export function ThemeSwitch() {
  const { colorMode, setColorMode } = useColorMode();
  const [mounted, setMounted] = createSignal(false);

  onMount(() => setMounted(true));

  const handleTheme = () => {
    if (colorMode() === "light") {
      setColorMode("dark");
    } else {
      setColorMode("light");
    }
  };

  return (
    <Show
      when={mounted()}
      fallback={
        <Button disabled variant={"ghost"} size={"icon"}>
          <Ellipsis />
        </Button>
      }
    >
      <Button
        id="theme-toggle"
        aria-label="Switch color theme"
        onClick={handleTheme}
        variant={"ghost"}
        size={"icon"}
      >
        {colorMode() === "light" ? <Sun /> : <Moon />}
      </Button>
    </Show>
  );
}
