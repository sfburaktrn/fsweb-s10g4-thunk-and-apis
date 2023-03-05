import React from "react";

function Item({ data }) {
  return (
    <div className="shadow-md bg-blue-300 text-center">
      <p className="text-2xl p-10">{data.setup}</p>
    </div>
  );
}

export default Item;
