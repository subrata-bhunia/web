import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { warrantyChk, contractChk } from "../Extra/Helper";
import Cdata from '../DataBase/ChatData';

class SerialLookup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      serial: '',
      data: '',
      trigger: false,
      result: false,
      product_description: '',
      product_id: '',
      software_suggest: '',
      warranty_color: '',
      contract_color: '',
      error: true,
      error_msg: '',
    };

    this.triggetNext = this.triggetNext.bind(this);
  }

  componentDidMount() {
    const self = this;
    self.setState({ loading: true });
       setTimeout(() => {
      this.setState({loading:false})
      this.setState({error:true})
      console.log("AAAAAAA")
      this.props.triggerNextStep();
      console.log(Cdata)
    }, 1000);
  }

  triggetNext() {
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep();
    });
  }

  render() {
    const { loading, error } = this.state;

    if (loading) {
      return <p>Just a minute looking that up...</p>;
    }

    if (error===true) {
      return <div>Oops ! I didn't understand your concern .</div>
    }
  }
}

SerialLookup.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func
};

SerialLookup.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};

export default SerialLookup;