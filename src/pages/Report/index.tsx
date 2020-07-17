import React from 'react';
import {View, Button, StyleSheet, Picker} from 'react-native';
import EntryLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Report = () => {
  return (
    <View>
      <EntryLabel />

      <View>
        <Picker>
          <Picker.Item label="All Categories" />
        </Picker>
        <Picker>
          <Picker.Item label="Last 7 days" />
        </Picker>
      </View>

      <EntrySummary />
      <EntryList />

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
