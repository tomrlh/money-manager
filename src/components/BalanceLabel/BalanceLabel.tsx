import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = {
  currentBalance: string;
};

const BalanceLabel = ({currentBalance}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Actual Balance</Text>
      <Text style={styles.value}>{currentBalance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
  },
  value: {
    fontSize: 18,
  },
});

export default BalanceLabel;
