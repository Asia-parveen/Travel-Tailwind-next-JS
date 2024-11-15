import React from 'react';
import Image from 'next/image';

interface IProps {
  iconUrl: string;
  title: string;
  description: string;
  highlighted: boolean;
}

function CategoryCard({ iconUrl, title, description, highlighted }: IProps) {
  return (
    <div
      className={`flex relative flex-col gap-4 items-center p-[2.5rem] ${
        highlighted ? 'bg-white shadow-md rounded-[2.5rem]' : ''
      }`}
    >
      <div>
        <Image
          src={iconUrl}
          alt="category card icon"
          className="h-[80px]"
          width={80} // Specify width
          height={80} // Specify height
        />
      </div>
      <p className="text-subtitle text-[1.2rem] font-[600]">{title}</p>
      <p className="text-lightGray text-[1rem] font-bold">{description}</p>
      {highlighted && (
        <div className="absolute -bottom-8 -left-10 -z-10">
          <Image
            src="/images/redshape.png"
            alt="rectangle shape"
            width={200} // Specify width
            height={100} // Specify height
          />
        </div>
      )}
    </div>
  );
}

export default CategoryCard;

// import React from "react";

// interface IProps {
//   iconUrl: string;
//   title: string;
//   description: string;
//   highlighted: boolean;
// }

// function CatergoryCard({ iconUrl, title, description, highlighted }: IProps) {
//   return (
//     <div
//       className={`flex relative flex-col gap-4 items-center p-[2.5rem] ${
//         highlighted ? "bg-white shadow-md rounded-[2.5rem]" : ""
//       }`}
//     >
//       <div>
//         <img src={iconUrl} alt="category card icon" className="h-[80px]" />
//       </div>
//       <p className="text-subtitle text-[1.2rem] font-[600]">{title}</p>
//       <p className="text-lightGray text-[1rem] font-bold">{description}</p>
//       {highlighted && (
//         <div className="absolute -bottom-8 -left-10 -z-10">
//           <img src="/images/redshape.png" alt="rectangle shape" />
//         </div>
//       )}
//     </div>
//   );
// }

// export default CatergoryCard;
