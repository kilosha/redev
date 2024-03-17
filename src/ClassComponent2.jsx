import React from 'react';

class ClassComponent2 extends React.Component {
    render() {
        const { obj, arr, subSecondComponent } = this.props;

        return (
            <div>
                {obj.name} <br />
                {obj.age} <br />
                {arr} <br />
                {subSecondComponent()}
            </div>
        );
    }
}

export default ClassComponent2;
