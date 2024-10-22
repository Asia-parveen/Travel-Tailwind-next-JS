import React from "react";
import Image from "next/image"; // Import Image from Next.js

interface IProps {
  iconUrl: string;
  title: string;
  description: string;
}

function TripStepCard({ iconUrl, title, description }: IProps) {
  return (
    <div className="flex gap-8 items-center">
      <div>
        <Image
          src={iconUrl}
          alt="step icon"
          width={50}  // Adjust the width based on the icon size
          height={50} // Adjust the height based on the icon size
        />
      </div>
      <div className="flex flex-col">
        <p className="text-lightGray text-[1rem] font-[700]">{title}</p>
        <p className="text-lightGray text-[1rem] font-[400]">{description}</p>
      </div>
    </div>
  );
}

export default TripStepCard;



// import React from "react";

// interface IProps {
//   iconUrl: string;
//   title: string;
//   description: string;
// }

// function TripStepCard({ iconUrl, title, description }: IProps) {
//   return (
//     <div className="flex  gap-8 items-center">
//       <div>
//         <img src={iconUrl} alt="step icon" />
//       </div>
//       <div className="flex flex-col">
//         <p className="text-lightGray text-[1rem] font-[700]">{title}</p>
//         <p className="text-lightGray text-[1rem] font-[400]">{description}</p>
//       </div>
//     </div>
//   );
// }

// export default TripStepCard;