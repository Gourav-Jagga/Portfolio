import React from 'react';

export default function Footer({ personalData }) {
  return (
    <footer className="py-8 px-6 border-t border-slate-800">
      <div className="max-w-5xl mx-auto text-center text-gray-400">
        <p>© 2024 {personalData.name}. Built with React, Vite & Tailwind CSS</p>
        <p className="text-sm mt-2">Designed for showcasing backend development expertise</p>
      </div>
    </footer>
  );
}