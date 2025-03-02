import React, { useState, useRef } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import { Tooltip } from 'react-tooltip';
import 'react-calendar-heatmap/dist/styles.css';
import './HeatmapStyles.css';

interface HeatMapData {
  date: string;
  value: number;
}

interface HeatMapProps {
  data: HeatMapData[];
  title?: string;
}

const HeatMap: React.FC<HeatMapProps> = ({ data, title = "Activity Heatmap" }) => {
  const [startDate] = useState<Date>(new Date('2024-01-01'));
  const [endDate] = useState<Date>(new Date('2024-12-31'));
  const [tooltipId] = useState<string>(`heatmap-tooltip-${Math.random().toString(36).substr(2, 9)}`);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Format data for the heatmap
  const formattedData = data.map(item => ({
    date: item.date,
    count: item.value
  }));

  // Calculate max value for color intensity
  const maxValue = Math.max(...formattedData.map(item => item.count), 4);

  // Handle scrolling
  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const scrollAmount = 350;
    const container = scrollContainerRef.current;
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Format date for display
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="heatmap-container">
      <div className="heatmap-header">
        <h2>{title}</h2>
        <div className="heatmap-legend">
          <span>Less</span>
          <ul className="legend-squares">
            <li className="legend-square legend-square-0"></li>
            <li className="legend-square legend-square-1"></li>
            <li className="legend-square legend-square-2"></li>
            <li className="legend-square legend-square-3"></li>
            <li className="legend-square legend-square-4"></li>
          </ul>
          <span>More</span>
        </div>
      </div>
      
      <div className="heatmap-scroll-container">
        <button 
          className="scroll-button scroll-left" 
          onClick={() => handleScroll('left')}
          aria-label="Scroll left"
        >
          &lt;
        </button>
        
        <div className="heatmap-scroll-wrapper" ref={scrollContainerRef}>
          <CalendarHeatmap
            startDate={startDate}
            endDate={endDate}
            values={formattedData}
            classForValue={(value) => {
              if (!value || value.count === 0) {
                return 'color-empty';
              }
              // Scale the color intensity based on the value
              const intensity = Math.min(Math.ceil((value.count / maxValue) * 4), 4);
              return `color-scale-${intensity}`;
            }}
            //@ts-ignore
            tooltipDataAttrs={(value: any) => {
              if (!value || !value.date) return {};
              
              // Create a custom data attribute with the content for the tooltip
              const content = JSON.stringify({
                date: value.date,
                count: value.count
              });
              
              return {
                'data-tooltip-id': tooltipId,
                'data-tooltip-content': content,
                'data-tooltip-variant': 'light',
                'className': 'heatmap-cell'
              };
            }}
            showWeekdayLabels={true}
            gutterSize={3}
          />
          
          <Tooltip
            id={tooltipId}
            render={({ content }) => {
              if (!content) return null;
              
              try {
                const data = JSON.parse(content);
                return (
                  <div className="heatmap-tooltip">
                    <div className="tooltip-date">{formatDate(data.date)}</div>
                    <div className="tooltip-value">
                      {data.count === 0 ? 'No activity' : `${data.count} activities`}
                    </div>
                  </div>
                );
              } catch (e) {
                return null;
              }
            }}
            style={{
              backgroundColor: 'white',
              color: '#333',
              boxShadow: '0 3px 12px rgba(0, 0, 0, 0.15)',
              borderRadius: '6px',
              padding: '0',
              zIndex: 1000,
              border: 'none'
            }}
          />
        </div>
        
        <button 
          className="scroll-button scroll-right" 
          onClick={() => handleScroll('right')}
          aria-label="Scroll right"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default HeatMap;