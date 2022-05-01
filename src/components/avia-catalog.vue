<template>
    <div class="avia-catalog">
        <div class="avia-ticket" >
        
            <div class="ticket-title-block">
               <p class="ticket-price">{{ticket_data.price}} &#8381;</p> 
               <img 
               class="ticket-logo" 
               v-if="ticket_data.companyId === 'cddfa038-823b-43b1-b18d-395731881077'" 
               src="../img/S7 Logo.png" alt="logo"
               >
                
                <img 
                class="ticket-logo" 
                v-if="ticket_data.companyId === '7dc12d0b-ce42-48a0-8673-0dad4d698764'" 
                src="../img/XiamenAir Logo.png" 
                alt="logo"
                >
            </div>
            
            <div class="ticket-content-block" >
                <div class="ticket-content-block__in" >
                    <div>
                        <span class="content-block__info">FG - DFD</span>
                        <span class="content-block__value">10:45 – 08:00</span>
                    </div>
                    <div>
                        <span class="content-block__info">MOW – HKT</span>
                        <span class="content-block__value">11:20 – 00:50</span>
                    </div>
                </div>
                <div class="ticket-content-block__in">
                    <div>
                        <span class="content-block__info">В пути</span>
                        <span class="content-block__value">21ч 15м</span>
                    </div>
                    <div>
                        <span class="content-block__info">В пути</span>
                        <span class="content-block__value">21ч 15м</span>
                    </div>
                </div>
                <div class="ticket-content-block__in">
                    <div>
                        <span class="content-block__info">2 пересадки</span>
                        <span class="content-block__value">HKG, JNB</span>
                    </div>
                    <div>
                        <span class="content-block__info">1 пересадки</span>
                        <span class="content-block__value">HKG</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'avia-catalog',
  components: {
      
  },

  data(){
      return{
          segment: {},
          company: {}
      }
  },
 
  props: {
      ticket_data: {
          type: Object,
          default(){
              return {}
          }
      },
  },

  methods:{
  ...mapActions(['GET_TICKETS', 'GET_COMPANIES', 'GET_SEGMENTS']),

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
.avia-ticket{
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 20px;
    margin-top: 20px;
}
.ticket-title-block{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.ticket-price{
    font-family: $font;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 24px;
color: $blue-color;
}
.ticket-logo{
    display: block;
    width: 110px;
    height: 36px;
}
.ticket-content-block{
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    grid-column-gap: 20px;
}
.ticket-content-block__in div{
    margin-bottom: 10px;
}
.content-block__info{
    display: block;
    font-family: $font;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;
letter-spacing: 0.5px;
text-transform: uppercase;
color: #A0B0B9;
}
.content-block__value{
    font-family: $font;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 21px;
color: #4A4A4A;
}

</style>