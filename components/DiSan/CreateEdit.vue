<template>
  <div>
    <CCard>
   
      <CCardBody>
        <CRow>
         
          <CCol sm="6">
            <label for="source">Loại di sản</label>
               <select class="custom-select" v-model="dataForm.loai_id">
              <option
                v-for="(category, index) in dataCatagory"
                :key="index"
                :value="category.id"
              >
                {{ category.tenloai }}
              </option>
              </select>    
               <p v-if="Object.keys(errors).length > 0" class="text text-danger">
                {{ errors.loai_id }}
              </p>     
          </CCol>
          <CCol sm="6">
            <label for="source">Cấp di sản</label>
               <select class="custom-select" v-model="dataForm.cap_id">
              <option
                v-for="(rank, index) in dataRank"
                :key="index"
                :value="rank.id"
              >
                {{ rank.tencap }}
              </option>
              </select>   
               <p v-if="Object.keys(errors).length > 0" class="text text-danger">
                {{ errors.cap_id }}
              </p>      
          </CCol>
        </CRow>
         <CRow>
          <CCol sm="12">
            <CInput
              label="Tên di sản"
              v-model="dataForm.ten"
              type="text"
              placeholder="Enter your name"
            />
             <p v-if="Object.keys(errors).length > 0" class="text text-danger">
                {{ errors.ten }}
              </p>
          </CCol>
        </CRow>
         <CRow>
          <CCol sm="12">
            <CInput
              label="Mô tả"
              v-model="dataForm.mota"
              type="text"
              placeholder="Enter your name"
            />
          </CCol>
           <p v-if="Object.keys(errors).length > 0" class="text text-danger">
                {{ errors.mota }}
              </p>
        </CRow>
         <CRow>
          <CCol sm="12">
            <CInput
              label="Lượt xem"
              v-model="dataForm.luotxem"
              type="number"
              min = "0"
              placeholder="Enter your name"
            />
          </CCol>
        </CRow>
         <CRow>
          <CCol sm="12">
            <CInput
              label="Xã, Phường"
              v-model="dataForm.xa"
              type="text"
              placeholder="Enter your name"
            />
             <p v-if="Object.keys(errors).length > 0" class="text text-danger">
                {{ errors.xa }}
              </p>
          </CCol>
        </CRow>
         <CRow>
          <CCol sm="12">
            <CInput
              label="Huyện, Quận"
              v-model="dataForm.huyen"
              type="text"
              placeholder="Enter your name"
            />
             <p v-if="Object.keys(errors).length > 0" class="text text-danger">
                {{ errors.huyen }}
              </p>
          </CCol>
        </CRow>
         <CRow>
          <CCol sm="4">
            <CInputFile
              id ="file"
              name = "file"
              label="Ảnh"
              v-model="dataForm.anh"
              placeholder="Enter your name"
            />
          </CCol>
           <CCol sm="4">
            <CInputFile
              id ="file"
              name = "file"
              label="video"
              v-model="dataForm.video"
              placeholder="Enter your name"
            />
          </CCol>
           <CCol sm="4">
             <CInputFile
              id ="file"
              name = "file"
              label="audio"
              v-model="dataForm.audio"
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
          @click="edit(dataForm)"
        >
          Cập Nhật
        </CButton>
        <CButton
          color="primary"
          nuxt-link to="/disan"
        >
          Hủy
        </CButton>
      </CCardFooter>
    </CCard>
  </div>
</template>
<script>
import axios from "axios";
import { freeSet } from "@coreui/icons";
import swal from "sweetalert2";
import { URL } from "~/constant/constant";
export default {
  name: "new",
  components: {},
  data() {
    return {
      dataForm: {

        ten: "",
        mota: "",
        anh: "",
        video: "",
        audio: "",
        luotxem: "",
        loai_id: "",
        cap_id: "",
        
        xa: "",
        huyen: ""
        
      },
      errors: {},
      dataCatagory: [],
      dataRank: []
    };
  },
  props: {
    title: ""
  },
  methods: {
    validate() {
      this.errors = {};
       if (this.dataForm.loai_id == null) {
        this.errors.loai_id = "Loại di sản không được trống";
      }
      if (this.dataForm.cap_id == null) {
        this.errors.cap_id = "Cấp di sản không được trống";
      }
      if (this.dataForm.ten == null) {
        this.errors.ten = "Tên không được trống";
      }
      if (this.dataForm.mota == null) {
        this.errors.mota = "Mô Tả không được trống";
      }
      if (this.dataForm.xa  == null) {
        this.errors.xa = "Xã, Phường không được trống";
      }
      if (this.dataForm.huyen == null) {
        this.errors.huyen = "Huyện, Quận không được trống";
      }
    },
     add(dataForm) {
      const data = new FormData();
      console.log(this.dataForm.loai_id);
      data.append("loai_id", this.dataForm.loai_id);
      data.append("cap_id", this.dataForm.cap_id);
      data.append("ten", this.dataForm.ten);
      data.append("mota", this.dataForm.mota);
      data.append("luotxem", this.dataForm.luotxem);
      
      data.append("xa", this.dataForm.xa);
      data.append("huyen", this.dataForm.huyen);
      // data.append("anh",  this.dataForm.anh.target.files[0]);
      // data.append("video",  this.dataForm.video.target.files[0]);
      // data.append("audio",  this.dataForm.audio.target.files[0]);
      if (this.dataForm.anh==null)
      {
        data.append("anh",  null);
      }
      else
      {
         data.append("anh",  this.dataForm.anh.target.files[0]);
      }
      if (this.dataForm.video==null)
      {
        data.append("video", null);
      }
      else
      {
         data.append("video",  this.dataForm.video.target.files[0]);
      }
       if (this.dataForm.audio==null)
      {
        data.append("audio", null);
      }
      else
      {
         data.append("audio",  this.dataForm.audio.target.files[0]);
      }
      this.validate();
      if (Object.keys(this.errors).length > 0) {
        console.log(this.errors);
        return this.errors;
      } else {
        axios
        .post( URL +"disan/", data,{
          headers: {
            
            "Content-type": "multipart/form-data",
          },
          })
        .then(res => {
          this.$router.push("/disan");
         
        })}
    },
    getFile(files) {
      this.dataForm.anh = files
    },
    getByID(id) {
      axios
        .get(URL + "disan/" + id)
        .then(res => {
          this.dataForm = res.data;
        
        });
    },
    edit(dataForm) {
     const data = new FormData();
      data.append("loai_id", this.dataForm.loai_id);
      data.append("cap_id", this.dataForm.cap_id);
      data.append("ten", this.dataForm.ten);
      data.append("mota", this.dataForm.mota);
      data.append("luotxem", this.dataForm.luotxem);
      data.append("xa", this.dataForm.xa);
      data.append("huyen", this.dataForm.huyen);
      // data.append("anh",  this.dataForm.anh);
      if (this.dataForm.anh.target==null)
      {
        data.append("anh",  this.dataForm.anh);
      }
      else
      {
         data.append("anh",  this.dataForm.anh.target.files[0]);
      }
      if (this.dataForm.video.target==null)
      {
        data.append("video",  this.dataForm.video);
      }
      else
      {
         data.append("video",  this.dataForm.video.target.files[0]);
      }
       if (this.dataForm.audio.target==null)
      {
        data.append("audio",  this.dataForm.audio);
      }
      else
      {
         data.append("audio",  this.dataForm.audio.target.files[0]);
      }
     
      console.log( this.dataForm.audio.target)
      console.log(data.get('anh'))
      axios
        .post( URL +"disan/" + this.dataForm.id, data,{
          headers: {
            
            "Content-type": "multipart/form-data",
          },
          } )
       .then(res => {
          this.$router.replace("/disan");
          swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Added",
            showConfirmButton: false,
            timer: 1500
          });
          
        });
      
    },
    getData1() {
      axios.get(URL + "loaidisan").then((res) => {
        this.dataCatagory = res.data;
        console.log(this.dataCatagory);
      });
    },
     getData2() {
      axios.get(URL + "capdisan").then((res) => {
        this.dataRank = res.data;
      });
    },
  },
  mounted() {
    this.getData1();
    this.getData2();
    if (this.$route.params.id !== null) {
      this.getByID(this.$route.params.id);
    }
  }
};
</script>
<style scoped></style>
