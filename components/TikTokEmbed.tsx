"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SCRIPT_SRC = "https://www.tiktok.com/embed.js";

declare global {
  interface Window {
    tiktokEmbed?: {
      lib?: {
        render?: (elements?: HTMLElement | HTMLElement[] | NodeList) => void;
      };
    };
  }
}

function renderTikTokEmbeds() {
  if (typeof window === "undefined") return;
  try {
    window.tiktokEmbed?.lib?.render?.();
  } catch {
    // ignore — script may not be ready yet
  }
}

function loadTikTokScript() {
  const existing = document.querySelector<HTMLScriptElement>(
    `script[src="${SCRIPT_SRC}"]`
  );

  if (existing) {
    // Script already loaded (client navigation) — re-process embeds
    renderTikTokEmbeds();
    // Second pass: TikTok sometimes needs a tick after React paints
    window.setTimeout(renderTikTokEmbeds, 150);
    return;
  }

  const script = document.createElement("script");
  script.src = SCRIPT_SRC;
  script.async = true;
  script.onload = () => {
    renderTikTokEmbeds();
    window.setTimeout(renderTikTokEmbeds, 150);
  };
  document.body.appendChild(script);
}

/**
 * Loads TikTok embed.js and re-renders `.tiktok-embed` blockquotes.
 * Must re-run on route changes because App Router keeps the layout script
 * but remounts page content (and TikTok only processes embeds once by default).
 */
export default function TikTokEmbed() {
  const pathname = usePathname();

  useEffect(() => {
    const id = window.setTimeout(loadTikTokScript, 0);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return null;
}
