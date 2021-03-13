//const express = require("express");
import "core-js" ;
import express from "express";  // bable test를 위해 require가 아닌 import로 express를 가져옴
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from './middlewares';
import userRouter from "./routers/userRouter"; // default로 export하지 않으면 이렇게 import해줘야함
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";


const app = express();


app.use(helmet());
app.set("view engine","pug"); // app.set ? 
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));
//어차피 각  router 파일 들에서 get요청에 대한 res 설정은 이미 다 되어있으니, 이미 정의된 그 로직을 미들웨어로서(?) 사용하기 위해 use를 쓰는거같음


app.use(localsMiddleware);
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter); // use의 의미 -> 누군가 /user 경로로 접속하면 이 router 전체를 사용하겠다는 의미 , 미들웨어 전역에 사용한 use는 url을 안받았음
app.use(routes.videos, videoRouter);

export default app;//다른곳에서 내 파일을 import를 할때 app object들을 준다는 내용 , 여기서 default는 무슨 의미지??