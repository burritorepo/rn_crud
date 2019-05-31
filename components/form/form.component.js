import React from "react";
import {
  Text,
  View,
  TextInput,
  Picker,
  Button
} from 'react-native';

import {
  form,
  box,
  color
} from '../../assets/styles';

function FormUser(props) {
  const {
    name,
    lastname,
    git,
    email,
    avatar,
    onSubmit,
    onChange
  } = props;

  return (
    <View>
      <View style={form.row}>
        <Text style={form.label}>Nombre</Text>
        <TextInput
          style={form.control}
          onChangeText={(value) => onChange('name', value)}
          value={name}
        />
      </View>
      <View style={form.row}>
        <Text style={form.label}>Apellido</Text>
        <TextInput
          style={form.control}
          onChangeText={(value) => onChange('lastname', value)}
          value={lastname}
        />
      </View>
      <View style={form.row}>
        <Text style={form.label}>Usuario Git</Text>
        <TextInput
          style={form.control}
          onChangeText={(value) => onChange('git', value)}
          value={git}
        />
      </View>
      <View style={form.row}>
        <Text style={form.label}>Email</Text>
        <TextInput
          style={form.control}
          onChangeText={(value) => onChange('email', value)}
          value={email}
        />
      </View>
      <View style={form.row}>
        <Text style={form.label}>URL imagen</Text>
        <TextInput
          style={form.control}
          onChangeText={(value) => onChange('avatar', value)}
          value={avatar}
        />
      </View>
      {/* <View style={form.row}>
        <Text style={form.label}>Pais</Text>
        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={onchange}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View> */}
      <View style={form.row}>
        <Button
          onPress={onSubmit}
          title="Agregar"
          color={color.primary}
        />
      </View>
    </View>
  )
}

export {
  FormUser
}