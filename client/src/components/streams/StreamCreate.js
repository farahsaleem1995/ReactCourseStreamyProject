import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  renderError = ({ error, touched, active }) => {
    if (error && touched && !active) {
      return (
        <div className="header" style={{ color: "darkred" }}>
          {error}
        </div>
      );
    }
  };

  renderInput = ({ input, meta, label, id }) => {
    const className = `field ${
      meta.error && meta.touched && !meta.active ? "error" : ""
    }`;

    return (
      <div className={className}>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  handleSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <form
        className="ui segment form secondary"
        style={{
          margin: "50px 260px",
          padding: "20px 30px",
        }}
        onSubmit={this.props.handleSubmit(this.handleSubmit)}
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter title"
          id="title"
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
          id="description"
        />
        <button className="ui button green">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

const formWrapped = reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
