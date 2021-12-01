<template>
  <div>
    <CCard>
      <CCardHeader>
        <h3>Danh Sach Loai Di San</h3>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol sm-3>
            <CButton color="primary" class=" btn_add">
              <nuxt-link to="/disan/add" class="text-white d-block">
              + Add</nuxt-link
            >
            </CButton>
          </CCol>
          <CCol sm-9>
            <CInput type="search" class="sm-9" placeholder="Search" v-model="keySearch"/>
            <CButton type="submit" color="success" variant="outline" style="margin-left : 410px" @click="search(keySearch)">Search</CButton>
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
              <div v-if="item.mota.length<60"> {{ item.mota }}</div>
              <div v-else> {{ item.mota.substring(0,60)+".." }}</div>
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
          <template #method="{ item }">
            <td class="py-2">
              <CButton color="success">
                <nuxt-link :to="`/disan/${item.id}`">
                  <CIcon :content="$options.freeSet.cilPencil" />
                </nuxt-link>
              </CButton>
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
  { key: "loai_id", label: "Loai Di San", _style: "min-width:100px" },
  { key: "cap_id", label: "Cap Di San", _style: "min-width:100px" },
  { key: "ten", label: "Ten", _style: "min-width:150px" },
  { key: "anh", label: "Anh", _style: "min-width:150px" },
  { key: "video", label: "Video", _style: "min-width:150px" },
  { key: "audio", label: "Audio", _style: "max-width:50px" },
  { key: "mota", label: "Mo Ta", _style: "min-width:150px" },
  { key: "xa", label: "Xa, Phuong", _style: "min-width:150px" },
  { key: "huyen", label: "Quan, Huyen", _style: "min-width:150px" },
  { key: "luotxem", label: "Luot Xem", _style: "min-width:50px" },
  { key: "method", label: "Method", _style: "min-width:100px;" }
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
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        })
        .then(result => {
          if (result.isConfirmed) {
            axios
              .delete(URL + "disan/" + id)
              .then(res => {this.$router.go("/capdisan")});
            swal.fire("Deleted!", "Your file has been deleted.", "success");
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
       const url = 'http://127.0.0.1:8000/api/disan/search/' + keySearch
      axios.get(url).then((res) => {
        this.listData = res.data;
        console.log(this.listData)
      })
      
    },  
  },
   mounted() {
     
  }
};
</script>

<style></style>