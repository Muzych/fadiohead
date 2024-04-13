import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Radiohead Public Library" },
    { name: "description", content: "An official online resource containing everything we, Radiohead, have ever done, more or less. Videos, music, artwork, websites, merchandise, and assorted ephemeral materials." },
    { name: "og:site-name", content: "Radiohead Public Library" },
    { name: "og:type", content: "Website" },
    { name: "og:url", content: "https://www.radiohead.com" },
    { name: "og:title", content: "Radiohead Public Library" },
    { name: "og:description", content: "An official online resource containing everything we, Radiohead, have ever done, more or less. Videos, music, artwork, websites, merchandise, and assorted ephemeral materials." },
    { name: "og:image", content: "https://www.radiohead.com/rhpl_logo.png" },
    { name: "og:image:url", content: "https://www.radiohead.com/rhpl_logo.png" },
    { name: "og:image:secure_url", content: "https://www.radiohead.com/rhpl_logo.png" },
    { name: "twitter:creator", content: "@radiohead" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:url", content: "https://www.radiohead.com" },
    { name: "twitter:title", content: "Radiohead Public Library" },
    { name: "twitter:description", content: "An official online resource containing everything we, Radiohead, have ever done, more or less. Videos, music, artwork, websites, merchandise, and assorted ephemeral materials." },
    { name: "twitter:image", content: "https://www.radiohead.com/rhpl_logo.png" }

  ];
};

export default function Index() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  );
}
