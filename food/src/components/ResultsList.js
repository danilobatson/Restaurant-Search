import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList,
} from 'react-native';
import React from 'react';
import { withNavigation } from 'react-navigation';
import ResultsDetail from '../components/ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {
	if (!results.length) {
		return null;
	}
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
									onPress={() =>
										navigation.navigate('Results', { id: item.id })
									}>
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

export default withNavigation(ResultsList);

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
