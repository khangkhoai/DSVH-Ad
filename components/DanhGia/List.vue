<template>
  <div>
    <CCard>
      <CCardHeader>
        <h3>Danh Sách Đánh Giá - Bình Luận</h3>
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
          <template #method="{ item }">
            <td class="py-2">
              <CButton color="danger" @click="deleteCategory(item.id)">
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
  { key: "disan_id", label: "Tên Di Sản", _style: "min-width:150px" },
  { key: "danhgia", label: "Đánh Giá", _style: "min-width:150px" },
  { key: "binhluan", label: "Bình Luận", _style: "min-width:150px" },
  { key: "method", label: "Xoá", _style: "min-width:150px" },
 
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
    deleteCategory(id) {
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
              .delete(URL + "danhgia/" + id)
              .then(res => {this.$router.push("/danhgia")});
            swal.fire("Deleted!", "Dữ liệu đã được xóa", "Thành Công");
          }
        });
    },
  
  }
};
</script>

<style></style>