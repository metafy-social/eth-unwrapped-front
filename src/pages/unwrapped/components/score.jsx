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
        <div ref={ref} className="bg-[#181818] p-5">
        <ReactSpeedometer minValue={0} maxValue={800} value={score} currentValueText={`MetaScore ${score}`} />
        <dir className="mt-[-10vh] ml-[-2vw] text-center font-extralight">
            Joined ETH {joined}
            <br />
            <div className="h-2"></div>
            {firstTx==="Never Transacted"
            ?
            "Never Transacted"
            :
            "First Transaction of 2022 on " + firstTx}
        </dir>
        <div className="flex flex-col space-y-2">
            NFTs - {nft}
            <div className="h-[0.5px]"></div>
            <Progress 
                status="success" 
                percent={nft >= 10 ? 100 : nft*10}
            />
            <div className="h-[0.5px]"></div>
            Transactions - {tx}
            <Progress 
                percent={tx >= 100 ? 100 : tx} 
                status="success" 
            />
            <div className="h-[0.5px]"></div>
            ERC-20 Tokens - {token}
            <Progress 
                percent={token >= 10 ? 100 : token*10} 
                status="success" 
            />
            <div className="h-[0.5px]"></div>
            Token Swaps - {swap}
            <Progress 
                percent={swap >= 50 ? 100 : swap*5} 
                status="success" 
            />
            <div className="h-[0.5px]"></div>
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