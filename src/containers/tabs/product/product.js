import React, { Component } from 'react';
import TableProducts from '../../../components/tables/products/products';
import { connect } from 'react-redux';

class product extends Component {
    render() {
        return (
            <div id="Products" style={{ display: this.props.visible !== 'Products' ? 'none' : 'block' }} className="justify-content-center">
                <div className="container" >
                    <div className="row">
                        <div className="col bg-dark text-white rounded box-shadow p-3">
                            <h2 className="align-left mb-2">Products</h2>
                            <p style={{fontSize: '18px'}}>Know which products your customers like most.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3 className="m-5"><strong>One-Time Products</strong></h3>
                            <TableProducts data={this.props.data} type='products'/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3 className="m-5"><strong>Retainer Packages</strong></h3>
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