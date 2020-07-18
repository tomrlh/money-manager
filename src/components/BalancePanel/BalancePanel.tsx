import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import BalancePanelChart from './BalancePanelChart/BalancePanelChart';
import BalancePanelLabel from './BalancePanelLabel/BalancePanellabel';

type Props = {
  currentBalance: string;
};

const BalancePanel = ({currentBalance}: Props) => {
  return (
    <View style={styles.container}>
      <BalancePanelLabel currentBalance={currentBalance} />
      <BalancePanelChart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BalancePanel;
