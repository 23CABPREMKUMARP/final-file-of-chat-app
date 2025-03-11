import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
				<h1 className="text-3xl font-semibold text-center text-gray-300">
					Sign Up <span className="text-blue-500">ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					{/* Full Name */}
					<div>
						<label className="label p-2">
							<span className="text-base label-text text-white">Full Name</span>
						</label>
						<input
							type="text"
							placeholder="John Doe"
							className="w-full input input-bordered h-10 bg-transparent text-white border-white focus:border-blue-500"
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					{/* Username */}
					<div>
						<label className="label p-2">
							<span className="text-base label-text text-white">Username</span>
						</label>
						<input
							type="text"
							placeholder="johndoe"
							className="w-full input input-bordered h-10 bg-transparent text-white border-white focus:border-blue-500"
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
						/>
					</div>

					{/* Password */}
					<div>
						<label className="label">
							<span className="text-base label-text text-white">Password</span>
						</label>
						<input
							type="password"
							placeholder="Enter Password"
							className="w-full input input-bordered h-10 bg-transparent text-white border-white focus:border-blue-500"
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					{/* Confirm Password */}
					<div>
						<label className="label">
							<span className="text-base label-text text-white">Confirm Password</span>
						</label>
						<input
							type="password"
							placeholder="Confirm Password"
							className="w-full input input-bordered h-10 bg-transparent text-white border-white focus:border-blue-500"
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					{/* Gender Checkbox */}
					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

					{/* Already have an account? */}
					<Link
						to="/login"
						className="text-sm text-red-500 hover:text-blue-600 hover:underline mt-2 inline-block"
					>
						Already have an account?
					</Link>

					{/* Sign Up Button */}
					<div className="flex justify-center mt-4">
						<button
							className="btn text-white text-lg px-6 py-3 bg-gradient-to-r from-blue-500 to-red-500 hover:from-red-500 hover:to-blue-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
							disabled={loading}
						>
							<span
								className="absolute inset-0 bg-white opacity-20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
							></span>
							{loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
