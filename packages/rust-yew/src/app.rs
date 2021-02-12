use log::{info};
use uuid::Uuid;
use serde_derive::{Deserialize, Serialize};
use yew::prelude::*;
use yew::services::storage::{Area, StorageService};

pub struct App {
    link: ComponentLink<Self>,
    storage: StorageService,
    state: State,
}

#[derive(Serialize, Deserialize)]
pub struct State {
    todos: Vec<Todo>,
    value: String,
}

#[derive(Serialize, Deserialize)]
struct Todo {
    id: String,
    text: String,
}

pub enum Msg {
    AddTodo,
    RemoveTodo(String),
    Edit(usize),
    UpdateValue(String),
    Nope,
}

impl Component for App {
    type Message = Msg;
    type Properties = ();

    fn create(_: Self::Properties, link: ComponentLink<Self>) -> Self {
        let storage = StorageService::new(Area::Local).unwrap();

        let state = State {
            todos: Vec::new(),
            value: "".into(),
        };

        App {
            link,
            storage,
            state,
        }
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        false
    }

    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        match msg {
            Msg::AddTodo => {
                let id = Uuid::new_v4();
                info!("{}", id);

                let todo = Todo {
                    id: "hmm".to_owned(),
                    text: self.state.value.clone(),
                };
                self.state.todos.push(todo);
                self.state.value = "".to_string();
            }
            Msg::UpdateValue(val) => {
                self.state.value = val;
            }
            Msg::RemoveTodo(id) => {
                self.state.todos.retain(|todo| todo.id != id);
            }
            _ => {}
        }
        true
    }

    fn view(&self) -> Html {
        html! {
            <div class="todo-container">
                <form 
                    onsubmit=self.link.callback(|event: FocusEvent| {
                        event.prevent_default();
                        Msg::AddTodo
                    })
                >
                    <input class="new-todo"
                        placeholder="What needs to be done?"
                        value=&self.state.value
                        oninput=self.link.callback(|e: InputData| Msg::UpdateValue(e.value))
                    />
                    <button
                        type="submit"
                    >
                        {"OK"}
                    </button>
                </form>
            </div>
        }
    }
}
