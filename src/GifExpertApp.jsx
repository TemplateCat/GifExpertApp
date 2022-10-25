import React, { useState } from 'react';
import Form from './components/Form';
import Section from './components/Section';

const GifExpertApp = () => {
	const [categories, setCategories] = useState(['Jurassic World']);

	const AddCategory = (newCategory) => {
		setCategories([newCategory, ...categories]);
	};

	return (
		<>
			<header className="bg-gradient-to-r from-green-400 to-blue-500">
				<div className="container mx-auto py-10 px-4 lg:px-20">
					<h1 className="font-bold text-4xl text-slate-100 border-b pb-5">
						Gif Expert App
					</h1>
					<Form AddCategory={AddCategory} />
				</div>
			</header>

			<Section categories={categories} />
		</>
	);
};

export default GifExpertApp;
