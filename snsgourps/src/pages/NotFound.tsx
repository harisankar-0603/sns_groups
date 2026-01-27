import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-6">
        <h1 className="text-9xl font-bold text-yellow-500 mb-4">404</h1>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
