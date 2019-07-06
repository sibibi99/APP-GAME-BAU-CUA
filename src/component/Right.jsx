import React, { Component } from 'react';
import { connect } from 'react-redux'; // Ket noi voi store redux


class Right extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }

  xocBauCua = () => {

  }

  render() {
    return (
      <div className="box2">

        <div className="dia">
          <img src="https://i.ibb.co/drFf994/Dia.png" className="wow bounceIn" alt="" />
          <div className="xucsac">
            {this.props.xucSac.map((item, index) => {
              return (
                <div className="xucsac__item" key={index} >
                  <img src={item.hinhAnh} alt="" className="wow pulse" data-wow-iteration="infinite" />
                </div>



              )
            })}


          </div>
          <div className="xoc" onClick={() => this.props.DatCuoc()}>
            <img src="./img/soc.png" alt="" className="wow shake" data-wow-iteration="infinite" />
          </div>


        </div>
      </div>
    )
  }
}

// Dữ liệu lên
const mapDispatcToProps = (dispatch) => {
  // Dispath laf 1 ham giuo dua du lieu len store redux}
  return {
    DatCuoc: () => { // Gui len moi lan click 1 ma
      dispatch({
        //Data dua len store gom 2 thuoc tinh
        type: "CHOI_GAME", //Type la thuoc tinh bat buoc phai có de dinh action nao gui len

      });
      // ĐỊnh nghĩa các prop phương thức xử lý sự kiên sau này
    },


  };
};

// Dữ Liệu Lấy về từ Store
const mapStateToProps = (state) => {
  return {
    xucSac: state.storeGameBauCuaReducer.xucSac
  }
}

export default connect(mapStateToProps, mapDispatcToProps)(Right)