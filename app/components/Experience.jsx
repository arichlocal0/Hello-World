'use client';

import { useRef, useEffect } from 'react';
import styles from './experience.module.css';

const experienceData = [
  {
    year: '2013 - Present',
    title: 'Senior Full-Stack Developer',
    company: 'Tech Innovations Inc',
    description: 'Leading development of scalable web applications using Next.js and Python. Mentoring junior developers and implementing best practices.',
    tags: ['Next.js', 'Python', 'React', 'Node.js'],
  },
  {
    year: '2018 - 2023',
    title: 'Full-Stack Developer',
    company: 'Digital Solutions Ltd',
    description: 'Developed and maintained multiple production applications. Improved application performance by 40% through optimization.',
    tags: ['JavaScript', 'Python', 'PostgreSQL', 'AWS'],
  },
  {
    year: '2015 - 2018',
    title: 'Junior Developer',
    company: 'StartUp Hub',
    description: 'Started career developing frontend and backend features. Collaborated with cross-functional teams.',
    tags: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
  },
];

export default function Experience() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.3 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Professional Experience</h2>
          <p>13+ years of delivering excellent results</p>
        </div>

        <div className={styles.timeline}>
          {experienceData.map((item, index) => (
            <div
              key={index}
              className={styles.timelineItem}
              ref={(el) => (itemsRef.current[index] = el)}
            >
              <div className={styles.dot}></div>
              <div className={styles.content}>
                <div className={styles.year}>{item.year}</div>
                <h3>{item.title}</h3>
                <p className={styles.company}>{item.company}</p>
                <p className={styles.description}>{item.description}</p>
                <div className={styles.tags}>
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
