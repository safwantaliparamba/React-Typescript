import React,{ useState } from 'react'

import TodoItem from './components/TodoItem'
import { Todo } from './types'
import styled from 'styled-components'


function App() {
	const [todos,setTodos] = useState<Todo[]>([])
	const [title,setTitle] = useState<string>("")
	
	const addTodo = ():void =>{

		if (title.trim().length){
			setTodos(
				[...todos,
					{
						id: todos.length + 1,
						isCompleted:false,
						title:title,
					}
				]
			)
		}
		setTitle("")
	}

	const toggleCompleted = (id:number) => {
		const itemIndex:number = todos.findIndex(item => item.id === id)
		let item: Todo | undefined = todos.find(item => item.id === id)

		if (itemIndex !== -1 && item){
			let tempItems = [...todos]
			item.isCompleted = !item.isCompleted
			tempItems[itemIndex] = item
			
			setTodos(tempItems)
		}
	}

	const deleteHandler = (id:number) => {
		setTodos(todos.filter(item => item.id !== id))
	}

	return (
		<Wrapper>
			<h1>Todo Application</h1>
			<InputWrapper>
				<input 
				type="text"
				value={title}
				onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
				/>
				<button onClick={addTodo}>Add</button>
			</InputWrapper>
			<TodosWrapper>
				{todos.map(todo =>(
					<TodoItem 
						key={todo.id} item={todo} 
						toggleCompleted={toggleCompleted}
						deleteHandler={deleteHandler}
					/>
				))}
			</TodosWrapper>
		</Wrapper>
		)
}

export default App


const Wrapper = styled.section`
	max-width: 1300px;
	margin: 0 auto;
	padding: 72px;
	text-align: center;
`

const InputWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 32px;

	input{
		padding: 8px 12px;
		border: 1px solid #fff;
		display: inline-block;
		width: 80%;
		border-radius: 8px;
	}
	button{
		padding:8px 12px;
	}
`

const TodosWrapper = styled.ul`
	padding: 0;
	display: flex;
	flex-direction: column;
	gap: 32px;
	margin-top: 48px;
`