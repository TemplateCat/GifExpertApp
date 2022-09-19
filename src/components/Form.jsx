import React, { useState } from 'react';

const Form = ({ AddCategory }) => {
	const [inputValue, setInputValue] = useState('');

	const handleChange = ({ target }) => setInputValue(target.value);

	const handleSubmit = (e) => {
		e.preventDefault();
		AddCategory(inputValue);
		setInputValue('');
	};

	return (
		<form className="flex my-5" onSubmit={handleSubmit}>
			<input
				type="text"
				value={inputValue}
				onChange={handleChange}
				className="p-2 border-2"
			/>
			<button className="bg-cyan-600 text-white py-2 px-3">Buscar</button>
		</form>
	);
};

export default Form;
