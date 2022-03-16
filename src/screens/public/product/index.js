import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  let params = useParams();

  useEffect(() => {
    alert(params.id);
  }, []);

  return (
    <div>
      <h1>This is Product page</h1>
    </div>
  );
};

export { Product };
