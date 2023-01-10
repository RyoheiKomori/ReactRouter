import { useParams } from "react-router-dom";

export const QueryParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>QueryParameterページです。</h1>
      <p>パラメーターは {id} です</p>
    </div>
  );
};
