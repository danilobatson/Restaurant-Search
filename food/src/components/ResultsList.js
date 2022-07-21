import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ResultsList = ({ title }) => {
	return (
		<View>
			<Text style={styles.title}>{title}</Text>
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
