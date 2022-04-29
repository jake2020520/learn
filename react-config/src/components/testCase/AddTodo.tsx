import React from "react";
import { connect } from "react-redux";
import { Button, Input } from "antd";

import { changeStoreString } from "@/store/reducers/counterSlice";

interface PropsType {
  changeStoreString: Function;
  storeValue: number;
  storeString: string;
}

interface StateType {
  inputString: string;
}
// 类的写法 用 redux
class AddTodo extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    // Don't call this.setState() here!
    this.state = { inputString: "" };
  }

  handleAddTodo = () => {
    // dispatches actions to add todo
    this.props.changeStoreString(this.state.inputString);

    // sets state back to empty string
    this.setState({ inputString: "" });
  };

  updateInput = (value: string) => {
    this.setState({ inputString: value });
  };

  render() {
    const { inputString } = this.state;
    const { storeString, storeValue } = this.props;
    return (
      <div>
        <Input
          onChange={(e) => this.updateInput(e.target.value)}
          value={this.state.inputString}
        />
        <div style={{ color: "#fff" }}>state上的数据的改变：_{inputString}</div>
        <div style={{ color: "#fff" }}>store上数据的改变：_{storeString}</div>
        <div style={{ color: "#fff" }}>storeValue_{storeValue}</div>
        <Button type="primary" onClick={this.handleAddTodo}>
          Add Todo
        </Button>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    storeValue: state.counter.storeValue,
    storeString: state.counter.storeString,
  };
};

export default connect(mapStateToProps, { changeStoreString })(AddTodo);
