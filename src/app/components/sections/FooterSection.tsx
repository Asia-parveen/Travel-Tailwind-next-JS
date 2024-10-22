import React from "react";
import Image from "next/image"; // Import the Image component

function FooterSection() {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p>
            <Image src="/images/Jadoo..png" alt="footer logo" width={150} height={50} />
          </p>
          <p className="text-lightGray mt-[1.19rem]">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>

        <div className="flex gap-8 flex-grow justify-between">
          <div className="flex flex-col gap-4">
            <p className="text-lightBlack font-[700] text-[1.3125rem]">Company</p>
            <div className="flex flex-col gap-2">
              <p className="text-lightGray text-[1.125rem] font-[500]">About</p>
              <p className="text-lightGray text-[1.125rem] font-[500]">Careers</p>
              <p className="text-lightGray text-[1.125rem] font-[500]">Mobile</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lightBlack font-[700] text-[1.3125rem]">Contact</p>
            <div className="flex flex-col gap-2">
              <p className="text-lightGray text-[1.125rem] font-[500]">Help/FAQ</p>
              <p className="text-lightGray text-[1.125rem] font-[500]">Press</p>
              <p className="text-lightGray text-[1.125rem] font-[500]">Affiliates</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lightBlack font-[700] text-[1.3125rem]">More</p>
            <div className="flex flex-col gap-2">
              <p className="text-lightGray text-[1.125rem] font-[500]">Airlinefees</p>
              <p className="text-lightGray text-[1.125rem] font-[500]">Airline</p>
              <p className="text-lightGray text-[1.125rem] font-[500]">Low fare tips</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <div className="flex gap-4 items-center">
            <Image src="/images/Socialfb.png" alt="social icon" width={24} height={24} />
            <Image src="/images/Socialinsta.png" alt="social icon" width={24} height={24} />
            <Image src="/images/Socialtwtr.png" alt="social icon" width={24} height={24} />
          </div>

          <p className="text-lightGray font-[500] text-[1.25rem]">Discover our app</p>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-lightBlack rounded-extraLarge px-[1.06rem] py-[0.58rem] w-[11rem]">
              <div className="flex gap-4 items-center">
                <div>
                  <Image
                    src="/images/google-play.png"
                    alt="google play icon"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <p className="uppercase font-[700] text-white text-[0.7rem]">get it on</p>
                  <p className="uppercase font text-white text-[0.7rem]">Google play</p>
                </div>
              </div>
            </div>

            <div className="bg-lightBlack rounded-extraLarge px-[1.06rem] py-[0.58rem] w-[11rem]">
              <div className="flex gap-4 items-center">
                <div>
                  <Image src="/images/apple.png" alt="apple store icon" width={24} height={24} />
                </div>
                <div>
                  <p className="uppercase font-[700] text-white text-[0.7rem]">
                    Available on the
                  </p>
                  <p className="uppercase font text-white text-[0.7rem]">Apple store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="my-[5.25rem] text-lightGray text-[0.875rem] font-[600] flex justify-center">
        All rights reserved@jadoo.co
      </p>
    </section>
  );
}

export default FooterSection;




// import React from "react";

// function FooterSection() {
//   return (
//     <section>
//       <div className="flex flex-col md:flex-row justify-between gap-8 ">
//         <div>
//           <p>
//             <img src="/images/Jadoo..png" alt="footer logo" />
//           </p>
//           <p className="text-lightGray mt-[1.19rem]">
//             Book your trip in minute, get full Control for much longer.
//           </p>
//         </div>
//         <div className="flex gap-8 flex-grow justify-between">
//           <div className="flex flex-col gap-4">
//             <p className="text-lightBlack font-[700] text-[1.3125rem]">
//               Company
//             </p>
//             <div className="flex flex-col gap-2">
//               <p className="text-lightGray text-[1.125rem] font-[500]">About</p>
//               <p className="text-lightGray text-[1.125rem] font-[500]">
//                 Careers
//               </p>
//               <p className="text-lightGray text-[1.125rem] font-[500]">
//                 Mobile
//               </p>
//             </div>
//           </div>
//           <div className="flex flex-col gap-4">
//             <p className="text-lightBlack font-[700] text-[1.3125rem]">
//               Contact
//             </p>
//             <div className="flex flex-col gap-2">
//               <p className="text-lightGray text-[1.125rem] font-[500]">
//                 Help/FAQ
//               </p>
//               <p className="text-lightGray text-[1.125rem] font-[500]">Press</p>
//               <p className="text-lightGray text-[1.125rem] font-[500]">
//                 Affilates
//               </p>
//             </div>
//           </div>
//           <div className="flex flex-col gap-4">
//             <p className="text-lightBlack font-[700] text-[1.3125rem]">More</p>
//             <div className="flex flex-col gap-2">
//               <p className="text-lightGray text-[1.125rem] font-[500]">
//                 Airlinefees
//               </p>
//               <p className="text-lightGray text-[1.125rem] font-[500]">
//                 Airline
//               </p>
//               <p className="text-lightGray text-[1.125rem] font-[500]">
//                 Low fare tips
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col gap-4 items-center">
//           <div className="flex gap-4 items-center">
//             <img src="/images/Socialfb.png" alt="social icon" />
//             <img src="/images/Socialinsta.png" alt="social icon" />
//             <img src="/images/Socialtwtr.png" alt="social icon" />
//           </div>
//           <p className="text-lightGray font-[500] text-[1.25rem]">
//             Discover our app
//           </p>
//           <div className="flex flex-col md:flex-row gap-8">
//             <div className="bg-lightBlack rounded-extraLarge px-[1.06rem] py-[0.58rem] w-[11rem]">
//               <div className="flex gap-4 items-center">
//                 <div>
//                   <img
//                     src="/images/google-play.png"
//                     alt="google play icon"
//                   />
//                 </div>

//                 <div>
//                   <p className="uppercase font-[700] text-white text-[0.7rem] ">
//                     get it on
//                   </p>
//                   <p className="uppercase font text-white text-[0.7rem]">
//                     Google play
//                   </p>
//                 </div>
//               </div>
//               {/* <div></div> */}
//             </div>
//             <div className="bg-lightBlack rounded-extraLarge px-[1.06rem] py-[0.58rem] w-[11rem]">
//               <div className="flex gap-4 items-center">
//                 <div>
//                   <img src="/images/apple.png" alt="google play icon" />
//                 </div>

//                 <div>
//                   <p className="uppercase font-[700] text-white text-[0.7rem]">
//                     Available on the
//                   </p>
//                   <p className="uppercase font text-white text-[0.7rem]">
//                     Apple store
//                   </p>
//                 </div>
//               </div>
             
//             </div>
//           </div>
//         </div>
//       </div>
//       <p className="my-[5.25rem] text-lightGray text-[0.875rem] font-[600] flex justify-center">
//         All rights reserved@jadoo.co
//       </p>
//     </section>
//   );
// }

// export default FooterSection;