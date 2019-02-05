import React, { Component } from "react";

interface IProps {
  color: string;
}

// statelesscomponent or classcomponent만 인자로 가능
export const withColor = (WrappedComponent: React.ComponentType<IProps>) =>
  class WithColor extends Component<IProps, {}> {
    private colors = ["red", "blue", "orange"];
    private randomColor = this.colors[Math.floor(Math.random() * 3)];
    private className = `${this.randomColor}-text`;

    public constructor(props: IProps) {
      super(props);
    }

    public render() {
      return (
        <div className={this.className}>
          <WrappedComponent {...this.props} color={this.randomColor} />
        </div>
      );
    }
  };

export default withColor;
