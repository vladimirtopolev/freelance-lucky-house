import React, { Component } from 'react';
import GoogleAnalytics from 'react-ga';

GoogleAnalytics.initialize('UA-137802511-1');
GoogleAnalytics.set({require: 'displayfeatures'});

const withTracker = (WrappedComponent, options = {}) => {
    const trackPage = page => {
        GoogleAnalytics.set({
            page,
            ...options,
        });
        GoogleAnalytics.pageview(page);
    };

    const notTrackingPages = ['/admin', '/sockjs-node'];
    const isTrackingPage = pagePath => notTrackingPages.every(excludedPage => !pagePath.includes(excludedPage));

    const HOC = class extends Component {
        componentDidMount() {
            const page = this.props.location.pathname;
            if (isTrackingPage(page)) {
                trackPage(page);
                console.log('LOC:', page, isTrackingPage(page))
            }
        }

        componentWillReceiveProps(nextProps) {
            const currentPage = this.props.location.pathname;
            const nextPage = nextProps.location.pathname;

            if (currentPage !== nextPage && isTrackingPage(nextPage)) {
                trackPage(nextPage);
            }
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };

    return HOC;
};

export default withTracker;