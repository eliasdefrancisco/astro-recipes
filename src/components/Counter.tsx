// import styles from './Counter.module.css'
import { counter, counterMessage } from './Counter.css'

export default function Counter ({ children, count }) {
	const add = () => count.value++
	const subtract = () => count.value--

	return (
		<>
			<div class={counter}>
				<button onClick={subtract}>-</button>
				<pre>{count}</pre>
				<button onClick={add}>+</button>
			</div>
			<div class={counterMessage}>{children}</div>
		</>
	)
}

