import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
	return (
		<View>
			<SearchBar />
			<Text>SearchScreen</Text>
		</View>
	);
};

export default SearchScreen;

const styles = StyleSheet.create({});
