import { defineStore } from "pinia"

export const useSessionStore = defineStore("SessionStore",{

    // state 
    state: () => {
        return {
            sessionToken: ''
        }
    }

    // actions


    // getters
})