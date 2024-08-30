import { Offer } from "@nice-xrpl/react-xrpl";
import ItemCard from "../mui/ItemCard";

const items = [
  {
    id: 1,
    name: "The Crown",
    description: "A crown that grants the wearer unlimited power",
    image:
      "https://sapphire-preferred-bison-599.mypinata.cloud/ipfs/QmbgNr8NPQDQ1tEErBfGbRqUbiux9zPZQ31n4Ha42U4CbP",
  },
];

const sample = {
  id: 2,
  name: "Cybertruck",
  description:
    "A Cybertruck that grants the rider unlimited power",
  image:
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cybertruck/thumbnail.png",
};
type OffersProps = {
  buyOffers?: Offer[];
  sellOffers?: Offer[];
  uri: string;
};

// export default function Offers(
//   { sellOffers }: OffersProps = {
//     sellOffers: [],
//   }
// ) {
//   return (
//     <div>
//       {/* <div>Sell Offers</div> */}
//       {sellOffers?.length ? (
//         <>
//           {sellOffers.map((offer) => {
//             return (
//               <div key={offer.index}>
//                 Offer Index <code>{offer.index}</code> for offer amount{" "}
//                 {offer.amount}
//               </div>
//             );
//           })}
//         </>
//       ) : (
//         <div>No sell offers</div>
//       )}
//     </div>
//   );
// }

export default function Offers(
  { sellOffers, uri }: OffersProps = {
    sellOffers: [],
  }
) {
  return (
    <div>
      {/* <div>Sell Offers</div> */}
      {sellOffers?.length ? (
        <>
          {sellOffers.map((offer) => {
            return <ItemCard uri={uri} item={sample} index={offer.index} price={offer.amount} />;
          })}
        </>
      ) : (
        <div>No sell offers</div>
      )}
    </div>
  );
}
