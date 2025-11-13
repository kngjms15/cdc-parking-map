"use client"
import ParkingMapContent from './parkingMapContent';
import ParkingMapFunctions from './parkingMapFunctions';

export default function ParkingMap() {
    const {
            mapRef,
            scale,
            offset,
            dragging,
            handleWheel,
            handleMouseDown,
            handleMouseMove,
            handleMouseUp,
            zoomIn,
            zoomOut,
        } = ParkingMapFunctions();

    return(
        <div className='pz-frame'>
            <div className='pz-content'>
                <div className='parking-scroll-wrapper'>
                    <div className='absolute top-4 left-4 z-10 flex flex-col gap-2'>
                        <button
                            onClick={zoomIn}
                            className="px-3 py-1 bg-white rounded shadow hover:bg-gray-200"
                        >
                            +
                        </button>
                        <button
                            onClick={zoomOut}
                            className="px-3 py-1 bg-white rounded shadow hover:bg-gray-200"
                        >
                            -
                        </button>
                    </div>
                    <div
                        ref={mapRef}
                        onWheel={handleWheel}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        className="absolute top-0 left-0 cursor-grab active:cursor-grabbing"
                        style={{
                            transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
                            transformOrigin: "center center",
                            transition: dragging ? "none" : "transform 0.1s ease-out",
                        }}
                    >
                        <ParkingMapContent />
                    </div>
                </div>
            </div>
        </div>
    )
}