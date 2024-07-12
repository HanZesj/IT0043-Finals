function openTab(evt, tabName) {
    const tabContent = document.querySelectorAll('.tab-content');
    tabContent.forEach(content => {
        content.style.display = 'none';
    });
    const tabLinks = document.querySelectorAll('.tab-button');
    tabLinks.forEach(link => {
        link.className = link.className.replace(' active', '');
    });
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
}

function toggleDetails(branchId) {
    const details = document.getElementById(branchId);
    if (details.style.display === 'block') {
        details.style.display = 'none';
    } else {
        const allDetails = document.querySelectorAll('.details');
        allDetails.forEach(detail => {
            detail.style.display = 'none';
        });
        details.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tab-button').click();
});
