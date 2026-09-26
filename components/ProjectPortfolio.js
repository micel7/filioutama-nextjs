'use client';

import { useState } from 'react';
import Link from 'next/link';

const labels = { sipil: 'Pekerjaan Sipil', interior: 'Pekerjaan Interior' };

export default function ProjectPortfolio({ projects }) {
  const [category, setCategory] = useState('sipil');
  const filteredProjects = projects.filter((project) => project.category === category);

  return (
    <section id="portofolio" className="portfolio-section">
      <div className="section-heading">
        <p>PORTOFOLIO</p>
        <h2>Proyek yang Telah Kami Kerjakan</h2>
        <span>Pilih kategori untuk melihat dokumentasi pekerjaan kami.</span>
      </div>

      <div className="project-tabs" role="tablist" aria-label="Kategori proyek">
        {Object.entries(labels).map(([key, label]) => (
          <button key={key} type="button" className={category === key ? 'active' : ''} onClick={() => setCategory(key)} role="tab" aria-selected={category === key}>
            {label}
          </button>
        ))}
      </div>

      {filteredProjects.length ? (
        <div className="project-grid">
          {filteredProjects.map((project) => (
            <Link className="project-card" href={`/proyek/${project.id}`} key={project.id}>
              {project.cover_image ? (
                <img src={`/${project.cover_image}`} alt={project.title} />
              ) : (
                <div className="empty-cover">Tidak ada gambar</div>
              )}
              <div className="project-card-content">
                <span className={`category-badge ${project.category}`}>{project.category === 'sipil' ? 'Sipil' : 'Interior'}</span>
                <h3>{project.title}</h3>
                {project.description && <p>{project.description}</p>}
                {project.location && <small>⌖ {project.location}</small>}
                {project.year && <small>◷ {project.year}</small>}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="empty-state">Belum ada proyek dalam kategori {labels[category]}.</p>
      )}
    </section>
  );
}
