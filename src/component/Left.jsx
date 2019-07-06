import React, { Component } from 'react';
import { connect } from 'react-redux'; // Ket noi voi store redux

class Left extends Component {
  render() {
    return (
      <div className="box1">
        {this.props.DanhSachCuoc.map((item, index) => {
          return (
            <div className="item" key={index} onClick={() => this.props.DatCuoc(item.ma)}>
              <img src={item.hinhAnh} className="wow bounceIn" alt="" />
              <button >Cược: {item.diemCuoc}</button>
            </div>
          )
        })}
      </div>
    )
  }
}

// Dữ liệu lên
const mapDispatcToProps = (dispatch) => {
  // Dispath laf 1 ham giuo dua du lieu len store redux}
  return {
    DatCuoc: (ma) => { // Gui len moi lan click 1 ma
      dispatch({
        //Data dua len store gom 2 thuoc tinh
        type: "DAT_CUOC", //Type la thuoc tinh bat buoc phai có de dinh action nao gui len
        ma
      });
      // ĐỊnh nghĩa các prop phương thức xử lý sự kiên sau này
    },


  };
};

// Dữ Liệu Lấy về từ Store
const mapStateToProps = (state) => {
  return {
    DanhSachCuoc: state.storeGameBauCuaReducer.danhSachCuoc
  }
}
export default connect(mapStateToProps, mapDispatcToProps)(Left)