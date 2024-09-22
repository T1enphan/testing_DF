function Login() {
  return (
    <div className="flex min-h-screen overflow-hidden">
      <div className="w-1/2 bg-gray-900 text-white flex flex-col justify-center p-10 h-[945px]">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-semibold mb-2">
            Hello,{" "}
            <span style={{ color: "rgb(120, 194, 211)" }}>
              Digital Fortress
            </span>
          </h1>
          <p className="text-gray-400 mb-8">
            Log in to platform to start creating magic.
          </p>

          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <i className="fa-solid fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-800 border border-gray-700 text-gray-300 rounded-lg pl-10 p-2.5"
                placeholder="candidate.digitalfortress@gmail.com"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <i className="fa-solid fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
              <input
                type="password"
                id="password"
                className="w-full bg-gray-800 border border-gray-700 text-gray-300 rounded-lg pl-10 p-2.5"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-gray-400">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-green-400">
              Forgot Password?
            </a>
          </div>

          <button className="w-full bg-green-400 text-gray-900 rounded-lg p-2.5 font-semibold hover:bg-green-500">
            Log in
          </button>

          <p className="mt-6 text-center text-gray-400">
            Don't have an account?{" "}
            <a href="#" className="text-green-400">
              Sign Up
            </a>
          </p>
        </div>
      </div>
      <div className="w-1/2 h-[945px] relative flex flex-col justify-center">
        <img
          src="image.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-5 left-10 text-white max-w-md">
          <p className="text-2xl font-semibold mb-4">
            Digital Fortress has been a game-changer for our content creation
            process.
          </p>
          <p className="text-lg mb-6">
            The AI-powered tools are incredibly user-friendly and have saved us
            countless hours of work.
          </p>
          <p className="font-semibold">Lily Alisson</p>
          <p style={{ color: "rgb(181, 240, 156)" }}>CMO at Digital Fortress</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
