import React from "react";
import { Row, Col } from "antd";
import { QuestionCircleFilled } from "@ant-design/icons";

const coreData = [
  {
    name: "TinyMCE",
    version: "5.4.2-90",
  },
  {
    name: "tinymce-4",
    version: "4.9.11-90",
  },
  {
    name: "tinymce-lts",
    version: "4.5.11-90",
  },
];
const clientData = [
  {
    name: "Accessibility Checker",
    version: "2.2.1-114",
  },
  {
    name: "Advanced Code Editor",
    version: "2.1.0-135",
  },
  {
    name: "advtable",
    version: "1.0.0-8",
  },
  {
    name: "casechange",
    version: "1.0.1-21",
  },
  {
    name: "checklist",
    version: "1.1.0-23",
  },
  {
    name: "formatpainter",
    version: "1.2.0-29",
  },
  {
    name: "Link Checker - Client",
    version: "2.1.0-97",
  },
  {
    name: "Enhanced Media Embed - Client",
    version: "2.2.5-101",
  },
  {
    name: "@Mentions",
    version: "2.1.0-88",
  },
  {
    name: "moxiemanager-net-ent",
    version: "2.1.13-43",
  },
  {
    name: "moxiemanager-net-pro",
    version: "2.1.13-43",
  },
  {
    name: "moxiemanager-php-ent",
    version: "2.1.14-74",
  },
  {
    name: "moxiemanager-php-pro",
    version: "2.1.14-74",
  },
  {
    name: "pageembed",
    version: "1.1.0-34",
  },
  {
    name: "permanentpen",
    version: "1.1.0-22",
  },
  {
    name: "PowerPaste",
    version: "5.3.2-453",
  },
  {
    name: "tinycomments",
    version: "2.1.4-104",
  },
  {
    name: "tinydrive",
    version: "1.3.0-76",
  },
  {
    name: "Spell Checker Pro - Client",
    version: "2.0.2-166",
  },
];
const serverData = [
  {
    name: "Image Proxy - Server",
    version: "2.5.0",
  },
  {
    name: "Spell Checker Pro - Server",
    version: "2.5.0",
  },
  {
    name: "Link Checker / Media Embed - Server",
    version: "2.5.0",
  },
];

const ProductTable = ({ title, data }) => {
  return (
    <>
      <h3>{title}</h3>
      {data.map((item, i) => {
        return (
          <Row className="support-tableCell" key={i}>
            <Col lg={16} offset={3}>
              {item.name}
            </Col>
            <Col lg={5}>{item.version}</Col>
          </Row>
        );
      })}
    </>
  );
};

const Support = () => {
  return (
    <div>
      {/* 상단 */}
      <div className="support-looking">
        <div className="support-looking-top">
          <div>
            <QuestionCircleFilled
              style={{ fontSize: "100px", color: "#828282" }}
            />
            <h2 style={{ fontSize: "38px" }}>Looking for Technical Support?</h2>
          </div>
          <Row justify="space-between support-looking-btm">
            <Col lg={11}>
              <p>
                Have you purchased a product from Ephox? Our support team is
                here to help our commercial customers. You can open a support
                ticket by clicking the Submit a Technical Support Request button
                below:
              </p>
              <button
                className="btn-navy"
                style={{ fontSize: "14px", fontWeight: "400" }}
              >
                Submit a Technical Support Request
              </button>
            </Col>
            <Col lg={11}>
              <p>
                Are you using the TinyMCE Community (open source) software? If
                yes, you can get help from other users of this software via our
                online forum. To access the TinyMCE Community forum please click
                the button below:
              </p>
              <button
                className="btn-navy"
                style={{ fontSize: "14px", fontWeight: "400" }}
              >
                Go to the TinyMCE Community Forum
              </button>
            </Col>
          </Row>
        </div>
      </div>

      {/* 하단 테이블 */}
      <div className="support-version">
        <h2
          className="fs-38 text-center"
          style={{ fontSize: "38px", textAlign: "center" }}
        >
          TinyMCE Enterprise - Current Product Versions
        </h2>
        <div className="support-productList">
          <ProductTable title="Core Editor" data={coreData} />
          <ProductTable title="Client Side Plugins" data={clientData} />
          <ProductTable title="Server Side Components" data={serverData} />
        </div>
      </div>
    </div>
  );
};

export default Support;
