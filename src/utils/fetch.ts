import axios from 'axios'

export const fetchApiResponse = async <TData>(method: string, data?: TData) => {
	const config = {
		method,
		url: 'http://localhost:3001',
		data,
	}

	const response = await axios.request(config)
	return response.data
}
