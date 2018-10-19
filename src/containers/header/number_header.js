import React, { Component } from 'react';
import {connect} from 'react-redux';
import './number_header.css';

class header extends Component {
    render() {

        const append = "/Hour";

        return (
            <div className="container">
                {this.props.header.headers.map(data => 
                    <div className="d-inline-block m-4" key={data.type}>
                        <div className="header-text"><strong>{data.type}</strong></div>
                        <div className="header-data"><strong>${data.value.toLocaleString()}{data.type === "Rate" ? append : null}</strong></div>
                    </div>
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { header: state.header };
}

export default connect(mapStateToProps)(header);