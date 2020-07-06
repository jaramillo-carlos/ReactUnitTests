import React from 'react';

export const Content = (props) => {
  return (
    <div>
      <h2>Content</h2>
      {/* { props.render(props) } */}
      {props.render({ value: 1 })}
    </div>
  );
}

const RenderProp = () => {
  return (
    <div>
      <h1>Testing</h1>
      <Content
        render={(props) => (<h3>Value: <span>{props.value}</span></h3>)}
      />
    </div>
  );

}

export default RenderProp;


// export const withValue = (value) => (OriginalComponent) => (props) => (
//   <OriginalComponent {...props} value={value} />
// );