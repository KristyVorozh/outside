import React from "react";
import { useState } from "react";
import "./style.css"

const Popup = ({setShowPopup}) => {
    const [inputNumber, setInputNumber] = useState('')
    const [calculate, setСalculate] = useState(false)
    const [calculateValue, setCalculateValue] = useState()
    const [error, setError] = useState(false)
    const calculateCheckbox = () => {
        let stringToNumber = Number(inputNumber);
        if (inputNumber === '' ) {
            setError(true)
        } else {
        setError(false)
        setСalculate(true)
        let sumHouse = 260000
        let number = parseInt((stringToNumber * 12) * 0.13);
        let numberYear = parseInt(sumHouse / number)
        let numberDifferenceYear = numberYear * number
        let arrayNumber = []
        for (let i = 0; i < numberYear; i++){
            arrayNumber.push(number)
        }
        if (numberDifferenceYear < sumHouse) {
            let numberLastYear = sumHouse - numberDifferenceYear
            arrayNumber.push(numberLastYear)
        } 
        setCalculateValue(arrayNumber)
        }
    }
    const declensionOfNumbers = (index) => {
            index %= 100;
            if (index === 2 || (index >= 6 && index < 9)) {
                return 'ой';
            }
            index %= 10;
            if (index === 1 || index === 4 || index === 5 || (index >= 9 && index !== 20)) {
                return 'ый';
            }
            if (index === 3) {
                return 'ий';
            }
    }
    const declensionOfWords = (index) => {
        index %= 100;
        if (index === 2) {
            return 'во';
        }
    }
    return (
    <div className="popup-wrapper">
        <div className="popup">
            <div className="popup-content">
            <label onClick={() => setShowPopup(false)} for="popupCheckboxOne" className="popup-closer">&#215;</label>
            <div className="popup-text">
                <h2>Налоговый вычет</h2>
                <p className="popup-text_p">Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.</p>
                <div className="popup_input">
                    <p>Ваша зарплата в месяц</p>
                    <div className="popup_input-flex">
                        <input className={error ? 'input_error' : ''} value={inputNumber} onChange={(e)=>setInputNumber(e.target.value)} type='number' placeholder='Введите данные'/>
                        {error && 
                            <label>Поле обязательно для заполнения</label>
                        }
                    </div>
                </div>
                <div className="popup_checkbox">
                    <p className="popup_checkbox-p" onClick={calculateCheckbox}>Рассчитать</p>
                    {calculate &&
                    <>
                    <p>Итого можете внести в качестве досрочных:</p>
                    {calculateValue.map((value, index)=>{
                        return (
                        <div className="input_flex">
                            <input className="input_flex-checkbox" name="name1" type="checkbox" id="checkbox1" />
                            <label for="checkbox1"></label>
                            <p>{value} рублей <span>{declensionOfWords(index+1) || "в"} {index+1}{declensionOfNumbers(index+1) || 'ый'} год</span></p>
                        </div>
                        )
                    })}
                    </>
                    }
                </div>
                <div className="popup_button-delete">
                    <p>Что уменьшаем?</p>
                    <button>Платёж</button>
                    <button>Срок</button>
                </div>
                <button onClick={() => setShowPopup(false)} className="popup_button">Добавить</button>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Popup;