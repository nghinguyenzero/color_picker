import React, { Component } from 'react';

// function Reset() {
//     return (
//         <button type="button" className="btn btn-success">Reset</button>
//     );
// }


class Reset extends Component {
    onResetDefault = () => {
        this.props.onSettingDefault(true);
    }
    render() {
        return (
            <button type="button" className="btn btn-success" onClick={this.onResetDefault}>Reset</button>
        );
    }
}

export default Reset;
