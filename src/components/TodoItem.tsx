import React from 'react'
import styled from "styled-components"

import { Todo } from '../types'
import tick from "../assets/tick.svg"
import bin from "../assets/delete.svg"


interface TodoItemProps {
	item: Todo
	toggleCompleted(id: number): void
	deleteHandler(id: number):void
}

const TodoItem = ({ item, toggleCompleted,deleteHandler }: TodoItemProps) => {
	console.log(item.id);
	
	return (
		<Wrapper className={item.isCompleted ? "completed" : ""} onClick={() => toggleCompleted(item.id)}>
			{item.isCompleted ? <img src={tick} alt="tick" /> : <span className="mark_me"></span>}
			<span>{item.title}</span>
			<img
				src={bin}
				alt="bin" 
				className='bin'
				onClick={e =>{
					e.stopPropagation()
					deleteHandler(item.id)
				}}
			/>
		</Wrapper>
	)
}

export default TodoItem

const Wrapper = styled.li`
	font-size: 17px;
	font-weight: 600;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 32px;

	span.mark_me{
		width: 30px;
		height: 30px;
		border: 1px solid #fff;
		border-radius:50%;
	}

	img{
		width: 32px;
	}
	img.bin{
		margin: 0 0 0 auto;
	}

	/* &.completed{
		color: green;
	} */
`