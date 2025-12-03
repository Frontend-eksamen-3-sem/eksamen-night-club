import Image from "next/image";
import { Suspense } from "react";

//første udkast af footer uden data fetching
// const Footer = () => {
//   return (
//     <section className="grid grid-cols-subgrid grid-rows-subgrid col-[content] bg-black my-10">
//       <div className="grid z-10  gap-4 col-[content]">
//         <div className="grid col-1 row-start-1 row-end-5 ">
//           <p>LOGO</p>
//           <h3>Location</h3>
//           <p>Kompagnistræde 278 1265 Købehavn K</p>
//           <h3>Opening Hours</h3>
//           <p>
//             WED - THU 10:30 PMTO 3 AM <br /> SAT - SUN: 11 PM TO 5 AM
//           </p>
//         </div>

//         <div className="grid col-2 row-start-1 row-end-5">
//           <h3 className="text-accent">RECENT POSTS</h3>
//           <div>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora obcaecati possimus consequatur laudantium ea, eveniet atque praesentium minus nesciunt nam illum similique provident minima. Officia sequi id dolorem possimus labore.</p>
//             <h4>Dato</h4>
//           </div>
//           <div>
//             <p>img</p>
//             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus vitae id earum architecto corrupti dolorem accusamus minus ipsum ea esse modi voluptate, pariatur sequi, facilis veniam placeat cumque tenetur sint!</p>
//             <h4>dato</h4>
//           </div>
//         </div>

//         <div className="grid col-3 row-start-1 row-end-5">
//           <h3>RECENT TWEETS</h3>
//           <div>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora obcaecati possimus consequatur laudantium ea, eveniet atque praesentium minus nesciunt nam illum similique provident minima. Officia sequi id dolorem possimus labore.</p>
//             <h4>Dato</h4>
//           </div>
//           <div>
//             <p>img</p>
//             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus vitae id earum architecto corrupti dolorem accusamus minus ipsum ea esse modi voluptate, pariatur sequi, facilis veniam placeat cumque tenetur sint!</p>
//             <h4>dato</h4>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Footer;

const Footer = async () => {
  return (
    <Suspense fallback={<div className="p-4">Loading categories…</div>}>
      <section className="grid grid-cols-subgrid grid-rows-subgrid col-[content] bg-black my-10">
        <div className="grid z-10  gap-4 col-[content]">
          <div className="grid col-1 row-start-1 row-end-5 ">
            <p>LOGO</p>
            <h3>Location</h3>
            <p>Kompagnistræde 278 1265 Købehavn K</p>
            <h3>Opening Hours</h3>
            <p>
              WED - THU 10:30 PMTO 3 AM <br /> SAT - SUN: 11 PM TO 5 AM
            </p>
          </div>
          <FetchFooter />

          <div className="grid col-3 row-start-1 row-end-5">
            <h3>RECENT TWEETS</h3>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora obcaecati possimus consequatur laudantium ea, eveniet atque praesentium minus nesciunt nam illum similique provident minima. Officia sequi id dolorem possimus labore.</p>
              <h4>Dato</h4>
            </div>
            <div>
              <p>img</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus vitae id earum architecto corrupti dolorem accusamus minus ipsum ea esse modi voluptate, pariatur sequi, facilis veniam placeat cumque tenetur sint!</p>
              <h4>dato</h4>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export default Footer;

// const FetchFooter = async () => {
//   "use server";
//   const response = await fetch("http://localhost:4000/blogposts");
//   const posts = await response.json();

//   return posts.slice(0, 2).map((post) => (
//     <div key={post.id} className="grid col-2 row-start-1 row-end-5">
//       <h3 className="text-accent">RECENT POSTS</h3>
//       <div className="flex gap-4">
//         <Image src={post.asset.url} alt={post.title} width={50} height={50} unoptimized className="w-24 h-24 object-cover" />
//         <div>
//           <p>{post.content?.slice(0, 150)}…</p>
//           <h4>{post.date || "Dato"}</h4>
//         </div>
//       </div>
//     </div>
//   ));
// };

const FetchFooter = async () => {
  "use server";
  const response = await fetch("http://localhost:4000/blogposts");
  const posts = await response.json();

  const recent = posts.slice(0, 2);

  return (
    <div className="grid col-2 row-start-1 row-end-5">
      <h3 className="text-accent">RECENT POSTS</h3>

      {recent.map((post) => (
        <div key={post.id} className="flex gap-4">
          <Image src={post.asset?.url} alt={post.title} width={50} height={50} unoptimized className="w-24 h-24 object-cover" />
          <div>
            <p>{post.content?.slice(0, 150)}…</p>
            <h4>{post.date || "Dato"}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

