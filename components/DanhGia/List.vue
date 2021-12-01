<template>
  <div>
    <CCard>
      <CCardHeader>
        <h3>Danh Sach Loai Di San</h3>
      </CCardHeader>
      <CCardBody>
        <CButton color="primary" class="m-2 btn_add">
          <nuxt-link to="/category/add" class="text-white d-block">
            + Add</nuxt-link
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
          <template #method="{ item }">
            <td class="py-2">
              <CButton color="success">
                <nuxt-link :to="`/category/${item.id}`">
                  <CIcon :content="$options.freeSet.cilPencil" />
                </nuxt-link>
              </CButton>
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
  { key: "disan_id", label: "Ten Di San", _style: "min-width:150px" },
  { key: "danhgia", label: "Danh Gia", _style: "min-width:150px" },
  { key: "binhluan", label: "Binh Luan", _style: "min-width:150px" },
 
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
              .delete(URL + "category/" + id, {
                headers: { Authorization: this.$auth.getToken("local") }
              })
              .then(res => {});
            swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
    },
  
  }
};
</script>

<style></style>