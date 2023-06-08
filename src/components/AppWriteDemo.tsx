import { Client, Account, ID, Databases } from 'appwrite'
import { useEffect, useState } from 'preact/hooks'

export default function AppWriteDemo () {
	const dbId = '647fc966208bb764f474'
	const collectionId = '647fc97710e43e95927f'
	const [lastResponse, setLastResponse] = useState(null)
	const [client, setClient] = useState(null)
	const [account, setAccount] = useState(null)
	const [databases, setDatabases] = useState(null)

	function createRandomDoc () {
		const currentDateTime = Date.now()
		const docId = ID.unique()
		const docData = {
			nombre: 'Elaya',
			descripcion: 'Elaya es un ser de luz ' + currentDateTime
		}
		const promise = databases.createDocument(dbId, collectionId, docId, docData)
		promise.then(
			response => {
				console.log('createRandomDoc response ', response)
			},
			error => {
				console.log('createRandomDoc error', error)
			}
		)
	}


	useEffect(() => {
		const client = new Client()
		client
			.setEndpoint('https://cloud.appwrite.io/v1')
			.setProject('647fba51f112bdd9dca6')

		const account = new Account(client)
		const databases = new Databases(client)

		// Set states
		setClient(client)
		setAccount(account)
		setDatabases(databases)

		// TODO: Not working
		// Subscribe to account events
		// Needs session be started !!
		const unsubscribe = client.subscribe(
			'databases.*.collections.*.documents.*.create',
			response => {
				console.log('subscribe response ', response)
				setLastResponse(response)
			}
		)

		// Inicia sesion como mrElaya
		account.createEmailSession(
			'mrElaya@astrorecipes.com',
			'12345678'
		).then(
			response => {
				console.log('startSession response', response)
			},
			error => {
				console.log('startSession error', error)
			}
		)

		// Unsubscribe from files channel
		return () => unsubscribe && unsubscribe()
	}, [])


	// List documents
	useEffect(() => {
		if (!lastResponse) return
		const promise = databases.listDocuments(dbId, collectionId)
		promise.then(
			response => {
				console.log('listDocuments response ', response)
			},
			error => {
				console.log('listDocuments error', error)
			}
		)
	}, [lastResponse])


	// function createAccount () {
	// 	const currentDateTime = Date.now()
	// 	// Register User
	// 	account.create(
	// 		ID.unique(),
	// 		`me${currentDateTime}@example.com`,
	// 		'12345678',
	// 		`MrElaya ${currentDateTime}`
	// 	).then(
	// 		response => {
	// 			console.log(response)
	// 		},
	// 		error => {
	// 			console.log(error)
	// 		})
	// }


	return (
		<div>
			<p><button class='button-success pure-button' onClick={createRandomDoc}>
				Create Random Doc
			</button></p>
		</div>
	)
}