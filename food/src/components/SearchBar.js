import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.backgroundStyle}>
			<Feather name='search' style={styles.iconStyle} />
			<TextInput
				onEndEditing={onTermSubmit}
				autoCapitalize='none'
				autoCorrect={false}
				value={term}
				onChangeText={onTermChange}
				style={styles.inputStyle}
				placeholder='Search'
			/>
		</View>
	);
};

export default SearchBar;

const styles = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: '#f0eeee',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		marginTop: 10,
		flexDirection: 'row',
		marginBottom: 10,
	},
	inputStyle: {
		flex: 1,
		fontSize: 18,
	},
	iconStyle: {
		fontSize: 35,
		alignSelf: 'center',
		marginHorizontal: 15,
	},
});
