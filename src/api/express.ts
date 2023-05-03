import express, { Request, Response, Express } from 'express'
import programs from '../../fakedb/programs.json'

export const app: Express = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
	res.send(programs)
})

app.post('/', (req: Request, res: Response) => {
	const programToAdd = req.body
	const addedList = [...programs, programToAdd]
	res.send(addedList)
})

app.put('/', (req: Request, res: Response) => {
	const { id: idToUpdate, data } = req.body
	const programIdx = programs.findIndex(({ id }) => id === idToUpdate)
	if (programIdx > -1) {
		const programToUpdate = programs[programIdx]
		programs[programIdx] = { ...programToUpdate, ...data }
		res.send(programs)
	} else {
		res.send('Cant find program by ID to update')
	}
})

app.delete('/', (req: Request, res: Response) => {
	const { id: idToDelete } = req.body
	const programIdx = programs.findIndex(({ id }) => id === idToDelete)
	if (programIdx > -1) {
		const filteredArray = programs.filter(({ id }) => id !== idToDelete)
		res.send(filteredArray)
	} else {
		res.send('Cant find program by Id')
	}
})

app.listen(3001, () => {
	console.log('Server listening on port 3001')
})
