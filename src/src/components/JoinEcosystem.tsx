import React, { useState } from "react";

interface FormSectionProps {
  title: string;
  buttonText: string;
}

const FormSection: React.FC<FormSectionProps> = ({ title, buttonText }) => {
  const [formData, setFormData] = useState({ name: "", location: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(title + " Submission Successful!");
    setFormData({ name: "", location: "", email: "" });
  };

  return (
    <div className="flex-1 min-w-[280px] bg-[#111] border border-[#222] hover:border-red-500/20 rounded-2xl p-6 transition-all duration-300">
      <h3 className="font-heading text-base font-extrabold text-white uppercase tracking-wider mb-6">
        {title}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            required
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-[#151515] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors"
          />
        </div>
        <div>
          <input
            type="text"
            required
            placeholder="Location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full bg-[#151515] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors"
          />
        </div>
        <div>
          <input
            type="email"
            required
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-[#151515] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white font-heading font-black text-xs uppercase tracking-wider py-3.5 rounded-lg transition-all duration-200"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default function JoinEcosystem() {
  return (
    <section id="join" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wider">
            JOIN THE ECOSYSTEM
          </h2>
        </div>

        <div className="flex flex-wrap gap-6 justify-between">
          <FormSection title="BECOME IN JUDGE" buttonText="SIGN UP" />
          <FormSection title="VOLUNTEER" buttonText="SIGN UP" />
          <FormSection title="COMMUNITY MEMBER" buttonText="SIGN UP" />
        </div>
      </div>
    </section>
  );
}
