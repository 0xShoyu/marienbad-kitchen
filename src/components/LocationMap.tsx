import React from "react";

export default function LocationMap() {
  return (
    <div className="w-full h-full min-h-[250px] relative group overflow-hidden rounded-sm">
      <div className="absolute inset-0 border-[6px] border-white/80 shadow-inner z-20 pointer-events-none"></div>
      <div className="absolute inset-0 border border-stone/20 z-30 pointer-events-none rounded-sm"></div>
      
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2566.191364906915!2d12.7021979!3d49.970269699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a07d687aea4289%3A0x8928276ecf86ed1c!2z5Lit6I-v5ZyS6aSQ6aaG!5e0!3m2!1sen!2sth!4v1770367315178!5m2!1sen!2sth" 
        width="100%" 
        height="100%" 
        style={{ border: 0, filter: "sepia(5%) contrast(90%) opacity(0.95)" }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Map of China Garden"
        className="block w-full h-full bg-stone-100" 
      ></iframe>
    </div>
  );
}
