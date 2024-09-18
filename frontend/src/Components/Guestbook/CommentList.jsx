const sqlite3 = require('sqlite3').verbose()
let db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        return console.error(err.message)
    }
    console.log('Connected to SQlite database')
})

export default function CommentList() {
    const date = new Date().toDateString()
    return <div>
        <li>
            <p>{date}</p>
        
        </li>
    </div>
}