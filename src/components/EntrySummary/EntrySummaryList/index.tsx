import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const EntrySummaryList = () => {
  return (
    <View>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={[
          {key: 'Food: $200'},
          {key: 'Fuel: $150'},
          {key: 'Rent: $1.200'},
          {key: 'Fun: $100'},
          {key: 'Other: $80'},
        ]}
        renderItem={({item}) => <Text style={styles.entry}>- {item.key}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default EntrySummaryList;
