import React from 'react';
import FaBitBucket from 'react-icons/lib/fa/bitbucket'

class TodoItems extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.createTasks = this.createTasks.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
    }

    delete(key){
        this.props.delete(key);
    }

    update(key){
        this.props.update(key);
    }

    createTasks(item) {
        var date = (new Date(item.key)).toLocaleString();
        return(
            <li key={item.key} style={{opacity:item.opacity}}>
                <div className="date">{date}</div>
                <input
                    type="checkbox"
                    id="checkbox"
                    onClick={(e) => this.update(item.key, e)}
                />
                {item.text}
                <FaBitBucket
                    id="fabitbucket"
                    onClick={(e) => this.delete(item.key, e)}
                />
            </li>

        )

    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
};

export default TodoItems;