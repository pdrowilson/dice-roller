import React, { useState } from 'react';

export const DiceRoller = () => {
    const [dieType, setDieType] = useState(20);
    const [modifier, setModifier] = useState(0);
    const [result, setResult] = useState(null);

    const handleRoll = () => {
        let roll = Math.floor(Math.random() * dieType) + 1;
        setResult(roll);
    }

    return (
        <div>
            <label>Die Type:</label>
            <select value={dieType} onChange={(e) => setDieType(e.target.value)}>
                <option value={4}>d4</option>
                <option value={6}>d6</option>
                <option value={8}>d8</option>
                <option value={10}>d10</option>
                <option value={12}>d12</option>
                <option value={20}>d20</option>
                <option value={100}>d100</option>
            </select>
            <br/>
            <label>Modifier:</label>
            <input type="number" value={modifier} onChange={(e) => setModifier(e.target.value)}/>
            <br/>
            <button onClick={handleRoll}>Roll</button>
            <br/>
            <label>{`Result: ${result} (with the modifier ${modifier})`}</label>
        </div>
    );
}
