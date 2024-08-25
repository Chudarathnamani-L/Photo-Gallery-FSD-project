document.addEventListener('DOMContentLoaded', function() {
    const photosGallery = document.getElementById('photos-gallery');
    const favoritesGallery = document.getElementById('favorites-gallery');
    const photosModule = document.getElementById('photos-module');
    const uploadModule = document.getElementById('upload-module');
    const favoritesModule = document.getElementById('favorites-module');
    const uploadForm = document.getElementById('upload-form');
    const fileInput = document.getElementById('file-input');

    const galleryItems = [
        { src: 'path_to_image_1.jpg', title: 'Image 1', category: 'nature' },
        { src: 'path_to_image_2.jpg', title: 'Image 2', category: 'city' },
        // Add more items as needed
    ];

    const favoriteItems = [
        { src: 'path_to_image_3.jpg', title: 'Favorite Image 1', category: 'nature' },
        // Add more favorite items as needed
    ];

    function displayGalleryItems(items, gallery) {
        gallery.innerHTML = '';
        items.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            galleryItem.innerHTML = `
                ${item.isVideo 
                    ? `<video controls>
                          <source src="${item.src}" type="video/mp4">
                       </video>`
                    : `<img src="${item.src}" alt="${item.title}">`}
                <p>${item.title}</p>
            `;
            gallery.appendChild(galleryItem);
        });
    }

    function showModule(moduleId) {
        // Hide all modules
        photosModule.classList.add('hidden');
        uploadModule.classList.add('hidden');
        favoritesModule.classList.add('hidden');
        
        // Show the selected module
        if (moduleId === 'photos') {
            photosModule.classList.remove('hidden');
        } else if (moduleId === 'upload') {
            uploadModule.classList.remove('hidden');
        } else if (moduleId === 'favorites') {
            favoritesModule.classList.remove('hidden');
        }
    }

    // Initialize with the photos module visible
    showModule('photos');

    // Display initial gallery items
    displayGalleryItems(galleryItems, photosGallery);
    displayGalleryItems(favoriteItems, favoritesGallery);

    // Handle file upload
    uploadForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const files = fileInput.files;
        if (files.length === 0) return;

        const newItems = Array.from(files).map(file => ({
            src: URL.createObjectURL(file),
            title: file.name,
            isVideo: file.type.startsWith('video/')
        }));
        displayGalleryItems(newItems, photosGallery); 
    });
});
