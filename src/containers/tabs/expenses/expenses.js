import React, { Component } from 'react';
import TableExpenses from '../../../components/tables/expenses/expenses';
import {connect} from 'react-redux';

class expenses extends Component {
    render() {
        return (
            <div 
                id="Expenses" 
                style = {{ display: this.props.visible !== 'Expenses' ? 'none' : 'block' }} 
                className = "justify-content-center">
                <div className="container" >
                    <div className="row">
                        <div className="col">
                            <h2 className="align-left">Expenses</h2>
                            <p>The <em><strong>FASTEST</strong></em> way to profit is to reduce expenses!</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <TableExpenses data={this.props.data.expenses} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { visible: state.visible, data: state.expenses };
}

export default connect(mapStateToProps)(expenses);