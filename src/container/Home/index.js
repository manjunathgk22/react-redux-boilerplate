import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.xyz();
  }

  render() {
    return (
      <div className='container'>
        <h2>This is React Redux BoilerPlace!</h2>
        <h1>{this.props.abc}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  abc: state.home.abc
});

const mapDispachToProps = (dispatch) => ({
  xyz: () => dispatch({ type: 'xyz', value: 1 })
});

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Home);
