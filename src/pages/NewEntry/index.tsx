import React from 'react';
import {Button, View, TextInput, StyleSheet} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';

import BalanceLabel from '../../components/BalanceLabel';

type Props = {
  navigation: NavigationStackProp;
};

const NewEntry = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <Button title="GPS" />
        <Button title="Camera" />
      </View>

      <View>
        <Button title="Add" />
        <Button title="Cancel" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default NewEntry;
