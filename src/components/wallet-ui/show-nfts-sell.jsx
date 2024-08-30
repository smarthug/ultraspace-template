import { useTokens, Wallet } from "@nice-xrpl/react-xrpl";
import {Token} from './token'

// export function ShowNFTs() {
//   // The useTokens hook gives you a list of all
//   // tokens associated with an address.
//   // This is a request hook, so it can be used with
//   // a wallet or a wallet address.
//   const tokens = useTokens();

//   return (
   
//       <div className="WalletRow">
//         Tokens:{" "}
//         {tokens.length
//           ? tokens.map((token) => {
//               return (
//                 <div key={token.id}>
//                   {/* {token.issuer}{' - '} */}
//                   {token.id}
//                   {": "}
//                   {token.uri}
//                 </div>
//               );
//             })
//           : "No tokens held"}
//       </div>
    
//   );
// }


export function ShowNFTs() {
  // The useTokens hook gives you a list of all
  // tokens associated with an address.
  // This is a request hook, so it can be used with
  // a wallet or a wallet address.
  const tokens = useTokens();
  console.log('tokens', tokens)

  return (
   
      <div className="WalletRow">
        {tokens.length
          ? tokens.map((token) => {
              return (
                <Token key={token.id} id={token.id} uri={token.uri} />
              );
            })
          : "No tokens held"}
      </div>
    
  );
}
