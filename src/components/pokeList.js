import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
    const { pokeInfo } = props;

    return (
        <div>
            <div>
                {pokeInfo.map(index => {
                    <Pokemon pokemon={index}/>
                })}
            </div>
        </div>
    )
}

export default PokeList;