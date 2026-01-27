import SEO from '../components/common/SEO';
import snsImage from '../assets/images/sns.png';
import snsSectionImage from '../assets/images/sns-section.png';

const Home = () => {
  return (
    <>
      <SEO 
        title="Home - SNS Groups"
        description="Welcome to SNS Groups - Connect, Share, and Grow"
        keywords="sns, social networking, groups, community"
      />
      <div className="home-page">
        <section className="hero-section">
          <div className="container">
            <h1>Welcome to SNS Groups</h1>
            <p>Connect with people who share your interests</p>
            <img src={snsImage} alt="SNS Groups" className="hero-image" />
          </div>
        </section>

        <section className="features-section">
          <div className="container">
            <h2>Our Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>Create Groups</h3>
                <p>Build communities around your passions</p>
              </div>
              <div className="feature-card">
                <h3>Share Content</h3>
                <p>Post updates, images, and more</p>
              </div>
              <div className="feature-card">
                <h3>Connect</h3>
                <p>Meet like-minded people</p>
              </div>
            </div>
            <img src={snsSectionImage} alt="SNS Section" className="section-image" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
