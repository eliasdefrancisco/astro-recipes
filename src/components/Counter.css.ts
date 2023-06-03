import { style } from '@vanilla-extract/css'

export const counter = style({
	display: 'grid',
	fontSize: '2em',
	gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
	placeItems: 'center',
	width: '10rem',
	margin: '0 auto'
})

export const counterMessage = style({
	textAlign: 'center',
	color: 'yellowgreen',
	marginBottom: '3rem'
})