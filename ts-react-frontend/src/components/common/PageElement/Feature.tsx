import React, { Component } from 'react';
import FeatureElement, { IFeatureElementProps } from './FeatureElement';

interface IFeatureProps {
    elements: IFeatureElementProps[]
}

class Feature extends Component<IFeatureProps> {
    render() {
        return (
            <section>
                {this.props.elements.map(e => (
                    <FeatureElement {...e} />
                ))}
            </section>
        );
    }
}

export default Feature;