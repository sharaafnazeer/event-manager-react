import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    events: [
        {
          "createdAt": "2024-05-22T11:50:06.874Z",
          "title": "Modern Metal Bike",
          "venue": "Huntersville",
          "notes": "Gallium",
          "date": "2066-01-25T16:28:10.516Z",
          "id": "3"
        },
        {
          "createdAt": "2024-05-22T14:02:41.031Z",
          "title": "Modern Soft Bacon",
          "venue": "Ann Arbor",
          "notes": "Benz",
          "date": "2067-04-18T00:16:51.240Z",
          "id": "4"
        },
        {
          "createdAt": "2024-05-22T17:09:09.318Z",
          "title": "Electronic Metal Hat",
          "venue": "Mount Pleasant",
          "notes": "Decentralized",
          "date": "2020-10-14T15:18:46.073Z",
          "id": "5"
        },
        {
          "createdAt": "2024-05-22T19:15:23.585Z",
          "title": "Practical Wooden Hat",
          "venue": "Clarksville",
          "notes": "Rowland",
          "date": "2037-12-03T16:03:31.382Z",
          "id": "6"
        },
        {
          "createdAt": "2024-05-22T12:20:37.560Z",
          "title": "Unbranded Cotton Salad",
          "venue": "Alpharetta",
          "notes": "Auto",
          "date": "2043-06-21T13:47:10.194Z",
          "id": "7"
        },
        {
          "createdAt": "2024-05-22T16:32:36.508Z",
          "title": "Unbranded Metal Table",
          "venue": "Casa Grande",
          "notes": "Berkshire",
          "date": "2077-07-16T19:19:38.508Z",
          "id": "8"
        },
        {
          "createdAt": "2024-05-23T10:44:37.091Z",
          "title": "Handcrafted Soft Chair",
          "venue": "North Lauderdale",
          "notes": "invoice",
          "date": "2015-10-13T08:55:47.279Z",
          "id": "9"
        }
      ],
    filteredEvents: [],
    selectedEvent: null
}


export const eventSlice = createSlice({
    name: 'events',
    initialState: initialState,
    reducers: {
        
        // Getting list of events

        // Searching events

        searchEvents: (state, action) => {
            let filteredEvents = [];
            if (action.payload.searchKey) {
                filteredEvents = state.events.map(event => {
                    return {
                        ...event,
                        titleSmall: event.title.toLowerCase()
                    }
                }).filter(event => event.titleSmall.includes(action.payload.searchKey.toLowerCase()));
                state.filteredEvents = filteredEvents;
            } else {
                state.filteredEvents = [];
            }
            return state;
        },

        clearFilteredEvents: (state) => {
            state.filteredEvents = [];
            return state;
        },

        // Getting single event

        selectEvent: (state, action) => {
            const selectedEvent = state.events.find(eve => eve.id === action.payload.eventId)
            state.selectedEvent = selectedEvent;
            return state;
        },

        // Create event
        createEvent: (state, action) => {

            const id = Number(state.events.reverse()[0].id) + 1;

            const newEvents = [...state.events, {
                ...action.payload.event,
                id: id
            }];
            state.events = newEvents;
            return state;
        },
        // Update event

        updateEvent: (state, action) => {

            const restOfEvents = state.events.filter(eve => eve.id !== action.payload.eventId);
            const toBeUpdateEvent = {
                ...action.payload.event,
                id: action.payload.eventId
            }
            state.events = [...restOfEvents, toBeUpdateEvent];
            return state;
        }, 

        deleteEvent : (state, action) => {
            const afterDeletedEvents = state.events.filter(eve => eve.id !== action.payload.eventId);
            state.events = afterDeletedEvents;
            return state;

        }
        // Delete event
    }
});

export const {createEvent, selectEvent, searchEvents, clearFilteredEvents, deleteEvent, updateEvent} = eventSlice.actions;  

export default eventSlice.reducer;