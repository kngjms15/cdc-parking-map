/**
 * fetchLegend.js: Fetch Data
 * 
 * Fetches data from the legend.json and returns the data, or [blank] if there is an error
 * 
 */

export async function fetchLegend() {
    try {
        const res = await fetch("_data/legend.json")
        if(!res.ok) throw new Error("Failed to load Legend");
        const data = await res.json();
        return data;
    } catch(error) {
        console.error("Error loading legend: ", error);
        return[];
    }
}