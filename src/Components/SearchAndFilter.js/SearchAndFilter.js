import React from "react";
import MyInput from "../UI/myInput";
import MySelect from "../UI/mySelect";

const SearchAndFilter = ({ filter, setFilter }) => {
  return (
    <div className="d-flex justify-content-between align-items-center my-3">
      <MyInput
        placeholder="...search"
        className="form-control me-4"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={(selected) => setFilter({ ...filter, sort: selected })}
        defaultValue={"Sorted by"}
        options={[
          {
            value: "title",
            name: "Title",
          },
          {
            value: "body",
            name: "Body",
          },
        ]}
      />
    </div>
  );
};

export default SearchAndFilter;
