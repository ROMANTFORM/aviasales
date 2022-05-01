<template>
    <div class="ticket-content-block" >
                <div class="ticket-content-block__in" >
                    <div>
                        <span class="content-block__info">KH -KHKH</span>
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
</template>

<script>

export default {
    name: 'avia-card',
  components: {},

  props: {
      segment_data: {
          type: Object,
          default(){
              return {}
          }
      },
  },
}
</script>

<style lang="less" >

</style>>
