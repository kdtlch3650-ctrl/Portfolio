import { useEffect, useMemo, useState } from 'react';
import { HashRouter, Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom';

import { projects, projectCategories, profile } from './data/projects';
import './App.css';

function ProjectMedia({ project }) {
  if (project.videoUrl) {
    return (
      <div className="detail-hero__video-wrap">
        <iframe
          className="detail-hero__video"
          src={project.videoUrl}
          title={`${project.title} demo video`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <div className="detail-hero__overlay">
          <strong>PROJECT VIDEO</strong>
          <span>{project.videoNote}</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <img src={project.thumbnail} alt={`${project.title} preview`} />
      <div className="detail-hero__overlay">
        <strong>PROJECT VIDEO</strong>
        <span>{project.videoNote}</span>
      </div>
    </>
  );
}

function ScrollTop() {
  const location = useLocation();

  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } catch (error) {
      // jsdom does not implement scrollTo; ignore in tests.
    }
  }, [location.pathname]);

  return null;
}

function AppShell({ children, theme, onToggleTheme }) {
  const location = useLocation();

  return (
    <div className={`site-shell ${theme}`}>
      <ScrollTop />
      <header className="topbar">
        <Link className="brand" to="/">
          {profile.brand}
        </Link>
        <nav className="nav">
          <NavLink className={({ isActive }) => `nav__link${isActive && location.pathname === '/' ? ' is-active' : ''}`} to="/">
            Home
          </NavLink>
          <a className="nav__link" href="#about">
            About
          </a>
          <NavLink className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`} to="/">
            Project
          </NavLink>
          <a className="nav__link" href="#board">
            Board
          </a>
        </nav>
      </header>

      <main className="layout">
        <aside className="sidebar">
          <div className="sidebar__image-wrap">
            <img className="sidebar__image" src="/media/hero-photo.png" alt="workspace desk visual" />
          </div>
          <div className="sidebar__footer">
            <p>Copyright © 2026</p>
            <p>{profile.name}</p>
          </div>
        </aside>

        <section className="panel">{children}</section>
      </main>

      <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label="Toggle theme">
        {theme === 'theme-light' ? '☾' : '☀'}
      </button>
    </div>
  );
}

function HomePage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return projects;
    }

    return projects.filter((project) => project.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <div className="panel__content">
      <section className="section-heading">
        <div className="section-heading__title">
          <span>PROJECT</span>
          <div className="section-heading__line"></div>
        </div>
      </section>

      <section className="filters">
        {projectCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`filters__button${activeCategory === category.id ? ' is-active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </section>

      <section id="about" className="intro-card">
        <p className="eyebrow">LEECHANHEE</p>
        <h1>{profile.title}</h1>
        <p>{profile.description}</p>
      </section>

      <section className="project-grid">
        {filteredProjects.map((project) => (
          <Link key={project.slug} className="project-card" to={`/project/${project.slug}`}>
            <div className="project-card__thumb">
              <img src={project.thumbnail} alt={`${project.title} thumbnail`} />
            </div>
            <div className="project-card__body">
              <p className="project-card__meta">{project.period}</p>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <div className="project-card__tags">
                {project.stacks.slice(0, 4).map((stack) => (
                  <span key={stack}>{stack}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </section>

      <section id="board" className="board-section">
        <div className="section-heading__title">
          <span>BOARD</span>
          <div className="section-heading__line"></div>
        </div>
        <div className="board-grid">
          <article>
            <h3>Strength</h3>
            <p>화면만 예쁘게 만드는 것보다 흐름과 문서가 함께 읽히는 포트폴리오를 지향합니다.</p>
          </article>
          <article>
            <h3>Stack</h3>
            <p>React, Java, Spring MVC, MyBatis, UI 설계와 프로젝트 문서화까지 함께 다룹니다.</p>
          </article>
          <article>
            <h3>Contact</h3>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </article>
        </div>
      </section>
    </div>
  );
}

function ProjectDetailPage() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    setActiveTab('overview');
  }, [slug]);

  if (!project) {
    return (
      <div className="panel__content">
        <section className="detail-header">
          <Link className="back-link" to="/">
            ← Back
          </Link>
          <h1>Project not found</h1>
        </section>
      </div>
    );
  }

  const activeSection = project.sections.find((section) => section.id === activeTab) ?? project.sections[0];
  const hasOriginalDocument = Boolean(project.docUrl && project.docUrl !== '#');
  const showDocumentPreview = Boolean(activeSection.documentImage);
  const referenceLinks = [
    ...(activeSection.referenceLinks?.filter((link) => link.href) ?? []),
    ...(project.referenceLinks?.filter((link) => link.href) ?? []),
  ];

  return (
    <div className="panel__content">
      <section className="detail-header">
        <Link className="back-link" to="/">
          ← Back to Project
        </Link>
        <div className="detail-header__top">
          <div>
            <p className="eyebrow">{project.label}</p>
            <h1>{project.title}</h1>
            <p className="detail-header__subtitle">{project.subtitle}</p>
          </div>
          <div className="detail-header__links">
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Live Site
              </a>
            ) : null}
            {project.repoUrl ? (
              <a href={project.repoUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            ) : null}
          </div>
        </div>
        <div className="detail-hero">
          <div className="detail-hero__media">
            <ProjectMedia project={project} />
          </div>
          <div className="detail-hero__summary">
            <p>{project.summary}</p>
            <ul>
              <li>기간: {project.period}</li>
              <li>인원: {project.team}</li>
              <li>역할: {project.role}</li>
              <li>기여도: {project.contribution}</li>
            </ul>
            {project.youtubeUrl ? (
              <a className="document-card__button detail-hero__button" href={project.youtubeUrl} target="_blank" rel="noreferrer">
                Open YouTube
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="tab-bar">
        {project.sections.map((section) => (
          <button
            key={section.id}
            type="button"
            className={`tab-bar__button${activeTab === section.id ? ' is-active' : ''}`}
            onClick={() => setActiveTab(section.id)}
          >
            {section.label}
          </button>
        ))}
      </section>

      <section className="tab-panel">
        <div className="tab-panel__header">
          <p className="eyebrow">{activeSection.label}</p>
          <h2>{activeSection.title}</h2>
          <p>{activeSection.description}</p>
        </div>
        <div className="tab-panel__body">
          <div className="tab-panel__content">
            {activeSection.items.map((item) => (
              <article key={item.title} className="content-block">
                <h3>{item.title}</h3>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <aside className="document-card">
            <p className="eyebrow">DOCUMENT</p>
            <h3>{activeSection.documentTitle}</h3>
            <p>{activeSection.documentDescription}</p>
            {showDocumentPreview ? (
              <img
                className="document-card__image"
                src={activeSection.documentImage}
                alt={`${project.title} ${activeSection.label} document preview`}
              />
            ) : (
              <div className="document-card__placeholder">
                <p>메인 소개 탭은 요약 중심으로 두고, 다른 탭에서는 PDF에서 뽑은 핵심 페이지 이미지를 바로 보여주도록 구성했습니다.</p>
              </div>
            )}
            {referenceLinks.length ? (
              <div className="document-card__links">
                <p className="document-card__links-title">Related Links</p>
                <ul>
                  {referenceLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {hasOriginalDocument ? (
              <a className="document-card__button" href={project.docUrl} target="_blank" rel="noreferrer">
                Open Original
              </a>
            ) : null}
          </aside>
        </div>
      </section>
    </div>
  );
}

function PortfolioApp() {
  const [theme, setTheme] = useState('theme-light');

  return (
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppShell
        theme={theme}
        onToggleTheme={() =>
          setTheme((current) => (current === 'theme-light' ? 'theme-dark' : 'theme-light'))
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:slug" element={<ProjectDetailPage />} />
        </Routes>
      </AppShell>
    </HashRouter>
  );
}

export default PortfolioApp;
