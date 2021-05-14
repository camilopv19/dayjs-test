import React, { useState, useEffect } from 'react';
import { getDateFormat } from './dateFormat';


const Inputform = () => {
    const [typed, setTyped] = useState('');
    const [text, setText] = useState();
    // 'America/Detroit': EDT (-4h)
    // 'America/New_York': EDT (-4h)
    // 'America/Chicago': CDT (-5h)
    // 'America/Los_Angeles': PDT (-7h)
    useEffect(() => {
        console.log('text', text);
    }, [text])

    const getDates = () => {
        setText(getDateFormat('2021-06-08T24:00:00', '2021-06-08T15:00:00', 'America/Los_Angeles'));
    };

    const typing = (event) => {
        setTyped(event.target.value);
        // console.log(typed);
    };
    return (<div>
        <input type="text" onChange={typing}></input>
        <button type="submit" onClick={getDates}>Get dates</button>
        <p>2021-06-08T15:00:00</p>
    </div>);
};

export default Inputform;