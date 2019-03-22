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
        if (props !== state.prevProps) {
            return { src: props.src || '', prevProps: props };
        }
    };

    onError = () => {
        console.log('ssss');
        this.setState((state, props) => ({ ...state, src: props.fallbackSrc }))
    };


    render() {
        const {alt, styles} = this.props;
        console.log(styles);
        return <img src={this.state.src} alt={alt} onError={this.onError} style={styles}/>;
    }
}
