import { getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()
    
    const convertRequestToListElement = (request) => {
       return `
            <li>
                ${request.description}
            </li>`
    }
    let html = `
        <ul>
            ${
                requests.map(convertRequestToListElement).join("")
            }
        </ul>
    `

    return html
}
