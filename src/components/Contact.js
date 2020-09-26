import React from "react";
import { Row, Col, Form, Input, Button, Select } from "antd";
import { Link } from "react-router-dom";
import { PhoneOutlined } from "@ant-design/icons";

const Contact = () => {
  const { Option } = Select;

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not validate email!",
      number: "${label} is not a validate number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const onFinish = (values) => {
    console.log(values);
  };

  // ========================
  //       렌더링 영역
  // ========================
  return (
    <div>
      {/* 상단부 */}
      <div className="contact-main">
        <h1>Contact Tiny</h1>
      </div>
      {/* 상단 밑 */}
      <div className="contact-send">
        <div className="contact-send-form">
          <h2>It's a good time to talk to a Tiny expert</h2>
          <p>
            Whether you're spinning up something new or scaling up something
            important, we're ready to help. Fill in the form below or{" "}
            <Link href={""}>
              <a className="contact-callhover">give us a call.</a>
            </Link>
          </p>
          <div className="form-in">
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              validateMessages={validateMessages}
              size="large"
              labelAlign="left"
            >
              <Form.Item name={["user", "firstname"]} label="First Name">
                <Input />
              </Form.Item>
              <Form.Item name={["user", "lastname"]} label="Last Name">
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "email"]}
                label="Business Email Email"
                rules={[
                  {
                    type: "email",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item name={["user", "company"]} label="Company">
                <Input />
              </Form.Item>
              <Form.Item
                name="select"
                label="Country"
                hasFeedback
                rules={[{ message: "Please select your country!" }]}
              >
                <Select placeholder="Please select a country">
                  <Option value="china">China</Option>
                  <Option value="usa">U.S.A</Option>
                  <Option value="korea">Republic Of Korea</Option>
                </Select>
              </Form.Item>

              <Form.Item name={["user", "phone"]} label="phone">
                <Input />
              </Form.Item>
              <Form.Item name={["user", "words"]} label="Words to convey">
                <Input.TextArea />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit" className="form-btn">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      {/* 중반부 */}
      <div
        className="contact-phone"
        style={{ padding: "70px 0", textAlign: "center" }}
      >
        <div className="contact-phone-container">
          <PhoneOutlined className="contact-phone-icon" />
          <h3>Talk to a sales representative</h3>
          <p>
            If you want to speak with a sales representative, please call us.
          </p>
          <div style={{ marginTop: "14px" }}>
            <p
              style={{
                fontWeight: "900",
                fontSize: "18px",
                marginTop: "0",
                color: "black",
              }}
            >
              US Phone Number
            </p>
            <Link href={""}>
              <a className="contact-phone-number">+1 888 797 8896</a>
            </Link>
          </div>
        </div>
      </div>
      {/* 하단부 */}
      <div className="contact-map">
        <h2>A Global Company</h2>
        <p className="contact-map-sub">
          Working on a global scale, our team of 50+ are here to support you and
          your business, regardless of your time zone.
        </p>
        <Row className="contact-map-list" style={{ marginTop: "60px" }}>
          <Col lg={8} md={12} xs={24}>
            <img src={"/img/map1.jpg"} alt="" />
            <h3>Palo Alto, US</h3>
            <p>2100 Geng Road, Suite 220 Palo Alto, CA 94303</p>
            <p>United States</p>
          </Col>
          <Col lg={8} md={12} xs={24}>
            <img src={"/img/map2.jpg"} alt="" />
            <h3>Brisbane, Australia</h3>
            <p>225 Montague Road, Level 4 West End, QLD 4101</p>
            <p>Australia</p>
          </Col>
          <Col lg={8} md={12} xs={24}>
            <img src={"/img/map3.jpg"} alt="" />
            <h3>Umeå, Sweden</h3>
            <p>Renmarkstorget 6 2TR 903 26 Umea</p>
            <p>Sweden</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
