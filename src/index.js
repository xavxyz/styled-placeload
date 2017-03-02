import React from 'react';

const placeloadStyles = {
  background: 'linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%)',
  backgroundSize: '1000px 104px',
  width: '100%',
  height: '338px',
  position: 'relative',
  overflow: 'hidden',
};

const Placeload = ({ children, loading = false, loadingStyle = {} }) => {
  const style = loading ? { ...placeloadStyles, ...loadingStyle } : {};
  console.log(children);

  return (
    <div style={style}>
      {!loading && children}
    </div>
  );
};

Placeload.propTypes = {
  loading: React.PropTypes.bool,
  loadingStyle: React.PropTypes.object,
};

export default Placeload;
