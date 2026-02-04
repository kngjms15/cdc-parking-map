(function () {
    const DESIGN_W = 3100;
    const DESIGN_H = 2258;

    const frame = document.getElementById('pz-frame');
    const content = document.getElementById('pz-content');
    const parking = document.getElementById('cdc-parking');

    // Ensure map is sized to design pixels
    parking.style.width = DESIGN_W + 'px';
    parking.style.height = DESIGN_H + 'px';

    // Pan/Zoom state
    let baseScale = 1;
    let minScale = 1;
    let maxScale = 4;
    let scale = 0;
    let tx = 0, ty = 0;

    let isDragging = false;
    let lastX = 0, lastY = 0;

    function getBaseScale() {
        const fw = frame.clientWidth;
        const fh = frame.clientHeight;
        return Math.min(fw / DESIGN_W, fh / DESIGN_H);
    }

    function centerAtScale(s) {
        const fw = frame.clientWidth;
        const fh = frame.clientHeight;
        const cw = DESIGN_W * s;
        const ch = DESIGN_H * s;
        // center within frame (no reflow)
        tx = Math.round((fw - cw) / 2);
        ty = 0;
    }

    function applyTransform() {
        content.style.transformOrigin = '0 0';
        content.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${scale})`;
    }

    function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

    function setBaseAndFit() {
        baseScale = getBaseScale();
        minScale = baseScale;
        // If we were smaller than base (e.g., after a resize), snap back up
        if (scale < minScale) scale = minScale;
        // Center at current scale (usually base on first run)
        centerAtScale(scale);
        applyTransform();
    }

    // Zoom keeping pointer location stable
    function zoomAtPoint(deltaScale, clientX, clientY) {
        const newScale = clamp(scale * deltaScale, minScale, maxScale);
        if (newScale === scale) return;

        const rect = frame.getBoundingClientRect();
        const cx = clientX - rect.left;
        const cy = clientY - rect.top;

        const xBefore = (cx - tx) / scale;
        const yBefore = (cy - ty) / scale;

        scale = newScale;

        tx = cx - xBefore * scale;
        ty = cy - yBefore * scale;
        applyTransform();
    }

    // Init to show entire map (and set that as max zoom-out)
    window.addEventListener('load', setBaseAndFit);
    window.addEventListener('resize', setBaseAndFit);

    // Wheel zoom
    frame.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY < 0 ? 1.1 : 0.9;
        zoomAtPoint(delta, e.clientX, e.clientY);
    }, { passive: false });

    // Double-click zoom in
    frame.addEventListener('dblclick', (e) => {
        e.preventDefault();
        zoomAtPoint(1.2, e.clientX, e.clientY);
    });

    // Drag to pan (mouse)
    frame.addEventListener('mousedown', (e) => {
        isDragging = true;
        lastX = e.clientX;
        lastY = e.clientY;
        frame.style.cursor = 'grabbing';
    });
    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        lastX = e.clientX;
        lastY = e.clientY;
        tx += dx; ty += dy;
        applyTransform();
    });
    window.addEventListener('mouseup', () => {
        isDragging = false;
        frame.style.cursor = 'default';
    });

    // === TOUCH SUPPORT ===
    let lastTouchDistance = 0;
    let isTouchPanning = false;

    function getTouchDistance(touches) {
        const dx = touches[0].clientX - touches[1].clientX;
        const dy = touches[0].clientY - touches[1].clientY;
        return Math.sqrt(dx * dx + dy * dy);
    }

    function getTouchMidpoint(touches) {
        return {
            x: (touches[0].clientX + touches[1].clientX) / 2,
            y: (touches[0].clientY + touches[1].clientY) / 2
        };
    }

    frame.addEventListener("touchstart", (e) => {
        if (e.touches.length === 1) {
            isTouchPanning = true;
            lastX = e.touches[0].clientX;
            lastY = e.touches[0].clientY;
        } else if (e.touches.length === 2) {
            isTouchPanning = false;
            lastTouchDistance = getTouchDistance(e.touches);
        }
    }, { passive: false });

    frame.addEventListener("touchmove", (e) => {
        e.preventDefault();
        if (e.touches.length === 1 && isTouchPanning) {
            const dx = e.touches[0].clientX - lastX;
            const dy = e.touches[0].clientY - lastY;
            lastX = e.touches[0].clientX;
            lastY = e.touches[0].clientY;
            tx += dx;
            ty += dy;
            applyTransform();
        } else if (e.touches.length === 2) {
            const newDistance = getTouchDistance(e.touches);
            const deltaScale = newDistance / lastTouchDistance;
            lastTouchDistance = newDistance;

            const midpoint = getTouchMidpoint(e.touches);
            zoomAtPoint(deltaScale, midpoint.x, midpoint.y);
        }
    }, { passive: false });

    frame.addEventListener("touchend", () => {
        isTouchPanning = false;
    });

    // Buttons
    document.getElementById('zoom-in').addEventListener('click', () => {
        const rect = frame.getBoundingClientRect();
        zoomAtPoint(1.2, rect.left + rect.width / 2, rect.top + rect.height / 2);
    });
    document.getElementById('zoom-out').addEventListener('click', () => {
        const rect = frame.getBoundingClientRect();
        zoomAtPoint(0.8, rect.left + rect.width / 2, rect.top + rect.height / 2);
    });
    document.getElementById('zoom-reset').addEventListener('click', () => {
        // Snap back to "show entire map"
        scale = minScale;           // baseScale
        centerAtScale(scale);
        applyTransform();
    });
})();