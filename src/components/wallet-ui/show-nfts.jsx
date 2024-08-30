import { useTokens, Wallet } from "@nice-xrpl/react-xrpl";

export function ShowNFTs() {
  // The useTokens hook gives you a list of all
  // tokens associated with an address.
  // This is a request hook, so it can be used with
  // a wallet or a wallet address.
  const tokens = useTokens();

  return (
    <Wallet seed="sEdTbpveZCMG7HCxTF2mk439tWSkHUS">
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
    </Wallet>
  );
}
