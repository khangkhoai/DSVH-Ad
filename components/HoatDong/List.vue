<template>
  <div>
    <CCard>
      <CCardHeader>
        <h3>Danh Sách Hoạt Động</h3>
      </CCardHeader>
      <CCardBody>
        
        <CRow>
           <CCol sm-3>
           <CButton color="primary" class="m-2 btn_add">
          <nuxt-link to="/hoatdong/add" class="text-white d-block">
            + Thêm Mới</nuxt-link
          >
        </CButton>
          </CCol>
          <CCol sm-6>
           <CInput type="search" placeholder="Search" v-model="keySearch"/>  
          </CCol>
          <CCol sm-3> 
            <CButton type="submit" color="success" variant="outline" style=" width: 90px;" @click="search(keySearch) "><h6>Tìm Kiếm</h6></CButton>
          </CCol>
        </CRow>
        <CDataTable
          :items="listData"
          :fields="fields"
          items-per-page-select
          :items-per-page="5"
          hover
          pagination
        >
          
         <template #mota="{ item }">
            <div id="app">
              <div v-if="item.mota.length<60"><td> {{ item.mota }}</td></div>
              <div v-else><td> {{ item.mota.substring(0,60)+".." }}</td></div>
            </div>
          </template>
        <template #anh="{ item }">
            <td class="anh">
              <img
                v-bind:src="'http://127.0.0.1:8000/' + item.anh"
                alt=""
                width="1%"
                height="1%"
                class="c-sidebar-brand-full img-fluid w-75"
              />
            </td>
          </template>
           <!-- <template #tendisan="{ item }">
            <div>{{item.tendisan}}</div>
          </template> -->
          <template #sua="{ item }">
            <td class="py-2">
              <CButton color="success">
                <nuxt-link :to="`/hoatdong/${item.id}`">
                  <CIcon :content="$options.freeSet.cilPencil" />
                </nuxt-link>
              </CButton>
            </td>
          </template>
          <template #xoa="{ item }">
            <td class="py-2">
              <CButton color="danger" @click="deleteItem(item.id)">
                <CIcon :content="$options.freeSet.cilTrash" />
              </CButton>
            </td>
          </template>
         
        </CDataTable>
      </CCardBody>
    </CCard>
  </div>
</template>
<script>
import axios from "axios";
import { freeSet } from "@coreui/icons";
import swal from "sweetalert2";
import { URL } from "~/constant/constant";
const fields = [
  { key: "id", label: "ID", _style: "min-width:50px" },
  { key: "tendisan", label: "Tên Di Sản", _style: "min-width:200px" },
  { key: "ten", label: "Tên Hoạt Động", _style: "min-width:150px" },
  { key: "mota", label: "Mô Tả", _style: "min-width:150px" },
  { key: "anh", label: "Ảnh", _style: "min-width:150px" },
  { key: "batdau", label: "Thời Gian Bắt Đầu", _style: "min-width:150px" },
  { key: "ketthuc", label: "Thời Gian Kết Thúc", _style: "min-width:150px" },
  { key: "diadiem", label: "Địa Điểm", _style: "min-width:150px" },
  { key: "sua", label: "Cập Nhật", _style: "min-width:100px;" },
  { key: "xoa", label: "Xóa", _style: "min-width:100px;" }
];

export default {
  freeSet,
  props: {
    listData: {
      type: Array,
      default: () => [],
      
    },
   
  },
  data() {
    return {
      fields: fields
      
    };
  },
  methods: {
    deleteItem(id) {
      swal
        .fire({
         title: "Bạn chắc chắn muốn xóa dữ liệu",
          text: "Bạn sẽ không thể khôi phục dữ liệu đã xóa",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Có",
          cancelButtonText : "Không"
        })
        .then(result => {
          if (result.isConfirmed) {
            axios
              .delete(URL + "hoatdong/" + id)
              .then(res => {});
            swal.fire("Deleted!", "Dữ liệu đã được xóa", "Thành Công");
          }
        });
    },
  
  }
};
</script>

<style></style>