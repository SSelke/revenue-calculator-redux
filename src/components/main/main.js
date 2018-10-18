import React, { Component } from 'react';
import NumberHeader from '../../containers/header/number_header';
import ContainerHeader from '../../containers/nav/nav';
import Container from '../../containers/container/container';

class main extends Component {
    render() {
        return (
            <div className="mb-5 container">
                <h1 className="pt-5">Revenue Projection Calculator</h1>
                <NumberHeader />
                <ContainerHeader />
                <Container />
            </div>
        );
    }
}

export default main;