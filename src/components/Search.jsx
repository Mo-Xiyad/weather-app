import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getCurrentCompanyJobList, addToStore } from "../redux/actions";

const Search = () => {
  const [query, setQuery] = useState();
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-center position-relative">
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Location..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </div>
      <div className="btn-search">
        <Button
          variant="secondary"
          // onClick={() => dispatch(getCurrentCompanyJobList(query))}
          onClick={() => {
            dispatch(addToStore(query));
            dispatch(getCurrentCompanyJobList(query));
          }}
        >
          Search
        </Button>{" "}
      </div>
    </div>
  );
};
export default Search;
