function onloadDocuments(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            let Data = JSON.parse(this.responseText);
            addToTable(Data);
        }
    }
    xhr.open('GET', 'data.json', true);
    xhr.send();
}

function addToTable(Data){
    console.log(Data);
    var i;
    for(i = 0; i < Data.length; i++){
        let tdDataNIK = `<td>${Data[i].NIK}</td>`
        let tdDataNama = `<td>${Data[i].Nama}</td>`
        let tdDataAlamat = `<td>${Data[i].Alamat}</td>`
        let tdDataUbah = `<td><button type="ubah" class = "ubah" onclick = "ChangeData(this)">Ubah</button></td>`
        let tdDataHapus = `<td><button type="hapus" class = "hapus" onclick = "DeleteData(this)">Hapus</button></td>`
        tbody.innerHTML += `<tr>${tdDataNIK}${tdDataNama}${tdDataAlamat}${tdDataUbah}${tdDataHapus}</tr>`
    }
}

function ChangeData(td){
    ModalFormUpdated.style.display = 'block';
    CloseUpdateButton.addEventListener('click', function(){
        ModalFormUpdated.style.display = 'none';
    })

 
    UpdateSubmit.addEventListener('click', function(){
        if(NIKInput.value === '' || NamaInput.value === '' || AlamatInput.value === ''){

        }
        else{
            selectedRow = td.parentElement.parentElement;
            console.log(NIKInput.value);
            console.log(NamaInput.value);
            console.log(AlamatInput.value);
            selectedRow.cells[0].innerHTML = NIKInput.value;
            selectedRow.cells[1].innerHTML = NamaInput.value;
            selectedRow.cells[2].innerHTML = AlamatInput.value;
            ModalFormUpdated.style.display = 'none';
        }
    })
}

var NIK = document.querySelector('.NIK');
var nama = document.querySelector('.Nama');
var alamat = document.querySelector('.Alamat');
var submit = document.querySelector('.submit');
var tbody = document.querySelector('tbody');

var warningmodal = document.querySelector('.warning.modal');
var warningcloseBtn = document.querySelector('.warning.closeBtn')

var addedmodal = document.querySelector('.added.modal');
var addedcloseBtn = document.querySelector('.added.closeBtn');

var resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', function(){
    NIK.value = ''
    nama.value = ''
    alamat.value = ''
})

submit.addEventListener('click', function(){
    if(NIK.value === ''|| Nama.value ===''|| Alamat.value ==='')
    {
        warningmodal.style.display = 'block';
        warningcloseBtn.addEventListener('click', function(){
            warningmodal.style.display = 'none';
        })

    }
    else{
        console.log(NIK.value);
        console.log(Nama.value);
        console.log(Alamat.value);
        var tdNIK =`<td>${NIK.value}</td>`
        var tdNama =`<td>${Nama.value}</td>`
        var tdAlamat =`<td>${Alamat.value}</td>`
        var tdubah = `<td><button type="ubah" class="ubah" onclick = 'ChangeData(this)'>Ubah</button>`
        var tdhapus = `<td><button type="hapus" class="hapus" onclick = 'DeleteData(this)'>Hapus</button>`
        tbody.innerHTML += `<tr>${tdNIK}${tdNama}${tdAlamat}${tdubah}${tdhapus}</tr>`
        console.log(tbody);
        NIK.value = ''
        Nama.value = ''
        Alamat.value = ''
        addedmodal.style.display = 'block';
        addedcloseBtn.addEventListener('click', function(){
            addedmodal.style.display = 'none';
        })
    }
})

var ModalFormUpdated = document.querySelector('.ModalFormUpdated');
var CloseUpdateButton = document.querySelector('.CloseUpdateButton');

var NIKInput = document.querySelector('.NIKInput');
var NamaInput = document.querySelector('.NamaInput');
var AlamatInput = document.querySelector('.AlamatInput');

var UpdateSubmit = document.querySelector('.UpdateSubmit');
var ResetUpdateBtn = document.querySelector('.ResetSubmit');

ResetUpdateBtn.addEventListener('click', function(){
    NIKInput.value = ''
    NamaInput.value = ''
    AlamatInput.value = ''
})

var tables = document.querySelector('table');
var DeleteModal = document.querySelector('.delete.modal')
var DeleteCloseBtn = document.querySelector('.deleted.closeBtn')
function DeleteData(td){
    console.log(td);
    selectedRow = td.parentElement.parentElement;
    console.log(selectedRow);
    tables.deleteRow(selectedRow.rowIndex);
    DeleteModal.style.display = 'block';
    DeleteCloseBtn.addEventListener('click', function(){
        DeleteModal.style.display = 'none';
    })
}

