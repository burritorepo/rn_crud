import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { UserService } from '../../../../api/end-points/user.service';

class UserDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('fullName', ''),
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
    this.userService = new UserService();
  }

  componentDidMount() {
    this.getUser();
  };

  getUser () {
    const { navigation } = this.props;
    this.userService.getUser(navigation.getParam('id'))
    .then((response)=> {
      this.setState(
        { user: response }
      )
    });
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Card {...this.state.user} />
      </View>
    );
  }
}

export {
  UserDetailScreen
}
