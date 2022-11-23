const addBtn = document.getElementById("add");

const updateLocalStorage = () =>{
  const textAreaData = document.querySelectorAll('textarea');
  // console.log(updateLocal);
  const notes = [];

  textAreaData.forEach((note)=>{
    return notes.push(note.value);
  })

  localStorage.setItem('myNote',JSON.stringify(notes));
}

// main function defined
const addNote = (text = '') =>{
  console.log("hello");
  const note = document.createElement("div");
  note.classList.add("note");
  const html = `
    <div class="operation">
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash-alt"></i></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class=" ${text ? "hidden" : ""}"></textarea>
  `;
  note.insertAdjacentHTML("afterbegin", html);
  document.body.appendChild(note);
  // console.log(note);

  // html Element references by note variable 
  const edit = note.querySelector(".edit");
  const del = note.querySelector(".delete");
  const main = note.querySelector(".main")
  const txtArea = note.querySelector("textarea");

  // delete a note and updating local storage
  del.addEventListener("click",()=>{
    note.remove();
    updateLocalStorage();
  })
  
  // edit for toggling between main div and textArea
  edit.addEventListener("click",()=>{
    main.classList.toggle("hidden");
    txtArea.classList.toggle("hidden");
  })

  // initially adding any text into main and textarea
  main.innerHTML = text;
  txtArea.value = text;

  
  txtArea.addEventListener("change",(event)=>{
    const value = event.target.value;
    // console.log(value);
    main.innerHTML=value;
    // console.log(main.innerHTML);
    updateLocalStorage();
  });
}
// const addNote =()=>{
//   console.log("hello world");
// }
// addBtn.addEventListener("click",()=>{
//   addNote();
// })

// getting the localStorage items
const getNotes = JSON.parse(localStorage.getItem('myNote'));
if(getNotes){getNotes.forEach((getNote)=>addNote(getNote))};

// main function call
addBtn.addEventListener('click', () => addNote() );