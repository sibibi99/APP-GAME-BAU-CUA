//Store toan ung dung
import {combineReducers} from 'redux';
import storeGameBauCuaReducer from './reducer/QuanLyBauCuaReducer';


// Khởi tạo store của toàn ứng dụng

const rootReducer = combineReducers({
    // Nơi khai báo các store con sau này
    storeGameBauCuaReducer
})

export default rootReducer;