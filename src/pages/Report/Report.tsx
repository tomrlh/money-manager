import React from 'react';
import {View, Button, StyleSheet, Picker} from 'react-native';
import EntryLabel from '../../components/BalanceLabel/BalanceLabel';
import EntrySummary from '../../components/EntrySummary/EntrySummary';
import EntryList from '../../components/EntryList/EntryListItem';

const Report = () => {
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
    <View>
      <EntryLabel currentBalance={balance} />

      <View>
        <Picker>
          <Picker.Item label="All Categories" />
        </Picker>
        <Picker>
          <Picker.Item label="Last 7 days" />
        </Picker>
      </View>

      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList entries={entries} />

      <View>
        <Button title="Save" />
        <Button title="Close" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1
  },
});

export default Report;
