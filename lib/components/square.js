import React from 'react';

export function create(value, index){
    return React.DOM.div({
        className: 'square' + (value ? ' square-value' : ''),
    }, value);
}
