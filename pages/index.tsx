import { useState } from "react";
import Head from "next/head";
import { Row, Col, Button, Spin } from "antd";
import InputSearch from "../src/components/InputSearch";
import NoSearch from "../src/components/NoSearch";
import { searchDomain } from "../src/services/domainService";
import CardDomain from "../src/components/CardDomain";
import ErrorSearch from "../src/components/ErrorSearch";

export default function Home() {
  const [desiredName, setDesiredName] = useState<string>("");
  const [searchRes, setSearchRes] = useState<ApiResponse<Domain[]>>({});

  const handleSubmitSearch = async (value) => {
    setDesiredName(value);
    setSearchRes({ ...searchRes, loading: true });
    const [error, res] = await searchDomain({ domain: value });
    setSearchRes({ error, result: res?.data.domains, loading: false });
  };
  return (
    <div>
      <Row style={{ marginBottom: 20 }}>
        <Col style={{ textAlign: "center" }} span={24}>
          <h1 style={{ fontSize: "45px", lineHeight: "76px" }}>
            Find your domain
          </h1>
        </Col>
        <Col style={{ textAlign: "center" }} xs={{span: 24, offset: 0}} sm={{span: 16, offset: 4}} lg={{span: 10, offset: 7}} >
          <InputSearch onSearch={handleSubmitSearch} />
        </Col>
      </Row>
      <Spin spinning={!!searchRes.loading}>
        {desiredName === "" && !searchRes.result && <NoSearch />}
        {searchRes.error && <ErrorSearch error={searchRes.error} />}
        <Row gutter={[12, 12]}>
          {searchRes.result &&
            searchRes.result.map((domain) => {
              return (
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <CardDomain data={domain} />
                </Col>
              );
            })}
        </Row>
      </Spin>
    </div>
  );
}
