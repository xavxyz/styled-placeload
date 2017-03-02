import React, { Component, PropTypes, Children, cloneElement } from 'react';
import styled, { keyframes } from 'styled-components';

export const shimmer = keyframes`
  from {
      background-position: -468px 0
  }
  to {
      background-position: 468px 0
  }
`;

export const withLoader = Component => {
  const LoadingContainer = styled.div`
    position: relative;
  `;

  const LoadingComponent = styled(Component)`
    &:before {
      animation: 1s linear infinite forwards ${shimmer};
      background: #f6f7f8;
      background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
      background-size: 1000px 104px;
      position: relative;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      content: '';
    }
  `;

  LoadingComponent.displayName = `withLoader(${Component.displayName || 'Component'})`;

  return props =>
    props.loading
      ? <LoadingContainer><LoadingComponent {...props} /></LoadingContainer>
      : <Component {...props} />;
};
