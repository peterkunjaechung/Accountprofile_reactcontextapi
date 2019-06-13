import React from "react";
import { Card, } from "semantic-ui-react";
import { AccountConsumer, } from "../providers/AccountProvider";

const Account = () => (
  <AccountConsumer>
    { value => (
      <Card>
        <Card.Content>
          <Card.Header>{ value.username }</Card.Header>
          <Card.Meta>
            Date Joined: { value.dateJoined }
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          <p>Membership Level: { value.membershipLevel }</p>
        </Card.Content>
      </Card>
    )}
  </AccountConsumer>
)

export default Account;
