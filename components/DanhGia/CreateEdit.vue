<template>
  <div>
    <CCard>
      <CCardHeader>
        {{ title }}
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol sm="12">
            <CInput
              label="Ten Di San"
              v-model="dataForm.disan_id"
              placeholder="Enter your name"
            />
          </CCol>
        </CRow>
          <CRow>
          <CCol sm="12">
            <CInput
              label="Danh Gia"
              v-model="dataForm.danhgia"
              placeholder="Enter your name"
            />
          </CCol>
        </CRow>
          <CRow>
          <CCol sm="12">
            <CInput
              label="Binh Luan"
              v-model="dataForm.binhluan"
              placeholder="Enter your name"
            />
          </CCol>
        </CRow>
      </CCardBody>
      <CCardFooter>
        <CButton
          v-if="!this.$route.params.id"
          color="primary"
          @click="addCategory()"
        >
          Submit
        </CButton>
        <CButton
          v-else
          color="primary"
          class="btn-click"
          @click="editCategory(dataForm.id)"
        >
          Update
        </CButton>
      </CCardFooter>
    </CCard>
  </div>
</template>
<script>
import axios from "axios";
import { URL } from "~/constant/constant";
export default {
  name: "new",
  components: {},
  data() {
    return {
      dataForm: {
        
        disan_id: "",
        danhgia: "",
        binhluan: "",
        
      },
      dataPermission: []
    };
  },
  props: {
    title: ""
  },
  methods: {
    addCategory() {
      axios
        .post(URL +"capdisan/", this.dataForm)
        .then(res => { console.log(this.dataForm)
          this.$router.push("/capdisan");
          swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Added",
            showConfirmButton: false,
            timer: 1500
          });
        });
    },
    getCategoryByID(id) {
      axios
        .get(URL + "category/" + id)
        .then(res => {
          this.dataForm = res.data;
          console.log(this.dataForm);
        });
    },
    editCategory(id) {
      axios
        .put(URL + "category/" + id, this.dataForm, {
          headers: { Authorization: this.$auth.getToken("local") }
        })
        .then(res => {
          this.$router.push("/category");
          swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Added",
            showConfirmButton: false,
            timer: 1500
          });
        });
    }
  },
  mounted() {
    
    if (this.$route.params.id !== null) {
      this.getCategoryByID(this.$route.params.id);
    }
  }
};
</script>
<style scoped></style>
