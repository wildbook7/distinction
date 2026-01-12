import { useState } from "react";

function App() {
	const [text, setText] = useState("");
	const [result, setResult] = useState("");
	const correctAnswer =
		"Woman: You're entitled to your beliefs, but how can you look at the world and not believe" +
		" in a higher being? How can it be so perfect without divine intervention? Besides," +
		" we all need a framework for how to live morally and make tough decisions.";

	const handleCheck = () => {
		if (text === correctAnswer) {
			setResult("正解！");
		} else {
			setResult(`不正解。正解は「${correctAnswer}」です。`);
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 p-8">
			<div className="mx-auto max-w-2xl">
				<h1 className="mb-6 text-2xl font-bold text-gray-900">Distinction</h1>

				<div className="space-y-4 rounded-lg bg-white p-6 shadow">
					<textarea
						className="w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
						rows={10}
						placeholder="(Religion)"
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>

					<button
						type="button"
						className="rounded-md bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
						onClick={handleCheck}
					>
						チェック
					</button>

					{result && (
						<div
							className={`rounded-md p-4 ${
								result === "正解！"
									? "bg-green-100 text-green-800"
									: "bg-red-100 text-red-800"
							}`}
						>
							{result}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
