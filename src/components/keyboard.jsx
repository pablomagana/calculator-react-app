import React from 'react';
import '../styles/keyboard.css';
import '../styles/utils.css';

const Keyboard = ({ 
    resetCalc,
    calcResult,
    invertNumber,
    addNumber,
    setOperation }) => {
    return (
        <div className="keyboard d-flex flex-column">
            <div className="d-flex flex-row">
            <div className="keyboard-container_cell" onClick={() => addNumber('.')}><span>,</span></div>
                <div className="keyboard-container_cell" onClick={resetCalc}><span>AC</span></div>
                <div className="keyboard-container_cell" onClick={invertNumber}><span>+/-</span></div>
                <div className="keyboard-container_cell" onClick={() => setOperation('*')}><span>x</span></div>
            </div>
            <div className="d-flex flex-row">
                <div className="keyboard-container_cell" onClick={() => addNumber(7)}><span>7</span></div>
                <div className="keyboard-container_cell" onClick={() => addNumber(8)}><span>8</span></div>
                <div className="keyboard-container_cell" onClick={() => addNumber(9)}><span>9</span></div>
                <div className="keyboard-container_cell" onClick={() => setOperation('/')}><span>/</span></div>
            </div>
            <div className="d-flex flex-row">
                <div className="keyboard-container_cell" onClick={() => addNumber(4)}><span>4</span></div>
                <div className="keyboard-container_cell" onClick={() => addNumber(5)}><span>5</span></div>
                <div className="keyboard-container_cell" onClick={() => addNumber(6)}><span>6</span></div>
                <div className="keyboard-container_cell" onClick={() => setOperation('+')}><span>+</span></div>
            </div>
            <div className="d-flex flex-row">
                <div className="keyboard-container_cell" onClick={() => addNumber(1)}><span>1</span></div>
                <div className="keyboard-container_cell" onClick={() => addNumber(2)}><span>2</span></div>
                <div className="keyboard-container_cell" onClick={() => addNumber(3)}><span>3</span></div>
                <div className="keyboard-container_cell" onClick={() => setOperation('-')}><span>-</span></div>
            </div>
            <div className="d-flex flex-row">
                <div className="keyboard-container_cell" onClick={() => addNumber(0)}><span>0</span></div>
                <div className="keyboard-container_cell" onClick={() => calcResult()}><span>=</span></div>
            </div>
        </div>
    )
}

export default Keyboard
