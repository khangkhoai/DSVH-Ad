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
              label="Name"
              v-model="dataForm.tencap"
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
import swal from "sweetalert2";
import { URL } from "~/constant/constant";
export default {
  name: "new",
  components: {},
  data() {
    return {
      dataForm: {
        tencap: "",
        
      },
    };
  },
  props: {
    title: ""
  },
  methods: {
    add() {
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
    getByID(id) {
      axios
        .get(URL + "capdisan/" + id)
        .then(res => {
          this.dataForm = res.data;
          console.log(this.dataForm);
        });
    },
    edit(id) {
      axios
        .put(URL + "capdisan/" + id, this.dataForm)
        .then(res => {
          this.$router.push("/capdisan");
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
      this.getByID(this.$route.params.id);
    }
  }
};
</script>
<style scoped></style>
