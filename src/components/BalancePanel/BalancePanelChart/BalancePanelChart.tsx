import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BalancePanelChart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>BalancePanelChart</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {},
  value: {},
});

export default BalancePanelChart;
