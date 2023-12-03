function uploadFile() {
    const fileInput = document.getElementById("fileInput");

    const fileList = document.getElementById("fileList")



    const file = fileInput.files[0];

    const reader = new FileReader();

    reader.onload = function() {
        const listItem = document.createElement('DIV');
        listItem.textContent = file.name;

        listItem.addEventListener('click', function() {
            showFile(file);
        });
        fileList.appendChild(listItem);
    }

    if(file) {
        reader.readAsDataURL(file);
    }
}


function showFile(file) {
    const fileViewer = document.getElementById("fileViewer");

    const reader = new FileReader();

    reader.onload = function() {
        const img = document.createElement('img');

        img.src = reader.result;
        fileViewer.innerHTML = '';
        fileViewer.appendChild(img);
    }

    if(file) {
        reader.readAsDataURL(file);
    }
    
}