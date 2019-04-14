import React, {Children, cloneElement} from 'react';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;


export default ({ isLoading, children, ...rest }) => {
    return isLoading
        ? (
            <SpinnerContainer>
                <div className="spinner-border text-info" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </SpinnerContainer>
        )
        : cloneElement(Children.only(children), {...rest});
}
