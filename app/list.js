import React from "react";
import ListItem from "./list_item";

const List = function (props) {
    let items = [
        {name: 'Eat own on Dog food'},
        {name: 'Walk dog'}
    ];

    return {
        props,
        render () {
            let listItems = items.map(item => <ListItem name={item.name}/>);
            return (
                <ol>{listItems}</ol>
            );
        }
    };

};

export default List;
