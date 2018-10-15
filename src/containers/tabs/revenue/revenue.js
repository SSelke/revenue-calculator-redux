import React, { Component } from 'react';
import TableRevenue from '../../../components/tables/revenue/revenue';
import { connect } from 'react-redux';

class revenue extends Component {

    state = {
        productsPercentage: 75,
        packagesPercentage: 25,
        projection: 250000
    }

    updatePercentage = (event, type) => {
        let newPercentage = 0;
        let otherPercentage = 0;
        switch(type) {
            case 'products':
                newPercentage = this.state.productsPercentage;
                newPercentage = event.target.value;
                otherPercentage = 100 - newPercentage;
                this.setState({productsPercentage: newPercentage, packagesPercentage: otherPercentage});
                return;
            case 'packages':
                newPercentage = this.state.packagesPercentage;
                newPercentage = event.target.value;
                otherPercentage = 100 - newPercentage;
                this.setState({packagesPercentage: newPercentage, productsPercentage: otherPercentage});
                return;
            default:
        }
    }

    updateProjection = (event) => {
        this.setState({projection: event.target.value});
    }

    render() {
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
                                                value={this.state.projection}
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
                                                    value={this.state.productsPercentage} 
                                                    onChange={(event) => this.updatePercentage(event, 'products')}
                                                    />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <TableRevenue data={this.props.data} type='products' percentage={(this.state.productsPercentage / 100) * this.state.projection} />
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
                                                    value={this.state.packagesPercentage} 
                                                    onChange={(event) => this.updatePercentage(event, 'packages')}
                                                    />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <TableRevenue data={this.props.data} type='packages' percentage={(this.state.packagesPercentage / 100) * this.state.projection}/>
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

export default connect(mapStateToProps)(revenue);