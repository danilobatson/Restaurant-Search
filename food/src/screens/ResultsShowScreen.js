import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';

const ResultsShowScreen = ({ navigation }) => {
	const [result, setResult] = useState(null);
	const [errorMessage, setErrorMessage] = useState('');

	const id = navigation.getParam('id');

	const getResult = async (id) => {
		const res = await yelp.get(`/${id}`);
		try {
			setResult(res.data);
		} catch {
			setErrorMessage('Something went wrong');
		}
	};
	useEffect(() => {
		getResult(id);
	}, []);

	if (!result) {
		return null;
	}
	return (
		<View>
			<Text>{result.name}</Text>
			<FlatList
				data={result.photos}
				keyExtractor={(photo) => photo}
				renderItem={({ item }) => {
					return <Image style={styles.image} source={{ uri: item }} />;
				}}
			/>
		</View>
	);
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
	image: {
		height: 200,
		width: 300,
	},
});
