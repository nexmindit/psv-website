"use client";

import { useEffect, useId } from "react";

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

type Props = {
  username?: string;
  height?: number;
};

/**
 * Official TikTok creator embed. Loads embed.js after mount and re-renders
 * so it works with Next.js (App Router hydration + client navigations).
 */
export default function TikTokCreatorCard({
  username = "psv.sand",
  height = 380,
}: Props) {
  const reactId = useId();
  const embedKey = `tiktok-${username}-${reactId}`;

  useEffect(() => {
    let cancelled = false;

    const tryRender = () => {
      if (cancelled) return;
      try {
        window.tiktokEmbed?.lib?.render?.();
      } catch {
        // script not ready
      }
    };

    const ensureScript = () => {
      const existing = document.querySelector<HTMLScriptElement>(
        `script[src="${SCRIPT_SRC}"]`
      );
      if (existing) {
        tryRender();
        window.setTimeout(tryRender, 200);
        window.setTimeout(tryRender, 800);
        return;
      }

      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      script.onload = () => {
        tryRender();
        window.setTimeout(tryRender, 200);
        window.setTimeout(tryRender, 800);
      };
      document.body.appendChild(script);
    };

    // Wait one frame so the blockquote is in the DOM
    const raf = requestAnimationFrame(() => ensureScript());

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [username, embedKey]);

  return (
    <div
      className="bg-gray-800 rounded-sm overflow-hidden w-full"
      style={{ height }}
    >
      <blockquote
        key={embedKey}
        className="tiktok-embed"
        cite={`https://www.tiktok.com/@${username}`}
        data-unique-id={username}
        data-embed-type="creator"
        style={{
          maxWidth: 780,
          minWidth: 288,
          margin: 0,
          height,
        }}
      >
        <section>
          <a
            target="_blank"
            href={`https://www.tiktok.com/@${username}?refer=creator_embed`}
            rel="noopener noreferrer"
          >
            @{username}
          </a>
        </section>
      </blockquote>
    </div>
  );
}
