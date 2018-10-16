import React, { Component } from 'react';
import {connect} from "react-redux";
import { updateHours } from '../../../actions/index';
import { bindActionCreators } from 'redux';

class hours extends Component {

    updateHoursHandler = (event, type) => {
        const newData = [...this.props.hours];
        const index = newData.findIndex(obj => obj.type === type);
        newData[index].data = event.target.value;
        this.props.updateHours(newData);
    }

    render() {
        return (
            <div className="input-group mb-3 ml-auto mr-auto" style={{ minWidth: '190px' }}>
                <div className="input-group-prepend">
                    <span className="input-group-text" style={{minWidth: '110px'}}>{this.props.text}</span>
                </div>
                <input
                    style={{ minWidth: '80px' }}
                    className="form-control"
                    type="number"
                    value={this.props.amount}
                    onChange={(event) => this.updateHoursHandler(event, this.props.text)} />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateHours }, dispatch);
}

function mapStateToProps(state) {
    return { hours: state.hours };
}

export default connect(mapStateToProps, mapDispatchToProps)(hours);