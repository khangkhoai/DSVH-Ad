<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1>Đăng Nhập</h1>
                  <p class="text-muted">Điền tài khoản của bạn</p>
                   <p
                    v-if="Object.keys(err).length > 0"
                    class="text text-danger"
                  >
                    {{ err.fail }}
                  </p>
                  <CInput
                    placeholder="Email"
                    autocomplete="username email"
                    v-model="loginForm.email"
                  >
                    <template #prepend-content
                      ><CIcon :content="$options.freeSet.cilUser"
                    /></template>
                  </CInput>
                  <p
                    v-if="Object.keys(err).length > 0"
                    class="text text-danger"
                  >
                    {{ err.email }}
                  </p>
                  <CInput
                    placeholder="Mật khẩu"
                    type="password"
                    autocomplete="curent-password"
                    v-model="loginForm.password"
                  >
                    <template #prepend-content
                      ><CIcon :content="$options.freeSet.cilLockLocked"
                    /></template>
                  </CInput>
                  <p
                    v-if="Object.keys(err).length > 0"
                    class="text text-danger"
                  >
                    {{ err.password }}
                  </p>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton color="primary" class="px-4" @click="login"
                        >Đăng Nhập</CButton
                      >
                    </CCol>
                    <CCol col="6" class="text-right">
                    
                      <CButton color="link" class="d-lg-none"
                        >Đăng Ký Ngay!</CButton
                      >
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard
              color="primary"
              text-color="white"
              class="text-center py-5 d-md-down-none"
              body-wrapper
            >
              <CCardBody>
                <h2>Đăng Ký</h2>
                <p>
                 Hãy nhanh tay đăng ký 
                </p>
                <CButton color="light" variant="outline" size="lg" @click="register">
                  Đăng Ký Ngay!
                </CButton>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import { freeSet } from "@coreui/icons";
import axios from "axios";
export default {
  name: 'Login',
  freeSet,
   data() {
    return {
      loginForm: {
        email : "",
        password: ""
      },
      err: {},
    };
  },
  methods: {
    async login() {
      this.validate();
      if (Object.keys(this.err).length > 0) {
        return this.err;
      } else {
        try {
          await this.$auth.login({
              data: this.loginForm,
              
            })
            .then((res) => {
              this.$router.push("/");
            });
        } catch (err) {
          this.err.fail = "Username or Password not valid";
          console.log(this.err.fail);
          console.log(this.loginForm)
        }
      }
    },
    // login(){
    //   axios
    //     .post(URL +"auth/login", this.loginForm)
    //     .then(res => { 
    //       this.err = res.data;
    //       console.log(res.data);
    //       console.log(this.loginForm);
    //       // this.$router.push("/");
          
    //     });
    // },
    validate() {
      this.err = {};
      if (this.loginForm.email === "") {
        this.err.email = "email không được để trống";
      } else if (this.loginForm.password === "") {
        this.err.password = "mật khẩu không được để trống";
      }
    },
    register(){
      this.$router.push('/Register')
    }
  },

}
</script>
