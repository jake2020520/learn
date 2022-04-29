import React, { useState } from "react";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import { RootRoutes } from "./route";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store/store";
import "antd/dist/antd.css";
import zhCN from "antd/lib/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import style from "./app.less";
import "./common.css";

moment.locale("zh-cn");
const App: React.FC<any> = () => {
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <div className={style.contain}>
          <Router>
            <Routes>
              {RootRoutes.map((item: any) => {
                return (
                  <Route
                    key={item.path}
                    path={item.path}
                    element={item.component}
                  >
                    {item.children &&
                      item.children.map((child: any) => {
                        return (
                          <Route
                            key={child.path}
                            path={child.path}
                            element={child.component}
                          ></Route>
                        );
                      })}
                  </Route>
                );
              })}
            </Routes>
          </Router>
        </div>
      </ConfigProvider>
    </Provider>
  );
};

export default App;
