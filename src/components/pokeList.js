import React, { useEffect } from 'react';
import Pokemon from './Pokemon';
import { connect } from 'react-redux';
import { getPokemon } from '../actions';

const PokeList = (props) => {
    const { pokemon, getPokemon } = props;

    useEffect(() => {
        getPokemon();
    }, [])

    return (
        <div>
            <div>
                {pokemon.map(index => {
                    return <Pokemon key={index.url} name={index.name} pokedex={index.url} />
                })}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return ({
        pokemon: state.pokemon
    });
};

export default connect(mapStateToProps, { getPokemon })(PokeList);