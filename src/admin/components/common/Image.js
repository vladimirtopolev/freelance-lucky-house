import React, { Component } from 'react';

export default class Image extends Component {

    state = {
        src: ''
    };

    static defaultProps = {
        fallbackSrc: require('../../../img/noimagefound.jpg'),
    };

    static getDerivedStateFromProps(props, state) {
        if (props !== state.prevProps) {
            return { src: props.src || '', prevProps: props };
        }
    };

    onError = () => {
        console.log('ssss');
        this.setState((state, props) => ({ ...state, src: props.fallbackSrc }))
    };


    render() {
        return <img src={this.state.src} alt={this.props.alt} onError={this.onError}/>;
    }
}
