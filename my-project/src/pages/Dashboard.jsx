import React, { useContext } from 'react';
import Header from '../components/layout/Header';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../context/ProjectContext';

export default function Dashboard() {
  const { projects } = useContext(ProjectContext);
  
  // Для дашборду ми показуємо максимум 5 останніх проєктів (припускаємо, що масив вже відсортований від найновішого)
  const recentProjects = projects.slice(0, 5);
  const projectCount = projects.length;

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
      {/* 
        Ми не використовуємо стандартний <Header />, тому що Дашборд 
        має унікальний лічильник проєктів у навігації, 
        тому ми вбудовуємо шапку безпосередньо сюди 
      */}
      <header className="gnav" style={{ height: '52px' }}>
        <div className="g-l">
          <svg width="20" height="20" viewBox="0 0 20 20" role="img" aria-label="Production Design System">
            <circle cx="4" cy="4" r="1.7" fill="#17181C"></circle><circle cx="10" cy="4" r="1.7" fill="#17181C"></circle><circle cx="16" cy="4" r="1.7" fill="#17181C"></circle><circle cx="4" cy="10" r="1.7" fill="#17181C"></circle><circle cx="10" cy="10" r="2.3" fill="#3157D5"></circle><circle cx="16" cy="10" r="1.7" fill="#17181C"></circle><circle cx="4" cy="16" r="1.7" fill="#17181C"></circle><circle cx="10" cy="16" r="1.7" fill="#17181C"></circle><circle cx="16" cy="16" r="1.7" fill="#17181C"></circle>
          </svg>
        </div>
        <nav className="g-c" aria-label="Main">
          <button className="gl on">Dashboard</button>
          <Link className="gl" to="/projects" style={{ color: 'var(--text-2)', textDecoration: 'none' }}>
            Projects
            <span className="count">{projectCount}</span>
          </Link>
          <button className="gl " title="AI Design Decomposer — available">
            <span className="live" role="img" aria-label="Available"></span>
            <span className="full">AI Design Decomposer</span>
            <span className="short">Decomposer</span>
          </button>
          <div style={{ position: 'relative', display: 'flex' }}>
            <button className="gl" aria-haspopup="menu" aria-expanded="false">
              Modules
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m7 10 5 5 5-5"></path></svg>
            </button>
          </div>
        </nav>
        <div className="g-r">
          <button className="icon-btn" aria-label="Help & documentation" title="Help & documentation">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M9.5 9.5a2.5 2.5 0 0 1 4.9.7c0 1.7-2.4 2-2.4 3.6M12 16.8h.01"></path></svg>
          </button>
          <Link className="icon-btn" to="/settings/general" aria-label="Settings" title="Settings">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 7h9M17 7h3M4 12h3M11 12h9M4 17h11M19 17h1"></path><circle cx="15" cy="7" r="2"></circle><circle cx="9" cy="12" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
          </Link>
          <span aria-hidden="true" style={{ width: '1px', height: '20px', background: 'var(--line)', margin: '0px 8px' }}></span>
          <span className="avatar" title="Olena Kovalenko">OK</span>
        </div>
      </header>
      
      <header className="ph">
        <div className="ph-row">
          <div>
            <h1>Dashboard</h1>
            <p className="ph-desc">Welcome back, Olena. Prepare customer sportswear designs for sublimation production.</p>
          </div>
          <div className="ph-actions">
            <Link to="/projects/new" className="btn btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg>
              New project
            </Link>
          </div>
        </div>
      </header>

      <main className="content">
        <section aria-label="AI Design Decomposer" style={{ display: 'flex', alignItems: 'center', gap: '24px 40px', flexWrap: 'wrap', paddingBottom: '28px', borderBottom: '1px solid var(--line)' }}>
          <div style={{ flex: '1 1 420px', minWidth: '0px' }}>
            <span className="eyebrow"><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--ok)', display: 'inline-block' }}></span>Workspace · Available</span>
            <h2 style={{ fontSize: '22px', fontWeight: 500, lineHeight: '28px', letterSpacing: '-0.018em', marginTop: '10px' }}>AI Design Decomposer</h2>
            <p style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: 1.55, marginTop: '6px', maxWidth: '560px' }}>Upload a flattened customer design. It is split into production-ready layers with a color match and a quality report, ready for your review.</p>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Link to="/projects/new" className="btn btn-secondary">
              Start a decomposition
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
            </Link>
          </div>
        </section>

        <div className="g12">
          <section className="s8" aria-label="Recent projects">
            <div className="sh">
              <h2>Recent projects</h2>
              {projectCount > 0 && (
                <Link to="/projects" className="link">
                  All projects
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
                </Link>
              )}
            </div>
            
            {projectCount === 0 ? (
              <div style={{ padding: '48px 0px', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', textAlign: 'center' }}>
                <span className="eyebrow">0 projects</span>
                <h3 style={{ fontSize: '17px', fontWeight: 500, marginTop: '10px' }}>No decomposition projects yet</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: 1.55, margin: '6px auto 0px', maxWidth: '400px' }}>Create your first project by uploading a flattened customer design.</p>
                <Link to="/projects/new" className="btn btn-primary" style={{ marginTop: '16px' }}>New project</Link>
              </div>
            ) : (
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
                    {recentProjects.map((project) => (
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
                        <td>{renderStatus(project.status)}</td>
                        <td className="t">{project.modified}</td>
                        <td style={{ textAlign: 'right' }}>
                          {project.status === 'Processing' && <button className="btn btn-ghost btn-sm">View status</button>}
                          {project.status === 'Failed' && <button className="btn btn-ghost btn-sm">View error</button>}
                          {(project.status !== 'Processing' && project.status !== 'Failed') && (
                            <Link className="btn btn-ghost btn-sm" to={`/projects/${project.id}`}>Open</Link>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
          
          <section className="s4" aria-label="Module availability">
            <div className="sh"><h2>Modules</h2><span className="mono meta">1 / 5 connected</span></div>
            <div style={{ borderTop: '1px solid var(--line)' }}>
              <button className="mod-row"><span className="nm">AI Design Decomposer</span><span className="st"><i className="d-ok"></i>Available</span></button>
              <button className="mod-row off"><span className="nm">AI Sportswear Designer</span><span className="st dim"><i className="d-off"></i>Not connected</span></button>
              <button className="mod-row off"><span className="nm">Placement Tech-Pack Generator</span><span className="st dim"><i className="d-off"></i>Not connected</span></button>
              <button className="mod-row off"><span className="nm">TIFF Optimizer</span><span className="st dim"><i className="d-off"></i>Not connected</span></button>
              <button className="mod-row off"><span className="nm">Material Consumption Calculator</span><span className="st dim"><i className="d-off"></i>Not connected</span></button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}