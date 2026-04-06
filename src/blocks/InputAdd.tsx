import { useState, type FC } from "react";
import ButtonOrLink from "../components/ButtonOrLink";

interface PropsValue {
    addItem: (text: string) => void,
}

const InputAdd:FC<PropsValue> = ({addItem}) => {

    const [inputValue, isInputValue] =useState<string>('')

    const inputChange = (value: string) => {
        isInputValue(value)   
    }

    const clearInput = () => {
        isInputValue('')
    }



    return (
        <div className="input-section">
            <div className="input-field-block">
                <input
                    className="input-field" 
                    type="text" 
                    onChange={(e) => inputChange(e.target.value)} value={inputValue}
                    placeholder="Enter text..."
                />
            </div>
            
            <ButtonOrLink 
                className="add-btn"
                typeButton='button'   
                
                /// add item
                onClick={() => {
                    addItem(inputValue)
                    clearInput()
                } }   

                content={
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1582_13)">
                            <rect y="12" width="28" height="4" rx="2" 
                            fill="var(--main-bg-color)"/>
                            <rect x="16" width="28" height="4" rx="2" transform="rotate(90 16 0)" 
                            fill="var(--main-bg-color)"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1582_13">
                                <rect width="28" height="28" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                }
            />
                
        </div>
    )
}

export default InputAdd