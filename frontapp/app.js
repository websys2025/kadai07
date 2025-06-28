const API_BASE = "http://localhost:8000";

// DOM
const form = document.getElementById("task-form");
const input = document.getElementById("task-title");
const taskList = document.getElementById("task-list");

// イベント
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = input.value.trim();
    if (!title) return;
    await addTask(title);
    input.value = "";
    await loadTasks();
});

async function loadTasks() {
    const res = await fetch(`${API_BASE}/tasks`);
    const tasks = await res.json();
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.className = "task-item" + (task.done ? " done" : "");
        
        // タイトル部分
        const titleSpan = document.createElement("span");
        titleSpan.className = "task-title";
        titleSpan.textContent = task.title;
        li.appendChild(titleSpan);
        
        // ボタン群
        const actions = document.createElement("div");
        actions.className = "task-actions";

        // Done/Undone切替
        const doneBtn = document.createElement("button");
        doneBtn.className = "action-btn";
        doneBtn.title = task.done ? "未完了に戻す" : "完了にする";
        doneBtn.innerHTML = `<span class="material-icons">${task.done ? "check_box" : "check_box_outline_blank"}</span>`;
        doneBtn.onclick = async () => {
            if (task.done) {
                await fetch(`${API_BASE}/tasks/${task.id}/done`, { method: "DELETE" });
            } else {
                await fetch(`${API_BASE}/tasks/${task.id}/done`, { method: "PUT" });
            }
            await loadTasks();
        };
        actions.appendChild(doneBtn);

        // 編集
        const editBtn = document.createElement("button");
        editBtn.className = "action-btn";
        editBtn.title = "編集";
        editBtn.innerHTML = `<span class="material-icons">edit</span>`;
        editBtn.onclick = () => startEditTask(li, task);
        actions.appendChild(editBtn);

        // 削除
        const delBtn = document.createElement("button");
        delBtn.className = "action-btn";
        delBtn.title = "削除";
        delBtn.innerHTML = `<span class="material-icons">delete</span>`;
        delBtn.onclick = async () => {
            if (confirm("削除してもよいですか？")) {
                await fetch(`${API_BASE}/tasks/${task.id}`, { method: "DELETE" });
                await loadTasks();
            }
        };
        actions.appendChild(delBtn);

        li.appendChild(actions);
        taskList.appendChild(li);
    });
}

// タスク追加
async function addTask(title) {
    await fetch(`${API_BASE}/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title })
    });
}

// タスク編集
function startEditTask(li, task) {
    const inputEdit = document.createElement("input");
    inputEdit.type = "text";
    inputEdit.value = task.title;
    inputEdit.className = "edit-input";

    const saveBtn = document.createElement("button");
    saveBtn.className = "action-btn";
    saveBtn.innerHTML = `<span class="material-icons">save</span>`;
    saveBtn.onclick = async () => {
        const newTitle = inputEdit.value.trim();
        if (newTitle && newTitle !== task.title) {
            await fetch(`${API_BASE}/tasks/${task.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: newTitle })
            });
            await loadTasks();
        } else {
            li.replaceWith(li.cloneNode(true));
            await loadTasks();
        }
    };

    const cancelBtn = document.createElement("button");
    cancelBtn.className = "action-btn";
    cancelBtn.innerHTML = `<span class="material-icons">close</span>`;
    cancelBtn.onclick = async () => {
        await loadTasks();
    };

    // 入れ替え
    li.innerHTML = "";
    li.appendChild(inputEdit);
    li.appendChild(saveBtn);
    li.appendChild(cancelBtn);
}

// 初回ロード
window.addEventListener("DOMContentLoaded", loadTasks);