<template>
  <div>
    <CCard>
      <CCardHeader>
        <h3>Thống Kê Đánh Giá - Bình Luận</h3>
      </CCardHeader>
      <CCardBody>
         <CRow>
           <CCol sm-3>
           
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
          sorter
        >
          
        
         
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
  
  { key: "ten", label: "Tên Di Sản", _style: "min-width:150px" },
  { key: "luotxem", label: "Lượt Xem", _style: "min-width:150px" },
  { key: "trungbinh", label: "Điểm trung bình", _style: "min-width:150px" },
  
 
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
      fields: fields
      
    };
  },
  methods: {
   
  
  }
}
</script>

<style>

</style>