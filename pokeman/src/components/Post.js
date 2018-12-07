import React ,{Component} from 'react'

class Post extends Component{

    state={
        id: null
    }
  
    componentDidMount(){
        let id = this.props.match.params.post_id
        this.setState({
            id: id
        })
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then(res => {
        //     console.log(res.data);
        //     this.setState({
        //         posts: res.data.slice(0,10)
        //     })
        // });

    }

    render(){
        return(
            <div className="container">
                <h4>{this.state.id}</h4>
            </div>
        )
    }
}

export default Post;