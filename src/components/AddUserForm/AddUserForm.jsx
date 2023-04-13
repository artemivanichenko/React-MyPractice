import { Component } from 'react';

export class AddUserForm extends Component {
  state = {
    name: '',
    email: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addUser({...this.state})
    this.props.closeForm()
  };

  render() {
    const { name, email } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          E-mail
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <button>Add</button>
      </form>
    );
  }
}
