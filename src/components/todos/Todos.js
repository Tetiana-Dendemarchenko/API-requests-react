import React, {Component} from 'react'

const todosUrl = 'https://jsonplaceholder.typicode.com/todos/?_limit=10;nmp i';

class Table2 extends Component {
    constructor(props) {
        super ( props )
        this.state = {
            todos: [],
            isLoading: false,
            isError: false
        }
    }

    async componentDidMount() {
        this.setState ( { isLoading: true } )
        const response = await fetch ( todosUrl )

        if ( response.ok ) {
            const todos = await response.json ()
            this.setState ( { todos, isLoading: false } )
        } else {
            this.setState ( { isError: true, isLoading: false } )
        }
    }

    renderTableHeader = () => {
        return Object.keys ( this.state.todos[0] ).map ( attr => <th key={attr}>{attr.toUpperCase ()}</th> )
    }

    completed;

    renderTableRows = () => {
        return this.state.todos.map ( todo => {
            return (
                <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td>The task is <b>{! todo.completed ? 'completed' : 'not completed'}</b></td>
                </tr>
            )
        } )
    }

    handlePageChange(pageNumber) {
        console.log ( `active page is ${pageNumber}` );
        this.setState ( { activePage: pageNumber } );
    }

    render() {
        const { todos, isLoading, isError } = this.state

        if ( isLoading ) {
            return <div>Loading...</div>
        }

        if ( isError ) {
            return <div>Error</div>
        }

        return todos.length > 0
            ? ( <>
                    <table>
                        <thead>
                        <tr>
                            {this.renderTableHeader ()}
                        </tr>
                        </thead>
                        <tbody>
                        {this.renderTableRows ()}
                        </tbody>
                    </table>

                </>
            ) : (
                <div>
                    No todos.
                </div>
            )
    }
}


export default Table2;
