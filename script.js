function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    const template = document.getElementById('template').value;
    const fontColor = document.getElementById('fontColor').value;
    const bgColor = document.getElementById('bgColor').value;

    let resumeHTML = `
        <div class="${template}" style="color: ${fontColor}; background-color: ${bgColor};">
            <h2>${name}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        </div>
    `;
    document.getElementById('resumeOutput').innerHTML = resumeHTML;
}
function downloadPDF() {
    const element = document.getElementById('resumeOutput');
    
    if (!element.innerHTML.trim()) {
        alert('Please generate a resume before downloading.');
        return;
    }
    
    html2pdf().from(element).set({
        margin: 1,
        filename: 'resume.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    }).save();
}
