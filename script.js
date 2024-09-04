function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const summary = document.getElementById('summary').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    const certifications = document.getElementById('certifications').value;
    const internships = document.getElementById('internships').value;
    const volunteerExperience = document.getElementById('volunteerexperience').value;
    const languages = document.getElementById('languages').value;
    const template = document.getElementById('template').value;
    const fontColor = document.getElementById('fontColor').value;
    const bgColor = document.getElementById('bgColor').value;

    let resumeHTML = '';

    if (template === 'template1') {
        resumeHTML = `
            <div class="template1" style="color: ${fontColor}; background-color: ${bgColor}; padding: 20px; border-radius: 5px;">
                <div class="top">
                    <h2>${name}</h2>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                </div>
                <h3>Professional Summary:</h3>
                <p>${summary}</p>
                <h3>Education:</h3>
                <p>${education}</p>
                <h3>Experience:</h3>
                <p>${experience}</p>
                <h3>Skills:</h3>
                <p>${skills}</p>
                <h3>Certifications and Licenses:</h3>
                <p>${certifications}</p>
                <h3>Volunteer Experience:</h3>
                <p>${volunteerExperience}</p>
                <h3>Internships:</h3>
                <p>${internships}</p>
                <h3>Languages:</h3>
                <p>${languages}</p>
            </div>
        `;
    } else if (template === 'template2') {
        resumeHTML = `
            <div class="template2" style="color: ${fontColor}; background-color: ${bgColor};">
                <div class="header">
                    <h2>${name}</h2>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                </div>
                <div class="content">
                    <div class="left-column">
                        <h3>Professional Summary:</h3>
                        <p>${summary}</p>
                        <h3>Education:</h3>
                        <p>${education}</p>
                        <h3>Skills:</h3>
                        <p>${skills}</p>
                        <h3>Languages:</h3>
                        <p>${languages}</p>
                    </div>
                    <div class="right-column">
                        <h3>Experience:</h3>
                        <p>${experience}</p>
                        <h3>Certifications and Licenses:</h3>
                        <p>${certifications}</p>
                        <h3>Volunteer Experience:</h3>
                        <p>${volunteerExperience}</p>
                        <h3>Internships:</h3>
                        <p>${internships}</p>
                    </div>
                </div>
            </div>
        `;
    }

    document.getElementById('resumeOutput').innerHTML = resumeHTML;
}
function downloadPDF() {
    const element = document.getElementById('resumeOutput');
    
    if (!element.innerHTML.trim()) {
        alert('Please generate a resume before downloading.');
        return;
    }
    
    html2pdf().from(element).set({
        // margin: [10, 10, 10, 10],
        filename: 'resume.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    }).save();
}