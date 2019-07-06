import React, { Component } from 'react'
import Left from './Left';
import Right from './Right';
import { connect } from 'react-redux'; // Ket noi voi store redux


class Game extends Component {


  reload() {
    document.location.reload()
}
  render() {
    return (
      <div>
        <section className="row">
          <div className="header">
            <img src="https://i.ibb.co/SV3mVGx/Logo.png" className="wow bounceInDown" alt="" />
          </div>
        </section>
        <section className="row">
          <div className="row1">
            <button className="r1 wow pulse "  data-wow-iteration="infinite">Tiền Thưởng: <span className="counter">{this.props.tongDiem}</span>$</button>
           <button className = "choilai"onClick={this.reload}>Chơi Lại</button>
          </div>
          <div className="col">
            <Left />
            <Right />
          </div>
        </section>
      </div>

    )
  }
}



// Dữ Liệu Lấy về từ Store
const mapStateToProps = (state) => {
  return {
    tongDiem: state.storeGameBauCuaReducer.tongDiem
  }
}
export default connect(mapStateToProps, null)(Game)