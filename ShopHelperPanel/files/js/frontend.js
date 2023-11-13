document.addEventListener('DOMContentLoaded', function() {
    const linkToGithub = document.getElementById('linktoGithub');
    
    if (linkToGithub) {
        linkToGithub.addEventListener('click', function() {
            window.open("https://github.com/angelograniellodev", '_blank');
        });
    } else {
        console.error("id not found");
    }
});
