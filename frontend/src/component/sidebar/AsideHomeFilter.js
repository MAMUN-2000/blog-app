import { useState } from "react";

function AsideHomeFilter() {
  const [check, setCheck] = useState("all");

  return (
    <div className="sidebar-content">
      <h4>Filter</h4>
      <div className="radio-group">
        <div>
          <input
            type="radio"
            name="filter"
            id="lws-all"
            value="all"
            checked={check === "all"}
            onChange={(e) => setCheck(e.target.value)}
            className="radio"
          />
          <label htmlFor="lws-all">All</label>
        </div>
        <div>
          <input
            value="saved"
            checked={check === "saved"}
            onChange={(e) => setCheck(e.target.value)}
            type="radio"
            name="filter"
            id="lws-saved"
            className="radio"
          />
          <label htmlFor="lws-saved">Saved</label>
        </div>
      </div>
    </div>
  );
}

export default AsideHomeFilter;
