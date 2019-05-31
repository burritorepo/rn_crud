import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import {
  box
} from '../../../../assets/styles';

import {
  FormUser
} from '../../../../components';

import { UserService } from '../../../../api/end-points/user.service';
import { ScrollView } from 'react-native-gesture-handler';

class UserEditScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('fullName', ''),
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname: '',
      git: '',
      email: '',
      avatar: ''
    }
    this.userService = new UserService();
  }

  handleInputChange(stateName, value) {
    this.setState({
      [stateName]: value
    })
  }

  componentDidMount() {
    this.getUser();
  }

  getUser () {
    const { navigation } = this.props;
    this.userService.getUser(navigation.getParam('id'))
    .then((response)=> {
      this.setState(Object.assign({},this.state, response))
    });
  };

  handleSubmit() {
   /*  const { navigation } = this.props;
    this.userService.saveUser(navigation.getParam('id'))
    .then((response)=> {
      console.log('response',response);
      this.setState(Object.assign({}), this.state, response)
    }); */
  };

  render() {
    return (
      <ScrollView>
        <View style={Object.assign({}, box.padding, { flex: 1, paddingTop: 20 })}>
          <FormUser
            onChange={this.handleInputChange.bind(this)}
            onSubmit={this.handleSubmit.bind(this)}
            {...this.state}
          />
        </View>
      </ScrollView>
    );
  }
}

export {
  UserEditScreen
}