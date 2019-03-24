import React, { Component } from 'react';

export default class Image extends Component {

    state = {
        src: ''
    };

    static defaultProps = {
        fallbackSrc: require('../../../img/noimagefound.jpg'),
        styles: {},
        alt: 'Image'
    };

    static getDerivedStateFromProps(props, state) {
        return props !== state.prevProps
            ? { src: props.src || '', prevProps: props }
            : state;
    };

    onError = () => {
        this.setState((state, props) => ({ ...state, src: props.fallbackSrc }))
    };


    render() {
        const {alt, styles, className} = this.props;
        return <img src={this.state.src} alt={alt} onError={this.onError} style={styles} className={className}/>;
    }
}
