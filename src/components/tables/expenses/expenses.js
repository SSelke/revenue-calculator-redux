import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { updateExpenses, updateHeader } from '../../../actions/index';
import { bindActionCreators } from 'redux';
import { LIST_EXPENSES } from '../../../resources/list_expenses';

class expenses extends Component {

    addRowHandler = () => {
        const newData = {
            expenses: [...this.props.data]
        }

        newData.expenses.push({ expense: 'New Expense', category: 'Chose a category', amount: 0, id: Math.floor(Math.random() * (10000 - 1) + 1)});
        this.getTotalExpenses(newData);
        this.props.updateExpenses(newData);
    }

    deleteRowHandler = (id) => {
        const newData = {
            expenses: [...this.props.data]
        }
        const index = newData.expenses.findIndex(obj => obj.id === id);
        newData.expenses.splice(index, 1);
        this.getTotalExpenses(newData);
        this.props.updateExpenses(newData);
    }

    updateExpensesHandler = (event, type, id) => {
        const newData = {
            expenses: [...this.props.data]
        }
        const index = newData.expenses.findIndex(obj => obj.id === id);
        newData.expenses[index][type] = event.target.value;
        this.getTotalExpenses(newData);
        this.props.updateExpenses(newData);
    }

    getTotalExpenses = (data) => {
        const newData = {
            ...this.props.header
        };
        let totalExpenses = 0;
        data.expenses.map(data => {
            totalExpenses += Number(data.amount);
            return (null);
        });

        newData.headers[2].value = totalExpenses * 12;
        newData.headers[0].value = newData.headers[1].value - totalExpenses * 12;

        this.props.updateHeader(newData);
    }

    

    render() {

        let totalExpenses = 0;

        const rows = this.props.data.map(data => {
            totalExpenses += Number(data.amount);

            return (
                <tr key={data.id}>
                    <td><button className="btn btn-danger" onClick={() => this.deleteRowHandler(data.id)}>Delete</button></td>
                    <td><input 
                                type="text" 
                                value={data.expense} 
                                onChange={(event) => this.updateExpensesHandler(event, 'expense', data.id)}
                                className='form-control'/></td>
                    <td>
                        <select className="form-control" value={data.category} onChange={(event) => this.updateExpensesHandler(event, "category", data.id)}>
                            <option disabled>Chose a category</option>
                            {LIST_EXPENSES.map(category => <option key={category}>{category}</option>)}
                        </select>
                    </td>
                    <td>
                        <div className="input-group mr-auto ml-auto">
                            <div className="input-group-prepend">
                                <span className="input-group-text">$</span>
                            </div>
                            <input className="form-control"
                                type="number"
                                value={data.amount}
                                onChange={(event) => { this.updateExpensesHandler(event, 'amount', data.id) }} />
                        </div>
                    </td>
                </tr>
            );
        });

        return (
            <Fragment>
                <div className="">
                    <div className="d-inline-block m-3">
                        <h3><strong>Total (Month): ${totalExpenses.toLocaleString()}</strong></h3>
                    </div>
                    <div className="d-inline-block m-3">
                        <h3><strong>Total (Year): ${(totalExpenses * 12).toLocaleString()}</strong></h3>
                    </div>
                </div>
                <div className="table-responsive bg-white rounded box-shadow">
                    <table className="table">
                        <thead className="table-danger">
                            <tr>
                                <th>Delete</th>
                                <th>Expense</th>
                                <th>Category</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                            <tr>
                                <td><button className="btn btn-success" onClick={this.addRowHandler}>Add</button></td>
                                <td colSpan="3"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Fragment>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateExpenses, updateHeader }, dispatch);
}

function mapStateToProps(state) {
    return { header: state.header }; 
}

export default connect(mapStateToProps, mapDispatchToProps)(expenses);