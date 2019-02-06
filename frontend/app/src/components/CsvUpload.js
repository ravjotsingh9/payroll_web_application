import React, { Component } from "react";
import "filepond/dist/filepond.min.css";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
registerPlugin(FilePondPluginImagePreview);

class CsvUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.render = this.render.bind(this);
  }

  render() {
    let _this = this;
    _this.api_upload_address = "http://localhost:80/uploadReport";
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <FilePond server={_this.api_upload_address} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CsvUpload;