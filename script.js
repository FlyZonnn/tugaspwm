// Ambil elemen DOM
const addButton = document.getElementById('addButton');
const itemInput = document.getElementById('itemInput');
const itemList = document.getElementById('itemList');

// Event listener untuk menambahkan item
addButton.addEventListener('click', addItem);

// Fungsi untuk menambahkan item ke dalam daftar
function addItem() {
    const inputText = itemInput.value.trim();
    if (inputText !== '') {
        const li = document.createElement('li');
        li.classList.add('list-item');

        // Checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');
        li.appendChild(checkbox);

        // Teks item
        const span = document.createElement('span');
        span.classList.add('item-text');
        span.textContent = inputText;
        li.appendChild(span);

        // Tombol dengan 3 titik
        const dotsButton = document.createElement('button');
        dotsButton.innerHTML = '&#x22EE;'; // Tanda 3 titik vertikal
        dotsButton.classList.add('menu-dots');
        li.appendChild(dotsButton);

        // Menu dropdown (edit dan delete)
        const menu = document.createElement('div');
        menu.classList.add('menu');
        const editItem = document.createElement('div');
        editItem.classList.add('menu-item');
        editItem.textContent = 'Edit';
        const deleteItem = document.createElement('div');
        deleteItem.classList.add('menu-item');
        deleteItem.textContent = 'Delete';
        menu.appendChild(editItem);
        menu.appendChild(deleteItem);
        li.appendChild(menu);

        // Event listener untuk menampilkan/menyembunyikan menu
        dotsButton.addEventListener('click', function () {
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });

        // Event listener untuk mengedit item
        editItem.addEventListener('click', function () {
            menu.style.display = 'none'; // Menyembunyikan menu setelah klik
            editItemFunction(span);
        });

        // Event listener untuk menghapus item
        deleteItem.addEventListener('click', function () {
            itemList.removeChild(li);
        });

        // Tambahkan item ke daftar
        itemList.appendChild(li);

        // Kosongkan input setelah item ditambahkan
        itemInput.value = '';
    }
}

// Fungsi untuk mengedit item
function editItemFunction(span) {
    const currentText = span.textContent;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentText;
    input.classList.add('edit-input');

    // Ganti teks dengan input box
    span.replaceWith(input);

    // Event listener untuk menyimpan perubahan
    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const newText = input.value.trim();
            if (newText !== '') {
                span.textContent = newText;
                input.replaceWith(span);
            }
        }
    });
}
