import React, { Component } from 'react';
import {connect} from 'react-redux';

class header extends Component {
    render() {
        return (
            <div>
                {this.props.header.map( num => <div key={num} className="d-inline-block m-5">{num}</div>)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { header: state.header };
}

export default connect(mapStateToProps)(header);