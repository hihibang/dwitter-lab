import React, {useState, useEffect, useRef} from 'react';
import { use } from 'react';

export default function CompPost() {
    const nameRef = useRef(null)
    const [data, setData] = useState('');
    const [name, setName] = useState('');
    const handleChange = () => {
        setName(nameRef.current.value)
    }
    const handlePost = async() => {
        const url = 'http://localhost:9000/api/post'
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({"name":name})
        });
        const jsonData = await resp
    }
    /*
    useEffect(()=>{
        const fetchData = async() => {
            const url = 'http://localhost:9000/api/post'
            const response = await fetch(url, {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({"name":"Kim"})
            });
            const jsonData = await response.json(); // list:[]
            setData(jsonData.result)
        }
        fetchData()
    }, [])
    */
    return (
        <div>
            <input type='text' 
                   name="name"
                   value={name}
                   ref={nameRef}
                   onChange={handleChange}></input>
            <button onClick={handlePost}>전송</button>
            <h2>Post 방식으로 전송된 결과 : {name}</h2>
        </div>
    );
}

