import React from "react";
import { getPacificTimeAbbreviation } from "../lib/timezone";

const WeeklySchedule: React.FC = () => {
  const timezoneAbbr = getPacificTimeAbbreviation();

  return (
    <div style={{
      marginTop: '32px',
      padding: '24px',
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '20px',
      color: '#fff'
    }}>
      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: '700',
        marginBottom: '20px',
        color: '#fff'
      }}>
        Weekly Schedule
      </h3>
      <p style={{
        fontSize: '0.875rem',
        color: '#94a3b8',
        marginBottom: '16px',
        fontStyle: 'italic'
      }}>
        All times shown in {timezoneAbbr} (Pacific Time)
      </p>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'grid',
        gap: '12px'
      }}>
        <li style={{
          padding: '12px',
          background: 'rgba(231, 76, 60, 0.1)',
          borderRadius: '8px',
          borderLeft: '4px solid #e74c3c'
        }}>
          <strong style={{ color: '#e74c3c' }}>Mon/Wed/Thu – 9:00 AM {timezoneAbbr}:</strong>{' '}
          <span style={{ color: '#cbd5e1' }}>BLS Provider</span>
        </li>
        <li style={{
          padding: '12px',
          background: 'rgba(231, 76, 60, 0.1)',
          borderRadius: '8px',
          borderLeft: '4px solid #e74c3c'
        }}>
          <strong style={{ color: '#e74c3c' }}>Mon/Wed/Thu – 1:30 PM {timezoneAbbr}:</strong>{' '}
          <span style={{ color: '#cbd5e1' }}>BLS Renewal</span>
        </li>
        <li style={{
          padding: '12px',
          background: 'rgba(231, 76, 60, 0.1)',
          borderRadius: '8px',
          borderLeft: '4px solid #e74c3c'
        }}>
          <strong style={{ color: '#e74c3c' }}>Tue/Fri – 9:00 AM {timezoneAbbr}:</strong>{' '}
          <span style={{ color: '#cbd5e1' }}>Heartsaver First Aid CPR AED</span>
        </li>
        <li style={{
          padding: '12px',
          background: 'rgba(231, 76, 60, 0.1)',
          borderRadius: '8px',
          borderLeft: '4px solid #e74c3c'
        }}>
          <strong style={{ color: '#e74c3c' }}>Tue/Fri – 1:30 PM {timezoneAbbr}:</strong>{' '}
          <span style={{ color: '#cbd5e1' }}>HeartCode BLS & HSV CPR Skills Testing</span>
        </li>
      </ul>
      <p style={{
        fontSize: '0.85rem',
        color: '#94a3b8',
        marginTop: '16px',
        fontStyle: 'italic'
      }}>
        *Schedule is subject to change. Please confirm availability when booking.
      </p>
    </div>
  );
};

export default WeeklySchedule;
