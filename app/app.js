import { createBoard } from 'components/board';
import { set, get, getSymbol, create } from 'board';
import { addEventOnce, getIndex } from 'utils';
import React from 'react';

export function render(board, elem){
    React.render(createBoard(board), elem);
    addEvents(board, elem);
}

function addEvents(board, elem){
    addEventOnce(elem, 'click', function onClick(event){
        if (get(getIndex(event.target), board)) {
            return addEventOnce(elem, 'click', onClick);
        }
        return render(set(getSymbol(board), getIndex(event.target), board), elem);
    });
}

render(create(), document.body);
