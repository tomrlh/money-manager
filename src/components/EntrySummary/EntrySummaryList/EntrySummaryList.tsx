import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

interface Entry {
  key: string;
  description: string;
  amount: number;
}

type Props = {
  entriesGrouped: Array<Entry>;
};

const EntrySummaryList = ({entriesGrouped}: Props) => {
  return (
    <View>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={entriesGrouped}
        renderItem={({item}) => (
          <Text style={styles.entry}>
            - {item.description} ${item.amount}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  entry: {},
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default EntrySummaryList;
