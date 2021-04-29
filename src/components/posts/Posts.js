import React, {Component} from 'react'

const postsUrl = 'https://jsonplaceholder.typicode.com/posts/?_limit=10';

class Table3 extends Component {
    constructor(props) {
        super ( props )
        this.state = {
            posts: [],
            isLoading: false,
            isError: false
        }
    }

    async componentDidMount() {
        this.setState ( { isLoading: true } )
        const response = await fetch ( postsUrl )

        if ( response.ok ) {
            const posts = await response.json ()
            this.setState ( { posts, isLoading: false } )
        } else {
            this.setState ( { isError: true, isLoading: false } )
        }
    }

    renderTableHeader = () => {
        return Object.keys ( this.state.posts[0] ).map ( attr => <th key={attr}>{attr.toUpperCase ()}</th> )
    }

    renderTableRows = () => {
        return this.state.posts.map ( post => {
            return (
                <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                </tr>
            )
        } )
    }

    render() {
        const { posts, isLoading, isError } = this.state;

        if ( isLoading ) {
            return <div>Loading...</div>
        }

        if ( isError ) {
            return <div>Error</div>
        }

        return posts.length > 0
            ? <>
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
            </> :
            <div>
                No posts.
            </div>
    }
}


export default Table3;
