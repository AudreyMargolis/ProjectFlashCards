import React, { useEffect, useState } from "react" 

import { useHistory } from "react-router-dom"

import StudyCardButton from "./StudyCardButton"


export default function StudyCardDisplay ({ cards }) {
    const [index, setIndex] = useState(0)
    const [isFront, setIsFront] = useState(true)
    const cardCount = cards.length;
    const history = useHistory();

    useEffect(()=>{
        setIndex(0);
        setIsFront(isFront);
    },[])

    const nextCard = () => {
        setIndex(index + 1)
        setIsFront(!isFront)
    }
    const goHome = () => {
        const windowConfirm = window.confirm("Restart cards?\n Click 'cancel' to return to the home page.");
        if(!windowConfirm)
            history.push("/");
        else
            setIndex(0);
    }
    return (
        <div>

            <h3>Card {index + 1} of {cardCount}</h3>
                    <p>{isFront ? cards[index].front : cards[index].back}</p>
                    <button 
                        onClick={()=> setIsFront(!isFront)}
                        className= {isFront ? "btn btn-primary mr-2" : "btn btn-secondary mr-2"} 
                    >Flip</button>
            {!isFront ? 
                index < cards.length - 1 ?
                <StudyCardButton home={false} clickHandler={nextCard}/> 
                : <StudyCardButton home={true} clickHandler={goHome}/> 
            : <></>}
        </div>
    )
}