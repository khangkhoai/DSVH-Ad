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
              v-model="dataForm.tenloai"
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
        tenloai: "",
        
      },
      dataPermission: []
    };
  },
  props: {
    title: ""
  },
  methods: {
    add() {
      axios
        .post(URL +"loaidisan/", this.dataForm)
        .then(res => { console.log(this.dataForm)
          this.$router.push("/loaidisan");
         
        });
    },
    getByID(id) {
      axios
        .get(URL + "loaidisan/" + id)
        .then(res => {
          this.dataForm = res.data;
          console.log(this.dataForm);
        });
    },
    edit(id) {
      axios
        .put(URL + "loaidisan/" + id, this.dataForm)
        .then(res => {
          this.$router.push("/loaidisan");
          
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
