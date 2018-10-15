import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProduct } from '../../../actions/index';

class products extends Component {

    handleUpdateProduct = (event, type, id) => {
        const param = type;
        const newData = {
            ...this.props.data
        }
        const index = newData[this.props.type].findIndex( obj => obj.id === id );
        newData[this.props.type][index][param] = event.target.value;
        this.props.updateProduct(newData);
    }

    addRowHandler = () => {
        const newData = {
            ...this.props.data
        }
        newData[this.props.type].push({ product: 'New Entry', price: 0, rate: 0, percentage: 0, id: Math.floor(Math.random() * (10000 - 1) + 1)});
        this.props.updateProduct(newData);
    }

    deleteRowHandler = (id) => {
        const newData = {
            ...this.props.data
        }
        const index = newData[this.props.type].findIndex(obj => obj.id === id);
        newData[this.props.type].splice(index, 1);
        this.props.updateProduct(newData);
    }

    render() {

        let totalPrice = 0;
        let totalRate = 0;

        return (
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Rate</th>
                            <th>Price/Hour</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data[this.props.type].map((data, index) => {
                            if (isFinite(data.price) && (isFinite(data.rate) && data.rate > 0)) {
                                totalPrice += Number(data.price);
                                totalRate += Number(data.rate);
                            }
                            return (
                                <tr key={index}>
                                    <td><button className="btn btn-danger btn-small" onClick={() => this.deleteRowHandler(data.id)}>Delete</button></td>
                                    <td><input type="text" className="form-control" value={data.product} onChange={(event) => { this.handleUpdateProduct(event, 'product', data.id) }} /></td>
                                    <td>
                                        <div className="input-group mr-auto ml-auto">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">$</span>
                                            </div>
                                            <input type="number" className="form-control" value={data.price} onChange={(event) => { this.handleUpdateProduct(event, 'price', data.id) }} />
                                        </div>
                                    </td>
                                    <td>
                                        <input type="number" className="form-control w-50 ml-auto mr-auto" value={data.rate} onChange={(event) => { this.handleUpdateProduct(event, 'rate', data.id) }} />
                                    </td>
                                    <td>${data.price === 0 || data.rate === 0 ? 0 : !data.price || !data.rate ? 0 : Math.ceil(data.price / data.rate).toLocaleString()}</td>
                                </tr>
                            );
                        })}
                        <tr>
                            <td><button className="btn btn-success btn-small" onClick={this.addRowHandler}>Add</button></td>
                            <td>Total:</td>
                            <td>${Math.ceil(totalPrice).toLocaleString()}</td>
                            <td>{totalRate} Hours</td>
                            <td>${Math.ceil(totalPrice / totalRate).toLocaleString()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateProduct }, dispatch);
}

export default connect(null, mapDispatchToProps)(products);