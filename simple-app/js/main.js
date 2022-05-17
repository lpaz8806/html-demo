const sections = document.querySelectorAll('#main_content > section');
const links = document.querySelectorAll('a[data-section]');
const sectionLoaders = {
    'users': loadUsersSectionData,
    'todos': loadTodoSectionData,
    'photos': null
}

function setActiveSection(sectionId) {
    sections.forEach(section => section.classList.toggle(
        'active',
        section.id === sectionId
    ));
}
function loadSection(sectionId) {
    const loader = sectionLoaders[sectionId] || null;
    
    if (loader !== null) {
        loader();
    }

    setActiveLink(sectionId);
    setActiveSection(sectionId);
}

function setActiveLink(sectionId) {
    links.forEach(link => link.classList.toggle(
        'active',
        link.attributes['data-section'].value === sectionId
    ));
}

function handleClickLink(e) {
    const link = e.srcElement;
    const targetSection = link.attributes['data-section'].value;

    loadSection(targetSection);
}

links.forEach(link => {
    link.addEventListener('click', e => handleClickLink(e));
});

// APP LEVEL
loadSection('users');