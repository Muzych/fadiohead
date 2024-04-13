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
    <main className="text-[#4a4a4a] text-[1em] font-normal leading-normal">
      <div id="home" className="h-[99vh] overflow-hidden bg-[#000] w-screen">
        <div className="bg">
          <div id="top" className="w-screen h-[37vh] bg-white"></div>
          <div id="mid" className="w-screen h-[25.8vh] bg-[#f60]">
            <div id="up" className="[border-top:13vh_solid_#fff] w-[0] h-[0] [border-left:50vw_solid_transparent] [border-right:50vw_solid_transparent]"></div>
            <div id="down" className="[border-bottom:13vh_solid_#000] w-[0] h-[0] [border-left:50vw_solid_transparent] [border-right:50vw_solid_transparent]"></div>
          </div>
          <div id="bottom" className="w-screen h-[37vh] bg-[#000]"></div>
        </div>
        <div className="bg">
        </div>
      </div>
    </main>
  );
}
