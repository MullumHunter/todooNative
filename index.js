
for (let item = 0; item < localStorage.length; item++) {
    let key = localStorage.key(item)
    let status = localStorage.getItem(key);
    createLocalNote(status, key);
}


function createLocalNote(status, key) {
    const note = document.createElement('div');
    let keyFB = key.split('')[0].toUpperCase()+key.substring(1)
    note.classList.add('box-note');
    note.innerHTML = `<label class="custom-checkbox">
                            <input type="checkbox" class="hidden-checkbox">
                            <div class="checkbox">
                                <img src="%20svg/vector.svg" alt="svg" class="ch">
                            </div>
                        </label>
                            <div class="box-content">
                                <p class="box-content-text" >${keyFB}</p>
                            </div>
                            <button class="btn-delite">
                                <img src="%20svg/delete.svg" alt="delete" class="btn-delite-img">
                            </button>`;


    note.childNodes[0].childNodes[1].addEventListener('input', (e) => {
        const checkedInput = e.target.checked;
        const blockP = note.querySelector('.box-content-text')
        const boxContent = note.childNodes[2]

        changeLinetThrough(blockP,checkedInput,boxContent)
        checkBoolean(checkedInput, key);
    });
        localStorage.setItem(key, status);
        document.querySelector('.box-big').append(note);
        setStatus(note, status);

    note.querySelector('.btn-delite').addEventListener('click', (e) => {
        localStorage.removeItem(key)
        note.remove(document.querySelector('.box-note'))
    });

}
function setStatus(note, status ){
    let str = JSON.parse(status);
    note.childNodes[0].childNodes[1].checked = str;
    if(str === true){
        note.children[1].classList.add("box-content_through")
        note.children[1].children[0].classList.add("newText")
    }
}

document.querySelector('.box-btn').addEventListener('click', addNote);
document.onkeypress = function (e) {
    if (e.keyCode == 13) addNote();
};
    function addNote() {
        let a = document.querySelector('.boxIn').value
        let aFB = a.split('')[0].toUpperCase()+a.substring(1)

        if(a.length > 0 && a[0] !== ' ') {
            const note = document.createElement("div");
            note.classList.add('box-note');
            note.innerHTML =
                        `<label class="custom-checkbox">
                            <input type="checkbox" class="hidden-checkbox">
                            <div class="checkbox">
                                <img src="%20svg/vector.svg" alt="svg" class="ch">
                            </div>
                        </label>
                            <div class="box-content">
                                <p class="box-content-text" >${aFB}</p>
                            </div>
                            <button class="btn-delite">
                                <img src="%20svg/delete.svg" alt="delete" class="btn-delite-img">
                            </button>`;


                    note.childNodes[0].childNodes[1].addEventListener('input', (e) => {
                    const checkedInput = e.target.checked;
                    const blockP = note.querySelector('.box-content-text')
                    const boxContent = note.childNodes[2]


                    changeLinetThrough(blockP,checkedInput,boxContent)
                    checkBoolean(checkedInput, a);
                });

            localStorage.setItem(a, false);
            document.querySelector('.boxIn').value = '';
            document.querySelector('.box-big').append(note);

            note.querySelector('.btn-delite').addEventListener('click', (e) => {
                localStorage.removeItem(a)
                note.remove(document.querySelector('.box-note'))
            });
        }
    }

    function checkBoolean(checkedInput, a) {
        if (!localStorage.getItem('a')){
            localStorage.setItem(a, checkedInput)
        }
    }

    function changeLinetThrough(note, checkedInput,boxContent) {
        if(checkedInput !== false) {
            note.classList.add("newText")
            boxContent.classList.add("box-content_through")
        }else{
            note.classList.remove("newText")
            boxContent.classList.remove("box-content_through")
        }
    }



