import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import BalancePanelChart from './BalancePanelChart';
import BalancePanelLabel from './BalancePanelLabel';

const BalancePanel = () => {
  return (
    <View style={styles.container}>
      <BalancePanelLabel />
      <BalancePanelChart />
      <Button title="Add" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BalancePanel;
