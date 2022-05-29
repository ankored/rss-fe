import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// The objet that represents a feed that the user has subscribed to
export interface Feed {
	id: string,
	url: string,
	title: string,
	status: "unsynced" | "syncing" | "synced",
}

// Adding a feed requires on the url, the other fields of `Feed` will be 
// filled in
interface AddFeedPayload {
	url: string,
}

const initialState: Array<Feed> = [
	{ id: 'feed-1', title: 'apenwarr', url: 'https://example.com', status: "unsynced"},
	{ id: 'feed-2', title: 'System Recipes', url: 'https://example.com', status: "unsynced"},
	{ id: 'feed-3', title: "Liz's Newsletter", url: 'https://example.com', status: "unsynced"}
]

export const feedSlice = createSlice({
	name: "feeds",
	initialState: {
		feeds: initialState,
	},
	reducers: {
		addFeed: {
			reducer(state, action: PayloadAction<AddFeedPayload>) {
				return  {
					...state,
					feeds: [
						{
							id: "new-id",
							url: action.payload.url,
							title: action.payload.url,
							status: "unsynced",
						},
						...state.feeds,
					],
				};
			},
			prepare(url: string) {
				return { payload: { url: url }, meta: {}};
			},
		}
	},
});

export const { addFeed } = feedSlice.actions;

export default feedSlice.reducer;
