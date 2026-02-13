'use client';

import React, { useState, useRef, useEffect } from 'react';
import Header from '../header';
import './Timeline.css';

interface TimelineDate {
  startdate: Date;
  enddate: Date;
  effort: number;
}

interface TimelineProject {
  label: string;
  color: string;
  dates: TimelineDate[];
}

const projectData: TimelineProject[] = [
  {label: "MITRE SHR", color: "#005194", dates:[{startdate: new Date(2024,4,15), enddate: new Date(2024,9,16), effort: 1}]},
  {label: "All of Us", color: "#262261", dates:[{startdate: new Date(2020,8,12), enddate: new Date(2023,11,31), effort: 1},
      {startdate: new Date(2024,0,1), enddate: new Date(2024,9,1), effort: .25}
  ]},
  {label: "Onco Health", color: "#26A69A", dates:[{startdate: new Date(2020,4,18), enddate: new Date(2021,3,10), effort: 1}]},
  {label: "CHPL", color: "#005596", dates:[{startdate: new Date(2019,11,19), enddate: new Date(2020,6,30), effort: 1}]},
  {label: "Cotiviti AP Integrity", color: "#31006f", dates:[{startdate: new Date(2019,7,15), enddate: new Date(2020,0,31), effort: 1}]},
  {label: "Concert.ai", color: "#F52B34", dates:[{startdate: new Date(2019,3,18), enddate: new Date(2019,7,15), effort: 1},
      {startdate: new Date(2019,7,15), enddate: new Date(2019,11,15), effort: .5}]},
  // {label: "Concerto", color: "#F52B34", dates:[{startdate: new Date(2019,2,18), enddate: new Date(2019,6,15), effort: 1}]},
  {label: "OSHJ", color: "#BD3830", dates:[{startdate: new Date(2019,2,15), enddate: new Date(2019,2,18), "effort": 1}]},
  {label: "Concert.ai", color: "#F52B34", dates:[{startdate: new Date(2019,2,18), enddate: new Date(2019,6,15), effort: 1}]},
  {label: "Verscend", color: "#100699", dates:[{startdate: new Date(2017,11,7), enddate: new Date(2018,6,15), effort: 1}]},
  {label: "WuXi NextCODE Titan", color: "#67CCD8", dates:[{startdate: new Date(2017,7,16), enddate: new Date(2017,10,8), effort: 1}]},
  {label: "FasterCures", color: "#4859A8", dates:[{startdate: new Date(2017,5,27), enddate: new Date(2017,7,4), effort: .5}, {startdate: new Date(2017,7,4), enddate: new Date(2017,9,14), effort: .25}]},
  {label: "Glytec Therapy Advisor", color: "#063f6c", dates:[{startdate: new Date(2017,2,21), enddate: new Date(2017,5,14), effort: .5}]},
  {label: "Walgreens RXPass", color: "#247092", dates:[{startdate: new Date(2017,1,8), enddate: new Date(2017,2,17), effort: .5}, {startdate: new Date(2017,2,17), enddate: new Date(2017,5,20), effort: .25}]},
  {label: "CAS Planaria", color: "#247092", dates:[{startdate: new Date(2016,8,20), enddate: new Date(2017,5,14), effort: 1}]},
  {label: "Imprivata", color: "#ED293F", dates:[{startdate: new Date(2016,6,12), enddate: new Date(2016,9,14), effort: .5}]},
  {label: "Glytec website", color: "#063f6c", dates:[{startdate: new Date(2016,3,14), enddate: new Date(2016,5,14), effort: 1}]},
  {label: "Glytec Glucommander", color: "#063f6c", dates:[{startdate: new Date(2016,2,1), enddate: new Date(2016,3,14), effort: 1}, {startdate: new Date(2016,3,14), enddate: new Date(2016,4,7), effort: .5}]},
  {label: "Zika", color: "#8f2741", dates:[{startdate: new Date(2016,1,21), enddate: new Date(2016,1,31), effort: 1}]},
  {label: "CureForward", color: "#ff8212", dates:[{startdate: new Date(2016,1,12), enddate: new Date(2016,1,20), effort: 1}]},
  {label: "Partners InfoEd", color: "#2c4e81", dates:[{startdate: new Date(2015,10,1), enddate: new Date(2015,12,18), effort: .5}]},
  {label: "IMS", color: "#002868", dates:[{startdate: new Date(2015,7,1), enddate: new Date(2015,9,7), effort: 1}, {startdate: new Date(2015,9,7), enddate: new Date(2015,9,21), effort: .5}, {startdate: new Date(2015,9,21), enddate: new Date(2015,12,18), effort: 1}]},
  {label: "Care Cards", color: "#4791ba", dates:[{startdate: new Date(2015,6,7), enddate: new Date(2015,6,21), effort: 1}]},
  {label: "SmashFly", color: "#4a91d3", dates:[{startdate: new Date(2014,6,24), enddate: new Date(2014,11,18), effort: 1}]},
  {label: "Partners Insight", color: "#2c4e81", dates:[{startdate: new Date(2013,11,14), enddate: new Date(2014,4,7), effort: 1}, {startdate: new Date(2014,5,1), enddate: new Date(2014,8,7), effort: 1}, {startdate: new Date(2014,8,24), enddate: new Date(2014,10,1), effort: .5}, {startdate: new Date(2014,10,1), enddate: new Date(2015,5,24), effort: 1}, {startdate: new Date(2015,5,24), enddate: new Date(2015,7,1), effort: .5}, {startdate: new Date(2015,11,1), enddate: new Date(2015,11,18), effort: .5}, {startdate: new Date(2016,1,1), enddate: new Date(2016,1,12), effort: 1}]},
  {label: "Inspired EHRs", color: "#6ea5d7", dates:[{startdate: new Date(2013,7,7), enddate: new Date(2013,11,14), effort: 1}, {startdate: new Date(2013,11,14), enddate: new Date(2014,7,7), effort: .5}, {startdate: new Date(2014,8,24), enddate: new Date(2014,10,7), effort: .5}]},
  {label: "Happtique", color: "#09a8d8", dates:[{startdate: new Date(2013,6,18), enddate: new Date(2013,7,7), effort: .5}]},
  {label: "Emerging Tech website", color: "#7474a4", dates:[{startdate: new Date(2013,6,7), enddate: new Date(2013,8,1), effort: .5}]},
  {label: "MarketSight", color: "#1a529e", dates:[{startdate: new Date(2013,3,1), enddate: new Date(2013,6,7), effort: 1}]},
  {label: "QuadraMed", color: "#dd5959", dates:[{startdate: new Date(2013,2,1), enddate: new Date(2013,3,1), effort: .5}]},
  {label: "Strength Matters", color: "#b8ccb6", dates:[{startdate: new Date(2013,2,1), enddate: new Date(2013,3,1), effort: .5}]},
  {label: "uTest - Neptune", color: "#0082b2", dates:[{startdate: new Date(2012,10,22), enddate: new Date(2013,2,1), effort: 1}]},
  {label: "uTest - Tester App", color: "#488ab3", dates:[{startdate: new Date(2012,6,1), enddate: new Date(2012,9,12), effort: 1}]},
  {label: "uTest - Applause", color: "#f05519", dates:[{startdate: new Date(2012,4,24), enddate: new Date(2012,6,7), effort: .5}, {startdate: new Date(2012,9,24), enddate: new Date(2012,11,7), effort: 1}]},
  {label: "Extole", color: "#ac111a", dates:[{startdate: new Date(2012,4,1), enddate: new Date(2012,5,1), effort: .5}]},
  {label: "Ten Fourteen", color: "#81c6c8", dates:[{startdate: new Date(2012,3,1), enddate: new Date(2012,4,12), effort: .5}]},
  {label: "SDL", color: "#027497", dates:[{startdate: new Date(2012,2,15), enddate: new Date(2012,4,25), effort: .5}]},
  {label: "Facio", color: "#D1DBD6", dates:[{startdate: new Date(2011,10,7), enddate: new Date(2012,2,15), effort: 1}, {startdate: new Date(2012,2,15), enddate: new Date(2012,4,1), effort: .5}]},
  {label: "Design Axioms", color: "#bf4848", dates:[{startdate: new Date(2011,9,12), enddate: new Date(2011,10,10), effort: .5}]},
  {label: "PTC Wiki", color: "#93d3a5", dates:[{startdate: new Date(2011,9,12), enddate: new Date(2011,10,7), effort: .5}]},
  {label: "Your New Project", color: "#FF5733", dates:[{startdate: new Date(2023,0,1), enddate: new Date(2023,5,30), effort: 1}]},
];

const Timeline: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const allDates = projectData.flatMap(p => p.dates.flatMap(d => [d.startdate, d.enddate]));
  const minDate = new Date(Math.min(...allDates.map(d => d.getTime())));
  const maxDate = new Date();
  
  minDate.setMonth(0, 1);
  maxDate.setFullYear(maxDate.getFullYear(), 11, 31);

  const totalMonths = (maxDate.getFullYear() - minDate.getFullYear()) * 12 + (maxDate.getMonth() - minDate.getMonth());
  const pixelsPerMonth = 40;
  const timelineWidth = totalMonths * pixelsPerMonth;

  const getPosition = (date: Date) => {
    const months = (date.getFullYear() - minDate.getFullYear()) * 12 + (date.getMonth() - minDate.getMonth());
    return months * pixelsPerMonth;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  useEffect(() => {
    if (viewportRef.current) {
      const scrollPosition = timelineWidth;
      viewportRef.current.scrollLeft = scrollPosition;
    }
  }, [timelineWidth]);

  return (
    <div className={styles.main}>
      <Header />
    
        <div className="timeline-modern" role="region" aria-label="Project timeline">
          <div className="timeline-header">
            <h2>Project Timeline</h2>
            <p>A visual journey through {projectData.length} projects from {minDate.getFullYear()} to {maxDate.getFullYear()}</p>
          </div>

          <div className="timeline-viewport" ref={viewportRef}>
            <div className="timeline-content" style={{ width: `${timelineWidth}px` }}>
              <div className="timeline-years">
                {Array.from({ length: maxDate.getFullYear() - minDate.getFullYear() + 1 }, (_, i) => {
                  const year = minDate.getFullYear() + i;
                  const position = getPosition(new Date(year, 0, 1));
                  return (
                    <div key={year} className="year-marker" style={{ left: `${position}px` }}>
                      <span>{year}</span>
                    </div>
                  );
                })}
              </div>

              <div className="timeline-grid">
                {projectData.map((project, index) => (
                  <div
                    key={`${project.label}-${index}`}
                    className="project-row"
                    style={{ top: `${index * 35}px` }}
                  >
                    <div className="project-label">
                      {project.label}
                    </div>
                    {project.dates.map((dateRange, dateIndex) => {
                      const left = getPosition(dateRange.startdate);
                      const width = getPosition(dateRange.enddate) - left;
                      const isSelected = selectedProject === `${project.label}-${dateIndex}`;
                      
                      return (
                        <button
                          key={dateIndex}
                          className={`project-bar ${isSelected ? 'selected' : ''}`}
                          style={{
                            left: `${left}px`,
                            width: `${width}px`,
                            backgroundColor: project.color,
                            opacity: dateRange.effort
                          }}
                          onClick={() => setSelectedProject(isSelected ? null : `${project.label}-${dateIndex}`)}
                          aria-label={`${project.label}, ${formatDate(dateRange.startdate)} to ${formatDate(dateRange.enddate)}, ${dateRange.effort * 100}% effort`}
                          aria-pressed={isSelected}
                        >
                          {isSelected && (
                            <div className="project-tooltip">
                              <strong>{project.label}</strong>
                              <br />
                              {formatDate(dateRange.startdate)} - {formatDate(dateRange.enddate)}
                              <br />
                              Effort: {Math.round(dateRange.effort * 100)}%
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="timeline-instructions">
            <p>Scroll horizontally to explore • Click on a project bar for details</p>
          </div>
        </div>
    </div>
  );
};

export default Timeline;
