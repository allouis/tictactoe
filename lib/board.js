export function create(){
    return Array(9).join('.').split('.').map((x) => null);
}

export function get(i, board){
    return board[i];
}

export function set(val, index, board){
    return board.map((el, i) => i === index ? val : el);
}

export function getSymbol(board){
    return board.filter((x) => !!x).length % 2 ? 'x' : 'o';
}

function take(num, arr){
    return arr.slice(0, num); 
}

function getRows(board){
    take(3, board);
}

export function hasWinner(board){
    board.reduce(function(triplets, item, index){
        triplets. 
    }, []); 
}
