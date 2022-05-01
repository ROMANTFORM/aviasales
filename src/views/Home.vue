<template>
  <div class="home">
    <div class="filter-block">
      <div class="filter1">
        <h3 class="filter-title">Количество пересадок</h3>
        <div class="checkbox-container">
          <input type="checkbox" class="checkbox" id="without" name="without" value="yes">
          <label for="without">Без пересадок</label>
        </div>
        <div class="checkbox-container">
          <input type="checkbox" class="checkbox" id="transfere-one" name="transfere-one" value="yes">
          <label for="transfere-one">1 пересадка</label>
        </div>
        <div class="checkbox-container">
          <input type="checkbox" class="checkbox" id="transfere-two" name="transfere-two" value="yes">
          <label for="transfere-two">2 пересадки</label>
        </div>
        <div class="checkbox-container">
          <input type="checkbox" class="checkbox" id="transfere-three" name="transfere-three" value="yes">
          <label for="transfere-three">3 пересадки</label>
        </div>
        
      </div>
      <div class="filter2">
        <h3 class="filter-title">Компания</h3>
        <div class="radio-container">
          <input class="radio" name="all" type="radio" id="all" value="all-company">
          <label for="all">Все</label>
        </div>
        <div class="radio-container">
          <input class="radio" name="all" type="radio" id="airlines" value="airlines">
          <label for="airlines">S7 Airlines</label>
        </div>
        <div class="radio-container">
          <input class="radio" name="all" type="radio" id="xiamen" value="xiamen">
          <label for="xiamen">XiamenAir</label>
        </div>
      </div>
    </div>
    <div class="content-block">
      <div class="btn-wrapper" v-for="btn in this.btns" :key="btn.id">
        <input 
        class="btn" 
        type="button" 
        :value="btn.name"
        :class="[{_active: isActive}, btn.class]"
        @click="activeClick"
        >
      </div>

      <div class="catalog-block">
        <div v-for="segment in SEGMENTS" :key="segment.id"></div>
      <avia-catalog
        v-for="ticket in TICKETS"
        :key="ticket.id"
        :ticket_data="ticket"
      />

        <button class="more-btn">Показать еще 5 билетов!</button>
      </div>
    </div>
   
  </div>
</template>

<script>
import aviaCatalog from '../components/avia-catalog.vue';
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'Home',
  components: {
    aviaCatalog,  
  },
  
  data(){
    return {
      isActive: false,
      btns: [
        {id: 1, class: 'cheap', name: 'Самый дешевый'},
        {id: 2, class: 'fast', name: 'Самый быстрый'},
        {id: 3, class: 'optimal', name: 'Оптимальный'}
      ]
    }
  },

methods:{
  ...mapActions(['GET_TICKETS', 'GET_COMPANIES', 'GET_SEGMENTS']),

  activeClick() {
 
  
   if(this.isActive){
     this.isActive = false
   } else { this.isActive = true}
  },

  },
mounted(){
  this.GET_TICKETS(),
  this.GET_COMPANIES(),
  this.GET_SEGMENTS()
},

computed: {
...mapGetters(['TICKETS', 'COMPANIES', 'SEGMENTS']),
}
  
}
</script>

<style lang="scss">
.home{
  width: 754px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.filter-block{
  margin-right: 20px;
}
.filter1,
.filter2{
  width: 232px;
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: $radius;
  padding: 20px 0;
  margin-bottom: 20px;
}
.filter-title{
  font-family: $font;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 12px;
letter-spacing: 0.5px;
text-transform: uppercase;
text-align: center;
color: #4A4A4A;
margin-bottom: 20px;
}
.checkbox-container,
.radio-container{
  padding: 10px 20px;
  cursor: pointer;
}
.checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.checkbox+label,
.radio+label {
  display: inline-flex;
  align-items: center;
  user-select: none;

  font-family: $font;
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 20px;
color: #4A4A4A;
}
.checkbox+label::before {
  content: '';
  display: inline-block;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid $blue-color;
  border-radius: 2px;
  margin-right: 10px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 80%;
}
.checkbox:checked+label::before {
  background-image: url("../img/Shape.png"); 
}
.radio {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  .radio+label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }
  .radio+label::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid $blue-color;
    border-radius: 50%;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 48% 48%;
  }
.radio:checked+label::before {
    background-image: url("../img/Selected.png");
  }

.content-block{
  width: 502px;
}
.btn-wrapper{
  display: contents;
}
.btn{
  border: 1px solid #DFE5EC;
  width: 33.3%;
  padding: 15px;
  font-family: $font;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;
}
// .btn:hover{
//   background: #F1FCFF;
//   color: #000;
// }
.cheap{
  border-top-left-radius: $radius;
  border-bottom-left-radius: $radius;
}
.optimal{
  border-top-right-radius: $radius;
  border-bottom-right-radius: $radius;
}
.more-btn{
  width: 100%;
  padding: 15px 20px;
  border: none;
  background: $blue-color;
border-radius: 5px;
font-family: $font;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;
text-transform: uppercase;
color: #FFFFFF;
cursor: pointer;
margin-top: 20px;
}
.more-btn:hover{
  opacity: 0.8;
}

._active{
  background-color: $blue-color;
  color: #f1f1f1;
}
</style>