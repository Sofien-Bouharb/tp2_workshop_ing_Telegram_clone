function Header(props) {
  const title = props.title || "Telegram";

  return (
    <div className="sidebar-header">
      <div className="branding">
<div className="telegram-logo">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21.5 3.5L18.1 20c-.3 1.2-1 1.5-2 1l-5.3-3.9-2.6 2.5c-.3.3-.5.5-1 .5l.4-5.4 9.8-8.9c.4-.4-.1-.6-.6-.2L4.7 13.1l-5.2-1.6c-1.1-.3-1.1-1.1.2-1.6L20.2 2c.9-.3 1.7.2 1.3 1.5z"/>
  </svg>
</div>        <h1 className="app-title">{title}</h1>
      </div>
      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Rechercher"
          
        />
      </div>
    </div>
  );
}

export default Header;
