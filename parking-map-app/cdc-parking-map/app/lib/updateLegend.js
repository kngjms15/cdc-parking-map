/**
 * updateLegend.js: Update Data
 * 
 * Sends a POST request to the api route in api/route.js to update the legend.json
 * using the data sent to the function (title, colour, description). Throws an error
 * if update fails
 * 
 */

export async function updateLegend(updateLegend) {
    const res = await fetch('/api', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateLegend),
    });
    if(!res.ok) {
        throw new Error("failed to update legend");
    }

    return res.json();

}