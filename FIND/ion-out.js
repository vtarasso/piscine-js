function ionOut(string) {
    const res = /\w*t(?=ion)/g
    return String(string).match(res) || []    
}