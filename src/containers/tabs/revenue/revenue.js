import React, { Component } from 'react';
import TableRevenue from '../../../components/tables/revenue/revenue';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePercentage, updateHeader } from '../../../actions/index';

class revenue extends Component {

    updatePercentageHandler = (event, type) => {
        let newPercentage = 0;
        let otherPercentage = 0;
        const newData = {
            ...this.props.revenueData
        }
        switch(type) {
            case 'products':
                newPercentage = this.props.revenueData.productsPercentage;
                newPercentage = Number(event.target.value);
                otherPercentage = 100 - newPercentage;
                newData.productsPercentage = newPercentage;
                newData.packagesPercentage = otherPercentage;
                this.props.updatePercentage(newData);
                this.getTotal(this.props.data, newData);
                return;
            case 'packages':
                newPercentage = this.props.revenueData.packagesPercentage;
                newPercentage = Number(event.target.value);
                otherPercentage = 100 - newPercentage;
                newData.packagesPercentage = newPercentage;
                newData.productsPercentage = otherPercentage; 
                this.props.updatePercentage(newData);
                this.getTotal(this.props.data, newData);
                return;
            default:
        }
    }

    updateProjection = (event) => {
        const newData = {
            ...this.props.revenueData
        }

        newData.projection = event.target.value;
        this.props.updatePercentage(newData);
        this.getTotal(this.props.data, newData);
    }

    getTotal = (data, revInfo) => {

        const newData = {
            ...this.props.header
        };
        let revenue = 0;
        data.products.map(data => {
            const months = data.price === 0 ? 0 : Math.ceil((((Number(data.percentage) / 100) * Number((revInfo.productsPercentage / 100) * revInfo.projection)) / 12) / Number(data.price));
            const revenueYear = Number(data.price) * (months * 12);
            revenue += revenueYear;
            return (null);
        });

        data.packages.map(data => {
            const months = data.price === 0 ? 0 : Math.ceil((((Number(data.percentage) / 100) * Number((revInfo.packagesPercentage / 100) * revInfo.projection)) / 12) / Number(data.price));
            const revenueYear = Number(data.price) * (months * 12);
            revenue += revenueYear;
            return (null);
        });
        newData.headers[1].value = revenue;
        newData.headers[0].value = revenue - this.props.header.headers[2].value;
        this.props.updateHeader(newData);
    }

    render() {

        const products = (this.props.revenueData.productsPercentage / 100) * this.props.revenueData.projection;
        const packages = (this.props.revenueData.packagesPercentage / 100) * this.props.revenueData.projection;

        const obj = {
            products: products,
            packages: packages
        };

        return (
            <div id="Profit" style={{ display: this.props.visible !== 'Revenue' ? 'none' : 'block' }}>
                <div className="container" >
                    <div className="row mb-5 mt-5">
                        <div className="col">
                            <div className="container mb-2">
                                <div className="row">
                                    <div className="col-sm mb-2">
                                        <h1 className="inline-block">Revenue Projection</h1>
                                    </div>
                                    <div className="col-sm">
                                        <div className="input-group w-50 ml-auto mr-auto">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">$</span>
                                            </div>
                                            <input type="number"
                                                className="form-control"
                                                value={this.props.revenueData.projection}
                                                onChange={this.updateProjection}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5 mt-5">
                        <div className="col">
                            <div className="container mb-5">
                                <div className="row">
                                    <div className="col-sm mb-2">
                                        <h3 className="inline-block">One-Time Products</h3>
                                    </div>
                                    <div className="col-sm ">
                                        <div className="input-group ml-auto mr-auto" style={{ width: '150px' }}>
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">%</span>
                                            </div>
                                            <input  type="number"
                                                    className="form-control" 
                                                    value={this.props.revenueData.productsPercentage} 
                                                    onChange={(event) => this.updatePercentageHandler(event, 'products')}
                                                    />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <TableRevenue data={this.props.data} type='products' percentage={obj} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="container mb-5">
                                <div className="row">
                                    <div className="col-sm mb-2">
                                        <h3 className="inline-block">Retainer Packages</h3>
                                    </div>
                                    <div className="col-sm">
                                        <div className="input-group ml-auto mr-auto" style={{ width: '150px' }}>
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">%</span>
                                            </div>
                                            <input 
                                                    type="number" 
                                                    className="form-control" 
                                                    value={this.props.revenueData.packagesPercentage} 
                                                    onChange={(event) => this.updatePercentageHandler(event, 'packages')}
                                                    />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <TableRevenue data={this.props.data} type='packages' percentage={obj} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updatePercentage, updateHeader }, dispatch);
}

function mapStateToProps(state) {
    return { visible: state.visible, data: state.data, revenueData: state.percentage, header: state.header };
}

export default connect(mapStateToProps, mapDispatchToProps)(revenue);