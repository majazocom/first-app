import React from 'react';

class ImageComponent extends React.Component {
    render() {
        let url = 'https://http.cat/' + this.props.code;
        console.log(this.props.code);
        return <img src={url} alt="nature image" width="400" height="400"></img>
    }
}

export default ImageComponent;