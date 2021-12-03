import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToStore } from "../redux/actions";

const AddToStore = () => {
  const [query, setQuery] = useState();
  const dispatch = useDispatch();

  //   console.log(data.data.reverse().slice(0, 4));
  //   console.log(data.data.reverse().slice(0, 1));

  return (
    <div>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>some text</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="secondary" onClick={() => dispatch(addToStore(query))}>
        Search
      </Button>{" "}
    </div>
  );
};
export default AddToStore;
