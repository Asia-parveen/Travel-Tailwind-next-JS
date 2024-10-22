import React from "react";
import CategoryCard from "../cards/CategoryCard";

function CategorySection() {
  const features = [
    {
      id: 0,
      iconUrl: "/images/dish.png",
      title: "Calculated Weather",
      description:
        "Built Wicket longer admire do barton vanity itself do in it.",
      highlighted: false,
    },
    {
      id: 1,
      iconUrl: "/images/plan.png",
      title: "Best Flights",
      description:
        "Engrossed listening. Park gate sell they west hard for the.",
      highlighted: true,
    },
    {
      id: 2,
      iconUrl: "/images/mike.png",
      title: "Local Events",
      description:
        "Barton vanity itself do in it. Preferd to men it engrossed listening.",
      highlighted: false,
    },
    {
      id: 3,
      iconUrl: "/images/tyre.png",
      title: "Customization",
      description:
        "We deliver outsourced aviation services for military customers",
      highlighted: false,
    },
  ];
  return (
    <section>
      <p className="text-lightGray text-[1.125rem] font-[600] text-center">
        Category
      </p>
      <p className="volkhov text-[3.125rem] text-title font-[700] text-center">
        We Offer Best Services
      </p>
      <div className="flex flex-col gap-4 md:flex-row justify-between w-full mt-16">
        {features.map((feature) => (
          <CategoryCard
            key={feature.id}
            iconUrl={feature.iconUrl}
            title={feature.title}
            description={feature.description}
            highlighted={feature.highlighted}
          />
        ))}
      </div>
    </section>
  );
}

export default CategorySection;




// import React from "react";
// import CatergoryCard from "../cards/CategoryCard";

// function CatgorySection() {
//   const features = [
//     {
//       id: 0,
//       iconUrl: "/images/dish.png",
//       title: "Calculated Weather",
//       description:
//         "Built Wicket longer admire do barton vanity itself do in it.",
//       highlighted: false,
//     },
//     {
//       id: 1,
//       iconUrl: "/images/plan.png",
//       title: "Best Flights",
//       description:
//         "Engrossed listening. Park gate sell they west hard for the.",
//       highlighted: true,
//     },
//     {
//       id: 2,
//       iconUrl: "/images/mike.png",
//       title: "Local Events",
//       description:
//         "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
//       highlighted: false,
//     },
//     {
//       id: 3,
//       iconUrl: "/images/tyre.png",
//       title: "Customization",
//       description:
//         "We deliver outsourced aviation services for military customers",
//       highlighted: false,
//     },
//   ];
//   return (
//     <section>
//       <p className="text-lightGray text-[1.125rem] font-[600] text-center">
//         Category
//       </p>
//       <p className="volkhov text-[3.125rem] text-title font-[700] text-center">
//         We Offer Best Services
//       </p>
//       <div className="flex flex-col gap-4 md:flex-row justify-between w-full mt-16">
//         {features.map((feature) => (
//           <CatergoryCard
//             key={feature.id}
//             iconUrl={feature.iconUrl}
//             title={feature.title}
//             description={feature.description}
//             highlighted={feature.highlighted}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default CatgorySection;
