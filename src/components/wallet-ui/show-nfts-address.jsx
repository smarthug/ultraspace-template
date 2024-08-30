import { useTokens } from "@nice-xrpl/react-xrpl";

export function ShowNFTs({address}) {
  console.log(address)
  // The useTokens hook gives you a list of all
  // tokens associated with an address.
  // This is a request hook, so it can be used with
  // a wallet or a wallet address.
  const tokens = useTokens("sEdTbpveZCMG7HCxTF2mk439tWSkHUS");
  // const tokens = useTokens();

  return (
    <div className="WalletRow">
      Tokens:{" "}
      {tokens.length
        ? tokens.map((token) => {
            return (
              <div key={token.id}>
                {/* {token.issuer}{' - '} */}
                {token.id}
                {": "}
                {token.uri}
              </div>
            );
          })
        : "No tokens held"}
    </div>
  );
}
