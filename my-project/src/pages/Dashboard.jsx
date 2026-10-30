import React from 'react';
import Header from '../components/layout/Header';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div style={{ position: 'relative', minHeight: '900px', display: 'flex', flexDirection: 'column', background: 'var(--surface)' }}>
      {/* Наша верхня навігація */}
      <Header />
      
      {/* Шапка сторінки */}
      <header className="ph">
        <div className="ph-row">
          <div>
            <h1>Dashboard</h1>
            <p className="ph-desc">Welcome back, Olena. Prepare customer sportswear designs for sublimation production.</p>
          </div>
          <div className="ph-actions">
            <Link to="/projects/new" className="btn btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <path d="M12 5v14M5 12h14" />
              </svg>
              New project
            </Link>
          </div>
        </div>
      </header>

      {/* Головний контент */}
      <main className="content">
        <section aria-label="AI Design Decomposer" style={{ display: 'flex', alignItems: 'center', gap: '24px 40px', flexWrap: 'wrap', paddingBottom: '28px', borderBottom: '1px solid var(--line)' }}>
          <div style={{ flex: '1 1 420px', minWidth: '0px' }}>
            <span className="eyebrow"><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--ok)' }}></span>Workspace · Available</span>
            <h2 style={{ fontSize: '22px', fontWeight: 500, lineHeight: '28px', letterSpacing: '-0.018em', marginTop: '10px' }}>AI Design Decomposer</h2>
            <p style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: 1.55, marginTop: '6px', maxWidth: '560px' }}>Upload a flattened customer design. It is split into production-ready layers with a color match and a quality report, ready for your review.</p>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn btn-secondary">
              Start a decomposition
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </section>

        <div className="g12">
          <section className="s8" aria-label="Recent projects">
            <div className="sh">
              <h2>Recent projects</h2>
              <Link to="/projects" className="link">
                All projects
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
            
            <div className="tblw">
              <table className="tbl">
                <thead>
                  <tr>
                    <th style={{ width: '58px' }}></th>
                    <th>Project</th>
                    <th>Status</th>
                    <th>Modified</th>
                    <th style={{ width: '90px' }}><span style={{ position: 'absolute', left: '-9999px' }}>Open</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><div className="thumb" style={{ background: 'linear-gradient(135deg, rgb(232, 236, 239) 0px, rgb(232, 236, 239) 62%, rgb(31, 79, 209) 62%, rgb(31, 79, 209) 100%)' }}></div></td>
                    <td>
                      <div>Lviv Running Club — Race Singlet</div>
                      <div className="t" style={{ marginTop: '3px' }}>lrc-singlet_v3.jpg</div>
                    </td>
                    <td><span className="st "><i className="d-proc"></i>Processing</span></td>
                    <td className="t">Today 15:58</td>
                    <td style={{ textAlign: 'right' }}>
                      <button className="btn btn-ghost btn-sm">View status</button>
                    </td>
                  </tr>
                  <tr>
                    <td><div className="thumb" style={{ background: 'linear-gradient(135deg, rgb(19, 32, 59) 0px, rgb(19, 32, 59) 62%, rgb(243, 184, 10) 62%, rgb(243, 184, 10) 100%)' }}></div></td>
                    <td>
                      <div>Kyiv Wolves — Home Jersey 2027</div>
                      <div className="t" style={{ marginTop: '3px' }}>kw-home-27_flat.png</div>
                    </td>
                    <td><span className="st "><i className="d-warn"></i>Review required</span></td>
                    <td className="t">Today 15:42</td>
                    <td style={{ textAlign: 'right' }}>
                      <Link className="btn btn-ghost btn-sm" to="/projects/1">Open</Link>
                    </td>
                  </tr>
                  <tr>
                    <td><div className="thumb" style={{ background: 'linear-gradient(135deg, rgb(242, 183, 5) 0px, rgb(242, 183, 5) 62%, rgb(17, 18, 20) 62%, rgb(17, 18, 20) 100%)' }}></div></td>
                    <td>
                      <div>Volta Cycling — Summer Jersey</div>
                      <div className="t" style={{ marginTop: '3px' }}>volta-summer.jpg</div>
                    </td>
                    <td>
                      <span className="st">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: 'var(--ok)' }}>
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        Approved with warnings
                      </span>
                    </td>
                    <td className="t">Yesterday</td>
                    <td style={{ textAlign: 'right' }}>
                      <Link className="btn btn-ghost btn-sm" to="/projects/2">Open</Link>
                    </td>
                  </tr>
                  <tr>
                    <td><div className="thumb" style={{ background: 'linear-gradient(135deg, rgb(95, 168, 232) 0px, rgb(95, 168, 232) 62%, rgb(255, 255, 255) 62%, rgb(255, 255, 255) 100%)' }}></div></td>
                    <td>
                      <div>Odesa Sharks — Away Kit</div>
                      <div className="t" style={{ marginTop: '3px' }}>sharks-away.png</div>
                    </td>
                    <td>
                      <span className="st">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: 'var(--ok)' }}>
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        Approved
                      </span>
                    </td>
                    <td className="t">27 Oct</td>
                    <td style={{ textAlign: 'right' }}>
                      <Link className="btn btn-ghost btn-sm" to="/projects/3">Open</Link>
                    </td>
                  </tr>
                  <tr>
                    <td><div className="thumb" style={{ background: 'linear-gradient(135deg, rgb(200, 16, 46) 0px, rgb(200, 16, 46) 62%, rgb(20, 33, 61) 62%, rgb(20, 33, 61) 100%)' }}></div></td>
                    <td>
                      <div>Kharkiv Hoops — Warm-up Top</div>
                      <div className="t" style={{ marginTop: '3px' }}>hoops-warmup.jpg</div>
                    </td>
                    <td><span className="st err"><i className="d-err"></i>Failed</span></td>
                    <td className="t">26 Oct</td>
                    <td style={{ textAlign: 'right' }}>
                      <button className="btn btn-ghost btn-sm">View error</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="s4" aria-label="Module availability">
            <div className="sh">
              <h2>Modules</h2>
              <span className="mono meta">1 / 5 connected</span>
            </div>
            <div style={{ borderTop: '1px solid var(--line)' }}>
              <button className="mod-row">
                <span className="nm">AI Design Decomposer</span>
                <span className="st"><i className="d-ok"></i>Available</span>
              </button>
              <Link className="mod-row off" to="/modules/ai-designer">
                <span className="nm">AI Sportswear Designer</span>
                <span className="st dim"><i className="d-off"></i>Not connected</span>
              </Link>
              <Link className="mod-row off" to="/modules/tech-pack">
                <span className="nm">Placement Tech-Pack Generator</span>
                <span className="st dim"><i className="d-off"></i>Not connected</span>
              </Link>
              <Link className="mod-row off" to="/modules/tiff">
                <span className="nm">TIFF Optimizer</span>
                <span className="st dim"><i className="d-off"></i>Not connected</span>
              </Link>
              <Link className="mod-row off" to="/modules/material">
                <span className="nm">Material Consumption Calculator</span>
                <span className="st dim"><i className="d-off"></i>Not connected</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
