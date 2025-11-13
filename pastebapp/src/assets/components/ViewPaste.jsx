import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ViewPaste = () => {
  const { pasteId } = useParams();   // ✅ Match route param
const allPastes = useSelector((state) => state.paste.pastes);

const paste = allPastes.find((p) => p._id === pasteId) || { title: 'Not Found', content: 'No content available' };



  return (
    <div className="flex flex-col items-center p-6 gap-4 w-full">
      {/* Title Display */}
      <input
        type="text"
        value={paste.title}
        disabled
        className="p-2 rounded-2xl border border-green-700 bg-green-300 text-black w-full max-w-3xl"
        style={{ backgroundColor: '#6ee7b7', color: '#000' }} // fallback green
      />

      {/* Content Display */}
      <textarea
        value={paste.content}
        disabled
        className="rounded-2xl mt-4 min-w-[500px] p-4 bg-green-300 text-black border border-green-700"
        style={{ backgroundColor: '#6ee7b7', color: '#000' }} // fallback green
        rows={20}
      />
    </div>
  );
};

export default ViewPaste;
