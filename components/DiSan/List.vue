<template>
  <div>
    <CCard>
      <CCardHeader>
        <h3>Danh Sách Di Sản Văn Hóa</h3>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol sm-3>
            <CButton color="primary" class=" btn_add">
              <nuxt-link to="/disan/add" class="text-white d-block">
              + Thêm Mới</nuxt-link
            >
            </CButton>
          </CCol>
          <CCol sm-9>
            <CInput type="search" class="sm-9" placeholder="Search" v-model="keySearch"/>
            <CButton type="submit" color="success" variant="outline" style="margin-left : 390px ; width: 90px;" @click="search(keySearch) "><h6>Tìm Kiếm</h6></CButton>
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
             <!-- <template #loai_id="{ item }">
            <div id="app">
              <td v-bind="getData1(item.loai_id)">{{dataCategory}} </td>
            </div>
          </template>
           <template #capi_id="{ item }">
            <div id="app">
              <td v-bind="getData2(item.cap_id)">{{dataRank}} </td>
            </div>
          </template> -->
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
          <template #video="{ item }">
            <td class="video">
              <video  width="100%" height="100%" controls>
                <source  v-bind:src="'http://127.0.0.1:8000/' + item.video">
              </video>
            </td>
          </template>
          <template #audio="{ item }">
            <td class="audio">
             
              <audio controls style="max-width:120px">
                <source v-bind:src="'http://127.0.0.1:8000/' + item.audio">
              </audio>
            </td>
          </template>
          <template #sua="{ item }">
            <td class="py-2">
              <CButton color="success">
                <nuxt-link :to="`/disan/${item.id}`">
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
  { key: "tenloai", label: "Loại di sản", _style: "min-width:100px" },
  { key: "tencap", label: "Cấp di sản", _style: "min-width:100px" },
  { key: "ten", label: "Tên", _style: "min-width:150px" },
  { key: "anh", label: "Ảnh", _style: "min-width:150px" },
  { key: "video", label: "Video", _style: "min-width:150px" },
  { key: "audio", label: "Audio", _style: "max-width:50px" },
  { key: "mota", label: "Mô tả", _style: "min-width:150px" },
  { key: "xa", label: "Xã, Phường", _style: "min-width:150px" },
  { key: "huyen", label: "Quận, Huyện", _style: "min-width:150px" },
  { key: "luotxem", label: "Lượt xem", _style: "min-width:50px" },
  { key: "sua", label: "Cập nhật", _style: "min-width:100px;" },
  { key: "xoa", label: "Xóa", _style: "min-width:100px;" }
];

export default {
  freeSet,
  props: {
    listData: {
      type: Array,
      default: () => []
    },
   
  },
  data() {
    return {
      fields: fields,
      dataCategory : [],
      dataRank : [],
      keySearch : "",
      dataSearch : [],
      id : ""
      
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
              .delete(URL + "disan/" + id)
              .then(res => {this.$router.go("/capdisan")});
            swal.fire("Deleted!", "Dữ liệu đã được xóa", "Thành Công");
          }
        });
    },
    getData1(id) {
      axios
        .get(URL + "loaidisan/" + id)
        .then(res => {
          this.dataCategory= res.data.tenloai;
          console.log(this.dataCategory)
          stop();
        });
        
    },
    getData2(id) {
      axios
        .get(URL + "capdisan/" + id)
        .then(res => {
          this.dataRank= res.data.tencap;
          
          stop();
        });
        
    },
    search(keySearch) {
      if(keySearch == '')
      {
         const url = 'http://127.0.0.1:8000/api/disan/'
      axios.get(url).then((res) => {
        this.listData = res.data;
        console.log(this.listData)
      })
      }
      else{
         const url = 'http://127.0.0.1:8000/api/disan/search/' + keySearch
      axios.get(url).then((res) => {
        this.listData = res.data;
        console.log(this.listData)
      })
      
      }
      
      
    },  
  },
   mounted() {
     
  }
};
</script>

<style></style>