import React, { Component } from 'react'

export default class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        };

        this.onChanges =  this.onChanges.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChanges(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

  render() {
    return (
      <div className="postform">
          <form className="form-horizontal" onSubmit={this.onSubmit}>
            <fieldset>
                <legend>Article Form</legend>

                <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="article_title">Title</label>  
                    <div className="col-md-4">
                        <input 
                            id="article_title" 
                            type="text" 
                            name="title"
                            placeholder="Article title" 
                            className="form-control input-md"
                            value={this.state.title}
                            onChange={this.onChanges}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="body">Body</label>
                    <div className="col-md-4">                     
                        <textarea 
                            className="form-control"   
                            id="body" 
                            placeholder="Article body"
                            name="body"
                            value={this.state.body}
                            onChange={this.onChanges}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-md-4">                     
                        <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                </div>
            </fieldset>
        </form>
        
      </div>
    )
  }
}

