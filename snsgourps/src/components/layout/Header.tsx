const Header = () => {
  return (
    <header 
      style={{
        backgroundColor: '#ffffff',
        padding: '16px 24px',
        width: '100%'
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
          width: '100%'
        }}
      >
        <img 
          src="/sns.png" 
          alt="SNS Groups" 
          style={{
            height: '40px',
            width: 'auto',
            objectFit: 'contain',
            paddingLeft: '60px'
          }}
        />
      </div>
    </header>
  );
};

export default Header;