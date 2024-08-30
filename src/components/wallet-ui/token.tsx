import { useEffect, useState } from 'react';
import {
    useBuyOffers,
    useGetBuyOffers,
    useGetSellOffers,
    useSellOffers,
} from "@nice-xrpl/react-xrpl";
import Offers from './offers-sell';

type TokenProps = {
    id: string;
    uri: string;
};

// export function Token({ id, uri }: TokenProps) {
//     const [buyLoading, setBuyLoading] = useState(false);
//     const [sellLoading, setSellLoading] = useState(false);

//     const getBuyOffers = useGetBuyOffers();
//     const getSellOffers = useGetSellOffers();

//     const buyOffers = useBuyOffers(id);
//     const sellOffers = useSellOffers(id);


//     useEffect(() => {
//         console.log(buyOffers, sellOffers);
//     }, [buyOffers, sellOffers]);


//     useEffect(() => {
//         console.log(buyOffers, sellOffers);

//         const test = async () => {
//             if (buyLoading || sellLoading) {
//                 return;
//             }

//             setBuyLoading(true);

//             try {
//                 await getBuyOffers(id);
//             } catch (e) {
//                 console.log(e);
//             } finally {
//                 setBuyLoading(false);
//             }

//             try {
//                 await getSellOffers(id);
//             } catch (e) {
//                 console.log(e);
//             } finally {
//                 setSellLoading(false);
//             }
//         }

//         test();
//     }, []);

//     return (
//         <div key={id}>
//             {/* {token.issuer}{' - '} */}
//             {id}
//             {': '}
//             {uri}
//             {' - '}
//             <button
//                 onClick={async () => {
//                     if (buyLoading || sellLoading) {
//                         return;
//                     }

//                     setBuyLoading(true);

//                     try {
//                         await getBuyOffers(id);
//                     } catch (e) {
//                         console.log(e);
//                     } finally {
//                         setBuyLoading(false);
//                     }

//                     try {
//                         await getSellOffers(id);
//                     } catch (e) {
//                         console.log(e);
//                     } finally {
//                         setSellLoading(false);
//                     }
//                 }}
//             >
//                 {buyLoading ? 'Waiting for response...' : 'Get Offers'}
//             </button>
//             {buyOffers?.length || sellOffers?.length ? (
//                 <Offers buyOffers={buyOffers} sellOffers={sellOffers} />
//             ) : null}
//         </div>
//     );
// }


export function Token({ id, uri }: TokenProps) {
    const [buyLoading, setBuyLoading] = useState(false);
    const [sellLoading, setSellLoading] = useState(false);

    const getBuyOffers = useGetBuyOffers();
    const getSellOffers = useGetSellOffers();

    const buyOffers = useBuyOffers(id);
    const sellOffers = useSellOffers(id);


    
    useEffect(() => {
        console.log(buyOffers, sellOffers);

        const test = async () => {
            if (buyLoading || sellLoading) {
                return;
            }

            setBuyLoading(true);

            try {
                await getBuyOffers(id);
            } catch (e) {
                console.log(e);
            } finally {
                setBuyLoading(false);
            }

            try {
                await getSellOffers(id);
            } catch (e) {
                console.log(e);
            } finally {
                setSellLoading(false);
            }
        }

        test();
    }, []);

    return (
        <div key={id}>
          
            
            {buyOffers?.length || sellOffers?.length ? (
                <Offers buyOffers={buyOffers} sellOffers={sellOffers} uri={uri} />
            ) : null}
        </div>
    );
}