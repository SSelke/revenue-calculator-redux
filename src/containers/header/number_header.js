import React, { Component } from 'react';
import {connect} from 'react-redux';

class header extends Component {
    render() {

        const append = "/Hour";

        return (
            <div>
                {this.props.header.headers.map(data => 
                    <div className="d-inline-block m-5" key={data.type}>
                        <div style={{ fontSize: '24px' }}><strong>{data.type}</strong></div>
                        <div style={{ fontSize: '18px' }}><strong>${data.value.toLocaleString()}{data.type === "Rate" ? append : null}</strong></div>
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