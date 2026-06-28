"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// "/" is no longer a real page — About is the landing page.
// In `next dev` this client redirect handles "/". In a production build the
// postbuild step (scripts/postbuild-redirect.mjs) replaces out/index.html with
// a static <meta refresh> redirect, which also covers no-JS clients.
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/about");
  }, [router]);

  return null;
}
