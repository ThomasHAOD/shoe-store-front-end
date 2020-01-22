import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";
import * as formHelperFunctions from "../../../helpers/formHelperFunctions";

export class SignIn extends Component {
  state = {
    signIn: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Username"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Your Password"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedSignIn = {
      ...this.state.signIn
    };
    const updatedFormElement = {
      ...updatedSignIn[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = formHelperFunctions.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedSignIn[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedSignIn) {
      formIsValid = updatedSignIn[inputIdentifier].valid && formIsValid;
    }
    this.setState({ signIn: updatedSignIn, formIsValid: formIsValid });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.signIn) {
      formElementsArray.push({
        id: key,
        config: this.state.signIn[key]
      });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={event => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <Button btnType="Success" disabled={!this.state.formIsValid}>
          SignIn
        </Button>
      </form>
    );

    return (
      <div>
        <h2>Sign In</h2>
        {form}
      </div>
    );
  }
}

export default SignIn;
