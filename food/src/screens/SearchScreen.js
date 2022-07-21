import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
	const [term, setTerm] = useState('');
	const [searchApi, results, errorMessage] = useResults();

	const filterResultsByPrice = (price) => {
		return results.filter((res) => {
			return res.price === price;
		});
	};

	return (
		<View>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={() => searchApi(term)}
			/>
			<Text>We have found {results.length} results</Text>
			{errorMessage.length > 0 && <Text>{errorMessage} results</Text>}
			<ResultsList title='Cost Effective' results={filterResultsByPrice('$')} />
			<ResultsList title='Bit Pricer' results={filterResultsByPrice('$$')} />
			<ResultsList title='Big Spender' results={filterResultsByPrice('$$$')} />
			<ResultsList title='All Out' results={filterResultsByPrice('$$$$')} />
		</View>
	);
};

export default SearchScreen;

const styles = StyleSheet.create({});
