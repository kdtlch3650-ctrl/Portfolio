import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
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
      </div>
    );
  }

  return <img src={project.thumbnail} alt={`${project.title} preview`} />;
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
  const topbarRef = useRef(null);
  const [topbarHeight, setTopbarHeight] = useState(96);

  useLayoutEffect(() => {
    if (!topbarRef.current) {
      return undefined;
    }

    const updateTopbarHeight = () => {
      const nextHeight = Math.ceil(topbarRef.current?.getBoundingClientRect().height ?? 96);
      setTopbarHeight(nextHeight);
    };

    updateTopbarHeight();

    const observer =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(() => {
            updateTopbarHeight();
          })
        : null;

    observer?.observe(topbarRef.current);
    window.addEventListener('resize', updateTopbarHeight);

    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', updateTopbarHeight);
    };
  }, []);

  return (
    <div
      className={`site-shell ${theme}`}
      style={{ '--topbar-height': `${topbarHeight}px` }}
    >
      <ScrollTop />
      <header className="topbar" ref={topbarRef}>
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

  const featuredProject = projects.find((project) => project.featured) ?? projects[0];

  return (
    <div className="panel__content">
      <section className="home-hero">
        <div className="home-hero__content">
          <p className="eyebrow">{profile.name}</p>
          <h1>{profile.headline}</h1>
          <p className="home-hero__lead">{profile.intro}</p>
          <div className="home-hero__actions">
            <Link className="home-hero__button is-primary" to={`/project/${featuredProject.slug}`}>
              대표 프로젝트 보기
            </Link>
            <a className="home-hero__button" href={`mailto:${profile.email}`}>
              연락하기
            </a>
          </div>
        </div>
        <aside className="home-hero__aside">
          <div className="hero-note">
            <span>Role</span>
            <strong>{profile.title}</strong>
          </div>
          <div className="hero-note">
            <span>Featured</span>
            <strong>{featuredProject.title}</strong>
          </div>
          <div className="hero-note">
            <span>Focus</span>
            <strong>{featuredProject.focusAreas?.join(' / ')}</strong>
          </div>
        </aside>
      </section>

      <section id="about" className="intro-card intro-card--about">
        <div>
          <p className="eyebrow">ABOUT</p>
          <h2>{profile.description}</h2>
        </div>
        <div className="intro-card__grid">
          <div>
            <p>{profile.intro}</p>
          </div>
          <div className="intro-card__stack">
            <p className="intro-card__label">Strength</p>
            <div className="detail-chip-list">
              {profile.strengths.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <p className="intro-card__label">Workflow</p>
            <ul className="intro-card__list">
              {profile.workflow.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-heading">
        <div className="section-heading__title">
          <span>SELECTED WORKS</span>
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

      <section className="project-grid">
        {filteredProjects.map((project) => (
          <Link
            key={project.slug}
            className={`project-card${project.featured ? ' project-card--featured' : ''}`}
            to={`/project/${project.slug}`}
          >
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
          <span>CONTACT</span>
          <div className="section-heading__line"></div>
        </div>
        <div className="board-grid">
          <article>
            <h3>Introduce</h3>
            <p>기능 구현뿐 아니라 왜 그렇게 만들었는지 설명할 수 있는 결과물을 만드는 데 집중합니다.</p>
          </article>
          <article>
            <h3>Stack</h3>
            <p>React, Java, Spring MVC, MyBatis를 중심으로 화면 흐름과 프로젝트 문서 정리를 함께 다룹니다.</p>
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
  const [expandedImage, setExpandedImage] = useState(null);
  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    setActiveTab('overview');
    setExpandedImage(null);
  }, [slug]);

  useEffect(() => {
    if (!expandedImage) {
      return undefined;
    }

    const handleKeydown = (event) => {
      if (event.key === 'Escape') {
        setExpandedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [expandedImage]);

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
  ].filter((link, index, list) => list.findIndex((item) => item.href === link.href) === index);

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
            <div className="detail-meta-list">
              <p><span>기간</span><strong>{project.period}</strong></p>
              <p><span>인원</span><strong>{project.team}</strong></p>
              <p><span>역할</span><strong>{project.role}</strong></p>
              <p><span>기여도</span><strong>{project.contribution}</strong></p>
            </div>
            {project.focusAreas?.length ? (
              <div className="detail-hero__group">
                <p className="detail-hero__label">Focus</p>
                <div className="detail-chip-list">
                  {project.focusAreas.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ) : null}
            {project.outcomes?.length ? (
              <div className="detail-hero__group">
                <p className="detail-hero__label">Outcome</p>
                <div className="detail-chip-list detail-chip-list--soft">
                  {project.outcomes.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ) : null}
            {project.youtubeUrl ? (
              <a className="document-card__button detail-hero__button" href={project.youtubeUrl} target="_blank" rel="noreferrer">
                Open YouTube
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="tab-bar">
        {project.sections.map((section, index) => (
          <button
            key={section.id}
            type="button"
            className={`tab-bar__button${activeTab === section.id ? ' is-active' : ''}`}
            onClick={() => setActiveTab(section.id)}
          >
            <span className="tab-bar__index">{String(index + 1).padStart(2, '0')}</span>
            <span className="tab-bar__label">{section.label}</span>
          </button>
        ))}
      </section>

      <section className="tab-panel">
        <div className="tab-panel__header">
          <p className="eyebrow">{activeSection.label}</p>
          <h2>{activeSection.title}</h2>
          <p>{activeSection.description}</p>
          {activeSection.focusPoints?.length ? (
            <div className="tab-panel__focus">
              {activeSection.focusPoints.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
          ) : null}
        </div>
        <div className="tab-panel__body">
          <div className="tab-panel__content">
            {activeSection.items.map((item, index) => (
              <article key={item.title} className="content-block">
                <p className="content-block__index">{String(index + 1).padStart(2, '0')}</p>
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
              <button
                type="button"
                className="document-card__image-button"
                onClick={() =>
                  setExpandedImage({
                    src: activeSection.documentImage,
                    alt: `${project.title} ${activeSection.label} document preview`,
                  })
                }
              >
                <img
                  className="document-card__image"
                  src={activeSection.documentImage}
                  alt={`${project.title} ${activeSection.label} document preview`}
                />
              </button>
            ) : (
              <div className="document-card__placeholder">
                <p>메인 소개 탭은 요약 중심으로 두고, 다른 탭에서는 PDF에서 뽑은 핵심 페이지 이미지를 바로 보여주도록 구성했습니다.</p>
              </div>
            )}
            {showDocumentPreview ? <p className="document-card__hint">이미지를 클릭하면 크게 볼 수 있습니다.</p> : null}
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
      {expandedImage ? (
        <div className="image-lightbox" onClick={() => setExpandedImage(null)} role="presentation">
          <button
            type="button"
            className="image-lightbox__close"
            onClick={() => setExpandedImage(null)}
            aria-label="Close image preview"
          >
            ×
          </button>
          <div className="image-lightbox__dialog" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true">
            <img className="image-lightbox__image" src={expandedImage.src} alt={expandedImage.alt} />
          </div>
        </div>
      ) : null}
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
