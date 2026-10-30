import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="gnav">
      <div className="g-l">
        <svg width="20" height="20" viewBox="0 0 20 20" role="img" aria-label="Production Design System">
          <circle cx="4" cy="4" r="1.7" fill="#17181C" />
          <circle cx="10" cy="4" r="1.7" fill="#17181C" />
          <circle cx="16" cy="4" r="1.7" fill="#17181C" />
          <circle cx="4" cy="10" r="1.7" fill="#17181C" />
          <circle cx="10" cy="10" r="2.3" fill="#3157D5" />
          <circle cx="16" cy="10" r="1.7" fill="#17181C" />
          <circle cx="4" cy="16" r="1.7" fill="#17181C" />
          <circle cx="10" cy="16" r="1.7" fill="#17181C" />
          <circle cx="16" cy="16" r="1.7" fill="#17181C" />
        </svg>
      </div>
      
      <nav className="g-c" aria-label="Main">
        <Link to="/dashboard" className="gl on">Dashboard</Link>
        <Link to="/projects" className="gl">Projects<span className="count">6</span></Link>
        <button className="gl" title="AI Design Decomposer — available">
          <span className="live" role="img" aria-label="Available"></span>
          <span className="full">AI Design Decomposer</span>
          <span className="short">Decomposer</span>
        </button>
        <div style={{ position: 'relative', display: 'flex' }}>
          <button className="gl" aria-haspopup="menu" aria-expanded="false">
            Modules
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m7 10 5 5 5-5" />
            </svg>
          </button>
        </div>
      </nav>

      <div className="g-r">
        <button className="icon-btn" aria-label="Help & documentation" title="Help & documentation">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="8.5" />
            <path d="M9.5 9.5a2.5 2.5 0 0 1 4.9.7c0 1.7-2.4 2-2.4 3.6M12 16.8h.01" />
          </svg>
        </button>
        <Link className="icon-btn" to="/settings/general" aria-label="Settings" title="Settings">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 7h9M17 7h3M4 12h3M11 12h9M4 17h11M19 17h1" />
            <circle cx="15" cy="7" r="2" />
            <circle cx="9" cy="12" r="2" />
            <circle cx="17" cy="17" r="2" />
          </svg>
        </Link>
        <span aria-hidden="true" style={{ width: '1px', height: '20px', background: 'var(--line)', margin: '0px 8px' }}></span>
        <span className="avatar" title="Olena Kovalenko">OK</span>
      </div>
    </header>
  );
}