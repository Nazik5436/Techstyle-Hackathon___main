import React, { useState, useContext, useRef, useEffect } from 'react';
import Header from '../components/layout/Header';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../context/ProjectContext';

export default function Projects() {
  const { projects, deleteProject } = useContext(ProjectContext);
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Стани для меню та модалки
  const [openMenuId, setOpenMenuId] = useState(null); // Зберігає ID проєкту, чиє меню зараз відкрито
  const [projectToDelete, setProjectToDelete] = useState(null); // Зберігає весь об'єкт проєкту, який ми збираємось видаляти
  
  const menuRef = useRef(null);

  // Закриття меню при кліку поза ним
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filters = [
    { label: 'All', count: projects.length },
    { label: 'Processing', count: projects.filter(p => p.status === 'Processing').length },
    { label: 'Review required', count: projects.filter(p => p.status === 'Review required').length },
    { label: 'Approved', count: projects.filter(p => p.status === 'Approved').length },
    { label: 'Approved with warnings', count: projects.filter(p => p.status === 'Approved with warnings').length },
    { label: 'Failed', count: projects.filter(p => p.status === 'Failed').length }
  ];

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

  const handleDeleteConfirm = () => {
    if (projectToDelete) {
      deleteProject(projectToDelete.id);
      setProjectToDelete(null); // Закриваємо модалку
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
            <Link to="/projects/new" className="btn btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg>
              New project
            </Link>
          </div>
        </div>
      </header>
      
      <main className="content" style={{ gap: '18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <label className="srch" style={{ flex: '0 1 320px', minWidth: '220px' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="m20 20-4-4"></path></svg>
            <input className="input" type="search" placeholder="Search by project or file name" aria-label="Search projects" />
          </label>
          
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
          
          <label className="sel" style={{ width: '200px' }}>
            <select className="input" aria-label="Sort projects" defaultValue="modified">
              <option value="modified">Recently modified</option>
              <option value="created">Recently created</option>
              <option value="name">Project name A–Z</option>
            </select>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m7 10 5 5 5-5"></path></svg>
          </label>
        </div>

        {projects.length === 0 ? (
          <div style={{ padding: '48px 0px', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', textAlign: 'center', marginTop: '20px' }}>
            <span className="eyebrow">0 projects</span>
            <h3 style={{ fontSize: '17px', fontWeight: 500, marginTop: '10px' }}>No decomposition projects yet</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: 1.55, margin: '6px auto 0px', maxWidth: '400px' }}>Create your first project by uploading a flattened customer design.</p>
            <Link to="/projects/new" className="btn btn-primary" style={{ marginTop: '16px' }}>New project</Link>
          </div>
        ) : (
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
                  {projects
                    .filter(project => activeFilter === 'All' || project.status === activeFilter)
                    .map(project => (
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
                      <td style={{ textAlign: 'right', whiteSpace: 'nowrap', position: 'relative' }}>
                        {project.status === 'Processing' && <button className="btn btn-ghost btn-sm">View status</button>}
                        {project.status === 'Failed' && <button className="btn btn-ghost btn-sm">View error</button>}
                        {(project.status !== 'Processing' && project.status !== 'Failed') && (
                          <Link className="btn btn-ghost btn-sm" to={`/projects/${project.id}`}>Open</Link>
                        )}
                        
                        {/* Кнопка трьох крапок */}
                        <button 
                          className="icon-btn" 
                          aria-label={`More actions for ${project.name}`} 
                          aria-haspopup="menu" 
                          style={{ marginLeft: '4px' }}
                          onClick={() => setOpenMenuId(openMenuId === project.id ? null : project.id)}
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="5.5" cy="12" r="1.4"></circle><circle cx="12" cy="12" r="1.4"></circle><circle cx="18.5" cy="12" r="1.4"></circle></svg>
                        </button>

                        {/* Випадаюче меню для КОНКРЕТНОГО рядка */}
                        {openMenuId === project.id && (
                          <div className="menu" role="menu" ref={menuRef} style={{ right: '0px', top: '100%', marginTop: '4px' }}>
                            <button className="mi" role="menuitem" onClick={() => { console.log('Rename clicked'); setOpenMenuId(null); }}>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16.5 4a2.5 2.5 0 0 1 3.5 3.5L8 19.5 3.5 20.5 4.5 16z"></path></svg>
                              Rename
                            </button>
                            <div className="msep"></div>
                            <button className="mi danger" role="menuitem" onClick={() => { setProjectToDelete(project); setOpenMenuId(null); }}>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 6.5h16M9 6.5V4.5h6v2M6.5 6.5l.8 13a1.5 1.5 0 0 0 1.5 1.4h6.4a1.5 1.5 0 0 0 1.5-1.4l.8-13"></path></svg>
                              Delete project
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <p className="help">Sample projects (prototype). Real projects come from the project API once it is connected.</p>
      </main>

      {/* Модальне вікно (Overlay) для видалення */}
      {projectToDelete && (
        <div className="overlay">
          <div className="dlg" role="alertdialog" aria-modal="true" aria-labelledby="dlg-dl">
            <h2 id="dlg-dl">Delete project?</h2>
            <p>“{projectToDelete.name}”, its source image and its decomposition results will be permanently deleted. This cannot be undone.</p>
            <div className="dlg-f">
              <button className="btn btn-ghost" onClick={() => setProjectToDelete(null)}>Cancel</button>
              <button className="btn btn-danger" onClick={handleDeleteConfirm}>Delete project</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}