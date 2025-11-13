import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { addToPastes, updateToPastes } from '../redux/pasteSlice'

const Home = () => {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')
  const [searchParams, setSearchParams] = useSearchParams() // corrected: include setSearchParams
  const pasteId = searchParams.get('pasteId')
  const dispatch = useDispatch();
  const allPastes=useSelector((state)=>state.paste.pastes);

 useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, allPastes]);

  function CreatePaste(){
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(), 
    }
  
    

    if(pasteId){
      // update
      dispatch(updateToPastes(paste))
    } else {
      // create
      dispatch(addToPastes(paste))
    }

    // after creation or updation
    setTitle('');
    setValue('');
    setSearchParams({}); // works now because setSearchParams is defined
  }

  return (
    <div className="flex flex-col items-center p-6 gap-4 w-full">
      {/* Title Input */}
      <input
        className="p-2 rounded-2xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-3xl"
        type="text"
        placeholder="Enter title here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Button */}
      <button
        onClick={CreatePaste}
        className="p-2 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition w-full max-w-3xl"
      >
        {pasteId ? 'Update My Paste' : 'Create My Paste'}
      </button>

      {/* Content Textarea */}
      <textarea
        value={value}
        className="rounded-2xl mt-4 min-w-[500px] p-4"
        placeholder="Enter content here"
        onChange={(e) => setValue(e.target.value)}
        rows={20}
      />
    </div>
  )
}

export default Home
