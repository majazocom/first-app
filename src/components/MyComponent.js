import React from 'react';

class MyComponent extends React.Component {
    render() {
        console.log(this.props);
        return <h2>Hello from {this.props.name}, {this.props.age}</h2>
    }
}

export default MyComponent;