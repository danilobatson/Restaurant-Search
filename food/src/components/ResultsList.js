import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList,
} from 'react-native';
import React from 'react';
import ResultsDetail from '../components/ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {
	return (
		<>
			{results.length > 0 ? (
				<View style={styles.container}>
					<Text style={styles.title}>{title}</Text>
					<FlatList
						horizontal
						showsHorizontalScrollIndicator={false}
						data={results}
						keyExtractor={(result) => result.id}
						renderItem={({ item }) => {
							return (
								<TouchableOpacity
									onPress={() => navigation.navigate('Results')}>
									<ResultsDetail result={item} />
								</TouchableOpacity>
							);
						}}
					/>
				</View>
			) : (
				<Text style={styles.title}>No Results for {title} </Text>
			)}
		</>
	);
};

export default ResultsList;

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 15,
		marginBottom: 5,
	},
	container: {
		marginBottom: 10,
	},
});
