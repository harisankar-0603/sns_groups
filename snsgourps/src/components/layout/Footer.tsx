import { MapPin, Phone, Globe } from 'lucide-react';
import snsFullLogo from '../../assets/images/sns_fullLogo.png';

const Footer = () => {
  return (
    <footer 
      style={{
        backgroundColor: '#ffffff',
        width: '100%',
        paddingTop: '32px',
        paddingBottom: '12px',
        borderTop: '1px solid #000000'
      }}
    >
      {/* Badges Container */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '48px',
          marginBottom: '24px',
          flexWrap: 'wrap'
        }}
      >
        {/* SNS Logo */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img 
            src={snsFullLogo} 
            alt="SNS Institutions" 
            style={{
              height: '144px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>

      {/* Our Locations Heading */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <MapPin style={{ width: '20px', height: '20px', marginRight: '8px', color: '#000' }} />
        <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#000', margin: 0 }}>
          Our Locations
        </h2>
      </div>

      {/* Locations and Contact Section - All in one line */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '24px',
          flexWrap: 'wrap',
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto 24px auto',
          padding: '0 16px'
        }}
      >
        {/* Location 1 - Coimbatore */}
        <div style={{ textAlign: 'center', padding: '16px', minWidth: '280px', flex: '0 1 auto' }}>
          <p style={{ fontSize: '14px', fontWeight: '500', margin: 0 }}>
            536, Thudiyalur - Saravanampatti Rd, Vellakinar,
          </p>
          <p style={{ fontSize: '14px', fontWeight: '500', margin: 0 }}>
            Coimbatore, Tamil Nadu 641029
          </p>
        </div>

        {/* Location 2 - Bengaluru */}
        <div style={{ textAlign: 'center', padding: '16px', minWidth: '280px', flex: '0 1 auto' }}>
          <p style={{ fontSize: '14px', fontWeight: '500',  margin: 0 }}>
            Embassy Tech Village, ORR, Bellandur,
          </p>
          <p style={{ fontSize: '14px', fontWeight: '500',  margin: 0 }}>
            Bengaluru, Karnataka 560103.
          </p>
        </div>

        {/* Contact Us Section */}
        <div style={{ padding: '16px', minWidth: '280px', flex: '0 1 auto' }}>
          <h3 
            style={{
              fontSize: '18px',
              fontWeight: '700',
              marginBottom: '16px',
              textAlign: 'center',
              margin: '0 0 16px 0'
            }}
          >
            Contact Us
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            {/* Phone */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Phone style={{ width: '20px', height: '20px', flexShrink: 0 }} />
              <a 
                href="tel:+919566423456" 
                style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#000',
                  textDecoration: 'none'
                }}
              >
                95664 23456
              </a>
            </div>

            {/* Website */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Globe style={{ width: '20px', height: '20px', color: '#2563eb', flexShrink: 0 }} />
              <a 
                href="https://www.snsgroups.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#2563eb',
                  textDecoration: 'none'
                }}
              >
                www.snsgroups.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p 
        style={{
          margin: '16px 0 0 0',
          fontSize: '14px',
          color: '#4b5563',
          fontWeight: '400',
          textAlign: 'center'
        }}
      >
        Copyrighted © 2024 Design and upload by SNSGROUPS
      </p>
    </footer>
  );
};

export default Footer;
