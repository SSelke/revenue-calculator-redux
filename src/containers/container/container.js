import React, { Component } from 'react';
import {connect} from 'react-redux';
import Product from '../tabs/product/product';
import Revenue from '../tabs/revenue/revenue';
import Expenses from '../tabs/expenses/expenses';

class container extends Component {
    render() {

        return (
            <div>
                <Product />
                <Revenue />
                <Expenses />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {visible: state.visible};
}

export default connect(mapStateToProps)(container);