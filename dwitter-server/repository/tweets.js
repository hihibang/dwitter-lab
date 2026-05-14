import pool from '../db.js';

export const getAll = async()=>{
    const sql = `select * from tweet_view ORDER BY t.created_at DESC`
    const [rows]= await pool.execute(sql, []);
    return await rows;
}

export const create = async(content, user_id)=>{
    const sql = 'INSERT INTO tweets (user_id, content) VALUES (?, ?)'
    const [result] = await pool.execute(sql, [user_id, content]);
    console.log('result=>', result);
    return result;
    
}

export const getTweet = async(id)=>{
    const sql = `
        select * from tweet_view
        WHERE id = ?`
    const [result] = await pool.execute(sql, [id])
    return result[0]
}

export const getDelete = async(id, user_id) => {
    const sql = `delete from tweets where id= ? and user_id = ?`;
    const [result] = await pool.execute(sql, [id, user_id]);
    return result.affectedRows;
}


export const getUpdate = async(id, content, user_id) => {
    const sql = `UPDATE tweets SET content = ? WHERE id = ? and user_id = ?`;
    const [result] = await pool.execute(sql, [content, id, user_id]);
    return result.affectedRows;    
}


export const getMyTweets = async(id) => {
    const sql = `
        select * from tweet_view
        WHERE user_id = ? ORDER BY created_at DESC    
    `;
    const [rows] = await pool.execute(sql, [id]);
    
    return rows;    
}