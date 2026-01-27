import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const NotFound = () => {
  return (
    <>
      <SEO 
        title="404 - Page Not Found"
        description="The page you are looking for does not exist"
      />
      <div className="not-found-page">
        <div className="container">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>Oops! The page you're looking for doesn't exist.</p>
          <Link to="/" className="btn-home">
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
