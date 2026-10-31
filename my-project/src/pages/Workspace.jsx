import React, { useState } from 'react';
import Header from '../components/layout/Header';
import { Link } from 'react-router-dom';

export default function Workspace() {
  const [activeTab, setActiveTab] = useState('quality'); // 'overview', 'colors', 'layers', 'quality'
  const [viewMode, setViewMode] = useState('result'); // 'original', 'result', 'split'
  const [isInspectorVisible, setIsInspectorVisible] = useState(true);
  
  // -- СТАН ДЛЯ ШАРІВ --
  const [groups, setGroups] = useState({
    background: { isOpen: true },
    logos: { isOpen: true },
    text: { isOpen: true },
    decorative: { isOpen: true }
  });

  const toggleGroup = (groupName) => {
    setGroups(prev => ({
      ...prev,
      [groupName]: { ...prev[groupName], isOpen: !prev[groupName].isOpen }
    }));
  };

  // -- СТАН ДЛЯ КОЛЬОРІВ --
  const [openColorIndex, setOpenColorIndex] = useState(null); 
  const detectedColors = [
    { id: 0, hex: '#13203B', rgb: 'rgb(19, 32, 59)', name: 'Background', prodId: 'P-012 Navy', prodRgb: 'rgb(20, 33, 61)', match: 'Auto' },
    { id: 1, hex: '#1E50D0', rgb: 'rgb(30, 80, 208)', name: 'Diagonal sash', prodId: 'P-018 Royal', prodRgb: 'rgb(31, 79, 209)', match: 'Auto' },
    { id: 2, hex: '#F3B80A', rgb: 'rgb(243, 184, 10)', name: 'Crest, shoulder band, number outline', prodId: 'P-031 Gold', prodRgb: 'rgb(242, 183, 5)', match: 'Auto' },
    { id: 3, hex: '#FFFFFF', rgb: 'rgb(255, 255, 255)', name: 'Sponsor, number, maker mark', prodId: 'P-001 White', prodRgb: 'rgb(255, 255, 255)', match: 'Auto' },
    { id: 4, hex: '#E4002B', rgb: 'rgb(228, 0, 43)', name: 'Hem chevrons', prodId: 'P-037 Red', prodRgb: 'rgb(200, 16, 46)', match: 'Manual' },
    { id: 5, hex: '#5DA6E6', rgb: 'rgb(93, 166, 230)', name: 'Pinstripes, sash edge', prodId: 'P-023 Sky', prodRgb: 'rgb(95, 168, 232)', match: 'Auto' }
  ];
  const palette = [
    { id: 'P-001', name: 'White', rgb: 'rgb(255, 255, 255)' },
    { id: 'P-004', name: 'Black', rgb: 'rgb(17, 18, 20)' },
    { id: 'P-012', name: 'Navy', rgb: 'rgb(20, 33, 61)' },
    { id: 'P-018', name: 'Royal', rgb: 'rgb(31, 79, 209)' },
    { id: 'P-023', name: 'Sky', rgb: 'rgb(95, 168, 232)' },
    { id: 'P-031', name: 'Gold', rgb: 'rgb(242, 183, 5)' },
    { id: 'P-037', name: 'Red', rgb: 'rgb(200, 16, 46)' },
    { id: 'P-044', name: 'Silver', rgb: 'rgb(167, 173, 180)' }
  ];

  // -- ДАНІ ДЛЯ ВКЛАДКИ QUALITY --
  const qualityIssues = {
    critical: [
      { id: 'c1', title: 'Color without production match', desc: 'Detected color #E4002B has no match in the production palette. Approval is blocked until a production color is selected.', layer: 'Hem chevrons', actionText: 'Choose production color' }
    ],
    warnings: [
      { id: 'w1', title: 'Low source resolution', desc: 'The manufacturer mark is small in the source image; its edges may look soft at print size.', layer: 'Manufacturer mark', actionText: 'Accept warning' },
      { id: 'w2', title: 'Thin outline', desc: 'The front number outline is thin in the source and may merge with the fill after sublimation.', layer: 'Front number', actionText: 'Accept warning' }
    ],
    info: [
      { id: 'i1', title: 'Background reconstructed', desc: 'Areas hidden behind extracted elements were rebuilt in the background layer.', layer: 'Background' },
      { id: 'i2', title: 'Text kept as image layers', desc: 'Text elements are raster layers, not editable text.', layer: 'Sponsor wordmark' }
    ]
  };

  return (
    <div style={{ position: 'relative', height: '100vh', minHeight: '680px', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'var(--surface)' }}>
      {/* Глобальна навігація */}
      <header className="gnav" style={{ height: '44px' }}>
        <div className="g-l">
          <svg width="18" height="18" viewBox="0 0 20 20" role="img" aria-label="Production Design System">
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
          <Link className="gl" to="/dashboard">Dashboard</Link>
          <Link className="gl" to="/projects">Projects</Link>
          <span className="gl on" aria-current="page"><span className="live" role="img" aria-label="Available"></span>AI Design Decomposer</span>
          <div style={{ position: 'relative', display: 'flex' }}>
            <button className="gl" aria-haspopup="menu" aria-expanded="false">
              Modules
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m7 10 5 5 5-5" /></svg>
            </button>
          </div>
        </nav>
        <div className="g-r">
          <button className="icon-btn" aria-label="Help & documentation" title="Help & documentation">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5" /><path d="M9.5 9.5a2.5 2.5 0 0 1 4.9.7c0 1.7-2.4 2-2.4 3.6M12 16.8h.01" /></svg>
          </button>
          <Link className="icon-btn" to="/settings/general" aria-label="Settings" title="Settings">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 7h9M17 7h3M4 12h3M11 12h9M4 17h11M19 17h1" /><circle cx="15" cy="7" r="2" /><circle cx="9" cy="12" r="2" /><circle cx="17" cy="17" r="2" /></svg>
          </Link>
          <span className="avatar" title="Olena Kovalenko" style={{ marginLeft: '4px' }}>OK</span>
        </div>
      </header>

      {/* Панель інструментів проєкту */}
      <div className="ptool">
        <div className="p-l">
          <Link className="crumb hide-md" to="/projects">Projects /</Link>
          <h1 className="pname" title="Kyiv Wolves — Home Jersey 2027">Kyiv Wolves — Home Jersey 2027</h1>
          <span className="st"><i className="d-warn"></i>Review required</span>
          <span className="vsep hide-lg" aria-hidden="true"></span>
          <span className="save hide-lg" role="status" aria-live="polite" title="Prototype: changes are kept for this session only — no backend is connected.">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
            Saved
          </span>
        </div>

        <div className="seg" role="radiogroup" aria-label="Comparison mode">
          <button className={viewMode === 'original' ? 'on' : ''} role="radio" aria-checked={viewMode === 'original'} onClick={() => setViewMode('original')}>Original</button>
          <button className={viewMode === 'result' ? 'on' : ''} role="radio" aria-checked={viewMode === 'result'} onClick={() => setViewMode('result')}>Result</button>
          <button className={viewMode === 'split' ? 'on' : ''} role="radio" aria-checked={viewMode === 'split'} onClick={() => setViewMode('split')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3.5" y="5" width="17" height="14" rx="2" /><path d="M12 5v14" /></svg>
            <span className="sl">Side by side</span>
          </button>
        </div>

        <div className="p-r">
          <span className="tag tag-sample hide-md" title="Artwork, colors, layers and quality issues are sample data. Nothing is sent to a backend.">Sample data</span>
          <button className="link err">1 critical issue blocks approval</button>
          <button className="btn btn-primary" disabled>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
            Approve
          </button>
          <button 
            className={`icon-btn ${isInspectorVisible ? 'on' : ''}`} 
            aria-label={isInspectorVisible ? "Hide inspector" : "Show inspector"}
            onClick={() => setIsInspectorVisible(!isInspectorVisible)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M15 4v16" /></svg>
          </button>
        </div>
      </div>

      <div className="wbody">
        {/* Полотно */}
        <div className="cvcol">
          <div className="vp" aria-label="Canvas. Drag to pan." role="region">
            <div className="pane">
              <span className="plabel">{viewMode === 'original' ? 'Original' : 'Result'}</span>
              <div className="stage" style={{ left: '257px', top: '32px', width: '587px', height: '704px' }}>
                <svg viewBox="0 0 600 720" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Sample sportswear front panel design" style={{ display: 'block', width: '100%', height: '100%' }}>
                  <g display="inline">
                    <rect x="0" y="0" width="600" height="720" fill="#13203B"></rect>
                    <g stroke="#5DA6E6" strokeOpacity="0.16" strokeWidth="2"><path d="M40 0V720M80 0V720M120 0V720M160 0V720M200 0V720M240 0V720M280 0V720M320 0V720M360 0V720M400 0V720M440 0V720M480 0V720M520 0V720M560 0V720"></path></g>
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
                <div className="selbox" style={{ left: '14.67%', top: '12.78%', width: '14%', height: '14.72%' }}><span>Club crest</span></div>
              </div>
            </div>
            
            {viewMode === 'split' && (
              <div className="pane">
                 <span className="plabel">Result</span>
                 <div style={{ padding: '20px', color: '#fff' }}>Side-by-side mode active</div>
              </div>
            )}
          </div>

          <div className="cfoot">
            <button className="fb" aria-label="Zoom out" title="Zoom out"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M5 12h14" /></svg></button>
            <span className="fm" aria-live="polite" style={{ minWidth: '48px', textAlign: 'center', color: 'rgb(230, 231, 234)' }}>9.8%</span>
            <button className="fb" aria-label="Zoom in" title="Zoom in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg></button>
            <span className="fsep" aria-hidden="true"></span>
            <button className="fb on">Fit</button>
            <button className="fb">100%</button>
            <span className="fsep" aria-hidden="true"></span>
            <span className="fm">6000 × 7200 px</span>
            <span className="fm hide-md" style={{ marginLeft: '8px' }}>X —  Y —</span>
            <span style={{ flex: '1 1 0%' }}></span>
            <span className="fm hide-lg">Club crest · 880, 920 · 840 × 1060 px</span>
            <span className="fsep hide-lg" aria-hidden="true"></span>
            <span className="fm">Drag to pan</span>
          </div>
        </div>

        {/* Боковий інспектор */}
        {isInspectorVisible && (
          <aside className="insp" aria-label="Inspector">
            <div className="itabs" role="tablist">
              <button className={`tab ${activeTab === 'overview' ? 'on' : ''}`} role="tab" onClick={() => setActiveTab('overview')}>Overview</button>
              <button className={`tab ${activeTab === 'colors' ? 'on' : ''}`} role="tab" onClick={() => setActiveTab('colors')}>Colors<span className="n">6</span></button>
              <button className={`tab ${activeTab === 'layers' ? 'on' : ''}`} role="tab" onClick={() => setActiveTab('layers')}>Layers<span className="n">10</span></button>
              <button className={`tab ${activeTab === 'quality' ? 'on' : ''}`} role="tab" onClick={() => setActiveTab('quality')}>Quality<span className="pip" style={{ background: 'rgb(194, 69, 58)' }}></span></button>
            </div>
            
            <div className="ibody">
              
              {/* --- ВКЛАДКА COLORS --- */}
              {activeTab === 'colors' && (
                <>
                  <p className="help" style={{ fontSize: '12px', color: 'var(--text-2)', lineHeight: 1.5, marginBottom: '10px' }}>
                    Detected colors and their production matches. Choosing another production color keeps the automatic match on record.
                  </p>
                  {detectedColors.map((color, idx) => (
                    <div key={color.id}>
                      <button className={`crow ${openColorIndex === idx ? 'open' : ''}`} aria-expanded={openColorIndex === idx} onClick={() => setOpenColorIndex(openColorIndex === idx ? null : idx)}>
                        <span className="sw" style={{ background: color.rgb }}></span>
                        <span className="cmid">
                          <span className="hx">{color.hex}</span>
                          <span className="wh">{color.name}</span>
                        </span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A0A3AA" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                        <span className="cprod">
                          <span className="pn"><span className="pid">{color.prodId}</span><span className={`tag ${color.match === 'Auto' ? 'tag-auto' : 'tag-man'}`}>{color.match}</span></span>
                          <span className="sw" style={{ background: color.prodRgb }}></span>
                        </span>
                      </button>
                      {openColorIndex === idx && (
                        <div className="picker">
                          <div className="eyebrow" style={{ marginBottom: '8px' }}>Production palette</div>
                          <div className="pgrid">
                            {palette.map(p => (
                              <button key={p.id} className={`pal ${color.prodId.includes(p.id) ? 'cur' : ''}`} aria-pressed={color.prodId.includes(p.id)} title={`${p.id} ${p.name}`}>
                                <span className="ps" style={{ background: p.rgb }}></span>
                                <span className="pl">{p.id}<br/>{p.name}</span>
                              </button>
                            ))}
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', marginTop: '10px', fontSize: '12px', color: 'var(--text-2)' }}>
                            <span>Automatic match: <span className="mono" style={{ color: 'var(--text)' }}>none</span></span>
                            <button className="link">Reset to automatic</button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </>
              )}

              {/* --- ВКЛАДКА LAYERS --- */}
              {activeTab === 'layers' && (
                <>
                  {/* Background */}
                  <div className="grp">
                    <div className="grp-row">
                      <button className={`grp-h ${!groups.background.isOpen ? 'closed' : ''}`} aria-expanded={groups.background.isOpen} onClick={() => toggleGroup('background')}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m7 10 5 5 5-5" /></svg>Background<span className="cnt">1</span>
                      </button>
                      <button className="eye" aria-label="Hide group" title="Hide group"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" /><circle cx="12" cy="12" r="2.8" /></svg></button>
                    </div>
                    {groups.background.isOpen && (
                      <div style={{ paddingBottom: '6px' }}>
                        <div className="lrow" style={{ paddingRight: '0px' }}>
                          <button className="lrow" aria-pressed="false" style={{ padding: '0px', height: '40px', flex: '1 1 0%', minWidth: '0px', background: 'none', boxShadow: 'none' }}>
                            <span className="th"><i style={{ background: 'rgb(19, 32, 59)' }}></i></span><span className="ln">Background</span><span className="lt">Reconstructed</span>
                          </button>
                          <button className="eye" aria-label="Hide" title="Hide"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" /><circle cx="12" cy="12" r="2.8" /></svg></button>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Інші групи можна додавати за аналогією (Logos, Text, Decorative), як у попередній версії */}
                  <p className="help" style={{ fontSize: '12px', color: 'var(--text-2)', lineHeight: 1.5, marginTop: '14px' }}>
                    Every layer keeps the full 6000 × 7200 px canvas and the same origin, so layers stay aligned when composited. Visibility affects the Result view only.
                  </p>
                </>
              )}

              {/* --- ВКЛАДКА QUALITY --- */}
              {activeTab === 'quality' && (
                <>
                  <div className="qsum note err">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 8v5M12 16h.01"></path></svg>
                    <div><div className="t">Critical issue present</div><div className="d">Approval and export are blocked until it is resolved.</div></div>
                  </div>

                  {/* Critical */}
                  <div>
                    <div className="qsec-h"><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgb(194, 69, 58)' }}></span>Critical · {qualityIssues.critical.length}</div>
                    {qualityIssues.critical.map(issue => (
                      <div className="qi" key={issue.id}>
                        <div className="qt"><i style={{ background: 'rgb(194, 69, 58)' }}></i>{issue.title}</div>
                        <p className="qd">{issue.desc}</p>
                        <div className="qm">
                          <button className="link">Layer: {issue.layer}</button>
                          <button className="btn btn-secondary btn-sm">{issue.actionText}</button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Warnings */}
                  <div>
                    <div className="qsec-h"><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgb(183, 121, 31)' }}></span>Warnings · {qualityIssues.warnings.length}</div>
                    {qualityIssues.warnings.map(issue => (
                      <div className="qi" key={issue.id}>
                        <div className="qt"><i style={{ background: 'rgb(183, 121, 31)' }}></i>{issue.title}</div>
                        <p className="qd">{issue.desc}</p>
                        <div className="qm">
                          <button className="link">Layer: {issue.layer}</button>
                          <button className="btn btn-secondary btn-sm">{issue.actionText}</button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Info */}
                  <div>
                    <div className="qsec-h"><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgb(138, 141, 149)' }}></span>Information · {qualityIssues.info.length}</div>
                    {qualityIssues.info.map(issue => (
                      <div className="qi" key={issue.id}>
                        <div className="qt"><i style={{ background: 'rgb(138, 141, 149)' }}></i>{issue.title}</div>
                        <p className="qd">{issue.desc}</p>
                        <div className="qm">
                          <button className="link">Layer: {issue.layer}</button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="help" style={{ fontSize: '12px', color: 'var(--text-2)', lineHeight: 1.5, marginTop: '14px' }}>
                    Sample issues for the prototype. The real list comes from the decomposition quality report.
                  </p>
                </>
              )}

              {activeTab === 'overview' && (
                <div style={{ padding: '20px', color: 'var(--text-2)', textAlign: 'center' }}>Overview content will be here</div>
              )}
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}