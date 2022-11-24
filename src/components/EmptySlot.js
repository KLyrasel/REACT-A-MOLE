import React, { useEffect } from "react"
import MoleGone from '../molehill.png'

function EmptySlot(props) {
    useEffect(()=>{
        let randomTime = Math.ceil(Math.random ()* 3452)
        let timer= setTimeout(()=>{
            
            props.change(true)
        },randomTime)
        return () => clearTimeout(timer)
    })
    
    return (
        <div>
            <img style={{'width':'30vw'}}
            src={MoleGone}
            alt={'molehill'}
           />
        </div>
    )
}

export default EmptySlot