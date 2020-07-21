import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {getEntries} from '../../services/Entries';

interface Entry {
  key: string;
  description: string;
  amount: number;
}

type Props = {
  entries: Array<Entry>;
};

const EntryList = () => {
  [entries, setEntries] = useState([]);

  useEffect(() => {
    async function loadEntries() {
      const data = await getEntries();
      setEntries(data);
    }
    loadEntries();
  }, []);

  return (
    <View>
      <Text style={styles.title}>Last Entries</Text>
      <FlatList
        data={entries}
        renderItem={({item}) => (
          <Text style={styles.entry}>
            {item.description} - ${item.amount}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  entry: {},
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default EntryList;
