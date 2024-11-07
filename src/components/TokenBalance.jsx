import { useAccount, usePublicClient } from 'wagmi';
import { useEffect, useState } from 'react';
import { formatUnits, parseAbi } from 'viem';

function TokenBalance({ tokenAddress, tokenDecimals }) {
    const { address } = useAccount();
    const publicClient = usePublicClient();
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        async function fetchBalance() {
            if (!address) return;

            const erc20Abi = parseAbi(['function balanceOf(address) view returns (uint256)']);
            const balance = await publicClient.readContract({
                address: tokenAddress,
                abi: erc20Abi,
                functionName: 'balanceOf',
                args: [address],
            });

            setBalance(formatUnits(balance, tokenDecimals));
        }

        fetchBalance();
    }, [address, publicClient, tokenAddress, tokenDecimals]);

    return (
        <div>
            {balance !== null ? new Intl.NumberFormat().format(balance) : 'Loading...'} SKL
        </div>
    );
}

export default TokenBalance;