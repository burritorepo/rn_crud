import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { UserService } from '../../../../api/end-points/user.service';
import { CardUser } from '../card/card.component';

class UserScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.userService = new UserService();
  }
  componentDidMount() {
    this.getUsers();
  }
  getUsers() {
    this.userService.getAllUser()
      .then((response) => {
        this.setState({ users: response });
        console.log(response);
      })
  }

  moveDetail(id, name, lastname) {
    this.props.navigation.navigate('UserDetail', {
      id,
      fullName: `${name} ${lastname}`
    })
  }

  render() {
    const users = this.state.users.map(user => <CardUser key={user.id}
      {...user} onMove={this.moveDetail.bind(this)} 
      onGetUsers={this.getAllUser}/>);
    return (
      <ScrollView>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <View>{users}</View>
        </View>
      </ScrollView>
    );
  }
}

export {
  UserScreen
}
