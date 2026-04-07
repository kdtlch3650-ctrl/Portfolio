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
          <NavLink className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`} to="/">
            Home
          </NavLink>
          <NavLink className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`} to="/about">
            About
          </NavLink>
          <NavLink className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`} to="/projects">
            Project
          </NavLink>
          <NavLink className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`} to="/contact">
            Contact
          </NavLink>
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

function AboutPage() {
  const homeStacks = ['HTML/CSS', 'JavaScript', 'React', 'Java', 'Spring Framework', 'MyBatis', 'OracleDB', 'Git/GitHub'];

  return (
    <div className="panel__content">
      <section className="about-page about-page--minimal">
        <header className="about-page__header">
          <p className="eyebrow">ABOUT</p>
          <h1>{profile.name}</h1>
          <p>{profile.shortIntro}</p>
        </header>

        <section className="about-card about-card--minimal">
          <h2>소개</h2>
          <p>{profile.description}</p>
        </section>

        <section className="about-grid about-grid--minimal">
          <article className="about-card about-card--minimal">
            <h2>강점</h2>
            <div className="detail-chip-list">
              {profile.strengths.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <h3>업무 방식</h3>
            <ul className="intro-card__list">
              {profile.workflow.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="about-card about-card--minimal">
            <h2>기술 스택</h2>
            <div className="detail-chip-list detail-chip-list--soft">
              {homeStacks.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <h3>자격증</h3>
            <div className="detail-chip-list">
              {profile.certifications.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        </section>

        <section className="about-card about-card--minimal">
          <h2>학력 / 교육</h2>
          <div className="timeline-list">
            {profile.education.map((item) => (
              <article key={`${item.period}-${item.title}`} className="timeline-item">
                <p className="timeline-item__period">{item.period}</p>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return projects;
    }

    return projects.filter((project) => project.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <div className="panel__content">
      <section className="section-heading section-heading--minimal">
        <div className="section-heading__title">
          <span>PROJECT</span>
          <div className="section-heading__line"></div>
        </div>
        <p className="section-heading__description">
          진행한 프로젝트를 정리했습니다.
        </p>
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
            className={`project-card project-card--minimal${project.featured ? ' project-card--featured' : ''}`}
            to={`/project/${project.slug}`}
          >
            <div className="project-card__thumb">
              <img src={project.thumbnail} alt={`${project.title} thumbnail`} />
            </div>
            <div className="project-card__body">
              <p className="project-card__meta">{project.period}</p>
              <h2>{project.title}</h2>
              <p className="project-card__role">{project.role}</p>
              <div className="project-card__tags">
                {project.stacks.slice(0, 3).map((stack) => (
                  <span key={stack}>{stack}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

function ContactPage() {
  const homeStacks = ['HTML/CSS', 'JavaScript', 'React', 'Java', 'Spring Framework', 'MyBatis', 'OracleDB', 'Git/GitHub'];

  return (
    <div className="panel__content">
      <section className="board-section">
        <div className="section-heading__title">
          <span>CONTACT</span>
          <div className="section-heading__line"></div>
        </div>
        <div className="board-grid">
          <article>
            <h3>Approach</h3>
            <p>서비스의 구조와 데이터 흐름을 먼저 이해하고, 그 기준 위에서 구현 범위를 정리하는 방식으로 작업합니다.</p>
          </article>
          <article>
            <h3>Core Stack</h3>
            <div className="board-chip-list">
              {homeStacks.map((stack) => (
                <span key={stack}>{stack}</span>
              ))}
            </div>
          </article>
          <article>
            <h3>Contact</h3>
            <p>{profile.name}</p>
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

function LandingPage() {
  return (
    <div className="panel__content">
      <section className="home-hero home-hero--minimal">
        <div className="home-hero__content">
          <p className="eyebrow">Portfolio / {profile.name}</p>
          <h1>{profile.name}</h1>
          <p className="home-hero__lead">{profile.headline}</p>
          <p className="home-hero__summary">{profile.shortIntro}</p>
          <div className="home-hero__actions">
            <Link className="home-hero__button is-primary" to="/about">
              About
            </Link>
            <Link className="home-hero__button" to="/projects">
              Project
            </Link>
          </div>
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
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/project/:slug" element={<ProjectDetailPage />} />
        </Routes>
      </AppShell>
    </HashRouter>
  );
}

export default PortfolioApp;
