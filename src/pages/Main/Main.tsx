import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import BalancePanel from '../../components/BalancePanel/BalancePanel';
import EntrySummary from '../../components/EntrySummary/EntrySummary';
import EntryList from '../../components/EntryList/EntryListItem';
import {NavigationStackProp} from 'react-navigation-stack';

type Props = {
  navigation: NavigationStackProp;
};

const Main = ({navigation}: Props) => {
  const balance = '$19.300,25';

  const entriesGrouped = [
    {key: '1', description: 'Food', amount: 200},
    {key: '2', description: 'Fuel', amount: 150},
    {key: '3', description: 'Rent', amount: 1.2},
    {key: '4', description: 'Fun', amount: 100},
    {key: '5', description: 'Other', amount: 80},
  ];

  const entries = [
    {key: '1', description: 'McDonalds', amount: 20},
    {key: '2', description: 'Smartphone', amount: 350},
    {key: '3', description: '7 Strings Guitar', amount: 1200},
  ];

  return (
    <View style={styles.container}>
      <BalancePanel currentBalance={balance} />
      <Button title="Add" onPress={() => navigation.navigate('NewEntry')} />
      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList entries={entries} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  label: {
    fontSize: 20,
  },
});

export default Main;
