import React, { Component } from 'react';
import NavItem from './nav_items/nav_items';

class nav extends Component {
    render() {
        return (
            <div className="container mb-5" >
                <div className="row">
                    <NavItem name='Products' color="dark" />
                    <NavItem name='Revenue' color="success" />
                    <NavItem name='Expenses' color="danger" />
                    <NavItem name='Hours' color="info" />
                </div>
            </div>
        );
    }
}

export default nav;