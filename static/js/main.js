document.getElementById('readingForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const sign = document.getElementById('sign').value;
    const question = document.getElementById('question').value;
    
    try {
        const response = await fetch('/get_reading', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sign, question })
        });
        
        const data = await response.json();
        
        if (data.error) {
            alert(data.error);
            return;
        }
        
        document.getElementById('readingText').textContent = data.reading;
        document.getElementById('readingResult').style.display = 'block';
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while getting your reading. Please try again.');
    }
}); 