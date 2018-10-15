import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProduct } from '../../../actions/index';
import { updateTotals } from '../../../actions/index';

class products extends Component {

    state = {
        
    }

    handleUpdateProduct = (event, type, id) => {
        const param = type;
        const newData = {
            ...this.props.data
        }
        const index = newData[this.props.type].findIndex(obj => obj.id === id);
        newData[this.props.type][index][param] = event.target.value;
        this.props.updateProduct(newData);
    }


    render() {
        
        let totalPerYear = 0;
        let totalPerMonth = 0;
        let amountSoldPerMonth = 0;
        let amountSoldPerYear = 0;
        let totalPercentage = 0;


        return (
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>%</th>
                            <th>#/Mo</th>
                            <th>$/Mo</th>
                            <th>#/Year</th>
                            <th>$/Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data[this.props.type].map((data, index) => {
                            let months = 0;
                            let amountPerMonth = 0;
                            let amountPerYear = 0;
                            let revenuePerYear = 0;
                            months = Math.ceil((((Number(data.percentage) / 100) * Number(this.props.percentage)) / 12) / Number(data.price));
                            amountPerMonth = months * Number(data.price);
                            amountPerYear = months * 12;
                            revenuePerYear = Number(data.price) * (months * 12);
                            totalPerYear += revenuePerYear;
                            totalPerMonth += amountPerMonth;
                            amountSoldPerMonth += months;
                            amountSoldPerYear += amountPerYear;
                            totalPercentage += Number(data.percentage);
                            return (
                                <tr key={index}>
                                    <td>
                                        {data.product}
                                    </td>
                                    <td>
                                        <div className="input-group mr-auto ml-auto" style={{ width: '150px' }}>
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">%</span>
                                            </div>
                                            <input className="form-control"
                                                type="number"
                                                value={data.percentage}
                                                onChange={(event) => { this.handleUpdateProduct(event, 'percentage', data.id) }} />
                                        </div>
                                    </td>
                                    <td id={`month_${index}`}>{months}</td>
                                    <td id={`amountPerMonth_${index}`}>${amountPerMonth.toLocaleString()}</td>
                                    <td id={`amountPerYear_${index}`}>{amountPerYear}</td>
                                    <td id={`year_${index}`}>${revenuePerYear.toLocaleString()}</td>
                                </tr>
                            );
                        })}
                        <tr>
                            <td>Total: {this.state.totalPerYear}</td>
                            <td>{totalPercentage}</td>
                            <td>{amountSoldPerMonth}</td>
                            <td>${totalPerMonth.toLocaleString()}</td>
                            <td>{amountSoldPerYear}</td>
                            <td>${totalPerYear.toLocaleString()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateProduct, updateTotals }, dispatch);
}

function mapStateToProps(state) {
    return { totals: state.tableTotals};
}

export default connect(mapStateToProps, mapDispatchToProps)(products);