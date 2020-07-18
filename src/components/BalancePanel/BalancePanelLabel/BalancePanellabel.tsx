import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = {
  currentBalance: string;
};

const BalancePanelLabel = ({currentBalance}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Current Balance</Text>
      <Text style={styles.label}>{currentBalance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
  },
  value: {
    fontSize: 22,
  },
});

export default BalancePanelLabel;
