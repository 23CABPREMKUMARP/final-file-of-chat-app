const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className="flex justify-center gap-4 mt-3">
			{/* Male Checkbox */}
			<label
				className={`flex items-center gap-2 cursor-pointer px-4 py-2 border rounded-lg ${
					selectedGender === "male" ? "bg-gradient-to-r from-blue-500 to-red-500 text-white" : "border-white text-white"
				} transition-all duration-300 ease-in-out hover:border-blue-500`}
			>
				<input
					type="checkbox"
					className="hidden"
					checked={selectedGender === "male"}
					onChange={() => onCheckboxChange("male")}
				/>
				<span className="text-lg">Male</span>
			</label>

			{/* Female Checkbox */}
			<label
				className={`flex items-center gap-2 cursor-pointer px-4 py-2 border rounded-lg ${
					selectedGender === "female" ? "bg-gradient-to-r from-blue-500 to-red-500 text-white" : "border-white text-white"
				} transition-all duration-300 ease-in-out hover:border-blue-500`}
			>
				<input
					type="checkbox"
					className="hidden"
					checked={selectedGender === "female"}
					onChange={() => onCheckboxChange("female")}
				/>
				<span className="text-lg">Female</span>
			</label>
		</div>
	);
};

export default GenderCheckbox;
