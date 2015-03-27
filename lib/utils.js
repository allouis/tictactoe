export function indexOf(arr, item) {
    return [].indexOf.call(arr, item);
}

export function getIndex(elem) {
    return indexOf(elem.parentNode.children, elem);
}

export function addEvent(elem, eventName, fn){
    elem.addEventListener(eventName, fn);
}

export function addEventOnce(elem, eventName, fn){
    addEvent(elem, eventName, function handler(){
        elem.removeEventListener(eventName, handler);
        fn.apply(this, arguments);
    });
}
