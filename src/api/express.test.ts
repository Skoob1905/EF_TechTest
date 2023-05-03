const programs = require('../../fakedb/programs.json')
const axios = require('axios')
const url = 'http://localhost:3001/'

describe('GET /', () => {
	it('should return the array of programs', async () => {
		const res = await axios.get(url)
		expect(res.data).toEqual(programs)
	})
})

describe('POST /', () => {
	it('should add a new program to the database', async () => {
		const newProgram = {
			id: 12,
			title: 'Josephs Awesome Program',
			topic: 'typescipt',
			learningFormats: ['Remote', 'Hybrid', 'Abroad'],
			bestseller: true,
			startDate: '2023-05-05T00:00:00+0000',
		}
		const res = await axios.post(url, newProgram)
		expect(res.status).toBe(200)
		expect(res.data).not.toEqual(programs)
		expect(res.data.length).toEqual(programs.length + 1)
	})
})

describe('PUT /', () => {
	it('should update an existing program in the database', async () => {
		const title = 'Title Updated'
		const id = 11
		const res = await axios.put(url, { id, data: { title } })
		expect(res.status).toBe(200)
		expect(res.data.find((program) => program.id == id).title).toBe(title)
	})

	it('should return an error message if program ID is not found', async () => {
		const title = 'Try to update'
		const id = 30
		const programToUpdate = { id, data: { title } }
		const res = await axios.put(url, programToUpdate)
		expect(res.status).toBe(200)
		expect(res.data).toBe('Cant find program by ID to update')
	})
})

describe('DELETE /', () => {
	it('should delete an existing program from the database', async () => {
		const id = 3
		const res = await axios.delete(url, { data: { id } })
		expect(res.status).toBe(200)
		expect(res.data.length).toEqual(programs.length - 1)
		expect(res.data).not.toContain({ id })
	})

	it('should return an error message if program ID is not found', async () => {
		const id = 20
		const res = await axios.delete(url, { data: { id } })
		expect(res.status).toBe(200)
		expect(res.data).toBe('Cant find program by Id')
	})
})
