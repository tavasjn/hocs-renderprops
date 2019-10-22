// import React, { Component } from 'react';

// class Hooks extends Component {
//     constructor(){
//         super();
//         this.state = {
//             count: 0
//         }
//     }

//     render(){
//         return(
//             <div>
//                 {this.state.count}
//             </div>
//         )
//     }
// }

// export default Hooks;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Hooks = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [nameList, setNameList] = useState([]);
    const [character, setCharacter] = useState([]);


    useEffect(() => {
        axios.get('https://swapi.co/api/people/1')
        .then(res => setCharacter(res.data))
        .catch(err => console.log(err))
    }, [])

    const addName = () => {
        nameList.push(name);
        setName('')
    }

    const mappedNames = nameList.map((element, i) => {
        return (
            <p key={i}>{element}</p>
        )
    })


    console.log(character)
    return (
        <div>
            {character.name}
            <br />
            {character.height}
            <br />
            {mappedNames}
            <input onChange={(e) => setName(e.target.value)} value={name} />
            <button onClick={addName}>Add to List</button>
            <br />
            {count}
            <button onClick={() => setCount(count + 1)}>Add One</button>
        </div>
    )
}

export default Hooks;