import React from "react";

import { Modal, Button } from "antd";
import Draggable from "react-draggable";
import styles from "./index.less";
import { testVideo } from "./config";

interface TVitem {
  name: string;
  url: string;
  vod: number;
  isSelect: boolean;
}

class TvDialog extends React.Component {
  state = {
    visible: false,
    disabled: true,
    testVideo: testVideo,
    currentURL: testVideo[0].url,
    bounds: { left: 0, top: 0, bottom: 0, right: 0 },
  };
  draggleRef = React.createRef();

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  onStart = (event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = this.draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    this.setState({
      bounds: {
        left: -targetRect.left + uiData.x,
        right: clientWidth - (targetRect.right - uiData.x),
        top: -targetRect.top + uiData.y,
        bottom: clientHeight - (targetRect.bottom - uiData.y),
      },
    });
  };

  setCurrentURL = (item: TVitem) => {
    const { testVideo } = this.state;
    const newTestVideo = testVideo.map((subItem: TVitem) => {
      if (item.name === subItem.name) {
        subItem.isSelect = true;
      } else {
        subItem.isSelect = false;
      }
      return subItem;
    });

    this.setState({
      currentURL: item.url,
      testVideo: newTestVideo,
    });
  };

  render() {
    const { bounds, disabled, visible, currentURL } = this.state;
    return (
      <>
        <Button onClick={this.showModal}>测试网址</Button>
        <Modal
          className="tvDailog"
          width={1000}
          title={
            <div
              style={{
                width: "100%",
                cursor: "move",
              }}
              onMouseOver={() => {
                if (disabled) {
                  this.setState({
                    disabled: false,
                  });
                }
              }}
              onMouseOut={() => {
                this.setState({
                  disabled: true,
                });
              }}
              onFocus={() => {}}
              onBlur={() => {}}
            >
              测试网址
            </div>
          }
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
          modalRender={(modal) => (
            <Draggable
              disabled={disabled}
              bounds={bounds}
              onStart={(event, uiData) => this.onStart(event, uiData)}
            >
              <div ref={this.draggleRef}>{modal}</div>
            </Draggable>
          )}
        >
          <div className={styles.container}>
            <iframe
              src={currentURL}
              frameBorder="no"
              width="800"
              height="600"
            ></iframe>
            <div className={styles.names}>
              {testVideo.map((item) => (
                <div
                  key={item.name}
                  className={styles.nameItem}
                  onClick={() => {
                    this.setCurrentURL(item);
                  }}
                  style={{
                    backgroundColor: `${item.isSelect ? "#8c5112" : "#062b22"}`,
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default TvDialog;
