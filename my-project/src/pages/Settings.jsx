import React, { useState } from 'react';
import Header from '../components/layout/Header';
import { Link, useParams, useNavigate } from 'react-router-dom';

export default function Settings() {
  // Ми можемо використовувати URL параметр (наприклад, /settings/general), 
  // щоб визначити активну вкладку, або ж внутрішній стейт
  const { tab } = useParams();
  const navigate = useNavigate();
  
  // Якщо параметр у URL відсутній або невідомий, за замовчуванням беремо 'general'
  const activeTab = ['general', 'palette', 'account'].includes(tab) ? tab : 'general';

  // Функція для перемикання вкладок
  const handleTabClick = (newTab) => {
    navigate(`/settings/${newTab}`);
  };

  // Стани для перемикачів налаштувань
  const [density, setDensity] = useState('comfortable');
  const [confirmDelete, setConfirmDelete] = useState(true);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--surface)' }}>
      <Header />
      
      <header className="ph tabbed">
        <ol className="crumbs" aria-label="Breadcrumb">
          <li><Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}><button>Dashboard</button></Link></li>
          <li className="sep" aria-hidden="true">/</li>
          <li aria-current="page">Settings</li>
        </ol>
        <h1>Settings</h1>
        <p className="ph-desc">Interface preferences, production palette and your account.</p>
        
        {/* Вкладки */}
        <div className="tabs" role="tablist" style={{ marginTop: '18px' }}>
          <button 
            className={`tab ${activeTab === 'general' ? 'on' : ''}`} 
            role="tab" 
            aria-selected={activeTab === 'general'}
            onClick={() => handleTabClick('general')}
          >
            General
          </button>
          <button 
            className={`tab ${activeTab === 'palette' ? 'on' : ''}`} 
            role="tab" 
            aria-selected={activeTab === 'palette'}
            onClick={() => handleTabClick('palette')}
          >
            Production color palette
          </button>
          <button 
            className={`tab ${activeTab === 'account' ? 'on' : ''}`} 
            role="tab" 
            aria-selected={activeTab === 'account'}
            onClick={() => handleTabClick('account')}
          >
            Account
          </button>
        </div>
      </header>

      <main className="content">
        <div style={{ maxWidth: '820px', width: '100%' }}>
          
          {/* Контент вкладки General */}
          {activeTab === 'general' && (
            <section aria-label="Interface">
              <div className="set-row" style={{ paddingTop: '0px' }}>
                <div className="set-l">
                  <div className="set-t">Interface language</div>
                  <div className="help" style={{ marginTop: '3px' }}>Language used for menus and labels.</div>
                </div>
                <span className="sel" style={{ width: '220px' }}>
                  <select className="input" aria-label="Interface language" defaultValue="English">
                    <option value="English">English</option>
                    <option value="Українська">Українська</option>
                  </select>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m7 10 5 5 5-5" /></svg>
                </span>
              </div>
              
              <div className="set-row">
                <div className="set-l">
                  <div className="set-t">Table density</div>
                  <div className="help" style={{ marginTop: '3px' }}>Row height in project and layer lists.</div>
                </div>
                <div role="radiogroup" aria-label="Table density" style={{ display: 'flex', gap: '24px' }}>
                  <label className="chk">
                    <input type="radio" name="density" checked={density === 'comfortable'} onChange={() => setDensity('comfortable')} />
                    Comfortable
                  </label>
                  <label className="chk">
                    <input type="radio" name="density" checked={density === 'compact'} onChange={() => setDensity('compact')} />
                    Compact
                  </label>
                </div>
              </div>
              
              <div className="set-row">
                <div className="set-l">
                  <div className="set-t">Measurement units</div>
                  <div className="help" style={{ marginTop: '3px' }}>Used for image dimensions and print sizes.</div>
                </div>
                <span className="sel" style={{ width: '220px' }}>
                  <select className="input" aria-label="Measurement units" defaultValue="mm">
                    <option value="mm">Millimetres (mm)</option>
                    <option value="cm">Centimetres (cm)</option>
                    <option value="in">Inches (in)</option>
                  </select>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m7 10 5 5 5-5" /></svg>
                </span>
              </div>
              
              <div className="set-row" style={{ borderBottomWidth: 'medium', borderBottomStyle: 'none', borderBottomColor: 'currentcolor' }}>
                <div className="set-l">
                  <div className="set-t">Confirm before deleting</div>
                  <div className="help" style={{ marginTop: '3px' }}>Ask for confirmation before a project is deleted.</div>
                </div>
                <button 
                  className={`sw ${confirmDelete ? 'on' : ''}`} 
                  role="switch" 
                  aria-checked={confirmDelete} 
                  aria-label="Confirm before deleting"
                  onClick={() => setConfirmDelete(!confirmDelete)}
                ></button>
              </div>
            </section>
          )}

          {/* Заглушка для вкладки Palette */}
          {activeTab === 'palette' && (
            <div style={{ padding: '20px 0', color: 'var(--text-2)', textAlign: 'center' }}>
              Production color palette content will be here.
            </div>
          )}

          {/* Заглушка для вкладки Account */}
          {activeTab === 'account' && (
            <div style={{ padding: '20px 0', color: 'var(--text-2)', textAlign: 'center' }}>
              Account settings content will be here.
            </div>
          )}
          
        </div>
      </main>
    </div>
  );
}