import React from "react";
import PropTypes from 'prop-types';
import { Text } from "react-native";

const TabTitle = props =>{

    return (
        <Text>{props.title}</Text>
    );
}


TabTitle.prototype = {
    title : PropTypes.string.isRequired
}

export default TabTitle;