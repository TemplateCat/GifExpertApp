import React, { useState } from 'react';
import Form from './components/Form';
import Section from './components/Section';

const GifExpertApp = () => {
	const [categories, setCategories] = useState(['Jurassic World']);

	const AddCategory = (newCategory) => {
		setCategories([newCategory, ...categories]);
	};

	console.log(`estas viendo: ${categories}`);

	return (
		<div className="container mx-auto py-10 px-20">
			<h1 className="font-bold text-4xl text-slate-500">Gif Expert App</h1>

			<Form AddCategory={AddCategory} />
			<Section categories={categories} />
		</div>
	);
};

export default GifExpertApp;
