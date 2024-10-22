// import React from "react";
// import NavBar from "./components/common/NavBar";
// import Hero from "./components/sections/Hero";
// import CatgorySection from "./components/sections/CatgorySection";
// import TopSellingSection from "./components/sections/TopSellingSection";
// import BookTripSection from "./components/sections/BookTripSection";
// import TestimonialSection from "./components/sections/TestimonialSection";
// import LogoGroupSection from "./components/sections/LogoGroupSection";
// import NewsLetterSection from "./components/sections/NewsLetterSection";
// import FooterSection from "./components/sections/FooterSection";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="relative poppins  md:px-[9rem]">
// //       <NavBar />
// //       <div className="px-4 flex flex-col gap-[7.69rem]">
// //         <Hero />

// //         <div className="absolute top-0 right-0 -z-10">
// //           <img src="/images/pinkshape.png" alt="blob background shape" />
// //         </div>
// //         <div className="absolute top-0 left-0 -z-10">
// //           <img src="/images/Ellipse 8.png" alt="Ellipse background shape" />
// //         </div>
// //         <div className="relative">
//           <CatgorySection />
//           <div className="absolute top-0 right-0">
//             <Image
//               src="/images/plusbg.png"
//               alt="blob background shape"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//         </div>
//         <TopSellingSection />
//         <BookTripSection />
//         <TestimonialSection />
//         <LogoGroupSection />
//         <NewsLetterSection />
//         <FooterSection />
//       </div>
//     </main>
//   );
// }

import React from "react";
import NavBar from "./components/common/NavBar";
import Hero from "./components/sections/Hero";
import CatgorySection from "./components/sections/CatgorySection";
import TopSellingSection from "./components/sections/TopSellingSection";
import BookTripSection from "./components/sections/BookTripSection";
import TestimonialSection from "./components/sections/TestimonialSection";
import LogoGroupSection from "./components/sections/LogoGroupSection";
import NewsLetterSection from "./components/sections/NewsLetterSection";
import FooterSection from "./components/sections/FooterSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative poppins  md:px-[9rem]">
      <NavBar />
      <div className="px-4 flex flex-col gap-[7.69rem]">
        <Hero />

        <div className="absolute top-0 right-0 -z-10">
          <Image src="/images/pinkshape.png" alt="blob background shape" width={650} height={250}/>
        </div>
        <div className="absolute top-0 left-0 -z-10">
          <Image src="/images/Ellipse 8.png" alt="Ellipse background shape" width={200} height={300}/>
        </div>
        <div className="relative">
          <CatgorySection />
          <div className="absolute top-0 right-0">
            <Image src="/images/plusbg.png" alt="blob background shape"width={153} height={166}/>
          </div>
        </div>
        <TopSellingSection />
        <BookTripSection />
        <TestimonialSection />
        <LogoGroupSection />
        <NewsLetterSection />
        <FooterSection />
      </div>
    </main>
  );
}
