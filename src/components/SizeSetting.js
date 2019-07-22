import React, { Component } from 'react';

class SizeSetting extends Component {
    changeSize = (value) => this.props.onChangeSize(value)
    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <div className="panel-title"> Size: {this.props.fontSize}px</div>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-danger" onClick={()=>this.changeSize(2)}> Up</button>&nbsp;
                    <button type="button" className="btn btn-success" onClick={()=>this.changeSize(-2)}> Down</button>
                </div>
            </div>
        );
    }
}

export default SizeSetting;
