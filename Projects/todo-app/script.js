const taskInputEl = document.getElementById("taskInput");
const addButtonEl = document.getElementById("addButton");
const taskListEl = document.getElementById("taskList");

const addTask = () => {
  if (taskInputEl.value === "") return;

  //   const listEl = document.createElement("li");
  //   const addedTaskList = taskInputEl.value;

  //   const buttonGp = document.createElement("div");
  //   buttonGp.classList.add("btn-group");

  //   const completeBtnEl = document.createElement("button");
  //   completeBtnEl.classList.add("complete");
  //   completeBtnEl.innerHTML = `<button id="complete" class="complete">
  //                                 <i class="fa-solid fa-check"></i>Complete
  //                             </button>`;

  //   const removeBtnEl = document.createElement("button");
  //   removeBtnEl.classList.add("remove");
  //   removeBtnEl.innerHTML = ` <button id="remove" class="remove">
  //                                 <i class="fa-solid fa-trash"></i>Remove
  //                             </button>`;

  //   buttonGp.append(completeBtnEl);
  //   buttonGp.append(removeBtnEl);
  //   listEl.append(addedTaskList);
  //   listEl.append(buttonGp);

  //   taskListEl.append(listEl);

  //   completeBtnEl.addEventListener("click", () => {
  //     listEl.classList.toggle("completed");
  //   });

  //   removeBtnEl.addEventListener("click", () => {
  //     listEl.remove();
  //   });

  taskInputEl.value = "";
};

addButtonEl.addEventListener("click", addTask);

//   //   taskListEl.innerHTML += `
//        ` <li>
//             ${taskInputEl.value}
//             <div class="btn-group">
//                 <button id="complete" class="complete">
//                 <i class="fa-solid fa-check"></i>Complete
//                 </button>
//                 <button id="remove" class="remove">
//                 <i class="fa-solid fa-trash"></i>Remove
//                 </button>
//             </div>
//         </li>`;

// taskListEl.getElementById("taskList")
//         .addEventListener("click", function (e) {
//           if (e.target.classList.contains("remove")) {
//             e.target.closest("li").remove();
//           } else if (e.target.classList.contains("complete")) {
//             e.target.closest("li").classList.toggle("completed");
//           }
//         });
