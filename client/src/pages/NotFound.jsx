import { Link } from "react-router-dom";

function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-black text-white px-6 py-16 md:px-12 lg:px-20">
            <div className="text-center max-w-2xl">
                <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl mb-6 text-red-500 animate-bounce">
                    404
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
                    Oops! Page Not Found
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">
                    The page you’re looking for doesn’t exist or has been moved. Don’t worry, let’s get you back on track.
                </p>
                <Link to="/">
                    <button className="bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out text-white font-semibold px-6 py-3 rounded-lg shadow-md text-lg">
                        Return Home
                    </button>
                </Link>
            </div>
        </main>
    );
}

export default NotFound;