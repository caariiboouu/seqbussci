import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import logo from "./assets/logo.png";
import headbackground from "./assets/headbackground.png";
import { Layout, Menu, Typography, Button, Row, Col } from "antd";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

ReactDOM.render(
  <Layout className="layout">
    <section
      className="head"
      style={{ backgroundImage: `url(${headbackground})` }}
    >
      <div className="logowrap">
        <img src={logo} alt="seqtek business science" />
      </div>
      <div className="logobracket"></div>
      <Header className="clearboth">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">Assessment</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
      </Header>
      <Title className="clearboth showcasetitle">
        YOUR <span className="seqgreen">DATA</span>
        <br />
        MADE MORE <span className="seqgreen">USEFUL</span>
      </Title>
      <Title level={2}>
        <span className="seqgreen">
          PROVEN ONBOARDING, EXECUTION, AND SUPPORT
        </span>
      </Title>
      <Title level={5}>
        Today, every business is a data business. If you are not actively
        <br />
        managing your data as a strategic asset it will become a liability.
      </Title>
      <Title level={5}>
        SeqTek Business Science's approach is simple, procedural and effective.
        <br />
        How interpreting data should be.
      </Title>
      <Title level={5}>
        We assess organizational business intelligence and analytics readiness,
        <br />
        enable our client-partners to manage analytics projects as a portfolio
        <br />
        and, most importantly, offer ongoing solution support to help hone and
        build value.
      </Title>
    </section>

    <section className="light">
      <Row>
        <Col span={24}>
          <Title level={3}>Service Offerings</Title>
        </Col>
        <Col span={12}>
          <Title level={4}>Projects</Title>
        </Col>
        <Col span={12}>
          <Title level={4}>Service Plans</Title>
        </Col>
      </Row>
    </section>

    <section className="dark">
      <Row>
        <Col span={24}>
          <Title level={3}>Assessment</Title>
        </Col>
        <Col span={4}>
          <Title level={4}>Readiness Assessment</Title>
        </Col>
        <Col span={4}>
          <Title level={4}>Organization Analysis</Title>
        </Col>
        <Col span={4}>
          <Title level={4}>Assessment/Analysis Output and Review</Title>
        </Col>
        <Col span={4}>
          <Title level={4}>Priority Determination</Title>
        </Col>
        <Col span={4}>
          <Title level={4}>Estimation</Title>
        </Col>
        <Col span={4}>
          <Title level={4}>Expectation Management</Title>
        </Col>
      </Row>
    </section>

    <section className="dark">
      <Row>
        <Col span={24}>
          <Title level={3}>Engagement</Title>
        </Col>
        <Col span={4}>
          <Title level={4}>Onboarding Assessment</Title>
        </Col>
        <Col span={4}>
          <Title level={4}>Project Execution</Title>
        </Col>
        <Col span={4}>
          <Title level={4}>Support</Title>
        </Col>
      </Row>
    </section>

    <Content style={{ padding: "0 50px" }}>
      <div className="site-layout-content">
        {/* <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button> */}
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}></Footer>
  </Layout>,
  document.getElementById("container")
);
