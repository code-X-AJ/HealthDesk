
import React, { useState, useEffect } from 'react';
import { 
  User, Phone, Heart, AlertCircle, Clock, FileText, 
  UserPlus, Shield, Activity, Calendar, ChevronRight
} from 'lucide-react';
// import { Alert, AlertDescription } from '@/components/ui/alert';

const ProfileLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  const [userData, setUserData] = useState(null);
  const [medications, setMedications] = useState([]);

  // Fetch user data from localStorage
  useEffect(() => {
    try {
      const userString = localStorage.getItem('user');
      if (userString) {
        const userObj = JSON.parse(userString);
        setUserData(userObj);
      }
    } catch (error) {
      console.error("Error loading user data:", error);
    }

    // Simulate medications fetch (would normally come from API)
    setMedications([
      {
        name: "Metformin",
        dosage: "500mg",
        frequency: "Twice daily",
        time: "8:00 AM, 8:00 PM"
      },
      {
        name: "Lisinopril",
        dosage: "10mg",
        frequency: "Once daily",
        time: "9:00 AM"
      }
    ]);

    // End loading state
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

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

  // If user data is not loaded yet
  if (isLoading || !userData) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-6 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 bg-gray-50 min-h-screen">
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
              <h1 className="text-3xl font-bold mb-2">{userData.name}</h1>
              <div className="flex gap-4 text-white/90">
                <span>{userData.age} years</span>
                <span>•</span>
                <span>{userData.gender}</span>
                <span>•</span>
                <span>{userData.bloodGroup}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProfileCard icon={Phone} title="Emergency Contacts" delay={100}>
          {userData.emergencyContact ? (
            <ContactBadge 
              name={userData.emergencyContact.name}
              role={`Primary Contact (${userData.emergencyContact.relation})`}
              phone={userData.emergencyContact.phone}
            />
          ) : (
            <div className="text-center py-6 text-gray-500">
              No emergency contacts added yet
            </div>
          )}
        </ProfileCard>

        {/* <ProfileCard icon={Heart} title="Medical Conditions" delay={200}>
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Existing Conditions</h3>
            <div>
              {userData.medicalConditions && userData.medicalConditions.length > 0 ? (
                userData.medicalConditions.map((condition, index) => (
                  <InfoPill key={index} text={condition} />
                ))
              ) : (
                <div className="text-gray-500">No conditions recorded</div>
              )}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Allergies</h3>
            <div>
              {userData.allergies && userData.allergies.length > 0 ? (
                userData.allergies.map((allergy, index) => (
                  <InfoPill key={index} text={allergy} color="red" />
                ))
              ) : (
                <div className="text-gray-500">No allergies recorded</div>
              )}
            </div>
          </div>
        </ProfileCard> */}

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
          {medications.length > 0 ? (
            medications.map((medication, index) => (
              <MedicationCard 
                key={index}
                name={medication.name}
                dosage={medication.dosage}
                frequency={medication.frequency}
                time={medication.time}
              />
            ))
          ) : (
            <div className="text-center py-6 text-gray-500">
              No current medications recorded
            </div>
          )}
        </ProfileCard>
{/* 
        <ProfileCard icon={Clock} title="Treatment History" delay={400}>
          <div className="space-y-4">
            {userData.treatments && userData.treatments.length > 0 ? (
              userData.treatments.map((treatment, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
                  <div>
                    <div className="font-medium text-gray-800">{treatment.date}</div>
                    <div className="text-sm text-gray-600">{treatment.desc}</div>
                    <div className="text-sm text-teal-600">{treatment.doctor}</div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-6 text-gray-500">
                No treatment history recorded
              </div>
            )}
          </div>
        </ProfileCard> */}

        <ProfileCard icon={Clock} title="Treatment History" delay={400}>
          <div className="space-y-4">
            {[
              { date: 'Jan 2025', desc: 'Routine Checkup', doctor: 'Dr. Munna Bhaiya MBBS' },
              { date: 'Dec 2024', desc: 'Diabetes Management Review', doctor: 'Dr. Bimarilal Chikitsak' }
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
            {userData.medicalRecords && userData.medicalRecords.length > 0 ? (
              userData.medicalRecords.map((record, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50
                  hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                  <div>
                    <div className="font-medium text-gray-800">{record.name}</div>
                    <div className="text-sm text-gray-600">{record.date}</div>
                  </div>
                  <div className="text-sm text-teal-600">{record.type}</div>
                </div>
              ))
            ) : (
              <div className="text-center py-6 text-gray-500">
                No medical records available
              </div>
            )}
          </div>
        </ProfileCard>

        {/* <ProfileCard icon={UserPlus} title="Attending Physicians" delay={600}>
          <div className="space-y-4">
            {userData.physicians && userData.physicians.length > 0 ? (
              userData.physicians.map((doctor, index) => (
                <div key={index} className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                  <div className="font-medium text-gray-800">{doctor.name}</div>
                  <div className="text-sm text-gray-600">{doctor.role}</div>
                  <div className="text-sm text-teal-600 mt-1">{doctor.contact}</div>
                  <div className="mt-2">
                    <InfoPill text={doctor.specialty} />
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-6 text-gray-500">
                No physicians assigned
              </div>
            )}
          </div>
        </ProfileCard> */}
          <ProfileCard icon={UserPlus} title="Attending Physicians" delay={600}>
           <div className="space-y-4">
             {[
               {
                 name: 'Dr. Ishwar Haath',
                 role: 'Divine Healer & Certified Churan Specialist',
                 contact: '+91 99999-88888 (Baba Approved)',
                 specialty: 'Ek Baar Mein Farak'
               },
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