import React from 'react'
import '../styles/display.css';

const Display = ({firstNumber,operator,secondNumber,result}) => {
    const displayOperator = operator === '*' ?'x':operator;
    const mathExpr = `${firstNumber || ''}${displayOperator || ''}${secondNumber || ''}`;
    const value = (result!==null)?result: (mathExpr===''?'0':mathExpr)
    return (
        <div className="display-container" aria-label="display number">
            <span className="display-container_displayer">{value}</span>
        </div>
    )
}

export default Display
