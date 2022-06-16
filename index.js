// changes the text allignment of the doggos header to the left
let header = document.querySelector('#page-header');
header.style.textAlign = 'left';

// adds a border radius to all of the images and flips them upside down
let dogImages = document.querySelectorAll('.dog-image');
for(let i = 0; i < dogImages.length; i++) {
    dogImages[i].style.borderRadius = '50px';
    dogImages[i].style.transform = 'rotate(180deg)'
}

// alligns all of the dog names to the left
let dogNames = document.querySelectorAll('.dog-name');
for(let i = 0; i < dogNames.length; i++) {
    dogNames[i].style.textAlign = 'left';
}

// changes the color of the footer to red
let footer = document.querySelector('.footer');
footer.style.color = 'red';

