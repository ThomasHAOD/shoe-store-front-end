import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";
import * as formHelperFunctions from "../../../helpers/forms/formHelperFunctions";
import * as forms from "../../../helpers/forms/formJSONTemplates";

export class SignUp extends Component {
  state = {
    signUp: forms.signUpForm.signUp,
    formIsValid: false
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedSignUp = {
      ...this.state.signUp
    };
    const updatedFormElement = {
      ...updatedSignUp[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = formHelperFunctions.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedSignUp[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedSignUp) {
      formIsValid = updatedSignUp[inputIdentifier].valid && formIsValid;
    }
    this.setState({ signUp: updatedSignUp, formIsValid: formIsValid });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.signUp) {
      formElementsArray.push({
        id: key,
        config: this.state.signUp[key]
      });
    }

    let form = (
      <form onSubmit={this.signUpHandler}>
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
          Sign Up
        </Button>
      </form>
    );

    return (
      <div>
        <h2>Sign Up</h2>
        {form}
      </div>
    );
  }
}

export default SignUp;
