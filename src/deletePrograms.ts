import { fetchApiResponse } from './utils/fetch'
import type { TProgram } from '../types'

const deleteProgram = {
	id: 11,
}

fetchApiResponse<{ id: number }>('DELETE', deleteProgram).then((res) => {
	console.log(res)
})
