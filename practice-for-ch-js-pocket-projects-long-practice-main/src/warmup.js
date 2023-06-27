const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    const newPTag = document.createElement('p')
    newPTag.innerText = string;
    if (htmlElement.children.length > 0) {
        htmlElement.removeChild(htmlElement.children[0])
        htmlElement.appendChild(newPTag);
    } else {
        htmlElement.appendChild(newPTag);
    }
};

// htmlGenerator('Party Time.', partyHeader);