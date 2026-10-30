import React, { useState } from 'react';
import Header from '../components/layout/Header';
import { Link, useNavigate } from 'react-router-dom';

export default function NewProject() {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState('Odesa Sharks — Third Kit'); // Для зручності тестування
  const [uploadState, setUploadState] = useState('initial'); // 'initial', 'selected', 'uploading', 'error'
  const [simulatedOutcome, setSimulatedOutcome] = useState('ok'); // З прототипу

  // Імітація вибору файлу
  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadState('selected');
    }
  };

  // Видалення файлу
  const handleRemoveFile = () => {
    setUploadState('initial');
  };

  // Початок завантаження
  const handleUploadStart = () => {
    if (uploadState !== 'selected' || !projectName.trim()) return;
    
    setUploadState('uploading');

    // Імітація запиту до сервера (затримка 2 секунди)
    setTimeout(() => {
      if (simulatedOutcome === 'ok') {
        // Успіх -> переходимо на екран обробки. (В реальності тут був би ID створеного проєкту)
        navigate('/projects/new-123/processing'); 
      } else {
        // Помилка
        setUploadState('error');
      }
    }, 2000);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--surface)' }}>
      <Header />
      
      <header className="ph">
        <ol className="crumbs" aria-label="Breadcrumb">
          <li><Link to="/dashboard" className="link" style={{ color: 'inherit', fontWeight: 'inherit', display: 'inline' }}>Dashboard</Link></li>
          <li className="sep" aria-hidden="true">/</li>
          <li><Link to="/projects" className="link" style={{ color: 'inherit', fontWeight: 'inherit', display: 'inline' }}>Projects</Link></li>
          <li className="sep" aria-hidden="true">/</li>
          <li aria-current="page">New project</li>
        </ol>
        <div className="ph-row">
          <div>
            <h1>New project</h1>
            <p className="ph-desc">Name the project, add the flattened customer design and confirm the production palette. Processing starts automatically once the project is created.</p>
          </div>
          <div className="ph-actions">
            <Link to="/projects" className="btn btn-ghost">Cancel</Link>
          </div>
        </div>
      </header>
      
      <main className="content">
        <div className="g12">
          
          <section className="s8" aria-label="Source image" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div className="sh" style={{ marginBottom: '0px' }}>
              <h2>Source image</h2>
              <span className="mono meta">JPG · JPEG · PNG</span>
            </div>

            {uploadState === 'initial' && (
              <div className="drop">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#17181C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 15V4M7.5 8.5 12 4l4.5 4.5" />
                  <path d="M4.5 15v3.5A1.5 1.5 0 0 0 6 20h12a1.5 1.5 0 0 0 1.5-1.5V15" />
                </svg>
                <div style={{ fontSize: '15px', fontWeight: 500, marginTop: '6px' }}>Drop a flattened design image</div>
                <div className="help">One flattened design per project. The original file is stored unchanged.</div>
                <span className="pick btn btn-secondary" style={{ marginTop: '10px' }}>
                  Select file
                  <input type="file" accept=".jpg,.jpeg,.png,image/jpeg,image/png" aria-label="Select source image" onChange={handleFileSelect} />
                </span>
              </div>
            )}

            {(uploadState === 'selected' || uploadState === 'uploading' || uploadState === 'error') && (
              <>
                <div className="prev">
                  <span className="plabel">Source · not modified</span>
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
                
                {/* Метадані файлу */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', padding: '4px 0px 0px' }}>
                  <dl className="kv" style={{ gridTemplateColumns: 'auto auto auto auto', columnGap: '12px', flex: '1 1 0%', fontSize: '12px' }}>
                    <dt>File</dt><dd className="mono">sharks-third_flat.png</dd>
                    <dt>Format</dt><dd className="mono">PNG</dd>
                    <dt>Dimensions</dt><dd className="mono">6000 × 7200 px</dd>
                    <dt>Size</dt><dd className="mono">24.6 MB</dd>
                  </dl>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <span className="pick btn btn-ghost btn-sm" style={{ pointerEvents: uploadState === 'uploading' ? 'none' : 'auto', opacity: uploadState === 'uploading' ? 0.5 : 1 }}>
                      Replace
                      <input type="file" accept=".jpg,.jpeg,.png,image/jpeg,image/png" aria-label="Replace source image" onChange={handleFileSelect} disabled={uploadState === 'uploading'}/>
                    </span>
                    <button className="btn btn-ghost btn-sm" onClick={handleRemoveFile} disabled={uploadState === 'uploading'}>Remove</button>
                  </div>
                </div>
              </>
            )}

            <p className="help">File size limit: set by the server — not available in this prototype, so no limit is shown here.</p>
          </section>

          <aside className="s4" aria-label="Project details" style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div className="field">
              <label className="lbl" htmlFor="np-name">Project name</label>
              <input 
                id="np-name" 
                className="input" 
                placeholder="e.g. Odesa Sharks — Third Kit" 
                aria-invalid="false" 
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                disabled={uploadState === 'uploading'}
              />
            </div>
            
            <div className="field">
              <label className="lbl" htmlFor="np-pal">Production palette</label>
              <span className="sel">
                <select id="np-pal" className="input" defaultValue="placeholder" disabled={uploadState === 'uploading'}>
                  <option value="placeholder">[PALETTE NAME] · version [VERSION]</option>
                </select>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m7 10 5 5 5-5" />
                </svg>
              </span>
              <span className="help">This palette and its version are recorded with the project and are not replaced if the palette changes later.</span>
              <div className="note">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="8.5" />
                  <path d="M12 16v-4.5M12 8h.01" />
                </svg>
                <span>Palette list and versions are not connected yet. Values in brackets are placeholders.</span>
              </div>
            </div>

            {/* Блок з кнопкою та станами помилки/завантаження */}
            <div style={{ paddingTop: '18px', borderTop: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              
              {uploadState === 'error' && (
                <div className="note err">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="8.5" />
                    <path d="M12 8v5M12 16h.01" />
                  </svg>
                  <span>
                    Upload failed. 
                    {simulatedOutcome === 'network' ? ' A network error occurred.' : ' The server rejected the file.'} Please try again.
                  </span>
                </div>
              )}

              {uploadState === 'uploading' ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', fontWeight: 500, color: 'var(--text-2)' }}>
                    <span>Uploading sharks-third_flat.png...</span>
                  </div>
                  <div className="indet"></div>
                </div>
              ) : (
                <button 
                  className="btn btn-primary" 
                  disabled={uploadState === 'initial' || projectName.trim() === ''} 
                  style={{ height: '40px' }}
                  onClick={handleUploadStart}
                >
                  Create project and start processing
                </button>
              )}
              
              <p className="help">Nothing is saved until the upload succeeds and the project is created.</p>
            </div>

            {/* Блок імітації бекенду */}
            <div className="proto">
              <span className="tag">Prototype · simulated backend</span>
              <label className="sel" style={{ flex: '1 1 0%', minWidth: '160px' }}>
                <select 
                  className="input" 
                  aria-label="Simulated outcome" 
                  value={simulatedOutcome}
                  onChange={(e) => setSimulatedOutcome(e.target.value)}
                  disabled={uploadState === 'uploading'}
                >
                  <option value="ok">Upload succeeds</option>
                  <option value="upload">Upload fails</option>
                  <option value="network">Network error</option>
                </select>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m7 10 5 5 5-5" />
                </svg>
              </label>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}