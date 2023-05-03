import { fetchApiResponse } from './utils/fetch'
import { TProgram } from 'types'

fetchApiResponse('GET').then((res) => {
	console.log(res)
})
