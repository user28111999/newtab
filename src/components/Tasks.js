
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Tasks = () => {
    const [tasks, setTasks] = useState([
        { id: 'task1', content: 'Task 1' },
        { id: 'task2', content: 'Task 2' },
        { id: 'task3', content: 'Task 3' },
        { id: 'task4', content: 'Task 4' },
    ]);

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const updatedTasks = Array.from(tasks);
        const [removed] = updatedTasks.splice(result.source.index, 1);
        updatedTasks.splice(result.destination.index, 0, removed);

        setTasks(updatedTasks);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div style={{ display: 'flex' }}>
                <Droppable droppableId="todo">
                    {(provided) => (
                        <ul
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                                listStyleType: 'none',
                                padding: '8px',
                                backgroundColor: '#e5e5e5',
                                marginRight: '16px',
                                borderRadius: '4px',
                            }}
                        >
                            <h3>Todo</h3>
                            {tasks.map((task, index) => (
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                    {(provided) => (
                                        <li
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                            style={{
                                                userSelect: 'none',
                                                padding: '8px',
                                                margin: '0 0 8px 0',
                                                backgroundColor: '#fff',
                                                borderRadius: '4px',
                                                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                                            }}
                                        >
                                            {task.content}
                                        </li>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
                <Droppable droppableId="inProgress">
                    {(provided) => (
                        <ul
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                                listStyleType: 'none',
                                padding: '8px',
                                backgroundColor: '#e5e5e5',
                                marginRight: '16px',
                                borderRadius: '4px',
                            }}
                        >
                            <h3>In Progress</h3>
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
                <Droppable droppableId="done">
                    {(provided) => (
                        <ul
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                                listStyleType: 'none',
                                padding: '8px',
                                backgroundColor: '#e5e5e5',
                                borderRadius: '4px',
                            }}
                        >
                            <h3>Done</h3>
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    );
};

export default Tasks;