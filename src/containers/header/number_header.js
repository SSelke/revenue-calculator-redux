import React, { Component } from 'react';
import {connect} from 'react-redux';

class header extends Component {
    render() {
        return (
            <div>
                {this.props.header.headers.map(data => <div key={data.type}>{data.value}</div>)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { header: state.header };
}

export default connect(mapStateToProps)(header);