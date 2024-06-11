import type { 
	APIUsersVerifyResponse, 
	APIFetchError, 
	APIRegisterResponse,
	APIRegisterErrorResponse,
	APIGetIEventResponse,
	APIIVotePosResponse,
	APIGetIEventsResponse
} from "./types";

const baseURL = 'http://localhost:5000'

/** assumes res.ok === false */
async function handleError(requestType: string,res: Response) {
	const err: APIFetchError = { 
		error: `API: ${requestType}: ${res.status} ${res.statusText}`,
		status: res.status,
		statusText: res.statusText,
	}
	try { err.maybeJson = await res.json() } catch (e) { }
	return err;
}

async function awaitedPost(
	endpoint: string, 
	body: Record<string, unknown>, 
	token: string | null = null
): Promise<unknown | APIFetchError> {
	const headers: Record<string, string> = { 'Content-Type': 'application/json' }
	if (token) headers['Authorization'] = `${token}`

	const res = await fetch(`${baseURL}${endpoint}`, {
		method: 'POST',
		headers: headers,
		body: JSON.stringify(body),
	})

	if (!res.ok) return await handleError('awaitedPost', res)
	const json = await res.json()
	return json
}

async function awaitedGet(
	endpoint: string, 
	body: Record<string, string> = {}, 
	token: string | null = null
): Promise<unknown | APIFetchError> {
	const headers: Record<string, string> = { 'Content-Type': 'application/json' }
	if (token) headers['Authorization'] = `${token}`

	let res: Response
	if (body) {
		const url = new URL(`${baseURL}${endpoint}`)
		url.search = new URLSearchParams(body).toString()
		res = await fetch(url.toString(), { headers: headers, })
	} else {
		res = await fetch(`${baseURL}${endpoint}`, { headers: headers, })
	}

	if (!res.ok) return await handleError('awaitedPost', res)
	const json = await res.json()
	return json as unknown
}

export const api = {
	verifyToken: async (token: string) => {
		return await awaitedPost('/api/users/verify', {}, token) as APIUsersVerifyResponse | APIFetchError
	},
	register: async (inviteCode: string, discordID: string) => {
		return await awaitedPost('/api/users/register', { 
			invite: inviteCode, discordId:discordID
		}) as APIRegisterResponse | APIFetchError<APIRegisterErrorResponse>
	},
	getInviteEvents: async (token: string, opts: Record<string, string> = {}) => {
		return await awaitedGet('/api/ievents', opts, token) as APIGetIEventsResponse | APIFetchError
	},
	getInviteEvent: async (token: string, eventId: string) => {
		return await awaitedGet('/api/ievents/get', {
			eventId: eventId
		}, token) as APIGetIEventResponse | APIFetchError
	},
	votePositive: async (token: string, eventId: string) => {
		return await awaitedPost('/api/ievents/vote/positive', {
			eventId: eventId
		}, token) as APIIVotePosResponse
	},
	voteNegative: async (token: string, eventId: string) => {
		return await awaitedPost('/api/ievents/vote/negative', {
			eventId: eventId
		}, token) as APIIVotePosResponse
	},
}
export default api;