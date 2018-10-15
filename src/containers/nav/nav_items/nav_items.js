import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { isVisible } from '../../../actions/index';

class navItems extends Component {

    handleClick = () => {
        this.props.isVisible(this.props.name);
    }

    render() {
        return (
            <li className="nav-item">
                <div className="nav-link" onClick={this.handleClick}>{this.props.name}</div>
            </li>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ isVisible }, dispatch);
}

export default connect(null, mapDispatchToProps)(navItems);