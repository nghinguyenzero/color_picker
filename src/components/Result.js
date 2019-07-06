import React, { Component } from 'react';


// function Result() {
//     var self= this;
//     function setStyle() {
//         return {
//             color: this.props.color,
//             borderColor: this.props.color,
//             fontSize: this.props.fontSize
//         };
//     }
//     return (
//         <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
//             <p> Color: {this.props.color} - Fontsize: {this.props.fontSize}px</p>
//             <div id="content" style={self.setStyle()}>
//                 Detail setting
//             </div>
//         </div>
//     );
// }


class Result extends Component {

    setStyle() {
        return {
            color: this.props.color,
            borderColor: this.props.color,
            fontSize: this.props.fontSize
        };
    }
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p> Color: {this.props.color} - Fontsize: {this.props.fontSize}px</p>
                <div id="content" style={this.setStyle()}>
                    Detail setting
            </div>
            </div>
        );
    }
}

export default Result;
