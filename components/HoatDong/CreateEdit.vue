<template>
  <div>
    <CCard>
      <CCardHeader>
        {{ title }}
      </CCardHeader>
      <CCardBody>
        <CRow>
         <CCol sm="6">
            <label for="source">Loai Di San</label>
               <select class="custom-select" v-model="dataForm.disan_id">
              <option
                v-for="(value, index) in dataItem"
                :key="index"
                :value="value.id"
              >
                {{ value.ten }}
              </option>
              </select>         
          </CCol>
        </CRow>
          <CRow>
          <CCol sm="12">
            <CInput
              label="Name"
              v-model="dataForm.ten"
              placeholder="Enter your name"
            />
          </CCol>
        </CRow>
          <CRow>
          <CCol sm="12">
            <CInput
              label="Thoi Gian Bat Dau"
              v-model="dataForm.batdau"
              placeholder="Enter your name"
            />
          </CCol>
        </CRow>
          <CRow>
          <CCol sm="12">
            <CInput
              label="Thoi Gian Bat Dau"
              v-model="dataForm.ketthuc"
              placeholder="Enter your name"
            />
          </CCol>
        </CRow>
        <CRow>
            <CCol sm="12">
            <CInput
              label="Dia Diem"
              v-model="dataForm.diadiem"
              placeholder="Enter your name"
            />
            </CCol>
        </CRow>
      </CCardBody>
      <CCardFooter>
        <CButton
          v-if="!this.$route.params.id"
          color="primary"
          @click="add()"
        >
          Submit
        </CButton>
        <CButton
          v-else
          color="primary"
          class="btn-click"
          @click="edit(dataForm.id)"
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
        ten: "",
        batdau: "",
        ketthuc: "",
        diadiem: "",
        
      },
      dataItem: []
    };
  },
  props: {
    title: ""
  },
  methods: {
    add() {
      axios
        .post(URL +"hoatdong/", this.dataForm)
        .then(res => { console.log(this.dataForm)
          this.$router.push("/hoatdong");
          swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Added",
            showConfirmButton: false,
            timer: 1500
          });
        });
    },
    getByID(id) {
      axios
        .get(URL + "hoatdong/" + id)
        .then(res => {
          this.dataForm = res.data;
          console.log(this.dataForm);
        });
    },
    getData(id) {
      axios
        .get(URL + "disan/" )
        .then(res => {
          this.dataItem = res.data;
          
        });
    },
    edit(id) {
      axios
        .put(URL + "hoatdong/" + id, this.dataForm)
        .then(res => {
          this.$router.push("/hoatdong");
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
    this.getData();
    if (this.$route.params.id !== null) {
      this.getByID(this.$route.params.id);
    }
  }
};
</script>
<style scoped></style>
