import React, { useState, useEffect } from "react";
import { Button, message, PageHeader, Row, Col } from "antd";
import { getHostListApi } from "@/services/common";
import Counter from "../../components/testCase/Counter";
import AddTodo from "../../components/testCase/AddTodo";

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
    // const getData = async () => {
    //   await getHostListApi({});
    // };
    // getData();
  }, []);

  return (
    <div className={styles.container}>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="redux 使用"
        subTitle="class 使用和 hooks使用"
      />
      <AddTodo />
      <Counter />
    </div>
  );
};

export default Home;
