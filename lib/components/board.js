import { create } from 'components/square';
import React from 'react';

export function createBoard(squares){
    return React.DOM.div({
        className: 'board'
    }, squares.map(create));
}
