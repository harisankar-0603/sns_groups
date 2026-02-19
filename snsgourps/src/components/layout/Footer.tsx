import snsFullLogo from '../../assets/images/sns_fullLogo.png';
// Removed MapPin/Phone import usage to match the user's snippet where these icons are not used in the layout
import { Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#ffffff',
        width: '100%',
        borderTop: '1px solid #000',
        paddingTop: '32px',
        paddingBottom: '16px',
        fontFamily: 'Arial, sans-serif',
        marginTop: '-80px', // Moving footer upwards much more as requested
        position: 'relative', // Ensure it sits on top of the hero
        zIndex: 10,
      }}
    >
      {/* ── Logo — always centered ── */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img
          src={snsFullLogo}
          alt="SNS Institutions"
          style={{
            maxWidth: '340px',
            width: '100%',
            height: 'auto',
            maxHeight: '144px',
            objectFit: 'contain',
          }}
        />
      </div>

      {/* ── Heading — centered (Updated to match snippet: "Get in Touch") ── */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#000', margin: 0, lineHeight: '1' }}>
          Get in Touch
        </h2>
      </div>

      {/* ── 3-Column Row ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          maxWidth: '1200px',
          margin: '0 auto 24px auto',
          padding: '0 40px',
          gap: '24px',
        }}
      >
        {/* Col 1 — Coimbatore */}
        <div
          style={{
            flex: '1',
            minWidth: '260px',
            textAlign: 'center',
          }}
        >
          {/* Restored Title */}
          <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#000', margin: '0 0 8px 0' }}>
            Coimbatore Address
          </h3>
          <p style={{ fontSize: '14px', fontWeight: '500', color: '#111', margin: '0 0 4px 0', lineHeight: '1.7' }}>
            536, Thudiyalur - Saravanampatti Rd, Vellakinar,
          </p>
          <p style={{ fontSize: '14px', fontWeight: '500', color: '#111', margin: 0, lineHeight: '1.7' }}>
            Coimbatore, Tamil Nadu 641029
          </p>
        </div>

        {/* Col 2 — Bengaluru */}
        <div
          style={{
            flex: '1',
            minWidth: '260px',
            textAlign: 'center',
          }}
        >
          {/* Restored Title */}
          <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#000', margin: '0 0 8px 0' }}>
            Bengaluru Address
          </h3>
          <p style={{ fontSize: '14px', fontWeight: '500', color: '#111', margin: '0 0 4px 0', lineHeight: '1.7' }}>
            Embassy Tech Village, ORR, Bellandur,
          </p>
          <p style={{ fontSize: '14px', fontWeight: '500', color: '#111', margin: 0, lineHeight: '1.7' }}>
            Bengaluru, Karnataka 560103.
          </p>
        </div>

        {/* Col 3 — Contact Us */}
        <div
          style={{
            flex: '1',
            minWidth: '260px',
            textAlign: 'center',
          }}
        >
          <h3
            style={{
              fontSize: '17px',
              fontWeight: '700',
              color: '#000',
              margin: '0 0 12px 0',
            }}
          >
            Contact Us
          </h3>

          {/* Website */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              marginBottom: '6px',
            }}
          >
             <span style={{ fontSize: '14px', fontWeight: '600', color: '#000' }}>Website:</span>
            <a
              href="https://www.snsgroups.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '14px', fontWeight: '500', color: '#2563eb', textDecoration: 'none' }}
              onMouseEnter={e => (e.target.style.textDecoration = 'underline')}
              onMouseLeave={e => (e.target.style.textDecoration = 'none')}
            >
              www.snsgroups.com
            </a>
          </div>

          {/* Email 1 */}
          <div style={{ marginBottom: '6px', lineHeight: '1.4' }}>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#000' }}>For Information: </span>
            <a
              href="mailto:ero.cgc@snsgroups.com"
              style={{ fontSize: '14px', fontWeight: '500', color: '#000', textDecoration: 'none', whiteSpace: 'nowrap' }}
              onMouseEnter={e => (e.target.style.textDecoration = 'underline')}
              onMouseLeave={e => (e.target.style.textDecoration = 'none')}
            >
              ero.cgc@snsgroups.com
            </a>
          </div>

          {/* Email 2 */}
          <div style={{ lineHeight: '1.4' }}>
             <span style={{ fontSize: '14px', fontWeight: '500', color: '#000' }}>For Careers: </span>
            <a
              href="mailto:job@snsgroups.com"
              style={{ fontSize: '14px', fontWeight: '500', color: '#000', textDecoration: 'none', whiteSpace: 'nowrap' }}
              onMouseEnter={e => (e.target.style.textDecoration = 'underline')}
              onMouseLeave={e => (e.target.style.textDecoration = 'none')}
            >
                job@snsgroups.com
            </a>
          </div>
        </div>
      </div>

      {/* ── Copyright ── */}
      <p
        style={{
          textAlign: 'center',
          fontSize: '13px',
          color: '#6b7280',
          margin: '24px 0 0 0',
        }}
      >
        Copyrighted © 2026 Design and upload by<br />
        SNSGROUPS
      </p>
    </footer>
  );
};

export default Footer;