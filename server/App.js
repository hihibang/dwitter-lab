//1. 라이브러리 임포트
import express from 'express';
import cors from 'cors'

//2. 익스프레스 서버 객체 생성
const PORT = 9000;
const app = express();

//3. 미들웨어
app.use(cors()) // 모든 origin(프론트) 허용
app.use(express.json()) // pront에서 넘어오는 데이터는 모두 문자열 취급
app.use(express.urlencoded({extended: false}))

//4. 라우팅
app.get('/', (req, res, next)=>{
    res.send('response -> server.js')
});
app.get('/api/get', (req, res, next)=>{
    // console.log('/api/get !!!!!!');
    const fruitList = [
        {
            name: "apple",
            color: "red",
            emoji: "🍎"
        },
        {
            name: "orange",
            color: "orange",
            emoji: "🍊"
        }
    ]
    res.json({list: fruitList})
    
});

app.post('/api/post', (req, res, next)=> {
    console.log('/api/post', req.body.name);
    res.json({"result": req.body.name})
});

//5. 익스프레스 서버 객체 생성
app.listen(PORT, ()=>{
    console.log(`server --------> ${PORT}`);
    
})