import React from 'react';

const Pokemon = (props) => {
    const { name } = props;
    

    return (
        <div>
            {name}
        </div>
    )
}

export default Pokemon;