<template>
  <div>
    <CCard>
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
              label="Mo Ta"
              v-model="dataForm.mota"
              type="text"
              placeholder="Enter your name"
            />
          </CCol>
        </CRow>
          <CRow>
          <CCol sm="12">
            <CInput
              label="Thoi Gian Bat Dau"
              v-model="dataForm.batdau"
              type="date"
              placeholder="Enter your name"
            />
          </CCol>
        </CRow>
          <CRow>
          <CCol sm="12">
            <CInput
              label="Thoi Gian Bat Dau"
              v-model="dataForm.ketthuc"
               type="date"
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
         <CRow>
          <CCol sm="4">
            <CInputFile
              id ="file"
              name = "file"
              label="anh"
              v-model="dataForm.anh"
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
          Thêm Mới
        </CButton>
        <CButton
          v-else
          color="primary"
          class="btn-click"
          @click="edit(dataForm.id)"
        >
         Cập Nhật
        </CButton>
         <CButton
          color="primary"
          nuxt-link to="/hoatdong"
        >
          Hủy
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
        mota : "",
        anh : "",
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
    add(dataForm) {
      const data = new FormData();
      console.log(this.dataForm.loai_id);
      data.append("disan_id", this.dataForm.disan_id);
      
      data.append("ten", this.dataForm.ten);
      data.append("mota", this.dataForm.mota);
      
      data.append("batdau", this.dataForm.batdau);
      data.append("ketthuc", this.dataForm.ketthuc);
      data.append("diadiem", this.dataForm.diadiem);
      if (this.dataForm.anh==null)
      {
        data.append("anh",  null);
      }
      else
      {
         data.append("anh",  this.dataForm.anh.target.files[0]);
      }
      axios
        .post( URL +"hoatdong/", data,{
          headers: {
            
            "Content-type": "multipart/form-data",
          },
          })
        .then(res => {
          this.$router.push("/hoatdong");
          swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Added",
            showConfirmButton: false,
            timer: 1500
          });        
        })
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
    edit(dataForm) {
      const data = new FormData();
      console.log(this.dataForm.loai_id);
      data.append("disan_id", this.dataForm.disan_id);
      data.append("ten", this.dataForm.ten);
      data.append("mota", this.dataForm.mota);
      data.append("batdau", this.dataForm.batdau);
      data.append("ketthuc", this.dataForm.ketthuc);
      data.append("diadiem", this.dataForm.diadiem);
      if (this.dataForm.anh.target==null)
      {
        data.append("anh",  this.dataForm.anh);
      }
      else
      {
         data.append("anh",  this.dataForm.anh.target.files[0]);
      }
      console.log( this.dataForm.anh.target)
      console.log(data.get('anh'))
      axios
        .post( URL +"hoatdong/" + this.dataForm.id, data,{
          headers: {
            
            "Content-type": "multipart/form-data",
          },
          } )
       .then(res => {
          this.$router.replace("/hoatdong");
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
