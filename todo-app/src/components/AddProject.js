import React, { Component } from 'react';


class AddProject extends Component {

    constructor() {
        super();
        this.state = {
            newproject: {}
        }
    }
    static defaultProps = {
        categories: ['angular', 'react', 'node']
    }
    handleClick(e) {
        if (this.refs.title.value === '') {
            alert("title is required");
        } else {
            this.setState({
                newproject: {
                    title: this.refs.title.value,
                    category: this.refs.category.value
                }
            }, function () {
                this.props.addProject(this.state.newproject);
            })
        }
        e.preventDefault();
    }

    render() {
        let categoryItem = this.props.categories.map(category => {
            return (<option key={category} value={category}>{category}</option>)
        });
        return (
            <div>
                <h3>Add Project</h3>
                <form onSubmit={this.handleClick.bind(this)}>
                    <div>
                        <label>title</label><br />
                        <input type="text" ref="title" />
                    </div>
                    <div>
                        <label>categories</label><br />
                        <select ref="categories">
                            {categoryItem}
                        </select>
                    </div>
                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }
}

export default AddProject;
