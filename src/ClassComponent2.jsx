import React from 'react';

class ClassComponent2 extends React.Component {
    render() {
        return (
            <div>
                {this.props.obj.name} <br />
                {this.props.obj.age} <br />
                {this.props.arr} <br />
                {this.props.subSecondComponent()}
            </div>
        );
    }
}

export default ClassComponent2;
