import React from "react";
const ListItem = function (props) {

    return {
        props,
        render () {
            return (
                <li>{this.props.name}!</li>
            );
        }
    };

};

export default ListItem;
