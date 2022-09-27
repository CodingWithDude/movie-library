import React, { useEffect } from "react";

const SearchForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    document.searchForm.searchInput.blur();
    props.setSearchSubmitted(true);
  };

  return (
    <div className="search-bar">
      <form
        id="search-form"
        className="search-form"
        name="searchForm"
        onSubmit={handleSubmit}
      >
        <div onClick={handleSubmit}>
          <i className="fa-light fa-magnifying-glass"></i>
        </div>
        <input
          action="#"
          name="searchInput"
          type="text"
          autocomplete="off"
          spellcheck="false"
          value={props.searchValue}
          onChange={(e) => props.setSearchValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchForm;
