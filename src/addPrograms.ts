import { fetchApiResponse } from './utils/fetch'
import { TProgram } from 'types'

const programToAdd: TProgram = {
	id: 12,
	title: 'Josephs Awesome Program',
	topic: 'typescipt',
	learningFormats: ['Remote', 'Hybrid', 'Abroad'],
	bestseller: true,
	startDate: '2023-05-05T00:00:00+0000',
}

fetchApiResponse<TProgram>('POST', programToAdd).then((res) => console.log(res))
