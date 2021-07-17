import React from "react";
import { Card, Image, Button } from "react-bootstrap";
import { IoCheckmarkCircle } from "react-icons/io5";

const SuccessDiv = (props) => {
  return (
    <Card className="upload-div mx-auto text-center">
      <Card.Body>
        <IoCheckmarkCircle className="icon"></IoCheckmarkCircle>
        <p className="upload-title">Uploaded Successfully!</p>

        <Image src={props.url} className="my-img mt-3" fluid></Image>

        <div className="my-box mt-4">
          <p className="text-truncate d-inline-block my-text mb-0 px-3">
            {props.url}
          </p>
          <Button
            className=" d-inline-block my-btn-2"
            variant="primary"
            onClick={() => {
              let text = document.querySelector(".my-text").innerHTML;
              let elem = document.createElement("textarea");

              document.body.appendChild(elem);
              elem.value = text;
              elem.select();
              document.execCommand("copy");
              document.body.removeChild(elem);
            }}
          >
            Copy Link
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SuccessDiv;
