import React, { Component } from 'react'
import axios from 'axios'
import '../assets/posts.css'
import FormLink from './FormLink'

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [ ],
      image: []
    }
  }

  async componentDidMount() {
    const postss =  await axios.get('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=15');
    const images = await axios.get('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=15')
    this.setState({
      posts: postss.data,
      image: images.data
    })
    console.log(this.state.image)
  }

  render() {
    return (
      <React.Fragment>
        <div className="container py-5">
        <FormLink/>
        <hr/>
            <div className="row row_branchen">
            { this.state.posts.map((post,index) => 
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12" key={post.id}>
                <div className="card">
                    <div className="image__wrapper">
                      <div className="card__shadow--1"></div>
                      <img className="card-img-top" src={this.state.image[index].url}alt="Angebote Wasserspender"/>
                    </div>
                    <div className="card-body pb-4">
                      <h3 className="card-title">{post.title}</h3>
                      <p className="card-text">{post.body}</p>
                    </div>
                </div>
              </div>
            )}
          </div>  
        </div>
      </React.Fragment>
    )
  }
}

export default Posts;