import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonnalDetails from './FormPersonnalDetails';
import Confirm from './Confirm';
import Success from './Success';

// in class component, props is an implicit property
export default class UserFormParent extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    address: '',
    incident: ''
  };

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  confirmed = (data) => {
    this.props.submittedData(data);
    this.nextStep();
  }

  // handle field change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    const { step } = this.state;
    const { firstName, lastName, address, incident } = this.state;
    const values = { firstName, lastName, address, incident };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonnalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
          confirmed={this.confirmed}
            prevStep={this.prevStep}
            values={values}
            data={"somedata"}
          />
        );
      case 4:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}
