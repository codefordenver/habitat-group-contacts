import React from 'react';

// The presentation of the indicator is delayed to improve perceived performance
// See: https://material-ui-next.com/demos/progress/#delaying-appearance
const PROGRESS_DELAY = 1000;

class ErrorIndicator extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      isShown: false
    };
    this.timeoutId = window.setTimeout(
      () => this.setState({ isShown: true }),
      PROGRESS_DELAY
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  render() {
    if (this.state.isShown) {
      return this.props.children;
    }
    return null;
  }
}

export default ErrorIndicator;