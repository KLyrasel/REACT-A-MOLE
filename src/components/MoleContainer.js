import React, { useState } from "react";
import Mole from './Mole';
import EmptySlot from "./EmptySlot";

function MoleContainer(props) {
    let [moleUp, setMoleUp] = useState(false)
    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setMoleUp(false)
    }

    let displayMole = moleUp ? <Mole change={setMoleUp} handleClick={handleClick} /> : <EmptySlot change={setMoleUp} />

    return (
        <div style={{ 'display': 'inline-block', 'width': '30vw' }}>
            {displayMole}
        </div>
    )
}

export default MoleContainer