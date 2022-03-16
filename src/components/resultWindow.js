import React from 'react';

class ResultWindow extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: '0' };
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <p className="results">{value}</p>
      </div>
    );
  }
}

export default ResultWindow;
