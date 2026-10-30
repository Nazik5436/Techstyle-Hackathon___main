import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Processing() {
  const navigate = useNavigate();
  const { id } = useParams(); // Отримуємо ID проєкту з URL (наприклад, "new-123")

  // Імітація процесингу на бекенді
  useEffect(() => {
    // Через 4 секунди переходимо на екран Workspace
    const timer = setTimeout(() => {
      // Тут можна було б додати логіку переходу на Failed, якщо сталася помилка,
      // але для прототипу ми вважаємо, що все завжди успішно
      navigate(`/projects/${id}`);
    }, 4000);

    // Очищаємо таймер, якщо користувач пішов зі сторінки раніше
    return () => clearTimeout(timer);
  }, [id, navigate]);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--surface)' }}>
      <Header />
      
      <header className="ph">
        <ol className="crumbs" aria-label="Breadcrumb">
          <li><Link to="/dashboard" className="link" style={{ color: 'inherit', fontWeight: 'inherit', display: 'inline' }}>Dashboard</Link></li>
          <li className="sep" aria-hidden="true">/</li>
          <li><Link to="/projects" className="link" style={{ color: 'inherit', fontWeight: 'inherit', display: 'inline' }}>Projects</Link></li>
          <li className="sep" aria-hidden="true">/</li>
          <li aria-current="page">Odesa Sharks — Third Kit</li>
        </ol>
        <div className="ph-row">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <h1>Odesa Sharks — Third Kit</h1>
              <span className="st"><i className="d-proc"></i>Processing</span>
            </div>
            <p className="ph-desc">The design is being analyzed automatically. You can leave this page — processing continues and the project stays in Projects.</p>
          </div>
          <div className="ph-actions">
            <Link to="/projects" className="btn btn-secondary">Back to projects</Link>
          </div>
        </div>
      </header>
      
      <main className="content">
        <div className="g12">
          <section className="s5" aria-label="Source image">
            <div className="sh">
              <h2>Source</h2>
              <span className="mono meta">sharks-third_flat.png</span>
            </div>
            <div className="prev" style={{ height: '440px' }}>
              <span className="plabel">Sample preview</span>
              <div className="art">
                {/* SVG з прототипу */}
                <svg viewBox="0 0 600 720" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Sample sportswear front panel design" style={{ display: 'block', width: '100%', height: '100%' }}>
                  <g display="inline">
                    <rect x="0" y="0" width="600" height="720" fill="#13203B"></rect>
                    <g stroke="#5DA6E6" strokeOpacity="0.16" strokeWidth="2">
                      <path d="M40 0V720M80 0V720M120 0V720M160 0V720M200 0V720M240 0V720M280 0V720M320 0V720M360 0V720M400 0V720M440 0V720M480 0V720M520 0V720M560 0V720"></path>
                    </g>
                  </g>
                  <g display="inline"><path d="M0 430 L600 150 L600 250 L0 530 Z" fill="#1E50D0"></path><path d="M0 538 L600 258 L600 270 L0 550 Z" fill="#5DA6E6"></path></g>
                  <g display="inline"><rect x="0" y="0" width="600" height="18" fill="#F3B80A"></rect><rect x="0" y="26" width="600" height="8" fill="#FFFFFF"></rect></g>
                  <g display="inline"><path d="M0 660 L50 640 L100 660 L150 640 L200 660 L250 640 L300 660 L350 640 L400 660 L450 640 L500 660 L550 640 L600 660 L600 680 L550 660 L500 680 L450 660 L400 680 L350 660 L300 680 L250 660 L200 680 L150 660 L100 680 L50 660 L0 680 Z" fill="#E4002B"></path><path d="M0 696 L50 676 L100 696 L150 676 L200 696 L250 676 L300 696 L350 676 L400 696 L450 676 L500 696 L550 676 L600 696 L600 706 L550 686 L500 706 L450 686 L400 706 L350 686 L300 706 L250 686 L200 706 L150 686 L100 706 L50 686 L0 706 Z" fill="#E4002B" fillOpacity="0.6"></path></g>
                  <g display="inline">
                    <path d="M90 95 H170 V140 Q170 182 130 196 Q90 182 90 140 Z" fill="#F3B80A"></path>
                    <path d="M98 103 H162 V140 Q162 175 130 187 Q98 175 98 140 Z" fill="none" stroke="#13203B" strokeWidth="3"></path>
                    <text x="130" y="155" textAnchor="middle" fontFamily="Geist, Arial, sans-serif" fontSize="34" fontWeight="700" fill="#13203B">KW</text>
                  </g>
                  <g display="inline"><path d="M442 150 L462 110 L480 110 L460 150 Z" fill="#FFFFFF"></path><path d="M472 150 L492 110 L510 110 L490 150 Z" fill="#FFFFFF" fillOpacity="0.7"></path></g>
                  <g display="inline"><circle cx="170" cy="330" r="26" fill="#FFFFFF"></circle><circle cx="170" cy="330" r="13" fill="none" stroke="#13203B" strokeWidth="6"></circle></g>
                  <g display="inline"><text x="212" y="352" fontFamily="Geist, Arial, sans-serif" fontSize="62" fontWeight="700" letterSpacing="6" fill="#FFFFFF">ARKA</text></g>
                  <g display="inline"><text x="300" y="552" textAnchor="middle" fontFamily="Geist, Arial, sans-serif" fontSize="150" fontWeight="700" fill="#FFFFFF" stroke="#F3B80A" strokeWidth="4">10</text></g>
                  <g display="inline"><text x="300" y="622" textAnchor="middle" fontFamily="Geist, Arial, sans-serif" fontSize="18" fontWeight="600" letterSpacing="8" fill="#F3B80A">KYIV · 2027</text></g>
                </svg>
              </div>
            </div>
          </section>
          
          <section className="s7" aria-label="Processing status" style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div>
              <span className="eyebrow">Status from processing service</span>
              <h2 style={{ fontSize: '22px', fontWeight: 500, letterSpacing: '-0.018em', marginTop: '10px' }}>Processing</h2>
              <p className="help" style={{ fontSize: '13px', marginTop: '4px' }}>Started Today 16:20. No time estimate is available.</p>
              <div className="indet" aria-hidden="true" style={{ marginTop: '16px', maxWidth: '520px' }}></div>
            </div>
            
            <div>
              <div className="sh">
                <h2>Processing steps</h2>
                <span className="meta">Stage progress not reported</span>
              </div>
              <ol className="steps">
                <li>
                  <span className="n">01</span><span className="ic"><i></i></span><span className="dim">Uploading source image</span>
                  <span className="st" style={{ marginLeft: 'auto' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: 'var(--ok)' }}>
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="meta">Confirmed</span>
                  </span>
                </li>
                <li><span className="n">02</span><span className="ic"><i></i></span><span className="dim">Analyzing the design</span></li>
                <li><span className="n">03</span><span className="ic"><i></i></span><span className="dim">Extracting the color palette</span></li>
                <li><span className="n">04</span><span className="ic"><i></i></span><span className="dim">Detecting graphical elements</span></li>
                <li><span className="n">05</span><span className="ic"><i></i></span><span className="dim">Separating logos and other elements</span></li>
                <li><span className="n">06</span><span className="ic"><i></i></span><span className="dim">Reconstructing the background</span></li>
                <li><span className="n">07</span><span className="ic"><i></i></span><span className="dim">Preparing layers</span></li>
                <li><span className="n">08</span><span className="ic"><i></i></span><span className="dim">Generating the quality report</span></li>
              </ol>
              <p className="help" style={{ marginTop: '10px' }}>The service currently reports overall status only, so individual steps are not marked as done. Step progress will appear here if the service starts reporting it.</p>
            </div>
            
            <div className="proto">
              <span className="tag">Prototype · simulated backend</span>
              {/* Кнопки для миттєвого переходу, щоб не чекати 4 секунди */}
              <button className="btn btn-secondary btn-sm" onClick={() => navigate(`/projects/${id}`)}>Simulate: processing completed</button>
              <button className="btn btn-secondary btn-sm" onClick={() => console.log('Simulate: processing failed')}>Simulate: processing failed</button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}