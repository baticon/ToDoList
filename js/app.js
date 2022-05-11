const todo = [];

function generateID() {
  return todo.length;
}

window.addEventListener("load", () => {
  console.log("load");
  let form = document.querySelector("#new-task-form");
  let input = document.querySelector("#new-task-input");
  let list_element = document.querySelector("#tasks");
  let done_list_element = document.querySelector("#done-tasks");

  form.addEventListener("submit", (some_event) => {
    console.log("TRIGGER");
    some_event.preventDefault();

    let task = input.value;
    if (input.value === "") {
      alert("Nope, need to create a task first");
      return;
    }

    let task_element = document.createElement("div");
    task_element.classList.add("task");

    let task_content_element = document.createElement("div");
    const newID = generateID();
    task_content_element.classList.add("content");
    task_content_element.setAttribute("id", newID);
    todo.push(task);
    task_element.appendChild(task_content_element);

    let task_input_element2 = document.createElement("input");
    task_input_element2.classList.add("checkbox");
    task_input_element2.type = "checkbox";
    task_content_element.appendChild(task_input_element2);

    task_input_element2.addEventListener("click", () => {
      done_task_content_element.appendChild(task_input_element);
      task_element.remove();

      let done_task_actions_element = document.createElement("div");
      done_task_actions_element.classList.add("actions");

      let done_task_delete_element = document.createElement("img");
      done_task_delete_element.src = "delete_icon.svg";

      done_task_actions_element.appendChild(done_task_delete_element);
      done_task_element.appendChild(done_task_actions_element);
      done_list_element.appendChild(done_task_element);

      done_task_delete_element.addEventListener("click", () => {
        done_list_element.removeChild(done_task_element);
      });
    });

    window.onload = setTimeout(function () {
      alert(`🛎 Не забудь про ${task}`);
    }, 10000);

    let mydate = new Date();
    let mins = mydate.getMinutes().toString();
    if (mins.length < 2) mins = "0" + mins;
    let hrs = mydate.getHours().toString();
    if (hrs.length < 2) hrs = "0" + hrs;
    let day = mydate.getDay().toString();
    if (day.length < 2) day = "0" + day;
    let month = mydate.getMonth();
    let arrayMonth = [
      "Dummy",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Dummy2",
    ];
    for (let i = 0; i < arrayMonth.length; i++) {
      if (month === i) month = arrayMonth[i];
    }
    let year = mydate.getFullYear();

    let task_input_element = document.createElement("input");
    task_input_element.classList.add("text");
    task_input_element.type = "text";
    task_input_element.value =
      day + " " + month + " " + year + " " + hrs + ":" + mins + " " + task;
    task_input_element.innerHTML = month;
    task_input_element.setAttribute("readonly", "readonly");

    task_content_element.appendChild(task_input_element);

    let task_actions_element = document.createElement("div");
    task_actions_element.classList.add("actions");

    let task_edit_element = document.createElement("img");
    task_edit_element.src = "edit_icon.svg";
    task_edit_element.classList.add("edit");
    task_edit_element.setAttribute("id", "button" + newID);

    let task_delete_element = document.createElement("img");
    task_delete_element.src = "delete_icon.svg";
    task_delete_element.classList.add("delete");

    let task_save_element = document.createElement("button");
    task_save_element.classList.add("save");
    task_save_element.innerHTML = "Сохранить";

    task_actions_element.appendChild(task_edit_element);
    task_actions_element.appendChild(task_delete_element);
    task_actions_element.appendChild(task_save_element);
    task_element.appendChild(task_actions_element);
    list_element.appendChild(task_element);

    input.value = "";

    task_edit_element.addEventListener("click", (e) => {
      console.log(e);
      task_input_element.removeAttribute("readonly");
      task_save_element.style.display = "flex";
      task_edit_element.style.display = "none";
      task_delete_element.style.display = "none";
      document.getElementById(newID).style.border = "1px solid #40C245";
      document.getElementById(newID).style.borderRadius = "25px";
      task_input_element2.style.display = "none";
    });

    task_delete_element.addEventListener("click", () => {
      list_element.removeChild(task_element);
    });

    task_save_element.addEventListener("click", () => {
      task_input_element.setAttribute("readonly", "readonly");
      task_save_element.style.display = "none";
      task_edit_element.style.display = "inline";
      task_delete_element.style.display = "inline";
      document.getElementById(newID).style.border = "0px solid #40C245";
      document.getElementById(newID).style.borderRadius = "25px";
      task_input_element2.style.display = "inline";
    });

    let done_task_element = document.createElement("div");
    done_task_element.classList.add("done-task");

    let done_task_content_element = document.createElement("div");
    done_task_content_element.classList.add("done_content");

    done_task_element.appendChild(done_task_content_element);
  });
});
