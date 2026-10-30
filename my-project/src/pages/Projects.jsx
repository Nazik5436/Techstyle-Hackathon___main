import React from 'react';
import Header from '../components/layout/Header';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div style={{ position: 'relative', minHeight: '900px', display: 'flex', flexDirection: 'column', background: 'var(--surface)' }}>
      <Header />
      <header className="ph">
        <ol className="crumbs" aria-label="Breadcrumb">
          <li><button>Dashboard</button></li>
          <li className="sep" aria-hidden="true">/</li>
          <li aria-current="page">Projects</li>
        </ol>
        <div className="ph-row">
          <div>
            <h1>Projects</h1>
            <p className="ph-desc">Find and reopen decomposition projects.</p>
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
      <main className="content" style={{ gap: '18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <label className="srch" style={{ flex: '0 1 320px', minWidth: '220px' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="6.5" />
              <path d="m20 20-4-4" />
            </svg>
            <input className="input" type="search" placeholder="Search by project or file name" aria-label="Search projects" />
          </label>
          <div className="chips" role="radiogroup" aria-label="Filter by status">
            <button className="chip on" role="radio" aria-checked="true">All<span className="n">6</span></button>
            <button className="chip" role="radio" aria-checked="false">Processing<span className="n">1</span></button>
            <button className="chip" role="radio" aria-checked="false">Review required<span className="n">2</span></button>
            <button className="chip" role="radio" aria-checked="false">Approved<span className="n">1</span></button>
            <button className="chip" role="radio" aria-checked="false">Approved with warnings<span className="n">1</span></button>
            <button className="chip" role="radio" aria-checked="false">Failed<span className="n">1</span></button>
          </div>
          <div style={{ flex: '1 1 0%' }}></div>
          <label className="sel" style={{ width: '200px' }}>
            <select className="input" aria-label="Sort projects" defaultValue="modified">
              <option value="modified">Recently modified</option>
              <option value="created">Recently created</option>
              <option value="name">Project name A–Z</option>
            </select>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m7 10 5 5 5-5" />
            </svg>
          </label>
        </div>

        <div style={{ position: 'relative' }}>
          <div className="tblw">
            <table className="tbl">
              <thead>
                <tr>
                  <th style={{ width: '58px' }}></th>
                  <th>Project</th>
                  <th>Created</th>
                  <th>Modified</th>
                  <th>Status</th>
                  <th style={{ width: '128px' }}><span style={{ position: 'absolute', left: '-9999px' }}>Actions</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><div className="thumb" style={{ background: 'linear-gradient(135deg, rgb(232, 236, 239) 0px, rgb(232, 236, 239) 62%, rgb(31, 79, 209) 62%, rgb(31, 79, 209) 100%)' }}></div></td>
                  <td>
                    <div>Lviv Running Club — Race Singlet</div>
                    <div className="t" style={{ marginTop: '3px' }}>lrc-singlet_v3.jpg</div>
                  </td>
                  <td className="t">Today 15:58</td>
                  <td className="t">Today 15:58</td>
                  <td><span className="st"><i className="d-proc"></i>Processing</span></td>
                  <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                    <button className="btn btn-ghost btn-sm">View status</button>
                    <button className="icon-btn" aria-label="More actions for Lviv Running Club — Race Singlet" aria-haspopup="menu">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <circle cx="5.5" cy="12" r="1.4" />
                        <circle cx="12" cy="12" r="1.4" />
                        <circle cx="18.5" cy="12" r="1.4" />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td><div className="thumb" style={{ background: 'linear-gradient(135deg, rgb(19, 32, 59) 0px, rgb(19, 32, 59) 62%, rgb(243, 184, 10) 62%, rgb(243, 184, 10) 100%)' }}></div></td>
                  <td>
                    <div>Kyiv Wolves — Home Jersey 2027</div>
                    <div className="t" style={{ marginTop: '3px' }}>kw-home-27_flat.png</div>
                  </td>
                  <td className="t">Today 09:10</td>
                  <td className="t">Today 15:42</td>
                  <td><span className="st"><i className="d-warn"></i>Review required</span></td>
                  <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                    <Link className="btn btn-ghost btn-sm" to="/projects/2">Open</Link>
                    <button className="icon-btn" aria-label="More actions for Kyiv Wolves — Home Jersey 2027" aria-haspopup="menu">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <circle cx="5.5" cy="12" r="1.4" />
                        <circle cx="12" cy="12" r="1.4" />
                        <circle cx="18.5" cy="12" r="1.4" />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td><div className="thumb" style={{ background: 'linear-gradient(135deg, rgb(242, 183, 5) 0px, rgb(242, 183, 5) 62%, rgb(17, 18, 20) 62%, rgb(17, 18, 20) 100%)' }}></div></td>
                  <td>
                    <div>Volta Cycling — Summer Jersey</div>
                    <div className="t" style={{ marginTop: '3px' }}>volta-summer.jpg</div>
                  </td>
                  <td className="t">28 Oct</td>
                  <td className="t">Yesterday</td>
                  <td>
                    <span className="st">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: 'var(--ok)' }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Approved with warnings
                    </span>
                  </td>
                  <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                    <Link className="btn btn-ghost btn-sm" to="/projects/3">Open</Link>
                    <button className="icon-btn" aria-label="More actions for Volta Cycling — Summer Jersey" aria-haspopup="menu">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <circle cx="5.5" cy="12" r="1.4" />
                        <circle cx="12" cy="12" r="1.4" />
                        <circle cx="18.5" cy="12" r="1.4" />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td><div className="thumb" style={{ background: 'linear-gradient(135deg, rgb(95, 168, 232) 0px, rgb(95, 168, 232) 62%, rgb(255, 255, 255) 62%, rgb(255, 255, 255) 100%)' }}></div></td>
                  <td>
                    <div>Odesa Sharks — Away Kit</div>
                    <div className="t" style={{ marginTop: '3px' }}>sharks-away.png</div>
                  </td>
                  <td className="t">25 Oct</td>
                  <td className="t">27 Oct</td>
                  <td>
                    <span className="st">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: 'var(--ok)' }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Approved
                    </span>
                  </td>
                  <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                    <Link className="btn btn-ghost btn-sm" to="/projects/4">Open</Link>
                    <button className="icon-btn" aria-label="More actions for Odesa Sharks — Away Kit" aria-haspopup="menu">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <circle cx="5.5" cy="12" r="1.4" />
                        <circle cx="12" cy="12" r="1.4" />
                        <circle cx="18.5" cy="12" r="1.4" />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td><div className="thumb" style={{ background: 'linear-gradient(135deg, rgb(200, 16, 46) 0px, rgb(200, 16, 46) 62%, rgb(20, 33, 61) 62%, rgb(20, 33, 61) 100%)' }}></div></td>
                  <td>
                    <div>Kharkiv Hoops — Warm-up Top</div>
                    <div className="t" style={{ marginTop: '3px' }}>hoops-warmup.jpg</div>
                  </td>
                  <td className="t">26 Oct</td>
                  <td className="t">26 Oct</td>
                  <td><span className="st err"><i className="d-err"></i>Failed</span></td>
                  <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                    <button className="btn btn-ghost btn-sm">View error</button>
                    <button className="icon-btn" aria-label="More actions for Kharkiv Hoops — Warm-up Top" aria-haspopup="menu">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <circle cx="5.5" cy="12" r="1.4" />
                        <circle cx="12" cy="12" r="1.4" />
                        <circle cx="18.5" cy="12" r="1.4" />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td><div className="thumb" style={{ background: 'linear-gradient(135deg, rgb(167, 173, 180) 0px, rgb(167, 173, 180) 62%, rgb(31, 79, 209) 62%, rgb(31, 79, 209) 100%)' }}></div></td>
                  <td>
                    <div>Dnipro Volley — Women’s Kit</div>
                    <div className="t" style={{ marginTop: '3px' }}>dv-womens_flat.png</div>
                  </td>
                  <td className="t">22 Oct</td>
                  <td className="t">24 Oct</td>
                  <td><span className="st"><i className="d-warn"></i>Review required</span></td>
                  <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                    <Link className="btn btn-ghost btn-sm" to="/projects/5">Open</Link>
                    <button className="icon-btn" aria-label="More actions for Dnipro Volley — Women’s Kit" aria-haspopup="menu">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <circle cx="5.5" cy="12" r="1.4" />
                        <circle cx="12" cy="12" r="1.4" />
                        <circle cx="18.5" cy="12" r="1.4" />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className="help">Sample projects (prototype). Real projects come from the project API once it is connected.</p>
      </main>
    </div>
  );
}