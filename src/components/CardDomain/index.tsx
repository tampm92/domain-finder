import { Card, Col, Row, Statistic } from "antd";
import styles from "./CardDomain.module.scss";

type CardDomainProps = {
  data: Domain;
}

export default ({ data }: CardDomainProps) => {
  return (
    <Card className={styles.cardDomain} title={data.domain} bordered={false}>
      <Row gutter={[12,12]}>
        <Col span={12}>
          <Statistic title="Create Date" value={data.create_date} />
        </Col>
        <Col span={12}>
          <Statistic title="Update Date" value={data.update_date} />
        </Col>
        <Col span={12}>
          <Statistic title="Country" value={data.country || ""} />
        </Col>
        <Col span={12}>
          <Statistic title="isDead" value={data.isDead} />
        </Col>
        <Col span={12}>
          <Statistic title="A" value={JSON.stringify(data.A|| "")} />
        </Col>
        <Col span={12}>
          <Statistic title="NS" value={JSON.stringify(data.NS|| "")} />
        </Col>
        <Col span={12}>
          <Statistic title="CNAME" value={JSON.stringify(data.CNAME|| "")} />
        </Col>
        <Col span={12}>
          <Statistic title="MX" value={JSON.stringify(data.MX|| "")} />
        </Col>
        <Col span={12}>
          <Statistic title="TXT" value={JSON.stringify(data.TXT|| "")} />
        </Col>
      </Row>
    </Card>
  );
};
