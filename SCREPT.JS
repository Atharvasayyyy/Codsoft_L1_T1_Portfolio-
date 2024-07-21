document.querySelectorAll('.nav-item, .social-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#007bff'; // Change to your desired hover background color
        item.style.color = '#fff'; // Change to your desired hover text color
    });

    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = ''; // Reset to original background color
        item.style.color = ''; // Reset to original text color
    });

    item.addEventListener('click', (e) => {
        e.preventDefault();
        const link = item.getAttribute('href');
        const a = document.createElement('a');
        a.href = link;
        a.download = link.split('/').pop(); // Use the file name from the URL for download
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});