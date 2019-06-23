import Axios from "axios";

//Action Types
const token = localStorage.getItem('accessToken')
const config = {
    headers: {
        'Authorization': "Bearer " +token
    }
}

export const GET_PROFILE = 'GET_PROFILE'
export const GET_MESSAGES = 'GET_MESSAGES'
export const SEARCH_MESSAGES = 'SEARCH_MESSAGES'
export const SEND_MESSAGE = 'SEND_MESSAGE'

//Action creators
export function getProfile(){
    return {
        type: GET_PROFILE,
        payload: Axios.get("https://graph.microsoft.com/v1.0/me/", config)
    }
}
export function getMessages(){
    return {
        type: GET_MESSAGES, 
        payload: Axios.get("https://graph.microsoft.com/v1.0/me/messages", config)
    }
}
export function searchMessages(query){
    return {
        type: SEARCH_MESSAGES, 
        payload: Axios.get("https://graph.microsoft.com/v1.0/me/messages?$search=" + query, config)
    }
}
export function sendMessage(message){
    return {
        type: SEND_MESSAGE, 
        payload: Axios.get("https://graph.microsoft.com/v1.0/me/sendMail", config),
        content: message
    }
}

/*
{
    "subject":"Did you see last night's game?",
    "importance":"Low",
    "body":{
        "contentType":"HTML",
        "content":"They were <b>awesome</b>!"
    },
    "toRecipients":[
        {
            "emailAddress":{
                "address":"AdeleV@contoso.onmicrosoft.com"
            }
        }
    ]
}
*/