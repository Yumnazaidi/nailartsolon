function changeSrc(element) {
    const sr =  1;
    const currentSrc = element.getAttribute('src');
    if (!currentSrc.includes('1')) {
        element.src = sr + currentSrc;
    }
}

function resetSrc(element) {
    const currentSrc = element.getAttribute('src');
    element.src = currentSrc.replace('1', '');
}

