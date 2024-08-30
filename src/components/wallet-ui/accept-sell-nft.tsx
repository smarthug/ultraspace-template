import { useState } from "react";
import { useAcceptSellOffer } from "@nice-xrpl/react-xrpl";
import { Button } from "@mui/material";

export function AcceptSellOffer({ index }) {
  const acceptSellOffer = useAcceptSellOffer();
  const [offerIndex, setOfferIndex] = useState(index);
  const [sending, setSending] = useState(false);

  return (
    <div>
      {sending ? (
        "Waiting for response..."
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={async () => {
            setSending(true);
            try {
              const result = await acceptSellOffer(offerIndex);

              console.log("UI: ", result);
            } catch (err) {
              console.log("ERROR: ", err);
            } finally {
              setSending(false);
              setOfferIndex("");
            }

            // const tokens = await getTokens();
            // console.log('UI: ', tokens);
          }}
        >
          Purchase
        </Button>
      )}
    </div>
  );
}
