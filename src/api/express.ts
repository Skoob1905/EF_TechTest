import express, { Request, Response, Express } from 'express'
import programs from '../../fakedb/programs.json'

const app: Express = express()

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
	if (programIdx) {
		const programToUpdate = programs[programIdx]
		programs[programIdx] = { ...programToUpdate, ...data }
		res.send(programs)
	}
	res.send('Cant find program by ID to update')
})

app.delete('/', (req: Request, res: Response) => {
	const idToDelete = req.body.id
	const objectIndex = programs.findIndex((program) => program.id === idToDelete)
	if (objectIndex > -1) {
		const filteredArray = programs.filter(
			(program) => program.id !== idToDelete
		)
		res.send(filteredArray)
	}
	res.send('Cant find program by Id')
})

app.listen(3001, () => {
	console.log('Server listening on port 3001')
})
