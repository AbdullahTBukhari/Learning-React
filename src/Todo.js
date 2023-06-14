import React from 'react';
import { useState } from 'react';

export default function Todo(){



    const [inputValue, setInputValue] = useState('')
    const [todosList, setTodosList] = useState([])
    const [changeButtonClicked, setChangeButtonClicked] = useState(false)
   

        const displayInfo = () => {
            if (inputValue.trim() !== ''){
            setTodosList(prevList=>[...prevList, inputValue])
            setInputValue('');
            }
        }
        const handleDelete = (index) => {
            console.log(index)
            // setTodosList(prevList=> prevList.splice(index,1))
            setTodosList(prevList => {
                let newList = [...prevList]
                newList.splice(index, 1);
                return newList;
            })
        }
        const handleChange = (index, newTask) => {

            setTodosList(prevList => {
                let newList = [...prevList];
                newList.splice(index, 1, newTask);
                return newList;
            })
            

        }

    return (
        <div className='grid place-items-center justify-items-center '>
            <h1 className='text-4xl font-bold text-center text-lime-800 py-4 '>ToDo App</h1>
            <div 
            className=' flex-align-row space-x-2 '
            >
                <input type="text" className='appearance-none border py-2 px-3 rounded-md bg-white border-gray-300 focus:scale-100 focus:outline-none transition duration-500  '
                placeholder='Add the task...'
                onChange={e=>setInputValue(e.target.value)}
                />

                <button 
                className='bg-lime-600 text-lime-50 hover:bg-lime-700 hover:scale-110 transition duration-500 rounded-md font-bold py-2 px-4'
                onClick={displayInfo}
                >
                    Add Task</button>
            </div>
            <ul
                className=' space-y-4 '
            >
                {todosList.map((todo, index)=>(
                <li
                key={index}
                className='p-3 shadow-md flex justify-between items-center shadow-lime-200 border-b-4 border-lime-600 rounded-md px-4 text-2xl'
                >
                    {todo}
                    <div className='pl-5'>


                    <button
                    className=' bg-indigo-0 text-white font-bold text-3xl rounded-lg hover:scale-125 transition duration-500 mx-2 items-top px-2 py-2'
                    onClick={(e) => {setChangeButtonClicked(true)}}
                    >✏️</button>

                    {changeButtonClicked && <input type="text" className='appearance-none border py-2 px-3 rounded-md bg-white border-gray-300 focus:scale-100 focus:outline-none transition duration-500  '
                    placeholder='Update the task...'
                    onChange={e=>handleChange(index,e.target.value)}
                    />}

                    {changeButtonClicked && <button
                    className=' bg-indigo-0 text-white font-bold text-3xl rounded-lg hover:scale-125 transition duration-500 mx-2 items-top px-2 py-2'
                    onClick={() => { setChangeButtonClicked(false);}}
                    >👌🏻</button>}
                    
                    
                    <button
                    className=' bg-red-0 text-white font-extrabold text-4xl rounded-lg hover:scale-125 transition duration-500 mx-2 items-top px-2 py-2'
                    onClick={() => handleDelete(index)}
                    >❌</button>
                    </div>
                    </li>
                ))}
            </ul>
        </div>
    )





}
