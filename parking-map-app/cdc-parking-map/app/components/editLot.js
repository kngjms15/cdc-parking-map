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
    const [colour, setColour] = useState(lotInfo.colour || "#9CA3AF"); // default

    const presetColours = [
        "#3B82F6", //blue
        "#22C55E", //green
        "#EF4444", //red
        "#EAB308", //gold
        "#A855F7", //purple
        "#F97316", //orange
        "#06B6D4", //turquoise
        "#EC4899", //pink
        "#84CC16", //light green
        "#93C5FD", // light bluew
        "#737373", // grey
        "#FCA5A5", // light pink
        "#FEF08A", // light yellow
        "#94A3B8", // light grey
        "#D97706", // brown
        "#FCD34D", // yellow
        "#C084FC", // light purple
    ]

    const handleSave = async () => {
        setSave(true);

        const saveToLegend = legend.map((l) =>
            l.id == lotInfo.id ? { ...l, title, description, colour } : l
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

            <div className='mb-2'>
                <p className='text-xs font-semibold mb-1'>Select Colour:</p>
                <div className='flex flex-wrap gap-1'>
                    {presetColours.map((hex) => (
                        <button 
                            key={hex}
                            onClick={() => setColour(hex)}
                            className={`w-6 h-6 rounded-md border-2 ${colour === hex ? "border-black scale-110" : "border-gray-300"} transition`}
                            style={{ backgroundColor: hex }}
                        />
                    ))}

                </div>
            </div>

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