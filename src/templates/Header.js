import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import { Row, Col } from "antd";
import { DownOutlined, CommentOutlined } from "@ant-design/icons";

const initialMenuState = {
  product: false,
  developer: false,
  company: false,
};

const Header = () => {
  const [menu, setMenu] = useState(initialMenuState);

  /**
   * 메뉴 열고 닫기
   * @param {*} menuId 메뉴 아이디 (product / developer / company)
   */
  const handleToggleMenu = (menuId) => {
    const isOpened = menu[menuId]; // 메뉴가 열려있는지

    if (!isOpened) {
      // 메뉴가 닫혀있는경우, 메뉴를 열어줌
      setMenu({
        ...initialMenuState,
        [menuId]: true,
      });
    } else {
      // 메뉴가 열려있는경우, 다 닫아줌
      setMenu({
        ...initialMenuState,
      });
    }
  };
  //   navbar 개발자 탭
  const DeveloperTab = () => (
    <div className="feature-navigation">
      <p>
        <Link
          to="/team"
          onClick={closeToggle}
          style={{ color: "rgb(74 73 73)" }}
        >
          <a>개발자 보러가기</a>
        </Link>
        <span style={{ fontSize: "12px", marginLeft: "5px" }}>&lt;click!</span>
      </p>
    </div>
  );
  //   navbar 제품탭
  const ProductTab = () => (
    <div className="feature-navigation">
      <p>
        <Link
          to="/support"
          onClick={closeToggle}
          style={{ color: "rgb(74 73 73)" }}
        >
          <a>제품 보러가기</a>
        </Link>
        <span style={{ fontSize: "12px", marginLeft: "5px" }}>&lt;click!</span>
      </p>
    </div>
  );

  //   navbar 회사탭
  const CompanyTab = () => (
    <div className="feature-navigation">
      <p>회사 탭입니다</p>
    </div>
  );

  const closeToggle = () => {
    setMenu({
      ...initialMenuState,
    });
  };

  return (
    <div className="feature-header">
      <Row
        justify="space-between"
        className="feature-header-container"
        style={{ fontSize: "12px" }}
      >
        <Col span={12} className="feature-header-underline-left">
          <Link href={""}>바능</Link>
          &gt;제품
        </Col>
        <Col
          span={12}
          className="feature-header-underline-right"
          style={{ textAlign: "right" }}
        >
          <Link
            href={""}
            style={{ marginRight: "14px" }}
            className="feature-header-top-right"
          >
            Support
          </Link>
          <Link href={""} className="feature-header-top-right">
            Community
          </Link>
        </Col>
      </Row>

      <Row align="middle" className="feature-header-nav-container">
        <Col span={3}>
          <Link to="/">
            <img
              src="/img/tiny-logo.svg"
              alt=""
              style={{ width: "100px", height: "auto" }}
              onClick={closeToggle}
            />
          </Link>
        </Col>
        <Col span={9} className="font-blue nav-list">
          <Link
            href={""}
            onClick={() => {
              handleToggleMenu("product");
            }}
          >
            제품
            <DownOutlined style={{ fontSize: "12px", marginLeft: "5px" }} />
          </Link>
          <Link
            href={""}
            onClick={() => {
              handleToggleMenu("developer");
            }}
          >
            개발자
            <DownOutlined style={{ fontSize: "12px", marginLeft: "5px" }} />
          </Link>
          <Link
            href={""}
            onClick={() => {
              handleToggleMenu("company");
            }}
          >
            회사
            <DownOutlined style={{ fontSize: "12px", marginLeft: "5px" }} />
          </Link>
          <Link
            to="/contact"
            style={{ fontWeight: "700" }}
            onClick={closeToggle}
          >
            Contact
          </Link>
        </Col>
        <Col span={12} className="font-blue" style={{ textAlign: "right" }}>
          <Link href={""}>
            <a>
              <CommentOutlined
                style={{
                  transform: "scale(1.6)",
                  marginRight: "16px",
                }}
              />
              문의하기
            </a>
          </Link>
          <button className="btn-navy">Get TinyMCE For Free</button>
        </Col>
      </Row>
      {menu.product && <ProductTab />}
      {menu.developer && <DeveloperTab />}
      {menu.company && <CompanyTab />}
    </div>
  );
};

export default Header;
