import React from "react";
import { Card } from "react-bootstrap";
import Loader from "react-loader-spinner";

const LoadingDiv = () => {
  return (
    <Card className="upload-div mx-auto text-center ">
      <Card.Body>
        <p className="upload-title mb-0 ">Uploading...</p>
        <Loader type="Bars" color="#3e8ed0" width={50}></Loader>
      </Card.Body>
    </Card>
  );
};

export default LoadingDiv;
