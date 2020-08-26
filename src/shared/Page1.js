import React from "react";

const Page1 = (props) => {
  console.log(props.staticContext.data);
  return <div>Page1 component</div>;
};

export default Page1;
