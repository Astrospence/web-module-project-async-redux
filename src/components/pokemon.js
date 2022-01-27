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
        <div className='container'>
            {info === [] ? <p>Loading...</p> : <img className='img' src={pics} alt={`picture of ${name}`} />}
            <h2 className='name'>{name}</h2>
        </div>
    )
}

export default Pokemon;