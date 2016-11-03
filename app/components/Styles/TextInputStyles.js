import {
  create,
} from './StyleSheet';

export default create({
  textInput: {
    height: 50,
    borderWidth: 1,
    fontSize: 16,
    borderColor: 'white',
    color: 'gray',
    padding: 10,
    backgroundColor: 'black',
    opacity: 0.5
  },
  numberInput: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    android: {
      textAlignVertical: 'center'
    }
  }
});
