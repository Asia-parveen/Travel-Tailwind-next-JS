import Image from 'next/image';
import React from 'react';

interface IProps {
  imageUrl: string;
  title: string;
  amount: string;
  duration: string;
  highlighted: boolean;
}

function DestinationCard({
  imageUrl,
  title,
  amount,
  duration,
  highlighted,
}: IProps) {
  return (
    <div className="flex relative flex-col justify-between pb-[2.63rem] group">
      <div className="object-fill">
        <Image
          src={imageUrl}
          alt="destination image"
          width={300}
          height={300}
          className="w-[250px] h-[300px] object-cover rounded-t-[1.5rem]" // Set equal width and height here
        />
      </div>
      <div className="bg-white w-full mt-[1.69rem] px-[1.62rem] group-hover:shadow-md pb-[2rem] group-hover:rounded-[1.5rem]">
        <div className="flex justify-between text-lightGray text-[1.125rem] font-bold">
          <p>{title}</p>
          <p>{amount}</p>
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <Image src="/images/arrow.png" alt="send icon" width={20} height={20}/>
          </div>
          <p className="text-lightGray font-bold">{duration}</p>
        </div>
      </div>
      {highlighted && (
        <div className="absolute bottom-[10rem] right-[-3rem] -z-10 hidden md:block">
          <Image src="/images/wire.png" alt="curly ring" width={100} height={50}/>
        </div>
      )}
    </div>
  );
}

export default DestinationCard;




// import React from "react";

// interface IProps {
//   imageUrl: string;
//   title: string;
//   amount: string;
//   duration: string;
//   highlighted: boolean;
// }

// function DestinationCard({
//   imageUrl,
//   title,
//   amount,
//   duration,
//   highlighted,
// }: IProps) {
//   return (
//     <div className="flex relative flex-col justify-between pb-[2.63rem] group">
//       <div className="  object-fill ">
//         <img
//           src={imageUrl}
//           alt="destination image"
//           className="w-[250px] h-[300px]  object-cover rounded-t-[1.5rem]"
//         />
//       </div>
//       <div className="bg-white w-full mt-[1.69rem] px-[1.62rem]  group-hover:shadow-md pb-[2rem] group-hover:rounded-[1.5rem]">
//         <div className="flex justify-between text-lightGray text-[1.125rem] font-bold">
//           <p>{title}</p>
//           <p>{amount}</p>
//         </div>
//         <div className="flex gap-4 items-center">
//           <div>
//             <img src="/images/arrow.png" alt="send icon" />
//           </div>
//           <p className="text-lightGray font-bold">{duration}</p>
//         </div>
//       </div>
//       {highlighted && (
//         <div className="absolute bottom-[5rem] right-[-4rem] -z-10 hidden md:block">
//           <img src="/images/wire.png" alt="curly ring" />
//         </div>
//       )}
//     </div>
//   );
// }

// export default DestinationCard;
