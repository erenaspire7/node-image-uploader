import React, { useState, useEffect } from "react";
import DormantCard from "./DormantCard";
import LoadingDiv from "./LoadingDiv";
import SuccessDiv from "./SuccessDiv";

const ImageDiv = (props) => {
  const [loading, setLoading] = useState("dormant");
  const [data, setData] = useState({});

  useEffect(() => {
    if (data.status == "success") setLoading("finished");
    else if (data.status == "fail") setLoading("error");
  }, [data]);
  return (
    <div>
      {loading == "dormant" ? (
        <DormantCard
          setLoading={setLoading}
          setData={setData}
          uID={props.uID}
        />
      ) : loading == "loading" ? (
        <LoadingDiv />
      ) : loading == "finished" ? (
        <SuccessDiv url={data.url} />
      ) : (
        "Error"
      )}
    </div>
  );
};

export default ImageDiv;
