<template>
  <div>
    <CCard>
      <CCardHeader>
        <h3>Danh Sách Loại Di Sản</h3>
      </CCardHeader>
      <CCardBody>
        <CButton color="primary" class="m-2 btn_add">
          <nuxt-link to="/loaidisan/add" class="text-white d-block">
            + Thêm Mới</nuxt-link
          >
        </CButton>
        <CDataTable
          :items="listData"
          :fields="fields"
          items-per-page-select
          :items-per-page="5"
          hover
          pagination
        >
          <template #sua="{ item }">
            <td class="py-2">
              <CButton color="success">
                <nuxt-link :to="`/loaidisan/${item.id}`">
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
  { key: "tenloai", label: "Tên loại di sản", _style: "min-width:350px" },
   { key: "sua", label: "Sửa", _style: "min-width:50px;" },
  { key: "xoa", label: "Xóa", _style: "min-width:50px;" }
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
              .delete(URL + "loaidisan/" + id)
              .then(res => {this.$router.go("/loaidisan");});
            swal.fire("Deleted!", "Dữ liệu đã được xóa", "Thành Công");
          }
        });
           
    },
   
  }
};
</script>

<style></style>