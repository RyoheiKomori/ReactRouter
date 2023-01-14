import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  const history = useHistory();

  const onClickDeailA = () => history.push("/page1/detailA");
  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: "/page1/detailA", state: Array }}>DeteilA</Link>
      <br />
      <Link to="/page1/detailB">DeteilB</Link>
      <br />
      <button onClick={onClickDeailA}>DeteilA</button>
    </div>
  );
};
