import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromPastes } from '../redux/pasteSlice'; // Make sure the path is correct
import toast,{Toaster} from 'react-hot-toast';
import { NavLink } from 'react-router-dom';




const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch(); 

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleShare = (paste) => {
  navigator.share?.({
    title: paste.title,
    text: paste.content,
  }) || toast.error("Sharing not supported on this device");
};

  return (
    <div className="p-5">
      <input
        className="p-2 rounded-2xl min-w-[600px] mt-5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="search"
        placeholder="Search pastes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex flex-col gap-5 mt-5">
        {filteredData.length > 0 ? (
          filteredData.map((paste) => (
            <div key={paste._id} className="border p-4 rounded-lg shadow-sm">
              <div className="font-semibold text-lg">{paste.title}</div>
              <div className="text-gray-700 mt-2">{paste.content}</div>




              <div className="flex flex-row gap-4 mt-3">
  <button className="btn" ><NavLink to={`/?pasteId=${paste._id}`}>Edit</NavLink>  </button>
 
 <button> <NavLink to={`/paste/${paste._id}`} state={{ paste }} className="btn">
  View
</NavLink>

</button>
  

  <button
    className="btn btn-red"
    onClick={() => dispatch(removeFromPastes(paste._id))}
  >
    Delete
  </button>

  <button
    className="btn"
    onClick={() => {
      navigator.clipboard.writeText(paste.content);
      toast.success("Copied to clipboard");
    }}
  >
    Copy
  </button>

  <button className="btn" onClick={() => handleShare(paste)}>Share</button>
</div>


              <div className="text-sm text-gray-500 mt-2">{paste.createdAt}</div>
            </div>



          ))
        ) : (
          <div className="text-gray-500 mt-5">No pastes found.</div>
        )}
      </div>
    </div>
  );
};

export default Pastes;
