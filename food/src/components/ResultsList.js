import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ResultsList = ({ title, results }) => {
	return (
		<View>
			<Text style={styles.title}>{title}</Text>
			<Text >Results: {results.length}</Text>
		</View>
	);
};

export default ResultsList;

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		fontWeight: 'bold',
	},
});
