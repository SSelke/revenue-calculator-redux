import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProduct, updateHeader } from '../../../actions/index';


class products extends Component {

    handleUpdateProduct = (value, type, id) => {
        const param = type;
        const newData = {
            ...this.props.data
        }
        const index = newData[this.props.type].findIndex( obj => obj.id === id );
        newData[this.props.type][index][param] = value;
        this.getTotalRate(newData);
        this.props.updateProduct(newData);
    }

    addRowHandler = () => {
        const newData = {
            ...this.props.data
        }
        newData[this.props.type].push({ product: 'New Entry', price: 0, rate: 0, percentage: 0, id: Math.floor(Math.random() * (10000 - 1) + 1)});
        this.getTotalRate(newData);
        this.props.updateProduct(newData);
    }

    deleteRowHandler = (id) => {
        const newData = {
            ...this.props.data
        }
        const index = newData[this.props.type].findIndex(obj => obj.id === id);
        newData[this.props.type].splice(index, 1);
        this.getTotalRate(newData);
        this.props.updateProduct(newData);
    }

    getTotalRate = (data) => {
        this.getTotal(data)
        const newData = {
            ...this.props.header
        };
        let rate = 0;
        let count = 0;
        data.products.map(data => {
            if(data.rate > 0 && data.price > 0 ) {
                count++;
            }
            rate += data.rate === 0 ? 0 : Number(data.price) / Number(data.rate);
            return(null);
        });
        data.packages.map(data => {
            count++;
            rate += data.rate === 0 ? 0 : Number(data.price) / Number(data.rate);
            return (null);
        });
        const index = newData.headers.findIndex(obj => obj.type === 'Rate');
        newData.headers[index].value = count === 0 ? 0 : Math.ceil(rate / count);

        this.props.updateHeader(newData);
    }

    getTotal = (data) => {

        const newData = {
            ...this.props.header
        };
        let revenue = 0;
        data.products.map(data => {
            const months = data.price === 0 ? 0 : Math.ceil((((Number(data.percentage) / 100) * Number((this.props.revenueData.productsPercentage / 100) * this.props.revenueData.projection)) / 12) / Number(data.price));
            const revenueYear = Number(data.price) * (months * 12);
            revenue += revenueYear;
            return (null);
        });

        data.packages.map(data => {
            const months = data.price === 0 ? 0 : Math.ceil((((Number(data.percentage) / 100) * Number((this.props.revenueData.packagesPercentage / 100) * this.props.revenueData.projection)) / 12) / Number(data.price));
            const revenueYear = Number(data.price) * (months * 12);
            revenue += revenueYear;
            return (null);
        });
        newData.headers[1].value = revenue;
        newData.headers[0].value = revenue - this.props.header.headers[2].value;
        this.props.updateHeader(newData);
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
                                    <td><input type="text" className="form-control" value={data.product} onChange={(event) => { this.handleUpdateProduct(event.target.value, 'product', data.id) }} /></td>
                                    <td>
                                        <div className="input-group mr-auto ml-auto">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">$</span>
                                            </div>
                                            <input type="number" className="form-control" value={data.price} onChange={(event) => { this.handleUpdateProduct(Number(event.target.value), 'price', data.id) }} />
                                        </div>
                                    </td>
                                    <td>
                                        <input type="number" className="form-control w-50 ml-auto mr-auto" value={data.rate} onChange={(event) => { this.handleUpdateProduct(Number(event.target.value), 'rate', data.id) }} />
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
    return bindActionCreators({ updateProduct, updateHeader }, dispatch);
}

function mapStateToProps(state) {
    return { revenueData: state.percentage, header: state.header };
}

export default connect(mapStateToProps, mapDispatchToProps)(products);