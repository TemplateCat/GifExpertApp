import React, { useState } from 'react';

const Form = ({ AddCategory }) => {
	const [inputValue, setInputValue] = useState('');

	const handleChange = ({ target }) => setInputValue(target.value);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim().length <= 0) return;
		AddCategory(inputValue);
		setInputValue('');
	};

	return (
		<form className="flex my-5" onSubmit={handleSubmit}>
			<input
				type="text"
				value={inputValue}
				onChange={handleChange}
				placeholder="Buscar gifs"
				className="bg-slate-500/50 border-2 border-slate-100/50 text-white rounded-tl-lg rounded-bl-lg outline-none p-2 min-w-[250px] transition-all duration-500 placeholder:text-white focus:border-green-300"
			/>
			<button className="bg-white/30 font-semibold rounded-tr-lg rounded-br-lg text-white py-2 px-3 transition-all duration-500 hover:bg-white/50">
				Buscar
			</button>
		</form>
	);
};

export default Form;
