import React, { useState, useEffect } from "react";
import { message, List, Row, Col } from "antd";
import { getHostListApi } from "@/services/common";
import HeaderHost from "./header";

import styles from "./index.less";

const Home: React.FC<any> = () => {
  const [date, setDate] = useState(null);
  const handleChange = (value: any) => {
    message.info(
      `您选择的日期是: ${value ? value.format("YYYY年MM月DD日") : "未选择"}`
    );
    setDate(value);
  };
  useEffect(() => {
    console.log("useEffect");
    const getData = async () => {
      await getHostListApi({});
    };
    getData();
  }, []);
  const data = [
    {
      fruitName: "苹果",
      placeOfOrigin: "澳大利亚",
      homePhotoId:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F17%2F20210717232533_2edcf.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653808537&t=432df268f87d63c80065a34cb0ab50ec",
      placeOfOriginTwo: "新西兰",
      placeOfOriginOne: "俄罗斯",
      startDate: 1649585700000,
    },
    {
      fruitName: "桃子",
      placeOfOrigin: "西班牙",
      homePhotoId:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F17%2F20210717232533_2edcf.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653808537&t=432df268f87d63c80065a34cb0ab50ec",
      placeOfOriginTwo: "罗马",
      placeOfOriginOne: "丹麦",
      startDate: 1649585700000,
    },
  ];

  const teamPic =
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F28%2F03%2F6c%2F28036c1552cfe50dfaef69f5f08d9ef3.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653808640&t=1003421c7c8709f1b1cb03c45dc73a59";

  return (
    <div className={styles.container}>
      <HeaderHost />
      <List
        className="hostList"
        header={null}
        footer={null}
        bordered={false}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Row>
              <Col span={5} className={styles.hostItem}>
                <img src={`${item.homePhotoId}`} />
                <span>{item.fruitName}</span>
              </Col>
              <Col span={4} className={styles.hostItem}>
                <span>{item.startDate}</span>
              </Col>
              <Col span={5} className={styles.hostItem}>
                <span>{item.placeOfOriginOne}</span>
              </Col>
              <Col span={5} className={styles.hostItem}>
                <img src={`${teamPic}`} />
                <span>{item.placeOfOriginTwo}</span>
              </Col>
              <Col span={5} className={styles.hostItem}>
                <img src={`${teamPic}`} />
                <span>{item.placeOfOrigin}</span>
              </Col>
            </Row>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Home;
