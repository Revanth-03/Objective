import React from "react";

function DataObject({ data }) {
  return (
    <div className="data_object">
      <div class="listitem" style={{ backgroundColor: data.backgroundColor }}>
        <img src={data.icon} alt={data.name} />
        <a href={data.link}>{data.name}</a>
      </div>
    </div>
  );
}

export default DataObject;
