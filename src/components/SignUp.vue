<template>
  <div>
    <img class="wave" src />
    <div class="container">
      <div class="img">
        <img src="../assets/undraw.svg" />
      </div>
      <div class="login-content">
        <!-- <form action="index.html">
          <img src="img/avatar.svg" />
          <h2 class="title">SignUp</h2>
          <div class="input-div one">
            <div class="i">
              <i class="fas fa-user"></i>
            </div>
            <div class="div">
              <h5>Username</h5>
              <input type="text" class="input" />
            </div>
          </div>

          <div class="input-div pass">
            <div class="i">
              <i class="fas fa-lock"></i>
            </div>
            <div class="div">
              <h5>Password</h5>
              <input type="password" class="input" />
            </div>
          </div>
          <a href="#">Forgot Password?</a>
          <input type="submit" class="btn" value="Login" />
        </form>-->
        <!-- <template v-for="market in markets"> -->
        <!-- <div v-for="(item, index) in market" :key="index">{{item.id}}</div> -->
        <!-- </template> -->
        <ul></ul>
        <form>
          <div class="form-icon">
            <span>
              <h2 class="title">Sign Up</h2>
            </span>
          </div>
          <div class="input-div one">
            <div class="i">
              <i class="fas fa-user"></i>
            </div>
            <div class="div">
              <input
                type="text"
                class="input"
                placeholder="Firstname"
                v-model="firstname"
              />
            </div>
          </div>
          <span style="color: red">{{ error1 }}</span>
          <div class="input-div one">
            <div class="i">
              <i class="fas fa-user"></i>
            </div>
            <div class="div">
              <input
                type="text"
                class="input"
                placeholder="Lastname"
                v-model="lastname"
              />
            </div>
          </div>
          <span style="color: red">{{ error2 }}</span>
          <div class="input-div one">
            <div class="i">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="div">
              <input
                type="text"
                class="input"
                placeholder="Email"
                v-model="email"
              />
            </div>
          </div>
          <span style="color: red">{{ error3 }}</span>
          <div
            class="input-div pass"
            v-for="(market, index) in markets"
            :key="index"
          >
            <label>Market</label>
            <select v-model="market_id" class="opt">
              <option
                v-for="(item, index) in market"
                :key="index"
                :value="item.id"
                >{{ item.attributes.country }}</option
              >
            </select>
          </div>
          {{ market_id }}
          <div class="input-div pass">
            <div class="i">
              <i class="fas fa-lock"></i>
            </div>
            <div class="div">
              <input
                type="password"
                class="input"
                placeholder="Password"
                v-model="password"
              />
            </div>
          </div>
          <span style="color: red">{{ error4 }}</span>
          <div class="input-div pass">
            <div class="i">
              <i class="fas fa-lock"></i>
            </div>
            <div class="div">
              <input
                type="password"
                class="input"
                placeholder="Confirm password"
                v-model="confirm_password"
              />
            </div>
          </div>
          <span style="color: red">{{ error5 }}</span>
          <div class="privacy">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="terms_and_condition"
            /><br />
            By continuing, I agree to our
            <a class="pri" href="#">Terms</a> and
            <a href="#">Privacy Policy</a>
          </div>
          <span style="color: red">{{ error6 }}</span>
          <div class="form-group">
            <button
              type="button"
              class="btn btn-block create-account"
              @click.prevent="signup()"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import validator from "validator";
export default {
  data() {
    return {
      terms_and_condition: false,
      firstname: null,
      lastname: null,
      email: null,
      password: null,
      confirm_password: null,
      market_id: null,
      markets: "",
      error1: "",
      error2: "",
      error3: "",
      error4: "",
      error5: "",
      error6: "",
      loading: false,
      response: "",
    };
  },
  components: {},
  mounted: function() {
    axios.get("https://api-staging.veryfy.net/v1/markets").then((res) => {
      console.log(res.data);
      this.markets = res.data;
    });
  },
  methods: {
    signup() {
      if (!this.firstname) this.error1 = "Firstname required";
      else this.error1 = "";
      if (!this.lastname) this.error2 = "Lastname required";
      else this.error2 = "";
      if (!this.email) this.error3 = "email required";
      else {
        if (!validator.isEmail(this.email))
          this.error3 = "Invalid Email Format";
        else this.error3 = "";
      }
      if (!this.password) this.error4 = "password required";
      else {
        if (this.password.length < 6) {
          this.error4 = "password should be more than 5 characters";
        } else this.error4 = "";
      }
      if (!this.confirm_password) this.error5 = "confirm password";
      else {
        if (this.password !== this.confirm_password)
          this.error5 = "password do not match";
        else this.error5 = "";
      }
      if (this.terms_and_condition === false)
        this.error6 = "Please accept terms and condition";
      else this.error6 = "";

      const UserData = {
        user: {
          first_name: this.firstname,
          last_name: this.lastname,
          email: this.email,
          password: this.password,
          password_confirmation: this.confirm_password,
          market_id: this.market_id,
          terms_and_policy: this.terms_and_condition,
        },
      };
      console.log(UserData);
      axios.post("https://api-staging.veryfy.net/auth/signup", UserData).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err.response.data);
        }
      );
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../assets/css/signup.scss"
</style>
