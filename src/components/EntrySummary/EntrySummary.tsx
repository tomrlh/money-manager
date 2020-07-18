import React from 'react';
import {View, StyleSheet} from 'react-native';

import EntrySummaryChart from './EntrySummaryChart/EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList/EntrySummaryList';

interface Entry {
  key: string;
  description: string;
  amount: number;
}

type Props = {
  entriesGrouped: Array<Entry>;
};

const EntrySummary = ({entriesGrouped}: Props) => {
  return (
    <View style={styles.container}>
      <EntrySummaryChart />
      <EntrySummaryList entriesGrouped={entriesGrouped} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});

export default EntrySummary;
