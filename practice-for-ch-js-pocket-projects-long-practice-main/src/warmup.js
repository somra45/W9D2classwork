const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    const newPTag = document.createElement('p')
    newPTag.innerText = string;
    htmlElement.appendChild(newPTag);
};

htmlGenerator('Party Time.', partyHeader);