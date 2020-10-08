// template to create a new component
import React, { Component } from "react"
import propTypes from "prop-types"
import classnames from "classnames"

// dependency component
import FormButton from "src/components/buttons/formButton/formButton"

// import style
import "./Form.scss"

export class Form extends Component {
  constructor() {
    super()
    this.state = {
      fields: {
        name: "",
        email: "",
        message: "",
      },
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log("Submitted!")
  }

  handleChange = event => {
    event.preventDefault()
    let fields = this.state.fields
    fields[event.target.name] = event.target.value

    this.setState({
      fields,
    })
  }

  render() {
    const { className } = this.props
    // define container classes here
    const styleClasses = classnames({
      formContainer: true,
      [`${className}`]: className,
    })

    console.log("Name:", this.state.fields.name)
    console.log("Email:", this.state.fields.email)
    console.log("Message:", this.state.fields.message)
    return (
      <div className={styleClasses}>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="name"
            className={classnames("form_input", "simpleForm_inputText")}
            value={this.state.fields.name || ""}
            onChange={this.handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="email"
            className={classnames("form_input", "simpleForm_inputText")}
            value={this.state.fields.email || ""}
            onChange={this.handleChange}
          />
          <textarea
            name="message"
            placeholder="Type your message..."
            className={classnames("form_input", "simpleForm_textArea")}
            value={this.state.fields.message || ""}
            onChange={this.handleChange}
          />
          <FormButton value="Send" />
        </form>
      </div>
    )
  }
}

export default Form
