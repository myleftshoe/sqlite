import Database from 'better-sqlite3'

const db = new Database('./data/fv.db', { verbose: console.log })

export function getData() {
    const sql = `select * from  sales`
    const stmt = db.prepare(sql)
    const rows = stmt.all()
    return rows
}