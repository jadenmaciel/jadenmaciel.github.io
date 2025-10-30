import { Calendar, Clock, MapPin, Users } from 'lucide-react';

export default function Schedule() {
  const upcomingClasses = [
    {
      title: 'CPR & AED Certification',
      date: 'Saturday, November 9, 2025',
      time: '9:00 AM - 1:00 PM',
      location: 'Wesley\'s CPR Training Center',
      spots: '8 spots left',
      type: 'Public Class',
    },
    {
      title: 'BLS for Healthcare Providers',
      date: 'Wednesday, November 13, 2025',
      time: '5:30 PM - 9:30 PM',
      location: 'Wesley\'s CPR Training Center',
      spots: '5 spots left',
      type: 'Public Class',
    },
    {
      title: 'Heartsaver First Aid/CPR/AED',
      date: 'Saturday, November 16, 2025',
      time: '8:00 AM - 2:00 PM',
      location: 'Wesley\'s CPR Training Center',
      spots: '12 spots left',
      type: 'Public Class',
    },
    {
      title: 'Friends & Family CPR',
      date: 'Sunday, November 17, 2025',
      time: '2:00 PM - 4:30 PM',
      location: 'Wesley\'s CPR Training Center',
      spots: '15 spots left',
      type: 'Community Class',
    },
  ];

  return (
    <section id="schedule" className="py-20" style={{ backgroundColor: '#F6E3C7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#142131' }}>
            Upcoming Classes
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#142131' }}>
            Reserve your spot in one of our upcoming training sessions. Classes fill up quickly, so register early!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {upcomingClasses.map((classItem, index) => (
            <div
              key={index}
              className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border"
              style={{ backgroundColor: '#0C1D2F', borderColor: '#C6423B' }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold" style={{ color: '#F6E3C7' }}>{classItem.title}</h3>
                <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#C6423B', color: '#F6E3C7' }}>
                  {classItem.type}
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <Calendar className="mr-3 flex-shrink-0 mt-1" size={20} style={{ color: '#C6423B' }} />
                  <span style={{ color: '#F6E3C7' }}>{classItem.date}</span>
                </div>
                <div className="flex items-start">
                  <Clock className="mr-3 flex-shrink-0 mt-1" size={20} style={{ color: '#C6423B' }} />
                  <span style={{ color: '#F6E3C7' }}>{classItem.time}</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-3 flex-shrink-0 mt-1" size={20} style={{ color: '#C6423B' }} />
                  <span style={{ color: '#F6E3C7' }}>{classItem.location}</span>
                </div>
                <div className="flex items-start">
                  <Users className="mr-3 flex-shrink-0 mt-1" size={20} style={{ color: '#C6423B' }} />
                  <span className="font-medium" style={{ color: '#F6E3C7' }}>{classItem.spots}</span>
                </div>
              </div>

              <a
                href="#contact"
                className="block w-full text-center px-6 py-3 rounded-lg transition-all font-semibold hover:opacity-90"
                style={{ backgroundColor: '#C6423B', color: '#F6E3C7' }}
              >
                Register Now
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-block px-10 py-4 rounded-lg transition-colors font-semibold text-lg hover:opacity-90"
            style={{ backgroundColor: '#0C1D2F', color: '#F6E3C7' }}
          >
            Book a Private Class
          </a>
          <p className="mt-4" style={{ color: '#142131' }}>
            Need a custom schedule? Contact us for private or workplace training sessions.
          </p>
        </div>
      </div>
    </section>
  );
}
