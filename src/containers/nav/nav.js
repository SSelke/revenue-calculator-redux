import React, { Component } from 'react';
import NavItem from './nav_items/nav_items';

class nav extends Component {
    render() {
        return (
            <ul className="nav justify-content-center mb-5" >
                <NavItem name='Products' />
                <NavItem name='Revenue' />
                <NavItem name='Expenses' />
                <NavItem name='Hours' />
            </ul>
        );
    }
}

export default nav;