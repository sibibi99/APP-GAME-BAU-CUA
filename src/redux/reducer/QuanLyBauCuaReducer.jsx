const stateDefault = {
  danhSachCuoc: [
    { ma: 'nai', hinhAnh: 'https://i.ibb.co/6b0wqF4/nai.png', diemCuoc: 0 },
    { ma: 'bau', hinhAnh: 'https://i.ibb.co/5LG2N4v/bau.png', diemCuoc: 0 },
    { ma: 'ga', hinhAnh: 'https://i.ibb.co/YygVcsZ/ga.png', diemCuoc: 0 },
    { ma: 'ca', hinhAnh: 'https://i.ibb.co/ZMsJP3L/ca.png', diemCuoc: 0 },
    { ma: 'cua', hinhAnh: 'https://i.ibb.co/K0xSBBW/cua.png', diemCuoc: 0 },
    { ma: 'tom', hinhAnh: 'https://i.ibb.co/6bG0F60/tom.png', diemCuoc: 0 },

  ],
  tongDiem: 100,
  xucSac: [
    { ma: 'cua', hinhAnh: 'https://i.ibb.co/K0xSBBW/cua.png' },
    { ma: 'cua', hinhAnh: 'https://i.ibb.co/K0xSBBW/cua.png' },
    { ma: 'cua', hinhAnh: 'https://i.ibb.co/K0xSBBW/cua.png' }
  ]

}

const storeGameBauCuaReducer = (state = stateDefault, action) => {

  switch (action.type) {
    case 'DAT_CUOC': {
      // TIm ma item trong danhSAchCuoc => tang diemCuoc
      const mangCuoc = [...state.danhSachCuoc] //Sao chep mang moi ra


      // Tim trong mangCuoc => phan tu nao co ma = ma action gui len => tang diem
      let item = state.danhSachCuoc.find(itemCuoc => itemCuoc.ma === action.ma)
      if (state.tongDiem > 0) {
        item.diemCuoc += 10;
        state.tongDiem -= 10;
      }
      state.danhSachCuoc = mangCuoc;
      return { ...state }
    }
    case 'CHOI_GAME': {

      let mangXucSacMoi = [];
      // Random tu 1-6 Math.floor(Math.random()* 6);
      for (let i = 0; i < 3; i++) {
        let soNghauNhien = Math.floor(Math.random() * 6);
        //Tao so ngay nhien => lay ra 1 item trong danhsachcuoc => tao xuc sac moi
        let xucSacMoi = {
          ma: state.danhSachCuoc[soNghauNhien].ma,
          hinhAnh: state.danhSachCuoc[soNghauNhien].hinhAnh
        }
        mangXucSacMoi.push(xucSacMoi)
      }
      state.xucSac = mangXucSacMoi;
      // Xu ly hoan tien
      for (let itemCuoc of state.danhSachCuoc) {
        // So trong mang cuoc voi mang xux sac => neu phan tu mang cuoc chua trong xuc sac => hoan tien
        let index = mangXucSacMoi.findIndex(xucSac => xucSac.ma === itemCuoc.ma);
        if (index !== -1) {
          // xu ly hoan tien khi tim thay item cuoc trong xuc sac
          state.tongDiem += itemCuoc.diemCuoc;
        }
      }
      // Buoc 3: Xu ly tang diem
      for (let xucSac of mangXucSacMoi) {
        // Neu xuc sac co tronf danh sach cuoc thi lay tong diem + diemCuoc
        let index = state.danhSachCuoc.findIndex(item => item.ma === xucSac.ma)
        if (index !== -1) {
          state.tongDiem += state.danhSachCuoc[index].diemCuoc
        }
      }

      // Buoc 4
      // Reset diem cuoc
      let mangCuoc = [...state.danhSachCuoc]
      mangCuoc.forEach((item, index) => {
        item.diemCuoc = 0;
      })
      state.danhSachCuoc = mangCuoc;

      return { ...state }

      // Lap 3 lan => 3 index
      // Tu 3 index => Tao 3 con xuc xac moi => gan mang xuc sac moi cho mang xuc sac sac cu
    }
    default:

  }

  return { ...state }
};
export default storeGameBauCuaReducer