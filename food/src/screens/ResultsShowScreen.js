import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';

const ResultsShowScreen = ({ navigation }) => {
	const [result, setResult] = useState(null);
	const [errorMessage, setErrorMessage] = useState('');

	const id = navigation.getParam('id');
	console.log(result);

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
			<Text style={styles.name}>{result.name} </Text>
			<Text style={styles.detail}>{result.display_phone}</Text>
			<Text style={styles.detail}>{result.location.address1}</Text>
			<Text style={styles.detail}>
				{result.location.city} {result.location.state},{' '}
				{result.location.zip_code}
			</Text>

			<FlatList
				horizontal
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
		marginLeft: 15,
	},
	name: {
		marginVertical: 10,
		marginLeft: 15,
		fontWeight: 'bold',
		fontSize: 36,
	},
	detail: {
		marginLeft: 15,
	},
});
