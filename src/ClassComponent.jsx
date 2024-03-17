import React from 'react';

class ClassComponent extends React.Component {
    render() {
        const { numberProps, name, isOnline } = this.props;

        return (
            <div>
                <div>{numberProps}</div>
                <div>{name}</div>
                {isOnline && <div>Online</div>}
            </div>
        );
    }
}

export default ClassComponent;
