import React, { useState, useEffect } from 'react';
import { 
  User, Phone, Heart, AlertCircle, Clock, FileText, 
  UserPlus, Shield, Activity, Calendar, ChevronRight
} from 'lucide-react';
// import { Alert, AlertDescription } from '@/components/ui/alert';

const ProfileLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(null);

  // Simulate loading state
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const patientInfo = {
    name: "John Doe",
    age: 72,
    bloodType: "O+",
    gender: "Male",
    lastUpdated: "2025-02-22"
  };

  const ProfileCard = ({ icon: Icon, title, children, delay }) => {
    return (
      <div 
        className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden
          transform transition-all duration-500 ease-in-out hover:shadow-md hover:scale-[1.02]
          ${isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
        style={{ transitionDelay: `${delay}ms` }}
        onMouseEnter={() => setActiveSection(title)}
        onMouseLeave={() => setActiveSection(null)}
      >
        <div className={`p-4 border-b bg-gradient-to-r from-teal-50 to-blue-50
          flex items-center justify-between
          ${activeSection === title ? 'from-teal-100 to-blue-100' : ''}`}>
          <h2 className="flex items-center gap-3 text-lg font-semibold text-gray-800">
            <Icon size={22} className={`text-teal-600 transition-transform duration-300
              ${activeSection === title ? 'scale-110' : ''}`} />
            {title}
          </h2>
          <ChevronRight size={18} className={`text-gray-400 transition-transform duration-300
            ${activeSection === title ? 'translate-x-1' : ''}`} />
        </div>
        <div className="p-5 bg-white">{children}</div>
      </div>
    );
  };

  const InfoPill = ({ text, color = "teal" }) => (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm
      bg-${color}-50 text-${color}-700 border border-${color}-100 mr-2 mb-2`}>
      {text}
    </span>
  );

  const ContactBadge = ({ name, role, phone }) => (
    <div className="p-3 rounded-lg bg-gray-50 mb-3 last:mb-0">
      <div className="font-medium text-gray-800">{name}</div>
      <div className="text-sm text-gray-600">{role}</div>
      <div className="text-sm text-teal-600 mt-1">{phone}</div>
    </div>
  );

  const MedicationCard = ({ name, dosage, frequency, time }) => (
    <div className="p-3 rounded-lg bg-blue-50 border border-blue-100 mb-3 last:mb-0">
      <div className="font-medium text-gray-800">{name}</div>
      <div className="text-sm text-gray-600">
        {dosage} • {frequency}
      </div>
      <div className="text-sm text-blue-600 mt-1">{time}</div>
    </div>
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 bg-gray-50 min-h-screen">
      {/* <Alert className="mb-6 bg-blue-50 border-blue-100">
        <Activity className="h-4 w-4 text-blue-600" />
        <AlertDescription>
          Profile last updated on {new Date(patientInfo.lastUpdated).toLocaleDateString()}
        </AlertDescription>
      </Alert> */}

      {/* Profile Header */}
      <div className={`bg-white rounded-xl shadow-sm border border-gray-100 mb-6 overflow-hidden
        transform transition-all duration-500 ease-in-out
        ${isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        <div className="p-6 bg-gradient-to-r from-teal-500 to-blue-600">
          <div className="flex items-center gap-6">
            <div className="h-24 w-24 rounded-full bg-white/20 flex items-center justify-center">
              <User size={48} className="text-white" />
            </div>
            <div className="text-white">
              <h1 className="text-3xl font-bold mb-2">{patientInfo.name}</h1>
              <div className="flex gap-4 text-white/90">
                <span>{patientInfo.age} years</span>
                <span>•</span>
                <span>{patientInfo.gender}</span>
                <span>•</span>
                <span>{patientInfo.bloodType}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProfileCard icon={Phone} title="Emergency Contacts" delay={100}>
          <ContactBadge 
            name="Sarah Doe"
            role="Primary Contact (Daughter)"
            phone="+1 234-567-8900"
          />
          <ContactBadge 
            name="Mike Doe"
            role="Secondary Contact (Son)"
            phone="+1 234-567-8901"
          />
        </ProfileCard>

        <ProfileCard icon={Heart} title="Medical Conditions" delay={200}>
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Existing Conditions</h3>
            <div>
              <InfoPill text="Type 2 Diabetes" />
              <InfoPill text="Hypertension" />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Allergies</h3>
            <div>
              <InfoPill text="Penicillin" color="red" />
              <InfoPill text="Peanuts" color="red" />
            </div>
          </div>
        </ProfileCard>

        <ProfileCard icon={AlertCircle} title="Current Medications" delay={300}>
          <MedicationCard 
            name="Metformin"
            dosage="500mg"
            frequency="Twice daily"
            time="8:00 AM, 8:00 PM"
          />
          <MedicationCard 
            name="Lisinopril"
            dosage="10mg"
            frequency="Once daily"
            time="9:00 AM"
          />
        </ProfileCard>

        <ProfileCard icon={Clock} title="Treatment History" delay={400}>
          <div className="space-y-4">
            {[
              { date: 'Jan 2025', desc: 'Routine Checkup', doctor: 'Dr. Emily Johnson' },
              { date: 'Dec 2024', desc: 'Diabetes Management Review', doctor: 'Dr. Michael Chen' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
                <div>
                  <div className="font-medium text-gray-800">{item.date}</div>
                  <div className="text-sm text-gray-600">{item.desc}</div>
                  <div className="text-sm text-teal-600">{item.doctor}</div>
                </div>
              </div>
            ))}
          </div>
        </ProfileCard>

        <ProfileCard icon={FileText} title="Medical Records" delay={500}>
          <div className="space-y-3">
            {[
              { name: 'Blood Work Results', date: 'Jan 2025', type: 'Lab Report' },
              { name: 'Annual Physical Report', date: 'Dec 2024', type: 'Assessment' },
              { name: 'Cardiology Assessment', date: 'Nov 2024', type: 'Specialist Report' }
            ].map((record, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-gray-50
                hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                <div>
                  <div className="font-medium text-gray-800">{record.name}</div>
                  <div className="text-sm text-gray-600">{record.date}</div>
                </div>
                <div className="text-sm text-teal-600">{record.type}</div>
              </div>
            ))}
          </div>
        </ProfileCard>

        <ProfileCard icon={UserPlus} title="Attending Physicians" delay={600}>
          <div className="space-y-4">
            {[
              {
                name: 'Dr. Emily Johnson',
                role: 'Primary Care Physician',
                contact: '+1 234-567-8902',
                specialty: 'Internal Medicine'
              },
              {
                name: 'Dr. Michael Chen',
                role: 'Endocrinologist',
                contact: '+1 234-567-8903',
                specialty: 'Diabetes Management'
              }
            ].map((doctor, i) => (
              <div key={i} className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                <div className="font-medium text-gray-800">{doctor.name}</div>
                <div className="text-sm text-gray-600">{doctor.role}</div>
                <div className="text-sm text-teal-600 mt-1">{doctor.contact}</div>
                <div className="mt-2">
                  <InfoPill text={doctor.specialty} />
                </div>
              </div>
            ))}
          </div>
        </ProfileCard>
      </div>
    </div>
  );
};

export default ProfileLayout;