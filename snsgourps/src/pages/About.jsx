import SEO from '../components/common/SEO';
import snsImage from '../assets/images/Sns-DxCft4QP.png';

const About = () => {
  return (
    <>
      <SEO 
        title="About - SNS Groups"
        description="Learn more about SNS Groups and our mission"
        keywords="about, sns groups, mission, team"
      />
      <div className="about-page">
        <div className="container">
          <h1>About SNS Groups</h1>
          
          <section className="about-section">
            <div className="about-content">
              <h2>Our Mission</h2>
              <p>
                SNS Groups is dedicated to bringing people together through 
                shared interests and meaningful connections. We believe in 
                the power of community and strive to create a platform where 
                everyone can find their place.
              </p>
            </div>
            <img src={snsImage} alt="About SNS" className="about-image" />
          </section>

          <section className="values-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Community First</h3>
                <p>We prioritize the needs of our community members</p>
              </div>
              <div className="value-card">
                <h3>Innovation</h3>
                <p>Constantly improving and adding new features</p>
              </div>
              <div className="value-card">
                <h3>Inclusivity</h3>
                <p>A welcoming space for everyone</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
