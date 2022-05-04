<template>
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
        <input class="radio" name="all" type="radio" id="all" value="all-company" checked>
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
</template>

<script>
export default {
  name: 'avia-filter'
}
</script>

<style lang="scss">
.filter-block{
  margin-right: 20px;
}
.filter1,
.filter2{
  width: 232px;
  background: #FFFFFF;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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

  &:hover {
    background-color: #F1FCFF;
  }
}
.checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.checkbox+label,
.radio+label {
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;

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
  display: flex;
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

</style>