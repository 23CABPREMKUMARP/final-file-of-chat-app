import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
				<h1 className="text-3xl font-semibold text-center text-gray-300">
					Login <span className="text-blue-500">ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className="label p-2">
							<span className="text-base label-text text-white">Username</span>
						</label>
						<input
							type="text"
							placeholder="Enter username"
							className="w-full input input-bordered h-10 bg-transparent text-white border-white focus:border-blue-500"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div>
						<label className="label">
							<span className="text-base label-text text-white">Password</span>
						</label>
						<input
							type="password"
							placeholder="Enter Password"
							className="w-full input input-bordered h-10 bg-transparent text-white border-white focus:border-blue-500"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<Link
						to="/signup"
						className="text-sm text-red-500 hover:text-blue-600 hover:underline mt-2 inline-block"
					>
						{"Don't"} have an account?
					</Link>

					{/* Centering the button */}
					<div className="flex justify-center mt-4">
						<button
							className="btn text-white text-lg px-6 py-3 bg-gradient-to-r from-blue-500 to-red-500 hover:from-red-500 hover:to-blue-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
							disabled={loading}
						>
							<span
								className="absolute inset-0 bg-white opacity-20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
							></span>
							{loading ? <span className="loading loading-spinner"></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
