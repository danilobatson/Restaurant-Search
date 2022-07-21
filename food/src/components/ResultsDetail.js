import { StyleSheet, Text, Image, View } from 'react-native';
import React from 'react';

const ResultsDetail = ({ result }) => {
	return (
		<View>
			<Text>ResultsDetail</Text>
			<Image style={styles.image} source={{ uri: result.image_url }} />
			<Text style={styles.name}>{result.name}</Text>
			<Text>{result.rating}</Text>
			<Text>{result.review_count} Reviews</Text>
		</View>
	);
};

export default ResultsDetail;

const styles = StyleSheet.create({
	image: {
		width: 250,
		height: 250,
		borderRadius: 4,
	},
	name: {
		fontWeight: 'bold',
		fontSize: 14,
	},
});
