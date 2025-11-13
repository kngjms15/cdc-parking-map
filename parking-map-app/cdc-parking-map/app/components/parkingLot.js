/**
 * parkingLot.js: Universal Singal Lot
 * 
 * Used for consistency with all parking lots when mapped out. Showcases 
 * title(spot designated to) and colour(colour designated to spot). When
 * lot is double clicked shows lot editor from components/editLot.js
 * to update information of designated lot.
 * 
 */

"use client"
import { useState, useEffect } from 'react';
import { fetchLegend } from '../lib/fetchLegend';
import EditLot from './editLot'

export default function ParkingLot({initialId, lotSize, customStyle}) {
    const [legend, setLegend] = useState([])
    const [currentId, setCurrentId] = useState(initialId);
    const [showEditor, setShowEditor] = useState(false);

    const colourMap = {
        red: "bg-red-500",
        blue: "bg-blue-500",
        green: "bg-green-500",
        yellow: "bg-yellow-500",
    };

    useEffect(() => {
        fetchLegend().then(setLegend);
    }, []);

    if (legend.length == 0) return null;

    const lotInfo = legend.find((l) => l.id == currentId);
    if (!lotInfo) return null;

    const handleDoubleClick = () => setShowEditor(!showEditor);

    
    return(
        <div className='relative'>
            <div
                onDoubleClick={handleDoubleClick}
                title={`${lotInfo.title}: ${lotInfo.description}`}
                className={`${lotSize} hover:opacity-80 transition `}
                style={{ backgroundColor: lotInfo.colour, ...customStyle }}
            >
                <span className={`text-xs text-black font-semibold flex justify-center items-center  h-full`}>
                    {lotInfo.title}
                </span>

            </div>

            {showEditor && (
                <div className='absolute top-0 left-12 z-10 bg-white'>
                    <EditLot 
                        lotInfo={lotInfo} 
                        legend={legend}
                        onSave={(updated) => setLegend(updated)}
                    />
                </div>
            )}
        </div>
    );
}