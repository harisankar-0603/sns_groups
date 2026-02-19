const Header = () => {
  return (
    <header
      style={{
        backgroundColor: '#ffffff',
        width: '100%',
      }}
    >
      {/* Desktop Header - pill-shaped container */}
      <div
        className="hidden md:block"
        style={{
          padding: '16px 24px',
        }}
      >
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '100px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: '1px solid #f3f4f6',
            padding: '12px',
            display: 'inline-block',
            width: '100%',
          }}
        >
          <img
            src="/sns.png"
            alt="SNS Groups"
            style={{
              height: '40px',
              width: 'auto',
              objectFit: 'contain',
              paddingLeft: '60px',
            }}
          />
        </div>
      </div>

      {/* Mobile Header - simple white bar */}
      <div
        className="flex md:hidden flex-row items-center justify-between"
        style={{
          padding: '8px 16px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        <img
          src="/sns.png"
          alt="SNS Groups"
          style={{
            height: '48px',
            width: 'auto',
            objectFit: 'contain',
          }}
        />
      </div>
    </header>
  );
};

export default Header;