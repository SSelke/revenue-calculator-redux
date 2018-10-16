import React, { Component } from 'react';
import HoursInput from '../../../components/tables/hours/hours';
import { connect } from 'react-redux';


class product extends Component {

    getTotalHours = () => {
        const hours = (Number(this.props.data[0].data) * (
            52 * 
            Number(this.props.data[1].data) - 
            Number(this.props.data[2].data) - 
            Number(this.props.data[3].data) - 
            Number(this.props.data[4].data))
            * (Number(this.props.data[5].data) / 100)
            );

        return hours < 0 ? 0 : Math.ceil(hours);
    }
    render() {

        return (
            <div id="Hours" style={{ display: this.props.visible !== 'Hours' ? 'none' : 'block' }} className="justify-content-center">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-6 mb-3">
                            <div className="card text-white bg-secondary mb-3 ml-auto mr-auto h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Yearly Available Hours</h5>
                                    <h4>{this.getTotalHours()}</h4>
                                    <div id="container"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            {this.props.data.map(data => <HoursInput key={data.type} text={data.type} amount={data.data} />)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { visible: state.visible, data: state.hours };
}

export default connect(mapStateToProps)(product);