import React, { Component } from 'react';
import TableProducts from '../../../components/tables/products/products';
import { connect } from 'react-redux';

class product extends Component {
    render() {
        return (
            <div id="Products" style={{ display: this.props.visible !== 'Products' ? 'none' : 'block' }} className="justify-content-center">
                <div className="container" >
                    <div className="row">
                        <div className="col">
                            <h2 className="align-left">Products</h2>
                            <p>Know which products your customers like most.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3>One-Time Products</h3>
                            <TableProducts data={this.props.data} type='products'/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3>Retainer Packages</h3>
                            <TableProducts data={this.props.data} type='packages'/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { visible: state.visible, data: state.data };
}

export default connect(mapStateToProps)(product);