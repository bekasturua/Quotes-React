import { Fragment } from "react";
import { useParams } from "react-router-dom";

const QouteDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Qoute Detail Page</h1>
      <p>{params.qouteId}</p>
    </Fragment>
  );
};

export default QouteDetail;
