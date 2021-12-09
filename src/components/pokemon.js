import React, { useState, useEffect} from 'react';
import axios from 'axios';

const initialInfo = [];

const Pokemon = (props) => {
    const { name, pokedex } = props;
    const [ info, setInfo ] = useState(initialInfo);
    const [ pics, setPics ] = useState('');

    useEffect(() => {
        axios.get(`${pokedex}`)
            .then(res => {
                setInfo(res.data);
                setPics(res.data.sprites.other['official-artwork']['front_default']);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div>
            {name}
            {info === [] ? <p>Loading...</p> : <img width="200" src={pics} alt={`picture of ${name}`} />}
        </div>
    )
}

export default Pokemon;