import { data } from '../data/users';
// import { User } from '../components/user/User';
import { UserList } from './user-list/UserList';
import { Section } from './Section/Section';
import { Component } from 'react';
import { Button } from './Button/Button';
import { AddUserForm } from './AddUserForm/AddUserForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    isListShown: false,
    users: data,
    isFormShown: false,
  };
  showList = () => {
    this.setState({ isListShown: true });
  };
  deleteUser = id => {
    this.setState(prevState => {
      return { users: prevState.users.filter(user => user.id !== id) };
    });
  };
  showForm = () => {
    this.setState({ isFormShown: true });
  };
  addUser = data => {
    const newUser = { id: nanoid(), ...data };
    this.setState(prevState => {
      return { users: [...prevState.users, newUser] };
    });
  };

  closeForm = () => {
    this.setState({ isFormShown: false });
  };

  render() {
    const { isListShown, users, isFormShown } = this.state;

    return (
      <>
        <Section title="List Of Users">
          {!isListShown ? (
            <Button text="Show list of users" clickHandler={this.showList} />
          ) : (
            <>
              <UserList users={users} deleteUser={this.deleteUser} />
              {isFormShown ? (
                <AddUserForm addUser={this.addUser} closeForm={this.closeForm}/>
              ) : (
                <Button text="Add user" clickHandler={this.showForm} />
              )}
            </>
          )}
        </Section>
      </>
    );
  }
}
