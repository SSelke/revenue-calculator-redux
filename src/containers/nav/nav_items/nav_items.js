import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { isVisible } from '../../../actions/index';
import './nav-items.css';

class navItems extends Component {

    handleClick = () => {
        this.props.isVisible(this.props.name);
    }

    render() {
        return (
            <div className={this.props.visible === this.props.name ? `bg-${this.props.color} rounded box-shadow text-white ml-auto mr-auto d-md-inline d-sm-block navs` : "navs ml-auto mr-auto d-md-inline d-sm-block"}>
                <h2 className="m-3" onClick={this.handleClick}><strong>{this.props.name}</strong></h2>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { visible: state.visible };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ isVisible }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(navItems);