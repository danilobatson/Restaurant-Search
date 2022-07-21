import { StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	const searchApi = async (searchTerm) => {
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term: searchTerm,
					location: 'miami',
				},
			});
			setResults(response.data.businesses);
		} catch {
			setErrorMessage('Something went wrong');
		}
	};
	useEffect(() => {
		searchApi('pasta');
	}, []);
	return [searchApi, results, errorMessage];
};

const styles = StyleSheet.create({});
