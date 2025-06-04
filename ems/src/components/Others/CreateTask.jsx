import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')
    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

        const data = userData

        data.forEach(function (elem) {
            if (asignTo == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })
        setUserData(data)
        console.log(data);

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')

    }

    return (
        <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }}
                className='flex flex-wrap w-full items-start justify-between'
            >
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-1 font-semibold'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            className='w-full mb-4 p-2 rounded bg-[#111] text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-emerald-500 text-sm' type="text" placeholder='Make a UI design'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5 font-semibold'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            className='w-full mb-4 p-2 rounded bg-[#111] text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-emerald-500 text-sm' type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5 font-semibold'>Asign to</h3>
                        <input
                            value={asignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value)
                            }}
                            className='w-full mb-4 p-2 rounded bg-[#111] text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-emerald-500 text-sm' type="text" placeholder='employee name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5 font-semibold'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            className='w-full mb-4 p-2 rounded bg-[#111] text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-emerald-500 text-sm' type="text" placeholder='design, dev, etc' />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5 font-semibold'>Description</h3>
                    <textarea value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }} className='h-44 w-full mb-4 p-2 rounded bg-[#111] text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-emerald-500 text-sm' name="" id=""></textarea>
                    <button className='bg-emerald-600 py-3 hover:bg-emerald-800 px-5 rounded text-sm mt-4 w-full font-bold'>Create Task</button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask