import React from "react";
import Popup from "../Popup";
import "./style.css"
import { useState } from "react";

const Main = () => {
    const [showPopup, setShowPopup] = useState(false)
    return (
        <>
        {!showPopup ?
        <section>
            <div className="section_button-flex">
                <button onClick={() => setShowPopup(true)} className="section_button">Налоговый вычет</button>
            </div>
        </section> : 
        <Popup 
        setShowPopup={setShowPopup}
        />
        }
        </>
    )
}

export default Main