import React from 'react';

const WidgetShow = (props) => {
    console.log(props)
    return (
        <div>
            {/* to get the parameters we need we are going to use this. * props.match.params.id * */}
            <h1>You entered this URL parameter: {props.match.params.id}</h1>
            {/* this is how we call the id because in procedures we have a array of string. and we are accessing it */}
            <h2>One procedure we do is {props.procedures[props.match.params.id]}</h2>
        </div>
    );
}


export default WidgetShow;