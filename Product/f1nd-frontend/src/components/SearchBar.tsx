"use client";

import { useState } from "react";

export default function SearchBar() {
	const [query, setQuery] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const res = await fetch("http://localhost:8000/search", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ query }),
		});

		const data = await res.json();
		console.log("Response from backend:", data);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="Ask a question..."
				className="border p-2"
			/>
			<button type="submit" className="ml-2 p-2 bg-blue-500 text-white">
				Search
			</button>
		</form>
	);
}
