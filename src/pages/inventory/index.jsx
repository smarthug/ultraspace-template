// import App from './App'
import { Account, Wallet } from "@nice-xrpl/react-xrpl";
import { ShowNFTs } from "../../components/wallet-ui/show-nfts";
// import { ShowNFTs } from "../../components/wallet-ui/show-nfts-address";
import { InventoryBox } from "./InventoryBox";

// export default function Game() {
//   return (
//     <div id="Game">
//       <h1>Game</h1>
//       <p>Coming soon...</p>
//     </div>
//   );
// }

export default function Game() {
  return (
    <>
      <Wallet seed="sEdSuggZESkLQaECpNwdHf4AybmHZzC">
        <InventoryBox />
      </Wallet>

      {/* <Account  address="rhhJKjedTEzXidrP3mqS4kr5d9xFxFEfUp">
        <ShowNFTs />
      </Account> */}
    </>
  );
}
