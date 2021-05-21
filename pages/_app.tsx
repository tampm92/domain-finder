/* eslint-disable react/no-danger */
/* eslint-disable func-names */
/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Drawer, Layout, Menu, Row } from "antd";
import Head from "next/head";
import "../src/styles/styles.scss";

const { Header, Content, Footer } = Layout;

const HTML = (props) => {
  const { Component } = props;
  return (
    <Layout style={{ minHeight: "100vh", padding: 20 }}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Component />
    </Layout>
  );
};

export default HTML;
