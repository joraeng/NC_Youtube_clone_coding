import routes from './routes';
import multer from 'multer';

const multerVideo = multer({dest:'videos/'}); // dest -> destination

export const localsMiddleware = (req,res,next) => {
    res.locals.siteName = "Jotubue";
    res.locals.routes = routes; //routes.js 의 routes 객체를 가져옴
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    }
    next();
};


export const uploadVideo = multerVideo.single('videoFile');//하나의 파일만 업로드 가능하다는 것을 의미
//name part는(single 인수 스트링) html feild의 name이다