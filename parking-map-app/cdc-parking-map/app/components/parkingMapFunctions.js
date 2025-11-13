"use client"
import { useState, useRef } from 'react';

export default function ParkingMapFunctions() {
    const mapRef = useRef(null);
    const [scale, setScale] = useState(1);
    const [offset, setOffSet] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [lastMouse, setLastMouse] = useState({ x: 0, y: 0 });

    // Zooming with mouse wheel
    const handleWheel = (e) => {
        e.preventDefault();
        const zoomIntensity = 0.1;
        const newScale = Math.min(Math.max(0.5, scale - e.deltaY * zoomIntensity/100), 3);
        setScale(newScale);
    };

    // Start Dragging mouse
    const handleMouseDown = (e) => {
        e.preventDefault();
        setDragging(true);
        setLastMouse({ x:e.clientX, y:e.clientY });
    }

    // Stop Dragging mouse
    const handleMouseUp = () => setDragging(false);

    // The moving offset while dragging
    const handleMouseMove = (e) => {
        if (!dragging) return;
        const dx = e.clientX - lastMouse.x;
        const dy = e.clientY - lastMouse.y;
        setOffSet((prev) => ({ x: prev.x+dx, y: prev.y+dy }));
        setLastMouse({ x: e.clientX, y: e.clientY });

    };

    // Zooming but for the buttons
    const zoomIn = () => setScale((s) => Math.min(s + 0.2, 3));
    const zoomOut = () => setScale((s) => Math.max(s - 0.2, 0.5));

    return {
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
    };
}