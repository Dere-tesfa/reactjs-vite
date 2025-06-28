import React from "react";

function Props(props) {
  return (
    <div>
      <h1>Name:{props.name}</h1>
      <h1>id:{props.id}</h1>
      <h1>Age:{props.age}</h1>
    </div>
  );
}
export default Props;
