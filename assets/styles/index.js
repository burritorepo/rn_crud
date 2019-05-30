import {
  StyleSheet
} from 'react-native';

const form = StyleSheet.create({
  row: {
    marginBottom: 20
  },
  control: {
    borderColor: '#ccc',
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 4
  },
  label: {
    fontSize: 14,
    marginBottom: 5
  }
});

const box = StyleSheet.create({
  padding: {
    paddingLeft: 20,
    paddingRight: 20
  },
  alignCenter: {
    flex: 1,
    justifyContent: 'center',
  }
});

const color = {
  primary: 'red',
  secondari: 'grey'
};

export {
  form,
  box,
  color
}