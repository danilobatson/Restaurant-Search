import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import ResultsDetail from '../components/ResultsDetail';

const ResultsList = ({ title, results }) => {
	return (
		<View>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				horizontal
				data={results}
				keyExtractor={(result) => result.id}
				renderItem={({ item }) => {
					return <ResultsDetail result={item} />;
				}}
			/>
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
