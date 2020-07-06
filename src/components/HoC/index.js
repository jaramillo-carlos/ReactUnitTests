import React from 'react';

export const withValue = (value) => (OriginalComponent) => (props) => (
    <OriginalComponent {...props} value={value} />
  );

const HoC = (props) => {
  return (
    <div>
      <h1>Testing</h1>
      <h3>Value: <span>{props.value}</span></h3>
    </div>
  );

}

export default withValue()(HoC);
