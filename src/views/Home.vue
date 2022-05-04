<template>
  <div class="home">
    <avia-filter />

    <div class="content-block">
      <div class="btn-wrapper" v-for="btn in this.btns" :key="btn.id">
        <input 
        class="btn" 
        type="button" 
        :value="btn.name"
        :class="[{_active: btn.isActive}, btn.class]"
        @click="activeClick(btn.class)"
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
import aviaFilter from '../components/avia-filter.vue';
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'Home',
  components: {
    aviaCatalog,
    aviaFilter
  },
  
  data(){
    return {
      btns: [
        {id: 1, class: 'cheap', name: 'Самый дешевый', isActive: true},
        {id: 2, class: 'fast', name: 'Самый быстрый', isActive: false},
        {id: 3, class: 'optimal', name: 'Оптимальный', isActive: false}
      ]
    }
  },

methods:{
  ...mapActions(['GET_TICKETS', 'GET_COMPANIES', 'GET_SEGMENTS']),

  activeClick(activeItem) {
    this.btns.map((btn) => (btn.isActive = btn.class === activeItem))
  },

  },
mounted(){
  this.GET_TICKETS()
  this.GET_COMPANIES()
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