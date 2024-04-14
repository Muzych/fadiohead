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
        <div className="bg absolute top-[0] bottom-[0] left-[0] right-[0] w-screen">
          <div id="top" className="w-screen h-[37vh] bg-white"></div>
          <div id="mid" className="w-screen h-[25.8vh] bg-[#f60]">
            <div id="up" className="[border-top:13vh_solid_#fff] w-[0] h-[0] [border-left:50vw_solid_transparent] [border-right:50vw_solid_transparent]"></div>
            <div id="down" className="[border-bottom:13vh_solid_#000] w-[0] h-[0] [border-left:50vw_solid_transparent] [border-right:50vw_solid_transparent]"></div>
          </div>
          <div id="bottom" className="w-screen h-[37vh] bg-[#000]"></div>
        </div>
        <div className="bg absolute top-[0] bottom-[0] left-[0] right-[0] w-screen">
          <div id="lib" className="w-screen h-[40vh] text-center font-gentium text-[7.5vh] leading-[7.4vh] flex justify-center items-center">
            <a href="/library" className="cursor-pointer no-underline hover:text-[#000]">
              <img src="/crest.png" alt="crest" className="max-h-[15vh] mt-[3vh] ml-[10vh] h-auto max-w-full" />
              <div className="mt-[-40px]">
                <br />
                RADIOHEAD
                <br />
                PUBLIC
                <br />
                LIBRARY
              </div>
            </a>
          </div>
          <div id="waste" className="w-screen mt-[18vh] h-[30vh] text-center text-[7vh] leading-[6.9vh] font-[BrooklynSamuelsFive-Medium]">
            <a href="/wasteheadquaters">
              <div id="logo" className="block">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB8lBMVEVpaWmfn5+vr6+vr6+9vb3FxcWbm5uEhISzs7Onp6dubm57e3vMzMxoaGiGhobe3t5+fn7d3d3f39/j4+NMTEyioqKkpKSoqKisrKyurq6wsLBCQkJKSkpiYmKSkpKVlZWWlpaZmZmenp61tbW7u7vf3981NTXCwsLn5+fIyMjJycnKysrNzc3h4eF/f3/Nzc3i4uIrKyssLCynp6fU1NTV1dXz8/Ompqa4uLjW1tbY2Njk5OTl5eVtbW2Pj4+zs7O7u7vAwMDb29s2NjZsbGzc3Nzk5OSMjIzIyMje3t7f39/u7u5ISEhjY2OEhITi4uLm5ubt7e319fWAgIDn5+fr6+vy8vLZ2dnNzc3Y2Nja2trp6elTU1Pq6uoVFRX7+/sSEhJmZmbV1dVKSkr7+/vj4+Pv7+9FRUWbm5vw8PDi4uLf39/y8vLz8/MUFBT9/f329vYyMjI5OTn29vb4+PgNDQ3///8ZGRn+/v4TExNHR0f4+Pj///8pKSkFBQUGBgb5+fk5OTn39/f8/Pz19fX8/PwdHR0sLCw4ODgNDQ0AAAAMDAz///8AAAASEhL7+/v+/v4REREkJCQlJSX9/f38/PwAAAD////+/v4LCwv///8XFxf9/f3+/v7///8HBwcFBQUAAAAAAAAQEBAaGhr///+bJFK2AAAAonRSTlOqra2vr7Cys7S2t7e4urq7vLy+vr+/v7+/v7/AwMDAwMDAwMDAwMHBwcLCwsLCw8PDxMTExMTExcXFxcXFxsbGxsbGx8fHx8jIyMjIycnJycnJycrKysrLzMzNzc7Oz8/Q0NDR0dLS09PT1dbW1tjY2tvb29vc3d7e39/f3+Di4uLk5OXm5ujo6Onu7u7v7+/v8PDw8PHy8vP09PX29vb4+f4spKWKAAAAAWJLR0SlLrlKLwAAAr9JREFUeNrt2+VzE0EYgPHg7hSXQnGX4u4UL+5eijuF4i4hlOJOKdD/k9Dd7DB3c5fb3F3Ibp7n42bzpr/Jh9u5XBM/LSkBBAgQIECAAAECBAgQIECA5ABZcl+j2T6Ddt4VdfbZczEzaFf0kBVNGs3wGXRS7unls6c6M+gEECBAgAABUqiQg3e8GmgW5LbnnqlAgAABAiQ+yOBBXi0s8iv77irRYtMh9XLlGBAgQIAAARIYMqZO9mrzgaM1NTdTqW1/X/71+83T66vyAhk1zbPvGhDVteblxmTy+cOXXx2vxQpp8N70OXdIugb3VwsECBAgQCKHPJK/im6PE3KpXjQ6LGS8HDTBDVnmfHdjrepyVJAHctDksJA5cmVuAMg/nQcCBAgQIEZDSspEy9VK+5np1lam++H9ttZtRJ3UypCloqFqZYscXXbV5/O7dhB1j/6IUsABAQIECBAg+YP03aNRic+gRVUazYrz5kPIu/H7dAZVAAECBAiQIoCc1rkgzk9l70OMkE91ztSP4U1HdAa9T2ZvXYwQdxdygwSpGggQIECARA358jp7h0yAlP/nIwoQIECAAAECJBZIx/3OztY6e2YCZG9UR0wgQIAAAaID2XAve0/CQvrJu9GTwkI2ykF9cruyh37wbI0cNCAs5KPrCTogQIAAAVIEkLHy34aG+ex5PC7TLe9NpcNF69VKl5YatcvHEaVgAgIECBAgQAyErD6l0fEChpzTOWsdBgIECBAgQCyFvAjwAHMLEyBBagsECBAgQIAEbsdb2btM38yEbDXziOJuky2QlbZA5tkCmWILZKItkJG2QHraAulhC+SK60nmhC1nrd5AgAABAgRIcxVnRKVqpdzMm9g35F80Qq10AwIECBAgQALXXz7jvECttKrUaLrhRxS9gAABAgQIECBAgAABAgRIWEjSkv4AVpZv+2nK6CMAAAAASUVORK5CYII=" alt="" className="max-h-[17vh] m-auto h-auto max-w-full" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
