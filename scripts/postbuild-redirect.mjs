// After `next build` (static export), replace out/index.html with a plain
// static redirect to /about. The "/" route is rendered by a client component
// wrapped in RouteGuard, so its server HTML is just a loading spinner and no
// <meta> reaches the static <head>. Writing the file directly guarantees "/"
// redirects for every client — including no-JS and crawlers — with no flash.
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const target = "/about";
const baseURL = "https://heymorgenart.github.io";
const title = "Daria Morgen's Portfolio";
const description = "From flows to pixels — I refine the interplay between art, interfaces & experience";
const image = `${baseURL}/images/og/home.jpg`;

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="refresh" content="0; url=${target}" />
    <link rel="canonical" href="${baseURL}${target}" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${baseURL}/" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${image}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${image}" />
    <script>location.replace(${JSON.stringify(target)});</script>
  </head>
  <body>
    Redirecting to <a href="${target}">About</a>…
  </body>
</html>
`;

const out = join("out", "index.html");
writeFileSync(out, html);
console.log(`postbuild: wrote static redirect ${out} -> ${target}`);
