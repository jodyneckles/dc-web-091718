import React from "react";
import { Card, Image } from "semantic-ui-react";
import {Redirect} from 'react-router-dom'
/* props: {
  avatar: 'someURL',
  username: 'chandler Bing',
  bio: 'i like eggs'
} */

const Profile = (props) => {
  let { currentUser } = props
  return currentUser ? (
    <Card>
      <Image src={currentUser.avatar} />
      <Card.Content>
        <Card.Header>{currentUser.username}</Card.Header>

        <Card.Description>{currentUser.bio}</Card.Description>
      </Card.Content>
    </Card>
  ) : <Redirect to='/login' />
}

export default Profile;
