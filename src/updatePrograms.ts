import { fetchApiResponse } from './utils/fetch'
import type { TProgram } from '../types'

type TUpdateRequest = {
	id: number
	data: Partial<TProgram>
}

const updateProgram: TUpdateRequest = {
	id: 10,
	data: {
		title: 'Josephs Awesome Updated Program',
		topic: 'lol',
	},
}

fetchApiResponse<TUpdateRequest>('PUT', updateProgram).then((res) => {
	console.log(res)
})
