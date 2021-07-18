import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import DropImage from './DropImage';
import axios from 'axios';
import Dropzone from 'react-dropzone';
// import uploadImage from "../hooks/uploadImage";

const DormantCard = (props) => {
  const uploadImage = async (file) => {
    let formData = new FormData();
    formData.append('image', file);

    formData.append('user_id', props.uID);

    props.setLoading('loading');
    let call = await axios({
      method: 'POST',
      url: '/api/upload',
      data: formData,
      headers: {
        'Content-Type': `multipart/form-data`,
      },
    });

    props.setData(call.data);
  };

  return (
    <Card className="upload-div mx-auto text-center">
      <Card.Body>
        <p className="upload-title">Upload your image</p>
        <p className="upload-subtitle">File should be Jepg, Png,...</p>
      </Card.Body>
      <Form>
        {/* <DropImage upload={uploadImage} /> */}
        <Dropzone onDrop={(acceptedFiles) => uploadImage(acceptedFiles[0])}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div
                className="design-border mx-auto pt-5 pb-4"
                {...getRootProps()}
              >
                <img src="https://res.cloudinary.com/erenaspire7/image/upload/v1625095754/image_buer4q.svg" />

                <p className="caption pt-4">Drag & Drop your Image here</p>
              </div>
            </section>
          )}
        </Dropzone>
        <Card.Body>
          <p className="upload-or mb-0">Or</p>
        </Card.Body>
        <Form.Control
          type="file"
          name="my-image"
          id="my-image"
          accept="image/*"
          onChange={(e) => {
            uploadImage(e.target.files[0]);
          }}
        />
        <Button
          variant="info"
          className="upload-btn mx-auto mb-4"
          type="button"
          onClick={() => {
            let img = document.getElementById('my-image');

            img.click();
          }}
        >
          Choose a file
        </Button>
      </Form>
    </Card>
  );
};

export default DormantCard;
