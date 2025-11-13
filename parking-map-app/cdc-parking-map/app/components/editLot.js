/**
 * editLot.js: Edit Specific Lot
 * 
 * User can update Lot information such as title and desciption via input fields
 * and pressing the "Save" button.
 * 
 */

"use client"
import {useState} from 'react';
import { updateLegend } from '../lib/updateLegend';
import ParkingMapFunctions from './parkingMapFunctions';

export default function EditLot({ lotInfo, legend, onSave }) {
    const [title, setTitle] = useState(lotInfo.title);
    const [description, setDescription] = useState(lotInfo.description);
    const [save, setSave] = useState(false);

    const handleSave = async () => {
        setSave(true);

        const saveToLegend = legend.map((l) =>
            l.id == lotInfo.id ? { ...l, title, description } : l
        );

        try {
            await updateLegend(saveToLegend);
            onSave(saveToLegend);
        } catch(err) {
            console.error("save to legend failed: ", err);
        }

        setSave(false);

    }

    

    return (
        <div 
            className={`border-gray-400 rounded-md shadow-lg p-2 w-48`}
            onMouseDown={(e) => e.stopPropagation()}
            onMouseMove={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
        >
            <h2 className='text-sm font-semibold mb-1'>
                Edit Lot #{lotInfo.id}
            </h2>
            <input
                className='border p-1 rounded w-full mb-2 text-sm'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Title'
            />
            <textarea
                className='border p-1 rounded w-full text-sm'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Description'
            />
            <button 
                onClick={handleSave}
                disabled={save}
                className='bg-blue-500 text-white text-sm px-2 py-1 rounded mt-2 w-full hover:bg-blue-600 transition'
            >
                {save ?"Saving..." : "Save"}
            </button>


        </div>
    );
}