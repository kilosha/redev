import React from 'react';

class ClassComponent extends React.Component {
    render() {
        return (
            <div>
                <div>{this.props.numberProps}</div>
                <div>{this.props.name}</div>
                {this.props.isOnline && <div>Online</div>}
            </div>
        );
    }
}

export default ClassComponent;
