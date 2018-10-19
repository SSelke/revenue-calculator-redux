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
            <div className={ this.props.visible === this.props.name ? `bg-${this.props.color} rounded box-shadow text-white col` : "col"}>
                <h2 className="m-3" onClick={this.handleClick} style={{ fontSize: '28px', cursor: 'pointer' }}><strong>{this.props.name}</strong></h2>
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