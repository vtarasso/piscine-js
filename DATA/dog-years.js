function dogYears(planet, age) {
    const earthYears = age / 31557600 * 7
    if (planet === "earth") {
        return parseFloat(earthYears.toFixed(2));
    } else if (planet === "mercury") {
        const mercuryYears = earthYears / 0.2408467
        return parseFloat(mercuryYears.toFixed(2));
    } else if (planet === "venus") {
        const venusYears = earthYears / 0.61519726
        return parseFloat(venusYears.toFixed(2));
    } else if (planet === "mars") {
        const marsYears = earthYears / 1.8808158
        return parseFloat(marsYears.toFixed(2));
    } else if (planet === "jupiter") {
        const jupiterYears = earthYears / 11.862615
        return parseFloat(jupiterYears.toFixed(2));
    } else if (planet === "saturn") {
        const saturnYears = earthYears / 29.447498
        return parseFloat(saturnYears.toFixed(2));
    } else if (planet === "uranus") {
        const uranusYears = earthYears / 84.016846
        return parseFloat(uranusYears.toFixed(2));
    } else if (planet === "neptune") {
        const neptuneYears = earthYears / 164.79132
        return parseFloat(neptuneYears.toFixed(2));
    }
}