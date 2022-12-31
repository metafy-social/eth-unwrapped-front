import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const Score = React.forwardRef((props, ref) => {
    const {
        firstTx,
        score,
        nft,
        token,
        swap,
        contracts,
        tx,
        joined 
    } = props;
    return (
        <div ref={ref} className="bg-[#181818]">
        <ReactSpeedometer minValue={0} maxValue={800} value={score} />
        <div className="flex flex-col space-y-2 mt-[-10vh]">
            NFTs - {nft}
            <Progress 
                status="success" 
                percent={nft >= 10 ? 100 : nft*10}
            />
            Transactions - {tx}
            <Progress 
                percent={tx >= 100 ? 100 : tx} 
                status="success" 
            />
            ERC-20 Tokens - {token}
            <Progress 
                percent={token >= 10 ? 100 : token*10} 
                status="success" 
            />
            Token Swaps - {swap}
            <Progress 
                percent={swap >= 50 ? 100 : swap*5} 
                status="success" 
            />
            Contracts Deployed - {contracts}
            <Progress 
                percent={contracts >= 8 ? 100 : contracts*12.5} 
                status="success" 
            />
        </div>
        </div>
        
    )
})

export default Score