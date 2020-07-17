import React from 'react';
import {View, StyleSheet} from 'react-native';
import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <BalancePanel />
        <EntrySummary />
        <EntryList />
      </View>
    );
  }
}

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
