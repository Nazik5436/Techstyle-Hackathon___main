import React, { useState } from 'react';
import Header from '../components/layout/Header';
import { Link } from 'react-router-dom';

export default function Projects() {
  // Початкові дані (з твого HTML)
  const initialProjects = [
    { id: '1', name: 'Lviv Running Club — Race Singlet', file: 'lrc-singlet_v3.jpg', created: 'Today 15:58', modified: 'Today 15:58', status: 'Processing', colors: ['rgb(232, 236, 239)', 'rgb(31, 79, 209)'] },
    { id: '2', name: 'Kyiv Wolves — Home Jersey 2027', file: 'kw-home-27_flat.png', created: 'Today 09:10', modified: 'Today 15:42', status: 'Review required', colors: ['rgb(19, 32, 59)', 'rgb(243, 184, 10)'] },
    { id: '3', name: 'Volta Cycling — Summer Jersey', file: 'volta-summer.jpg', created: '28 Oct', modified: 'Yesterday', status: 'Approved with warnings', colors: ['rgb(242, 183, 5)', 'rgb(17, 18, 20)'] },
    { id: '4', name: 'Odesa Sharks — Away Kit', file: 'sharks-away.png', created: '25 Oct', modified: '27 Oct', status: 'Approved', colors: ['rgb(95, 168, 232)', 'rgb(255, 255, 255)'] },
    { id: '5', name: 'Kharkiv Hoops — Warm-up Top', file: 'hoops-warmup.jpg', created: '26 Oct', modified: '26 Oct', status: 'Failed', colors: ['rgb(200, 16, 46)', 'rgb(20, 33, 61)'] },
    { id: '6', name: 'Dnipro Volley — Women’s Kit', file: 'dv-womens_flat.png', created: '22 Oct', modified: '24 Oct', status: 'Review required', colors: ['rgb(167, 173, 180)', 'rgb(31, 79, 209)'] },
  ];

  const [projects] = useState(initialProjects);
  const [activeFilter, setActiveFilter] = useState('All');

  // Фільтри (як у прототипі)
  const filters = [
    { label: 'All', count: 6 },
    { label: 'Processing', count: 1 },
    { label: 'Review required', count: 2 },
    { label: 'Approved', count: 1 },
    { label: 'Approved with warnings', count: 1 },
    { label: 'Failed', count: 1 }
  ];

  // Допоміжна функція для рендеру статусу
  const renderStatus = (status) => {
    switch(status) {
      case 'Processing': 
        return <span className="st"><i className="d-proc"></i>Processing</span>;
      case 'Review required': 
        return <span className="st"><i className="d-warn"></i>Review required</span>;
      case 'Approved with warnings': 
        return <span className="st"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{color: 'var(--ok)'}}><path d="M20 6 9 17l-5-5"></path></svg>Approved with warnings</span>;
      case 'Approved': 
        return <span className="st"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{color: 'var(--ok)'}}><path d="M20 6 9 17l-5-5"></path></svg>Approved</span>;
      case 'Failed': 
        return <span className="st err"><i className="d-err"></i>Failed</span>;
      default: 
        return <span className="st">{status}</span>;
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--surface)' }}>
      <Header />
      
      <header className="ph">
        <ol className="crumbs" aria-label="Breadcrumb">
          <li><Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}><button>Dashboard</button></Link></li>
          <li className="sep" aria-hidden="true">/</li>
          <li aria-current="page">Projects</li>
        </ol>
        <div className="ph-row">
          <div>
            <h1>Projects</h1>
            <p className="ph-desc">Find and reopen decomposition projects.</p>
          </div>
          <div className="ph-actions">
            {/* Посилання на сторінку створення нового проєкту */}
            <Link to="/projects/new" className="btn btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg>
              New project
            </Link>
          </div>
        </div>
      </header>
      
      <main className="content" style={{ gap: '18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          
          {/* Пошук */}
          <label className="srch" style={{ flex: '0 1 320px', minWidth: '220px' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="m20 20-4-4"></path></svg>
            <input className="input" type="search" placeholder="Search by project or file name" aria-label="Search projects" />
          </label>
          
          {/* Фільтри */}
          <div className="chips" role="radiogroup" aria-label="Filter by status">
            {filters.map(filter => (
              <button 
                key={filter.label}
                className={`chip ${activeFilter === filter.label ? 'on' : ''}`} 
                role="radio" 
                aria-checked={activeFilter === filter.label}
                onClick={() => setActiveFilter(filter.label)}
              >
                {filter.label}<span className="n">{filter.count}</span>
              </button>
            ))}
          </div>
          
          <div style={{ flex: '1 1 0%' }}></div>
          
          {/* Сортування */}
          <label className="sel" style={{ width: '200px' }}>
            <select className="input" aria-label="Sort projects" defaultValue="modified">
              <option value="modified">Recently modified</option>
              <option value="created">Recently created</option>
              <option value="name">Project name A–Z</option>
            </select>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m7 10 5 5 5-5"></path></svg>
          </label>
        </div>

        {/* Таблиця проєктів */}
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
                {projects.map(project => (
                  <tr key={project.id}>
                    <td>
                      <div 
                        className="thumb" 
                        style={{ background: `linear-gradient(135deg, ${project.colors[0]} 0px, ${project.colors[0]} 62%, ${project.colors[1]} 62%, ${project.colors[1]} 100%)` }}
                      ></div>
                    </td>
                    <td>
                      <div>{project.name}</div>
                      <div className="t" style={{ marginTop: '3px' }}>{project.file}</div>
                    </td>
                    <td className="t">{project.created}</td>
                    <td className="t">{project.modified}</td>
                    <td>{renderStatus(project.status)}</td>
                    <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                      {/* Логіка кнопок дії залежно від статусу */}
                      {project.status === 'Processing' && <button className="btn btn-ghost btn-sm">View status</button>}
                      {project.status === 'Failed' && <button className="btn btn-ghost btn-sm">View error</button>}
                      {(project.status !== 'Processing' && project.status !== 'Failed') && (
                        <Link className="btn btn-ghost btn-sm" to={`/projects/${project.id}`}>Open</Link>
                      )}
                      
                      <button className="icon-btn" aria-label={`More actions for ${project.name}`} aria-haspopup="menu" style={{ marginLeft: '4px' }}>
                        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="5.5" cy="12" r="1.4"></circle><circle cx="12" cy="12" r="1.4"></circle><circle cx="18.5" cy="12" r="1.4"></circle></svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="help">Sample projects (prototype). Real projects come from the project API once it is connected.</p>
      </main>
    </div>
  );
}