import { createBoard } from 'components/board';
import { set, getSymbol, create } from 'board';
import { addEventOnce, getIndex } from 'utils';
import React from 'react';

export function render(board, elem){
    React.render(createBoard(board), elem);
    if (hasWinner(board)){
        return alert('game over');
    }
    addEventOnce(elem, 'click', function (event){
        if (event.target.classList.contains('square')){
            if (!get(getIndex(event.target), board)){
                return render(set(getSymbol(board), getIndex(event.target), board), elem);
            }
        }
    });
}

render(create(), document.body);
