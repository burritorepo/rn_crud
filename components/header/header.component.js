import React from 'react';
import { Text } from 'react-native';
import { withNavigation } from 'react-navigation';

class HeaderButton extends React.Component {
  constructor(props) {
    super(props)
    console.log('propiedades', props)
  }
  render() {
    return <Text onPress={() => this.props.navigation.navigate('UserAdd')}>Add</Text>
  }
}

export default withNavigation(HeaderButton);
