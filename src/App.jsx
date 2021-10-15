import React, {useState} from 'react';
import "./App.css"
import Modal from "./Modal/Modal";
import {act} from "@testing-library/react";

const App = () => {
    const [modalActive, setModalActive] = useState(true)

    return (
        <div className="app">
            <main>
                <button  className="open__btn" onClick={() => setModalActive(true)}><h2>Open modal window</h2></button>



                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius id nihil perspiciatis praesentium quibusdam quo sunt tempore voluptas! Atque commodi consectetur delectus deserunt fuga in ipsa quae quasi similique tempore?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius id nihil perspiciatis praesentium quibusdam quo sunt tempore voluptas! Atque commodi consectetur delectus deserunt fuga in ipsa quae quasi similique tempore?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius id nihil perspiciatis praesentium quibusdam quo sunt tempore voluptas! Atque commodi consectetur delectus deserunt fuga in ipsa quae quasi similique tempore?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius id nihil perspiciatis praesentium quibusdam quo sunt tempore voluptas! Atque commodi consectetur delectus deserunt fuga in ipsa quae quasi similique tempore?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius id nihil perspiciatis praesentium quibusdam quo sunt tempore voluptas! Atque commodi consectetur delectus deserunt fuga in ipsa quae quasi similique tempore?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius id nihil perspiciatis praesentium quibusdam quo sunt tempore voluptas! Atque commodi consectetur delectus deserunt fuga in ipsa quae quasi similique tempore?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius id nihil perspiciatis praesentium quibusdam quo sunt tempore voluptas! Atque commodi consectetur delectus deserunt fuga in ipsa quae quasi similique tempore?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius id nihil perspiciatis praesentium quibusdam quo sunt tempore voluptas! Atque commodi consectetur delectus deserunt fuga in ipsa quae quasi similique tempore?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius id nihil perspiciatis praesentium quibusdam quo sunt tempore voluptas! Atque commodi consectetur delectus deserunt fuga in ipsa quae quasi similique tempore?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius id nihil perspiciatis praesentium quibusdam quo sunt tempore voluptas! Atque commodi consectetur delectus deserunt fuga in ipsa quae quasi similique tempore?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius id nihil perspiciatis praesentium quibusdam quo sunt tempore voluptas! Atque commodi consectetur delectus deserunt fuga in ipsa quae quasi similique tempore?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius id nihil perspiciatis praesentium quibusdam quo sunt tempore voluptas! Atque commodi consectetur delectus deserunt fuga in ipsa quae quasi similique tempore?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius id nihil perspiciatis praesentium quibusdam quo sunt tempore voluptas! Atque commodi consectetur delectus deserunt fuga in ipsa quae quasi similique tempore?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius id nihil perspiciatis praesentium quibusdam quo sunt tempore voluptas! Atque commodi consectetur delectus deserunt fuga in ipsa quae quasi similique tempore?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius id nihil perspiciatis praesentium quibusdam quo sunt tempore voluptas! Atque commodi consectetur delectus deserunt fuga in ipsa quae quasi similique tempore?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius id nihil perspiciatis praesentium quibusdam quo sunt tempore voluptas! Atque commodi consectetur delectus deserunt fuga in ipsa quae quasi similique tempore?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius id nihil perspiciatis praesentium quibusdam quo sunt tempore voluptas! Atque commodi consectetur delectus deserunt fuga in ipsa quae quasi similique tempore?</p>
            </main>
           <Modal active={modalActive} setActive={setModalActive}>
               <form style={{textAlign: "center"}}>
                   <input
                       type="text"
                       placeholder="Post name"
                   />
                   <input
                       type="text"
                       placeholder="Post description"
                   />
                   <button>Create post</button>
                   <p>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur culpa cum exercitationem expedita facilis harum quaerat, similique tempore voluptatibus. Aut dolore ex fugiat porro quisquam. Explicabo fuga laboriosam provident!"}</p>
               </form>
           </Modal>

        </div>
    );
};

export default App;