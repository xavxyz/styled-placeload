import React, { PropTypes } from 'react';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  from {
      background-position: -468px 0
  }
  to {
      background-position: 468px 0
  }
`;

const Loader = styled.div`
  animation: 1s linear infinite forwards ${shimmer};
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 1000px 104px;
  width: ${props => !!props.square ? `${props.square}px` : '100%'};
  height: ${props => !!props.square ? `${props.square}px` : '300px'};
  position: relative;
  overflow: hidden;
`;

const Placeload = ({ children, loading = false, square = 0 }) =>
  loading ? <Loader square={square} /> : children;

Placeload.propTypes = {
  square: PropTypes.number,
  loading: PropTypes.bool,
};

export default Placeload;
