import React from "react";

// Set Up The Initial Context
export const AccountContext = React.createContext();

// Create an exportable consumer that can be injected into components
export const AccountConsumer = AccountContext.Consumer;

// Create the provider using a traditional React.Component class
class AccountProvider extends React.Component {
  state = {
    username: "fsupete10",
    dateJoined: "06/13/19",
    membershipLevel: "Platinum",
    updateAccount: (account) => this.updateAccount(account),
  };

  updateAccount = (account) => {
      this.setState({ ...account, });
  }
    
  render() {
    return (
      <AccountContext.Provider value={this.state}>
        { this.props.children }
      </AccountContext.Provider>
    )
  }
}

export default AccountProvider;