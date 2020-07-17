import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BalancePanelLabel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Actual Balance</Text>
      <Text style={styles.label}>$20.000,00</Text>
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
