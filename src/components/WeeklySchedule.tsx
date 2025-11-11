import React from "react";

const WeeklySchedule: React.FC = () => {
  return (
    <div className="weekly-schedule mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Weekly Schedule</h3>
      <p className="text-gray-600 mb-4">
        Our classes run weekly. Please check the booking page for specific dates and times.
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li><strong>Mondays:</strong> 9:00 AM - 1:00 PM (CPR/AED)</li>
        <li><strong>Wednesdays:</strong> 10:00 AM - 2:00 PM (First Aid)</li>
        <li><strong>Fridays:</strong> 9:00 AM - 1:00 PM (BLS Provider)</li>
        <li><strong>Saturdays:</strong> 9:00 AM - 3:00 PM (Combo Courses)</li>
      </ul>
      <p className="text-sm text-gray-500 mt-4">
        *Schedule is subject to change. Please confirm availability when booking.
      </p>
    </div>
  );
};

export default WeeklySchedule;
