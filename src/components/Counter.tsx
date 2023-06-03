// import { h, Fragment } from 'preact'
import styles from './Counter.module.css'

export default function Counter ({ children, count }) {
	const add = () => count.value++
	const subtract = () => count.value--

	return (
		<>
			<div class={styles.counter}>
				<button onClick={subtract}>-</button>
				<pre>{count}</pre>
				<button onClick={add}>+</button>
			</div>
			<div class={styles.counterMessage}>{children}</div>
		</>
	)
}

