let root = document.getElementById('root');


let ToDo = () => {

    const [todos, setTodos] = React.useState([{ value: 'My first Todo', edit: false, done: false }]);
    const [text, setText] = React.useState('');

    const addTodo = () => {
        if (text !== '')
            setTodos(todos.concat([{ value: text, edit: false, done: false }]));
    };
    const removeTodo = (index) => {
        setTodos(todos.filter((ele, idx) => idx !== index));
    };

    const editTodo = (index) => {
        setTodos(todos.map((ele, idx) => { if (idx === index) { ele.edit = !ele.edit } return ele }));
    };

    const updateTodo = (val, index) => {
        setTodos(todos.map((ele, idx) => { if (idx === index) { ele.value = val } return ele }));
    };

    const closeEdit = (index) => {
        setTodos(todos.map((ele, idx) => { if (idx === index) { ele.edit = !ele.edit } return ele }));
    };
    const markDone = (index) => {
        console.log(todos);
        setTodos(todos.map((ele, idx) => { if (idx === index) { ele.done = !ele.done } return ele }));
        console.log(todos);
    };

    return (
        <div>
            <div className="row">
                <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 col-xs-12 offset-lg-3 offset-xl-3 offset-sm-1">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter a todo title"
                        value={text}
                        onChange={() => {
                            setText(event.target.value);
                        }}
                    />
                </div><br /><br />
                <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 col-xs-4">
                    <button className="btn btn-xs btn-primary" onClick={addTodo}>
                        Add Todo
                    </button>
                </div>
            </div>
            <br />
            <div className="row">
                {todos.map((todo, index) => (
                    <div key={index} className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-3">
                                        <button className="btn btn-xs btn-outline-success btn-circular"
                                            onClick={() => {
                                                markDone(index);
                                            }}
                                        >{todo.done === true ? <i className="fas fa-check"></i> : ''}</button></div>
                                    <div className="col-9">
                                        {todo.edit === true ?
                                            <div className="row">
                                                <div className="col-10">
                                                    <input
                                                        type="text"
                                                        value={todo.value}
                                                        onChange={() => {
                                                            updateTodo(event.target.value, index);
                                                        }}
                                                    />
                                                </div>
                                                <div className="col-2">
                                                    <button className="btn btn-xs btn-outline-primary btn-circular"
                                                        onClick={() => {
                                                            closeEdit(index);
                                                        }}
                                                    ><i className="fas fa-check"></i></button>
                                                </div>
                                            </div> :
                                            <h5 className={`card-title ${todo.done === true ? 'strike' : ''}`}>{todo.value}</h5>}
                                    </div></div>
                                <br /><br />
                                <div className="row">
                                    <div className="col-6">
                                        <a
                                            href="#"
                                            className="btn btn-xs btn-primary"
                                            onClick={() => {
                                                editTodo(index);
                                            }}
                                        >
                                            Edit
                                </a>
                                    </div>
                                    <div className="col-6">
                                        <a
                                            href="#"
                                            onClick={() => {
                                                removeTodo(index);
                                            }}
                                            className="btn btn-xs btn-danger"
                                        >
                                            Delete
                                </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


let Counter = () => {
    const [counters, setCounters] = React.useState([0]);

    const increment = (index) => {
        setCounters(counters.map((ele, idx) => (idx === index ? ele + 1 : ele)));
    };
    const decrement = (index) => {
        setCounters(counters.map((ele, idx) => (idx === index ? ele - 1 : ele)));
    };

    const deleteCounter = (index) => {
        setCounters(counters.filter((ele, idx) => idx !== index));
    };

    const addCounter = () => {
        setCounters(counters.concat([0]));
    };

    return (
        <div>
            <button className="btn btn-primary btn-xs" onClick={addCounter}>
                Add Counter
            </button>
            <br/>
            <br/>
            <div className="row">
                {counters.map((element, index) => {
                    return (
                        <div className="col-lg-4 col-xl-4 col-sm-6 col-md-4 col-xs-12 counter border" key={index}>
                            <h1>{element}</h1>
                            <div className="row">
                                <div className="col-4"><button className="btn btn-success btn-xs" onClick={() => increment(index)}>
                                    Increment
                                </button>
                                </div>
                                <div className="col-4"><button className="btn btn-warning btn-xs" onClick={() => decrement(index)}>
                                    Decrement
                                </button>
                                </div>
                                <div className="col-4"><button className="btn btn-danger btn-xs" onClick={() => deleteCounter(index)}>
                                    Delete
                                </button>
                                </div>



                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

let App = () => {
    const [show, setShow] = React.useState('COUNTER');
    const toggle = () => {
        setShow(show === 'COUNTER' ? 'TODO' : 'COUNTER');
    };
    return (
        <div>
            <button className="btn btn-xs btn-info" onClick={toggle}>
                Toggle View
      </button>
            <br />
            <br />
            {show === 'COUNTER' ? <Counter /> : <ToDo />}
        </div>
    );
};
ReactDOM.render(<App />, root);
