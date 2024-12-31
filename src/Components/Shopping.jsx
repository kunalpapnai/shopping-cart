//rfce
import React, {useState} from 'react'
import InputBox from './InputBox';
import ListItem from './ListItem';

function Shopping() {
    const [content, setContent] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleAddItem = () => {
        
        const newArr = [...tasks];
        newArr.push(content);

        setTasks(newArr);
        setContent("");
    }

    const handleInput = (e) => {
        setContent(e.target.value);
    }

    const handleDelete = (index) => {
        console.log("Remove Item");
        const filteredArr = [];
        for(let i=0; i<tasks.length; i++){
            if(i != index){
                filteredArr.push(tasks[i]);
            }
        }
        setTasks(filteredArr);
    }

  return (
    <div className='Shopping-list'>
        <InputBox handleInput={handleInput} content={content} handleAddItem={handleAddItem}></InputBox>
        <h2>Shopping Cart</h2>
        <ListItem handleDelete={handleDelete} tasks={tasks}></ListItem>
    </div>
  )
}

export default Shopping