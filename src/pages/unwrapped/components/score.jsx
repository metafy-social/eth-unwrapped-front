import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

const Score = (props) => {
    const {
        firstTx,
        score,
        nft,
        token,
        swap,
        tx,
        joined 
    } = props;
    return (
        <ReactSpeedometer minValue={0} maxValue={800} value={400} />
    )
}

export default Score