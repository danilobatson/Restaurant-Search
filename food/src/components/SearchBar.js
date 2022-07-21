import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
	return (
		<View style={styles.background}>
			<Feather name='search' size={30} />
			<Text>SearchBar</Text>
		</View>
	);
};

export default SearchBar;

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#f0eeee',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
	},
});
